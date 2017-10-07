import {Project} from '../../project';
import {development, regionalFairFinalist} from '../achievements';

export const alphaStudy: Project = {
  id: 1,
  title: 'Alpha Study',
  team: 'Nathália e Thaís - PD15 (matutino)',
  advisor: 'Andréia Cristina de Souza',
  mentors: ['André Luís dos Reis Gomes de Carvalho'],
  shortDescription: `Porque não juntar as funcionalidades
      de agenda e plano de estudos em
      um único aplicativo?`,
  description: `Porque não juntar as funcionalidades
      de agenda e plano de estudos em
      um único aplicativo?`,
  video: 'https://www.youtube.com/embed/qt9ZSYdbuRU',
  image: 'alpha-study.png',
  achievements: [
    development,
    regionalFairFinalist(['Bragantec 2017']),
  ],
};
