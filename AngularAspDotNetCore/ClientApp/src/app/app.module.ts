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
import { HttpClientComponent } from './Components/http-client/http-client.component';
import { ControllersComponent } from './Components/controllers/controllers.component';
import { AppRoutingModule } from './app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    RoutingComponent,
    EFComponent,
    TestingComponent,
    ConfigurationComponent,
    HttpClientComponent,
    ControllersComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
