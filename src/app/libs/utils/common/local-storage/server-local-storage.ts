import { LocalStorage } from './local-storage';


export abstract class ServerLocalStorage implements LocalStorage {

    abstract getItem(key: string);

    abstract setItem(key: string, value: string);

    abstract removeItem(key: string);
}
