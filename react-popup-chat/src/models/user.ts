export interface IUser{
    username: string;
    displayName: string;
    right?: number;
}

export class User implements IUser{
    username = '';
    displayName = '';
    right?: number | undefined;
    
    constructor(username: string, displayName: string, right?: number){
        this.username = username;
        this.displayName = displayName;
        this.right = right;
    }
}