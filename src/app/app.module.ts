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



@NgModule ( {
    declarations : [
        AppComponent,
        UserLoginComponent,
        MainPageComponent,
        NavigationComponent,
        LangPipe
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
