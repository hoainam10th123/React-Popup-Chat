import { createContext, useContext } from "react";
import DarkThemeStore from "./darkThemeStore";
import UserOnlineStore from "./usersOnlineStore";

interface Store{
    userOnlineStore: UserOnlineStore;
    darkThemeStore: DarkThemeStore
}

export const store: Store = {
    userOnlineStore : new UserOnlineStore(),
    darkThemeStore: new DarkThemeStore()
}

export const StoreContext = createContext(store);

export function useStore(){
    return useContext(StoreContext);
}