import { Component, OnInit } from '@angular/core';
import {AuthorService} from '../author/author.service';
import {Author} from '../author';

@Component({
  selector: 'app-authors-list',
  templateUrl: './authors-list.component.html',
  styleUrls: ['./authors-list.component.css']
})
export class AuthorsListComponent implements OnInit {

  authors: Author[];

  constructor(
    private authorService: AuthorService
  ) { }

  ngOnInit() {
    this.authorService.getAuthors()
      .then(authors => this.authors = authors);
  }

  veteran(author: Author): boolean {
    return author.years.length > 1;
  }
}
