import {Project} from '../../project';
import {
  development,
  devicePrototype,
  internationalFairFinalist,
  regionalFairFinalist,
  researchPlan,
  awarded,
  selectedByPrograms
} from '../achievements';

export const brailleReader: Project = {
  id: 2,
  title: 'Braile Reader',
  team: 'Jonaphael, Pedro, Yohann - PD16 (vespertino)',
  advisor: 'Sérgio Luiz Moral Marques',
  mentors: ['Andréia Cristina de Souza', 'Rafael Eiki Matheus Imamura'],
  shortDescription: `Dispositivo para leitura em braile
      com uma única célula.`,
  description: `O sistema se trata de um dispositivo que tem como objetivo incentivar e facilitar a leitura para as pessoas com deficiência visual. Ele conta com um dispositivo físico e um aplicativo móvel. O aplicativo permite que o usuário adicione e selecione livros, e então os caracteres são enviados para o dispositivo físico via bluetooth. O dispositivo  forma os carácteres braille com base nos dados recebidos. O dispositivo é relativamente pequeno e portátil, o que facilita seu transporte e uso.`,
  video: 'https://www.youtube.com/embed/DQrrgztByY8',
  image: 'braille-reader.png',
  achievements: [
    researchPlan,
    development,
    devicePrototype,
    regionalFairFinalist(['Bragantec 2017']),
    internationalFairFinalist(['Mostratec 2017']),
    selectedByPrograms(['HackBrazil']),
    awarded(['2º lugar Engenharia - Bragantec','3º Ciências Exatas e Tecnológicas - Mostra Cotuca']),
  ],
};
