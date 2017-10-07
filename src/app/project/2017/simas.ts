import {Project} from '../../project';
import {
  development,
  nationalFairFinalist,
  regionalFairFinalist,
  researchPlan,
  support
} from '../achievements';

export const simas: Project = {
  id: 4,
  title: 'Simas!',
  team: 'Emílio e Henrique - PD15 (matutino)',
  advisor: 'Simone Pierini Facini Rocha',
  mentors: ['Sérgio Luiz Moral Marques'],
  shortDescription: `Aprendizado de programação com
      uso de mascote em realidade aumentada.`,
  description: `Aprendizado de programação com
      uso de mascote em realidade aumentada.`,
  video: 'https://www.youtube.com/embed/f0Yp_ojQt1o',
  achievements: [
    development,
    support,
    researchPlan,
    regionalFairFinalist(['Bragantec 2017']),
    nationalFairFinalist(['Febrat 2017', 'Mostractc 2017']),
  ],
};
