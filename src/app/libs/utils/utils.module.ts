import { NgModule, ModuleWithProviders, LOCALE_ID, ErrorHandler } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { PrimengWrapperModule } from './primeng-wrapper/primeng-wrapper.module';
import { ThaiDatePipe } from './pipes/thai-date/thai-date.pipe';
import { TabContainerComponent } from './components/tab-container/tab-container.component';
import { AuthInterceptor } from './auth/auth.interceptor';
import { AUTH_URL_PROVIDER } from './auth/auth-url.provider';
import { AuthService } from './auth/auth.service';
import { FwMessageService } from './services/fw-message/fw-message.service';
import { ReportPanelComponent } from './components/report-panel/report-panel.component';
import { ReportButtonComponent } from './components/report-button/report-button.component';
import { ReportService } from './services/report/report.service';
import { ProgressComponent } from './components/progress/progress.component';
import { ButtonPanelComponent } from './components/button-panel/button-panel.component';
import { TableComponent } from './components/table/table.component';
import { DatepickerComponent } from './components/datepicker/datepicker.component';
import { InputPanelComponent } from './components/input-panel/input-panel.component';
import { ConfirmButtonComponent } from './components/confirm-button/confirm-button.component';
import { AuthGuard } from './auth/auth.guard';
import { MenuService } from './services/menu/menu.service';
import { UserService } from './services/user/user.service';
import { LovComponent } from './components/lov/lov.component';
import { LovTableComponent } from './components/lov-table/lov-table.component';
import { CardComponent } from './components/card/card.component';
import { CardHeaderComponent } from './components/card-header/card-header.component';
import { CardContentComponent } from './components/card-content/card-content.component';
import { CardFooterComponent } from './components/card-footer/card-footer.component';
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';
import { LovService } from './services/lov/lov.service';
import { ShowErrorsComponent } from './components/show-errors/show-errors.component';
import { PageTitleComponent } from './components/page-title/page-title.component';
import { PageSubtitleComponent } from './components/page-subtitle/page-subtitle.component';




@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        PrimengWrapperModule,
    ],
    exports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        ThaiDatePipe,
        PrimengWrapperModule,
        TabContainerComponent,
        ReportPanelComponent,
        ReportButtonComponent,
        ProgressComponent,
        ButtonPanelComponent,
        TableComponent,
        DatepickerComponent,
        InputPanelComponent,
        ConfirmButtonComponent,
        LovComponent,
        LovTableComponent,
        CardComponent,
        CardHeaderComponent,
        CardContentComponent,
        CardFooterComponent,
        BreadcrumbComponent,
        ShowErrorsComponent,
        PageTitleComponent,
        PageSubtitleComponent,
    ],
    providers: [],
    declarations: [
        ThaiDatePipe,
        TabContainerComponent,
        ReportPanelComponent,
        ReportButtonComponent,
        ProgressComponent,
        ButtonPanelComponent,
        TableComponent,
        DatepickerComponent,
        InputPanelComponent,
        ConfirmButtonComponent,
        LovComponent,
        LovTableComponent,
        CardComponent,
        CardHeaderComponent,
        CardContentComponent,
        CardFooterComponent,
        BreadcrumbComponent,
        ShowErrorsComponent,
        PageTitleComponent,
        PageSubtitleComponent,
    ]
})
export class UtilsModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: UtilsModule,
            providers: [
                {
                    provide: LOCALE_ID,
                    useValue: 'th'
                },
                {
                    provide: HTTP_INTERCEPTORS,
                    useClass: AuthInterceptor,
                    multi: true
                },
                AUTH_URL_PROVIDER,
                AuthService,
                AuthGuard,
                FwMessageService,
                LovService,
                ReportService,
                MenuService,
                UserService,
            ],
        };
    }
}
