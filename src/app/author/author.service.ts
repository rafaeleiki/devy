import { Injectable } from '@angular/core';
import {AUTHORS} from './authors.data';
import {Author} from '../author';
import {PROJECTS} from '../project/projects.data';

@Injectable()
export class AuthorService {

  constructor() {
  }

  getAuthors(): Promise<Author[]> {
    return Promise.resolve(AUTHORS.map(author => this.addDetailsToAuthor(author)));
  }

  getAuthor(id: number): Promise<Author> {
    return this.getAuthors()
      .then(authors => authors.find(author => author.id === id));
  }

  addDetailsToAuthor(base: Author): Author {
    const author = {...base};
    author.projects = base.projects.map(
      projectId => PROJECTS.find(p => p.id === projectId));
    return author;
  }
}
