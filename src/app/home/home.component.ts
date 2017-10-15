import { Component, OnInit } from '@angular/core';
import {PROJECTS} from '../project/projects.data';
import {DomSanitizer, SafeUrl} from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  projects = PROJECTS;

  constructor(private sanitizer: DomSanitizer) {}

  initials(projectName: string): string {
    return projectName.split(' ').map((word) => {
      const character = word[0];
      return character === character.toLowerCase() ? '' : character;
    }).join('');
  }

  sanitizeUrl(url: string): SafeUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}
