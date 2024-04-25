import { IObserverMessages } from '../observers/observerMessages/ObserverMessages.interface';
import { ISubjectMessages } from '../observers/observerMessages/SubjectMessages';
import { IObserverUsers } from '../observers/observerUsers/ObserverUsers.interface';
import { ISubjectUsers } from '../observers/observerUsers/SubjectUsers';
import {
    EditMessageType,
    FetchingMessageType,
    MessageTakeType,
    ReadMessageType,
    StatusMessage,
} from '../services/chatService/messageReceiveService/types';
import { User } from '../services/chatService/types';
import { SessionStorageManager } from '../utils/sessionStorageManager/SessionStorageManager';
import { IUser } from './types';

export class State implements ISubjectUsers<User>, ISubjectMessages<MessageTakeType[]> {
    private user: IUser | null = null;

    private usersActive: User[] = [];

    private usersInActive: User[] = [];

    private allUsers: User[] = [];

    private selectedUserMessages: Map<string, MessageTakeType[]> = new Map();

    private userObservers: Map<string, IObserverUsers<User>> = new Map();

    private messageObservers: Map<string, IObserverMessages<MessageTakeType[]>> = new Map();

    constructor() {
        const userData = SessionStorageManager.getUserData();
        if (userData) {
            this.user = {
                ...userData,
                isLogined: true,
            };
        }
    }

    public clearSelectedUserMessages(): void {
        this.selectedUserMessages = new Map();
    }

    public registerUserObserver(key: string, observer: IObserverUsers<User>): void {
        this.userObservers.set(key, observer);
    }

    public removeUserObserver(key: string): void {
        this.userObservers.delete(key);
    }

    public notifyUserObservers(data: User): void {
        this.userObservers.forEach((observer) => observer.updateUsers(data));
    }

    public registerMessageObserver(
        key: string,
        observer: IObserverMessages<MessageTakeType[]>
    ): void {
        this.messageObservers.set(key, observer);
    }

    public removeMessageObserver(key: string): void {
        this.messageObservers.delete(key);
    }

    public notifyMessageObservers(data: MessageTakeType[], user: User): void {
        this.messageObservers.forEach((observer) => observer.initialMessages(data, user));
    }

    public notifyNewMessageObservers(data: MessageTakeType[]): void {
        this.messageObservers.forEach((observer) => observer.updateMessages(data.slice(-1)));
    }

    public addUserToAllUsers(data: User): void {
        const changeStatus = this.changeStatusUser(data);
        if (!changeStatus) this.allUsers.push(data);
        this.notifyUserObservers(data);
    }

    public changeStatusUserFromAllUsers(data: User): void {
        this.changeStatusUser(data);
        this.notifyUserObservers(data);
    }

    public setAllUsers(users: User[]): void {
        const sortUsers = [...users];
        sortUsers.sort((a, b) => {
            if (a.isLogined === b.isLogined) {
                return 0;
            }
            if (a.isLogined) {
                return -1;
            }
            return 1;
        });
        this.allUsers = [...sortUsers];
    }

    public updateStatusMessage(data: FetchingMessageType): void {
        this.selectedUserMessages.forEach((messages, userName) => {
            const updatedMessages = messages.map((msg) => {
                if (msg.id === data.id) {
                    const updatedStatus: StatusMessage = {
                        ...msg.status,
                        isDelivered: data.status.isDelivered,
                    };
                    return {
                        ...msg,
                        status: updatedStatus,
                    };
                }
                return msg;
            });
            this.selectedUserMessages.set(userName, updatedMessages);
        });
    }

    public updateReadStatusMessage(data: ReadMessageType): void {
        this.selectedUserMessages.forEach((messages, userName) => {
            const updatedMessages = messages.map((msg) => {
                if (msg.id === data.id) {
                    const updatedStatus: StatusMessage = {
                        ...msg.status,
                        isReaded: data.status.isReaded,
                    };
                    return {
                        ...msg,
                        status: updatedStatus,
                    };
                }
                return msg;
            });
            this.selectedUserMessages.set(userName, updatedMessages);
        });
    }

    public removeMessageById(id: string): void {
        this.selectedUserMessages.forEach((messages, userName) => {
            const updateMessages = messages.filter((msg) => msg.id !== id);
            this.selectedUserMessages.set(userName, updateMessages);
        });
    }

    public editMessageById(message: EditMessageType): void {
        this.selectedUserMessages.forEach((messages, userName) => {
            const updateMessages = messages.map((msg) => {
                if (msg.id === message.id) {
                    const updateStatus: StatusMessage = {
                        ...msg.status,
                        isEdited: message.status?.isEdited || false,
                    };
                    return {
                        ...msg,
                        text: message.text,
                        status: updateStatus,
                    };
                }
                return msg;
            });
            this.selectedUserMessages.set(userName, updateMessages);
        });
    }

    public addMessageToSelectedUserMessages(message: MessageTakeType): void {
        const userMessage = message.from;
        const messages = this.selectedUserMessages.get(userMessage) || [];

        const isDuplicate = messages.some((existingMessage) => existingMessage.id === message.id);
        if (!isDuplicate) {
            messages.push(message);
            this.selectedUserMessages.set(userMessage, messages);
            this.notifyNewMessageObservers(messages);
        }
    }

    public getMessages(): Map<string, MessageTakeType[]> {
        return this.selectedUserMessages;
    }

    public setMessages(
        messages: MessageTakeType[],
        selectedUserName: string,
        shouldNotifyObservers: boolean
    ): void {
        if (!this.selectedUserMessages.has(selectedUserName)) {
            this.selectedUserMessages.set(selectedUserName, []);
        }

        const existingMessages = this.selectedUserMessages.get(selectedUserName) || [];

        const filterMessages = (message: MessageTakeType) => {
            return !existingMessages.some((existingMessage) => existingMessage.id === message.id);
        };

        const uniqueMessages = messages.filter(filterMessages);
        const updateMessages = [...existingMessages, ...uniqueMessages];

        updateMessages.sort((a, b) => a.datetime - b.datetime);

        this.selectedUserMessages.set(selectedUserName, updateMessages);

        const userIndex = this.findUserIndex(selectedUserName);
        const selectedUser = this.allUsers[userIndex];
        if (shouldNotifyObservers) {
            this.notifyMessageObservers(updateMessages, selectedUser);
        }
    }

    public getAllUsers(): User[] {
        return this.allUsers;
    }

    public setUsersActive(users: User[]): void {
        this.usersActive = users;
    }

    public getUsersActive(): User[] {
        return this.usersActive;
    }

    public setUsersInActive(users: User[]): void {
        this.usersInActive = users;
    }

    public getUsersInActive(): User[] {
        return this.usersInActive;
    }

    public setUser(user: IUser | null): void {
        this.user = user;
    }

    public getUser(): IUser | null {
        return this.user || null;
    }

    private changeStatusUser(data: User): boolean {
        const userIndex = this.findUserIndex(data.login);
        if (userIndex !== -1) {
            this.allUsers[userIndex].isLogined = data.isLogined;
            return true;
        }
        return false;
    }

    private findUserIndex(login: string): number {
        const userIndex = this.allUsers.findIndex((user) => user.login === login);
        return userIndex;
    }
}
