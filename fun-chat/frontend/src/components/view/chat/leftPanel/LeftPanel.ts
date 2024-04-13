import { View } from '../../View';
import { Search } from './search/Search';
import { UserList } from './userList/UserList';

import './LeftPanel.scss';

export class LeftPanel extends View {
    public searchInput: Search;

    public userList: UserList;

    constructor() {
        super({ tag: 'div', classNames: ['chat__left-panel'] });
        this.searchInput = new Search();
        this.userList = new UserList();
        this.setupLeftPanel();
    }

    public getUserList(): UserList {
        return this.userList;
    }

    private setupLeftPanel(): void {
        this.getElement().append(...[this.searchInput.getElement(), this.userList.getElement()]);
    }
}
