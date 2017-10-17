import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {MaterialModule} from '@angular/material';

import { RouterModule } from '@angular/router';
import { ProjectComponent } from './project/project.component';
import { HomeComponent } from './home/home.component';
import { ProjectService } from './project/project.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AboutComponent } from './about/about.component';
import { AuthorComponent } from './author/author.component';
import { AuthorsListComponent } from './authors-list/authors-list.component';
import {AuthorService} from './author/author.service';

const routes = RouterModule.forRoot([
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: 'project/:id',
    component: ProjectComponent,
  },
  {
    path: 'author/:id',
    component: AuthorComponent,
  },
  {
    path: 'authors',
    component: AuthorsListComponent,
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
    HomeComponent,
    AboutComponent,
    AuthorComponent,
    AuthorsListComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    MaterialModule,
    routes,
  ],
  providers: [
    ProjectService,
    AuthorService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
