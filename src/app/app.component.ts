import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'DevCotuca';
  projects = [
    {
      name: 'AlphaStudy',
      team: 'Nathália e Thaís - PD15',
      description: `Porque não juntar as funcionalidades
      de agenda e plano de estudos em
      um único aplicativo?`,
      video: 'alpha-study.mp4',
      image: 'alpha-study.png',
    }
  ];
}
