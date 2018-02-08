import { combineReducers } from '@ngrx/store';

import { MessageReducer } from './message.reducer';
import { ProgramModeReducer } from './program-mode.reducer';
import { ReportReducer } from './report.reducer';
import { MenuReducer } from './menu.reducer';
import { UserReducer } from './user.reducer';
import { LovReducer } from './lov.reducer';


export const RootReducer = {
    message: MessageReducer,
    report: ReportReducer,
    programMode: ProgramModeReducer,
    menu: MenuReducer,
    user: UserReducer,
    lov: LovReducer,
};
