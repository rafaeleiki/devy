import { Injectable } from '@angular/core';
import {Project} from '../project';
import {PROJECTS} from './projects.data';

@Injectable()
export class ProjectService {

  constructor() {
  }

  getProjects(): Promise<Project[]> {
    return Promise.resolve(PROJECTS);
  }

  getProject(id: number): Promise<Project> {
    return this.getProjects()
      .then(projects => projects.find(project => project.id === id));
  }

}
