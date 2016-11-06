import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserLoginComponent } from "../UserBundle/user-login/user-login.component";
import { MainPageComponent } from "../DashboardBundle/main-page.component";



const routes: Routes = [
    { path: '', redirectTo: '/main', pathMatch: 'full' },
    { path: 'user/login',  component: UserLoginComponent },
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