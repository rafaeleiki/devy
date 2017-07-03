import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {MaterialModule} from '@angular/material';

import { RouterModule } from '@angular/router';
import { ProjectComponent } from './project/project.component';
import { HomeComponent } from './home/home.component';
import {ProjectService} from "./project/project.service";

const routes = RouterModule.forRoot([
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'project/:id',
    component: ProjectComponent
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  }
]);

@NgModule({
  declarations: [
    AppComponent,
    ProjectComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule,
    routes,
  ],
  providers: [
    ProjectService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
