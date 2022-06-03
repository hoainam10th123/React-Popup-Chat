import { makeAutoObservable, reaction } from "mobx";

export default class DarkThemeStore{
    isdark = false;
    theme = 'light'

    constructor(){
        makeAutoObservable(this);
        reaction(
            () => this.isdark,
            () => {
                this.isdark ? this.setTheme('dark') : this.setTheme('light')
            }
        )
    }

    setTheme = (theme: string) =>{
        this.theme = theme;
    }

    toogleDark = ()=> {
        this.isdark = !this.isdark
    }
}