import { Component } from '@angular/core';
import {PROJECTS} from './project/projects.data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'DevCotuca';
  projects = PROJECTS;
}
