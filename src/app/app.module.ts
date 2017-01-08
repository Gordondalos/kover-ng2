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
import { ClientInfoComponent } from './ClientsBundle/client-info/client-info.component';
import { DriverNowComponent } from './UserBundle/drivers/driver-now/driver-now.component';
import { AddClientComponent } from './ClientsBundle/add-client/add-client.component';
import { FullClientComponent } from './ClientsBundle/full-client/full-client.component';
import { AllClientComponent } from './ClientsBundle/all-client/all-client.component';
import { OperatorsComponent } from './UserBundle/operators/operators.component';
import { DriversComponent } from './UserBundle/drivers/drivers/drivers.component';
import { StatisticComponent } from './StatisticBundle/statistic/statistic.component';
import { OrganisationComponent } from './OrganisationsBundle/organisation/organisation.component';
import { SettingsComponent } from './SettingsBundle/settings/settings.component';
import { StatOrganisationComponent } from './StatisticBundle/stat-organisation/stat-organisation.component';
import { StatDriverComponent } from './StatisticBundle/stat-driver/stat-driver.component';
import { StatOperatorComponent } from './StatisticBundle/stat-operator/stat-operator.component';
import { RatingOrganisationComponent } from './StatisticBundle/rating-organisation/rating-organisation.component';
import { RatingClientComponent } from './StatisticBundle/rating-client/rating-client.component';
import { StatClientComponent } from './StatisticBundle/stat-client/stat-client.component';
import { DriverJobNowComponent } from './SettingsBundle/driver-job-now/driver-job-now.component';
import { OperatorSummComponent } from './SettingsBundle/operator-summ/operator-summ.component';
import { OrderSummComponent } from './SettingsBundle/order-summ/order-summ.component';
import { AddOrganizationComponent } from './OrganisationsBundle/add-organization/add-organization.component';
import { UserCreateComponent } from './UserBundle/user-create/user-create.component';
import{ MaterialModule } from '@angular/material';
import { NgSelect2Component } from './CommonBundle/ng-select2/ng-select2.component';
import { FilPipe } from './CommonBundle/ng-select2/fil.pipe';
import { DriverSortPipe } from './UserBundle/drivers/driver-now/driver-sort.pipe';
import { AuthGuard } from "./CommonBundle/service/auth.service";






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
        StatOrganisationComponent,
        StatDriverComponent,
        StatOperatorComponent,
        RatingOrganisationComponent,
        RatingClientComponent,
        StatClientComponent,
        DriverJobNowComponent,
        OperatorSummComponent,
        OrderSummComponent,
        AddOrganizationComponent,
        UserCreateComponent,
        NgSelect2Component,
        FilPipe,
        DriverSortPipe,




    ],
    imports : [
        BrowserModule,
        FormsModule,
        HttpModule,
        AppRoutingModule,
        MaterialModule.forRoot(),



    ],
    providers : [ CommonService, AuthGuard ],
    bootstrap : [ AppComponent ]
} )
export class AppModule {
}
