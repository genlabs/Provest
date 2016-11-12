import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { DescriptionComponent } from './description/description.component';
import { MortgageDetailComponent } from './mortgage-detail/mortgage-detail.component';
import { MyPortfolioComponent } from './my-portfolio/my-portfolio.component';
import { PlatformComponent } from './platform/platform.component';
import { HomeComponent } from './home/home.component';
import { ContactUsComponent } from './contact-us/contact-us.component';


const appRoutes:Routes = [
    { path: 'mortgage/:mId', component: MortgageDetailComponent },
    { path: 'myPortfolio', component: MyPortfolioComponent },
    { path: 'contactUs', component: ContactUsComponent },
    {
        path: 'platform',
        component: PlatformComponent
    },
    { path: 'home', component: HomeComponent },
    { path: '', redirectTo:"/home", pathMatch: 'full' }
];

export const appRoutingProviders:any[] = [
];

export const routing:ModuleWithProviders = RouterModule.forRoot(appRoutes);
