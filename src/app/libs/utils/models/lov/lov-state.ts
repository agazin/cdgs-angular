import { LovConfig } from './lov-config';


export interface LovState {
    [lovName: string]: LovConfig;
}
