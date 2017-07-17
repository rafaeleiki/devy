import {Achievement, Project} from '../project';

const researchPlan: Achievement = {
  icon: 'search',
  description: 'Concluiu o plano de pesquisa',
};

const program: Achievement = {
  icon: 'directions_run',
  description: 'Participou de um programa externo para desenvolver o projeto',
};

const support: Achievement = {
  icon: 'supervisor_account',
  description: 'Possui algum apoio externo para o projeto',
};

const interfacePrototypes: Achievement = {
  icon: 'style',
  description: 'Concluiu os protótipos das interfaces',
};

const development: Achievement = {
  icon: 'code',
  description: 'Está em fase de desenvolvimento'
};

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: 'Alpha Study',
    team: 'Nathália e Thaís - PD15 (matutino)',
    description: `Porque não juntar as funcionalidades
      de agenda e plano de estudos em
      um único aplicativo?`,
    video: 'https://drive.google.com/uc?export=download&id=0BxgB0meBhPaqZjlnUGI1Wk5EME0',
    image: 'alpha-study.png',
    achievements: [
      development,
    ],
  },
  {
    id: 2,
    title: 'Braile Reader',
    team: 'Jonaphael, Pedro, Yohann - PD16 (vespertino)',
    description: `Dispositivo para leitura de braile
      em uma única célula.`,
    video: 'https://drive.google.com/uc?export=download&id=0BxgB0meBhPaqRWpFSTRRZnFBSDg',
    achievements: [],
  },
  {
    id: 3,
    title: 'Interface Visual de Proteínas',
    team: 'Gabriel, Guilherme, Júlia - PD16 (matutino)',
    description: `Visualização de proteínas em interface visual.`,
    video: 'https://drive.google.com/uc?export=download&id=0BxgB0meBhPaqbVZ6aWZ5ZkEzak0',
    achievements: [],
  },
  {
    id: 4,
    title: 'Simas!',
    team: 'Emílio e Henrique - PD15 (matutino)',
    description: `Aprendizado de programação com
      uso de mascote em realidade aumentada.`,
    video: 'https://drive.google.com/uc?export=download&id=0BxgB0meBhPaqb0NqcF82RUIxNUk',
    achievements: [
      development,
      support,
    ],
  },
  {
    id: 5,
    title: 'Sine',
    team: 'Igor e Vitor - PD16 (matutino)',
    description: `Inclusão digital de seniores por meio
      de análise de aspectos de interface.`,
    video: 'https://drive.google.com/uc?export=download&id=0BxgB0meBhPaqeFJBNXlVV1ZCYlk',
    achievements: [
      program,
      researchPlan,
    ],
  },
  {
    id: 6,
    title: 'Solidari',
    team: 'Gabriela e Mayra - PD15 (matutino)',
    description: `Criação de uma plataforma para interligação de
      ONGs, voluntários e doadores, colaborando com a criação, articulação e
      desenvolvimento destas iniciativas sociais.`,
    video: 'https://drive.google.com/uc?export=download&id=0BxgB0meBhPaqbjIxd3NkVk1QVms',
    achievements: [
      program,
      interfacePrototypes,
      development,
    ],
  },
];
