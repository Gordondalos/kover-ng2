import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { UserLoginComponent } from './UserBundle/user-login/user-login.component';
import { AppRoutingModule } from "./CommonBundle/app-routing.module";
import { MainPageComponent } from './DashboardBundle/main-page.component';
import { NavigationComponent } from './CommonBundle/navigation/navigation.component';
import { LangPipe } from "./CommonBundle/lang.pipe";
import { CommonService } from "./CommonBundle/common.service";
import { LangComponent } from "./CommonBundle/lang/lang.component";
import { OrdersComponent } from './DashboardBundle/orders/orders/orders.component';
import { OrderCreateComponent } from './DashboardBundle/orders/order-create/order-create.component';
import { ClientInfoComponent } from './ClientsBundle/client-info/client-info/client-info.component';
import { DriverNowComponent } from './UserBundle/drivers/driver-now/driver-now.component';
import { AddClientComponent } from './ClientsBundle/add-client/add-client/add-client.component';
import { FullClientComponent } from './ClientsBundle/full-client/full-client.component';
import { AllClientComponent } from './ClientsBundle/all-client/all-client.component';
import { OperatorsComponent } from './UserBundle/operators/operators.component';
import { DriversComponent } from './UserBundle/drivers/drivers/drivers.component';
import { StatisticComponent } from './StatisticBundle/statistic/statistic.component';
import { OrganisationComponent } from './OrganisationsBundle/organisation/organisation.component';
import { SettingsComponent } from './SettingsBundle/settings/settings.component';








@NgModule ( {
    declarations : [
        AppComponent,
        UserLoginComponent,
        MainPageComponent,
        NavigationComponent,
        LangPipe,
        LangComponent,
        OrdersComponent,
        OrderCreateComponent,
        ClientInfoComponent,
        DriverNowComponent,
        AddClientComponent,
        FullClientComponent,
        AllClientComponent,
        OperatorsComponent,
        DriversComponent,
        StatisticComponent,
        OrganisationComponent,
        SettingsComponent,



    ],
    imports : [
        BrowserModule,
        FormsModule,
        HttpModule,
        AppRoutingModule,

    ],
    providers : [CommonService],
    bootstrap : [ AppComponent ]
} )
export class AppModule {
}
