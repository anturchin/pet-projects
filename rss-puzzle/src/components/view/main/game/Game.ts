import { Router } from '../../../router/router/Router';
import { View } from '../../View';
import { GamePuzzle } from './gamePuzzle/GamePuzzle';
import { GamePuzzleLine } from './gamePuzzleLine/GamePuzzleLine';
import { GameSource } from './gameSource/GameSource';
import { GameSourceLine } from './gameSourceLine/GameSourceLine';
// import { WordShuffler } from '../../../helpers/WordShuffler';
import { GameCell } from './gameCell/GameCell';
import { ToolBarBottom } from './toolBar/toolBarBottom/ToolBarBottom';
import { GameController } from '../../../controller/GameController';
import { PuzzleImageCreator } from '../../../utils/puzzleImageCreator/PuzzleImageCreator';
import { ButtonContinue } from './toolBar/toolBarBottom/buttonContinue/ButtonContinue';
import { ButtonCheck } from './toolBar/toolBarBottom/buttonCheck/ButtonCheck';

import './Game.scss';

export class Game extends View {
    private controller: GameController;

    public onCellsChecked?: () => void;

    public onHandleClickContinue?: () => void;

    public onHandleClickCheck?: () => void;

    public cells: GameCell[];

    public resultLine: GamePuzzleLine | null;

    public gamePuzzleBlock: GamePuzzle | null;

    public gameSourceLine: GameSourceLine | null;

    public buttonContinue: ButtonContinue | null;

    public buttonCheck: ButtonCheck | null;

    constructor(router: Router) {
        super({ tag: 'section', callback: null, classNames: ['game__wrapper'] });
        this.controller = new GameController(this, router);
        this.cells = [];
        this.resultLine = null;
        this.gamePuzzleBlock = null;
        this.gameSourceLine = null;
        this.buttonContinue = null;
        this.buttonCheck = null;
        this.loadData();
    }

    public async loadData(): Promise<void> {
        try {
            await this.controller.loadGameData();
            this.render();
        } catch (error) {
            if (error instanceof Error) {
                console.error(error.message);
            }
        }
    }

    public override render(): void {
        this.renderGamePuzzle();
        this.renderGamePuzzleLine();
        this.renderGameSource();
        this.renderGameSourceLine();
        this.renderGameCells();
        this.renderToolBarBottom();
    }

    public renderGamePuzzle(): void {
        this.gamePuzzleBlock = new GamePuzzle();
        if (this.gamePuzzleBlock) {
            this.viewHtmlElementCreator.addInnerElement(this.gamePuzzleBlock.getElement());
        }
    }

    public renderGamePuzzleLine(): void {
        this.resultLine = null;
        this.resultLine = new GamePuzzleLine(() => this.onCellsChecked?.());
        const gamePuzzleLine = this.resultLine.getElement();
        const gamePuzzle = this.viewHtmlElementCreator.getElement().querySelector('.game__puzzle');
        gamePuzzle?.append(gamePuzzleLine);
    }

    public renderGameSource(): void {
        const gameSource = new GameSource().getElement();
        const gamePuzzle = this.viewHtmlElementCreator.getElement().querySelector('.game__puzzle');
        gamePuzzle?.after(gameSource);
    }

    public renderGameSourceLine(): void {
        this.gameSourceLine = new GameSourceLine(() => this.onCellsChecked?.());
        const gameSourceLine = this.gameSourceLine.getElement();
        const gamePuzzle = this.viewHtmlElementCreator.getElement().querySelector('.game__source');
        gamePuzzle?.append(gameSourceLine);
    }

    public renderGameCells(): void {
        const callback = () => this.onCellsChecked?.();
        const textExample = this.controller.getTextExample();
        this.cells = [];
        if (textExample) {
            // const shuffledWords = WordShuffler.shuffle(textExample.split(' '));
            const shuffledWords = textExample.split(' ');
            const cells: HTMLElement[] = [];
            shuffledWords.forEach((word, index) => {
                const cell = new GameCell(word, index, textExample, callback);
                this.cells.push(cell);
                cells.push(cell.getElement());
            });
            const gamePuzzle = this.viewHtmlElementCreator
                .getElement()
                .querySelector('.source__row');
            if (gamePuzzle) {
                gamePuzzle.innerHTML = '';
                gamePuzzle.append(...cells);
                this.renderImageToCell();
            }
        }
    }

    public renderImageToCell(): void {
        const rowIndex = this.controller.getCurrentWordIndex();
        const pathImage = this.controller.getImagePath();
        PuzzleImageCreator.createImages(
            -rowIndex,
            '[data-is-result-block="false"]',
            'game__puzzle',
            pathImage || ''
        );
    }

    public renderToolBarBottom(): void {
        this.buttonContinue = new ButtonContinue(() => this.onHandleClickContinue?.());
        this.buttonCheck = new ButtonCheck(() => this.onHandleClickCheck?.());
        const toolBarBottom = new ToolBarBottom().getElement();
        toolBarBottom.append(this.buttonContinue.getElement());
        toolBarBottom.append(this.buttonCheck.getElement());
        const gamePuzzle = this.viewHtmlElementCreator.getElement().querySelector('.game__source');
        gamePuzzle?.after(toolBarBottom);
    }
}
