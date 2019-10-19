import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoutingComponent } from './Components/routing/routing.component';
import { EFComponent } from './Components/ef/ef.component';
import { ConfigurationComponent } from './Components/configuration/configuration.component';
import { HttpClientComponent } from './Components/http-client/http-client.component';
import { TestingComponent } from './Components/testing/testing.component';
import { ControllersComponent } from './Components/controllers/controllers.component';


const routes: Routes = [
  { path: '', redirectTo: '/routing', pathMatch: 'full' },
  { path: 'routing', component: RoutingComponent },
  { path: 'apicontrollers', component: ControllersComponent},
  { path: 'ef', component: EFComponent },
  { path: 'configuration', component: ConfigurationComponent },
  { path: 'testing', component: TestingComponent },
  { path: 'httpclient', component: HttpClientComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
