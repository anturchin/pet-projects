import { View } from '../../../View';

import './GamePuzzleLine.scss';

export class GamePuzzleLine extends View {
    private isActive: boolean;

    constructor(isActive: boolean = false) {
        super({ tag: 'ul', callback: null, classNames: ['game__row', 'placeholder'] });
        this.isActive = isActive;
        this.setupGamePuzzle();
        this.setEventListener();
    }

    private setupGamePuzzle(): void {
        if (this.isActive) {
            const linePuzzle = this.viewHtmlElementCreator.getElement();
            linePuzzle.classList.add('active');
        }
    }

    private setEventListener(): void {
        const onDragOverGame = (event: DragEvent) => {
            event.preventDefault();
        };

        const onDropGame = (event: DragEvent) => {
            event.preventDefault();
            const id = event.dataTransfer?.getData('id');
            const dragElement = document.getElementById(`${id}`);

            const target = event.target as HTMLElement;

            if (target && dragElement) {
                const parent = this.viewHtmlElementCreator.getElement();

                const targetIndex = Array.from(parent.children).indexOf(target);
                const dragIndex = Array.from(parent.children).indexOf(dragElement);

                if (parent === dragElement?.parentNode && parent === target?.parentNode) {
                    if (dragElement && target) {
                        if (parent.contains(dragElement)) {
                            parent.removeChild(dragElement);
                        }

                        if (parent.contains(target)) {
                            parent.removeChild(target);
                        }
                    }

                    if (dragIndex < targetIndex) {
                        parent.insertBefore(target, parent.children[dragIndex]);
                        parent.insertBefore(dragElement, parent.children[targetIndex]);
                    } else {
                        parent.insertBefore(dragElement, parent.children[targetIndex]);
                        parent.insertBefore(target, parent.children[dragIndex]);
                    }
                } else {
                    parent.appendChild(dragElement);
                }
            }
        };

        this.viewHtmlElementCreator.getElement().addEventListener('dragover', onDragOverGame);
        this.viewHtmlElementCreator.getElement().addEventListener('drop', onDropGame);
    }
}
