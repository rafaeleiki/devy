import {Achievement, Project} from '../project';

const researchPlan: Achievement = {
  icon: 'search',
  description: 'Concluiu o plano de pesquisa',
  color: '#f19fff',
};

const program: Achievement = {
  icon: 'directions_run',
  description: 'Participou de um programa externo para desenvolver o projeto',
  color: '#f19fff',
};

const support: Achievement = {
  icon: 'supervisor_account',
  description: 'Possui algum apoio externo para o projeto',
  color: '#f19fff',
};

const interfacePrototypes: Achievement = {
  icon: 'style',
  description: 'Concluiu os protótipos das interfaces',
  color: '#f19fff',
};

const development: Achievement = {
  icon: 'code',
  description: 'Está em fase de desenvolvimento',
  color: '#f19fff',
};

const regionalFairFinalist = (fairList): Achievement => ({
  icon: 'bookmark',
  description: `Finalista das feiras regionais: ${fairList.join(', ')}`,
  color: '#f19fff',
});

const nationalFairFinalist = (fairList): Achievement => ({
  icon: 'flag',
  description: `Finalista das feiras nacionais: ${fairList.join(', ')}`,
  color: '#a185ff',
});

const internationalFairFinalist = (fairList): Achievement => ({
  icon: 'flight takeoff',
  description: `Finalista das feiras internacionais: ${fairList.join(', ')}`,
  color: '#ffa662',
});

export const PROJECTS: Project[] = [
  {
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
  },
  {
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
  },
  {
    id: 3,
    title: 'Interface Visual de Proteínas',
    team: 'Gabriel, Guilherme, Júlia - PD16 (matutino)',
    advisor: 'Patrícia Gagliardo de Campos',
    mentors: ['Marcelo Mendes Brandão'],
    shortDescription: `Visualização de proteínas em interface visual.`,
    description: `Visualização de proteínas em interface visual.`,
    video: 'https://www.youtube.com/embed/mdhpdorGUTQ',
    achievements: [
      researchPlan,
      support,
      development,
    ],
  },
  {
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
  },
  {
    id: 5,
    title: 'Sine',
    team: 'Igor e Vitor - PD16 (matutino)',
    advisor: 'Francisco da Fonseca Rodrigues',
    mentors: [],
    shortDescription: `Inclusão digital de seniores por meio
      de análise de aspectos de interface.`,
    description: `Inclusão digital de seniores por meio
      de análise de aspectos de interface.`,
    video: 'https://www.youtube.com/embed/2_mPCaNDSi4',
    achievements: [
      program,
      researchPlan,
      development,
      nationalFairFinalist(['Febrat 2017', 'Mostractc 2017']),
    ],
  },
  {
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
  },
];
