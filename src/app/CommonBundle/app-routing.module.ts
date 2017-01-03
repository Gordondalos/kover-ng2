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
import { AddOrganizationComponent } from "../OrganisationsBundle/add-organization/add-organization.component";
import { AddClientComponent } from "../ClientsBundle/add-client/add-client.component";
import { UserCreateComponent } from "../UserBundle/user-create/user-create.component";
import { AuthGuard } from "./service/auth.service";



const routes: Routes = [
    { path: '', redirectTo: '/main', pathMatch: 'full' },
    { path: 'user/login',  component: UserLoginComponent },
    { path: 'user/create',  component: UserCreateComponent ,canActivate: [AuthGuard]  },
    { path: 'order/create',  component: OrderCreateComponent ,canActivate: [AuthGuard]  },
    { path: 'clients',  component: AllClientComponent ,canActivate: [AuthGuard]  },
    { path: 'operators',  component: OperatorsComponent ,canActivate: [AuthGuard]  },
    { path: 'drivers',  component: DriversComponent ,canActivate: [AuthGuard]  },
    { path: 'statistics',  component: StatisticComponent ,canActivate: [AuthGuard]  },
    { path: 'statistics/driver',  component: StatDriverComponent ,canActivate: [AuthGuard]  },
    { path: 'statistics/organisation',  component: StatOrganisationComponent ,canActivate: [AuthGuard]  },
    { path: 'statistics/operator',  component: StatOperatorComponent ,canActivate: [AuthGuard]  },
    { path: 'statistics/rating/organization',  component: RatingOrganisationComponent ,canActivate: [AuthGuard]  },
    { path: 'statistics/rating/client',  component: RatingClientComponent ,canActivate: [AuthGuard]  },
    { path: 'organisations',  component: OrganisationComponent ,canActivate: [AuthGuard]  },
    { path: 'organisations/add',  component: AddOrganizationComponent ,canActivate: [AuthGuard]  },
    { path: 'settings',  component: SettingsComponent ,canActivate: [AuthGuard]  },
    { path: 'client/full/:id',  component: FullClientComponent ,canActivate: [AuthGuard]  },
    { path: 'client/add',  component: AddClientComponent ,canActivate: [AuthGuard]  },
    // { path: 'user/info', component: UserInfoComponent },
     { path: 'main', component: MainPageComponent ,canActivate: [AuthGuard]  },

    // { path: 'detail/:id', component: HeroDetailComponent },
    // { path: 'heroes',     component: HeroesComponent }
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {}