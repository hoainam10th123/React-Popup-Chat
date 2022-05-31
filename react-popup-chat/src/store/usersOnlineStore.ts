import { makeAutoObservable, runInAction } from "mobx";
import { IUser, User } from "../models/user";

export default class UserOnlineStore {
    usersOnline: IUser[] = [];
    userChatBox: IUser[] = [];

    constructor() {
        makeAutoObservable(this);
    }

    addUser = (user: IUser) => {
        this.usersOnline.push(user)
    }

    removeUser = (username: string) => {
        this.usersOnline = this.usersOnline.filter(x => x.username !== username)
    }

    get UserChatBox(){
        return this.userChatBox;
    }

    addUserChatBox = (user: IUser) => {
        switch ((this.UserChatBox.length + 1) % 2) {
            case 0: {
                runInAction(() =>{
                    this.userChatBox.push(new User(user.username, user.displayName, 250 + 325));
                    localStorage.setItem('chatboxusers', JSON.stringify(this.userChatBox));
                })                
                break;
            }
            case 1: {
                runInAction(() =>{
                    this.userChatBox.push(new User(user.username, user.displayName, 250));
                    localStorage.setItem('chatboxusers', JSON.stringify(this.userChatBox));
                })                
                break;
            }
        }
    }

    removeUserChatBox = (username: string) => {
        this.userChatBox = this.userChatBox.filter(x => x.username !== username)
    }
}