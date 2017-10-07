import {Project} from '../../project';
import {
  development,
  internationalFairFinalist,
  regionalFairFinalist,
  researchPlan
} from '../achievements';

export const brailleReader: Project = {
  id: 2,
  title: 'Braile Reader',
  team: 'Jonaphael, Pedro, Yohann - PD16 (vespertino)',
  advisor: 'Sérgio Luiz Moral Marques',
  mentors: ['Andréia Cristina de Souza', 'Rafael Eiki Matheus Imamura'],
  shortDescription: `Dispositivo para leitura de braile
      em uma única célula.`,
  description: `Dispositivo para leitura de braile
      em uma única célula.`,
  video: 'https://www.youtube.com/embed/DQrrgztByY8',
  achievements: [
    researchPlan,
    development,
    regionalFairFinalist(['Bragantec 2017']),
    internationalFairFinalist(['Mostratec 2017']),
  ],
};
