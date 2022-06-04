import { makeAutoObservable, reaction, runInAction } from "mobx";
import { IUser, User } from "../models/user";

export default class UserOnlineStore {
    usersOnline: IUser[] = [];
    userChatBox: IUser[] = [];
    miniChatBox: IUser[] = [];

    constructor() {
        makeAutoObservable(this);
        reaction(
            () => this.userChatBox,
            () => {
                this.calculateRightPositionChatBox();
            }
        )
    }

    calculateRightPositionChatBox = () =>{
        this.userChatBox.forEach((user, index) =>{
            if(index % 2 === 0){
                user.right = 250;
            }else{
                user.right = 250 + 325;
            }
        })
    }

    addMiniChatBox= (user: IUser) => {
        this.miniChatBox.push(user);
        this.userChatBox = this.userChatBox.filter(x=>x.username !== user.username);
    }

    restoreMiniChatBox = (user: IUser)=>{
        this.miniChatBox = this.miniChatBox.filter(x=>x.username !== user.username);
        this.addUserChatBox(user);        
    }

    removeMiniChatBox = (username: string) => {
        this.miniChatBox = this.miniChatBox.filter(x=>x.username !== username);
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
        this.userChatBox = this.userChatBox.filter(x => x.username !== username);        
    }
}