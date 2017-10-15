import {Project} from '../../project';
import {
  development,
  interfacePrototypes,
  nationalFairFinalist,
  program,
  regionalFairFinalist,
  researchPlan
} from '../achievements';

export const solidari: Project = {
  id: 6,
  title: 'Solidari',
  team: 'Gabriela e Mayra - PD15 (matutino)',
  advisor: 'Sérgio Luiz Moral Marques',
  mentors: ['Simone Pierini Facini Rocha'],
  shortDescription: `Criação de uma plataforma para interligação de
      ONGs, voluntários e doadores, colaborando com a criação, articulação e
      desenvolvimento destas iniciativas sociais.`,
  description: `Criação de uma plataforma para interligação de
      ONGs, voluntários e doadores, colaborando com a criação, articulação e
      desenvolvimento destas iniciativas sociais.`,
  video: 'https://www.youtube.com/embed/0AuKxAGaJyo',
  achievements: [
    program,
    interfacePrototypes,
    development,
    researchPlan,
    regionalFairFinalist(['Bragantec 2017']),
    nationalFairFinalist(['Febrat 2017', 'Mostractc 2017']),
  ],
};
