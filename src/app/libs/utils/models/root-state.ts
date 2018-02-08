import { MessageState } from './message';
import { ReportState } from './report';
import { MenuState } from './menu/menu-state';
import { UserState } from './user/user-state';
import { LovState } from './lov/lov-state';

export interface RootState {
    message: MessageState;
    report: ReportState;
    programMode: string;
    menu: MenuState;
    user: UserState;
    lov: LovState;
}
