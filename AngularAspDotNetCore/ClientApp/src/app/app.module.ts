import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppComponent } from './Components/app/app.component';
import { RoutingComponent } from './Components/routing/routing.component';
import { EFComponent } from './Components/ef/ef.component';
import { TestingComponent } from './Components/testing/testing.component';
import { ConfigurationComponent } from './Components/configuration/configuration.component';


@NgModule({
  declarations: [
    AppComponent,
    RoutingComponent,
    EFComponent,
    TestingComponent,
    ConfigurationComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', redirectTo: '/routing', pathMatch: 'full' },
      { path: 'routing', component: RoutingComponent },
      { path: 'ef', component: EFComponent },
      { path: 'configuration', component: ConfigurationComponent },
      { path: 'testing', component: TestingComponent }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
