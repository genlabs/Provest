import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule }   from '@angular/router';

import { AppComponent } from './app.component';
import { DescriptionComponent } from './description/description.component';
import { MortgageDetailComponent } from './mortgage-detail/mortgage-detail.component';
import { MyPortfolioComponent } from './my-portfolio/my-portfolio.component';
import { PlatformComponent } from './platform/platform.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    DescriptionComponent,
    MortgageDetailComponent,
    MyPortfolioComponent,
    PlatformComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      { path: 'mortgage/:mId', component: MortgageDetailComponent },
      { path: 'myPortfolio', component: MyPortfolioComponent },
      {
        path: 'platform',
        component: PlatformComponent,
        data: {
          title: 'Mortgages List'
        }
      },
      { path: '', component: HomeComponent }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }



