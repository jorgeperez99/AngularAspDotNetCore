import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppComponent } from './Components/app/app.component';
import { RoutingComponent } from './Components/routing/routing.component';
import { EFComponent } from './Components/ef/ef.component';
import { TestingComponent } from './Components/testing/testing.component';


@NgModule({
  declarations: [
    AppComponent,
    RoutingComponent,
    EFComponent,
    TestingComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', redirectTo: '/routing', pathMatch: 'full' },
      { path: 'routing', component: RoutingComponent },
      { path: 'ef', component: EFComponent },
      { path: 'testing', component: TestingComponent }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
