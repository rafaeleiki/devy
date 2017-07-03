import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {Project} from '../project';
import {ProjectService} from './project.service';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {

  @Input() project: Project;

  constructor(
    private projectService: ProjectService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.route.params
      .switchMap((params: Params) => this.projectService.getProject(+params['id']))
      .subscribe((project: Project) => this.project = project);
  }

}
