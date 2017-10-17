import { Component, OnInit, Input } from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {Author} from '../author';
import {AuthorService} from './author.service';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css']
})
export class AuthorComponent implements OnInit {

  @Input() author: Author;

  constructor(
    private authorService: AuthorService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.route.params
      .switchMap((params: Params) => this.authorService.getAuthor(+params['id']))
      .subscribe((author: Author) => this.author = author);
  }

}
