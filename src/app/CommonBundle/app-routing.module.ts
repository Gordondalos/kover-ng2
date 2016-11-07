import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserLoginComponent } from "../UserBundle/user-login/user-login.component";
import { MainPageComponent } from "../DashboardBundle/main-page.component";
import { OrderCreateComponent } from "../DashboardBundle/orders/order-create/order-create.component";
import { FullClientComponent } from "../ClientsBundle/full-client/full-client.component";
import { AllClientComponent } from "../ClientsBundle/all-client/all-client.component";
import { OperatorsComponent } from "../UserBundle/operators/operators.component";
import { DriversComponent } from "../UserBundle/drivers/drivers/drivers.component";
import { StatisticComponent } from "../StatisticBundle/statistic/statistic.component";
import { OrganisationComponent } from "../OrganisationsBundle/organisation/organisation.component";
import { SettingsComponent } from "../SettingsBundle/settings/settings.component";
import { StatDriverComponent } from "../StatisticBundle/stat-driver/stat-driver.component";
import { StatOperatorComponent } from "../StatisticBundle/stat-operator/stat-operator.component";
import { RatingOrganisationComponent } from "../StatisticBundle/rating-organisation/rating-organisation.component";
import { RatingClientComponent } from "../StatisticBundle/rating-client/rating-client.component";
import { StatOrganisationComponent } from "../StatisticBundle/stat-organisation/stat-organisation.component";



const routes: Routes = [
    { path: '', redirectTo: '/main', pathMatch: 'full' },
    { path: 'user/login',  component: UserLoginComponent },
    { path: 'order/create',  component: OrderCreateComponent },
    { path: 'clients',  component: AllClientComponent },
    { path: 'operators',  component: OperatorsComponent },
    { path: 'drivers',  component: DriversComponent },
    { path: 'statistics',  component: StatisticComponent },
    { path: 'statistics/driver',  component: StatDriverComponent },
    { path: 'statistics/organisation',  component: StatOrganisationComponent },
    { path: 'statistics/operator',  component: StatOperatorComponent },
    { path: 'statistics/rating/organization',  component: RatingOrganisationComponent },
    { path: 'statistics/rating/client',  component: RatingClientComponent },

    { path: 'organisations',  component: OrganisationComponent },
    { path: 'settings',  component: SettingsComponent },
    { path: 'client/:id',  component: FullClientComponent },
    // { path: 'user/info', component: UserInfoComponent },
     { path: 'main', component: MainPageComponent },

    // { path: 'detail/:id', component: HeroDetailComponent },
    // { path: 'heroes',     component: HeroesComponent }
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {}