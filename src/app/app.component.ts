import { Component } from '@angular/core';
import {PROJECTS} from './project/projects.data';
import {NavigationEnd, Router} from '@angular/router';

function _window(): any {
  return window;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'DevCotuca';
  projects = PROJECTS;

  constructor(public router: Router) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        const window = _window();
        window.ga('set', 'page', event.urlAfterRedirects);
        window.ga('send', 'pageview');
      }
    });
  }
}
