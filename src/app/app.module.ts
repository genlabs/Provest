import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule }   from '@angular/router';
import { routing, appRoutingProviders } from './app.routing';
import { AppComponent } from './app.component';
import { DescriptionComponent } from './description/description.component';
import { MortgageDetailComponent } from './mortgage-detail/mortgage-detail.component';
import { MyPortfolioComponent } from './my-portfolio/my-portfolio.component';
import { PlatformComponent } from './platform/platform.component';
import { HomeComponent } from './home/home.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import {NgbModule, NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';

import { PtListComponent } from './pt-list/pt-list.component';
import { PtItemComponent } from './pt-item/pt-item.component';
import { MortgagesService } from './mortgages.service';

@NgModule({
  declarations: [
    AppComponent,
    DescriptionComponent,
    MortgageDetailComponent,
    MyPortfolioComponent,
    PlatformComponent,
    HomeComponent,
    ContactUsComponent,
    PtListComponent,
    PtItemComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgbModule,
    routing
  ],
  providers: [
    appRoutingProviders,
    NgbCarouselConfig,
    MortgagesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }



