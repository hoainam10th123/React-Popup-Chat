import { createContext, useContext } from "react";
import UserOnlineStore from "./usersOnlineStore";

interface Store{
    userOnlineStore: UserOnlineStore;
}

export const store: Store = {
    userOnlineStore : new UserOnlineStore(),
}

export const StoreContext = createContext(store);

export function useStore(){
    return useContext(StoreContext);
}