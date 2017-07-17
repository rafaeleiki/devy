import { Component, OnInit } from '@angular/core';
import {PROJECTS} from '../project/projects.data';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  projects = PROJECTS;

  initials(projectName: string): string {
    return projectName.split(' ').map((word) => {
      const character = word[0];
      return character === character.toLowerCase() ? '' : character;
    }).join('');
  }
}
