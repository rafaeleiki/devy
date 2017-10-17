import { Injectable } from '@angular/core';
import {AUTHORS} from './authors.data';
import {Author} from '../author';

@Injectable()
export class AuthorService {

  constructor() {
  }

  getAuthors(): Promise<Author[]> {
    return Promise.resolve(AUTHORS);
  }

  getAuthor(id: number): Promise<Author> {
    return this.getAuthors()
      .then(authors => authors.find(author => author.id === id));
  }

}
