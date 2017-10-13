import {Achievement} from '../project';

export const researchPlan: Achievement = {
  icon: 'search',
  description: 'Concluiu o plano de pesquisa',
  color: '#f19fff',
};

export const program: Achievement = {
  icon: 'directions_run',
  description: 'Participou de um programa externo para desenvolver o projeto',
  color: '#f19fff',
};

export const support: Achievement = {
  icon: 'supervisor_account',
  description: 'Possui algum apoio externo para o projeto',
  color: '#f19fff',
};

export const interfacePrototypes: Achievement = {
  icon: 'style',
  description: 'Concluiu os protótipos das interfaces',
  color: '#f19fff',
};

export const development: Achievement = {
  icon: 'code',
  description: 'Está em fase de desenvolvimento',
  color: '#f19fff',
};

export const devicePrototype : Achievement = {
  icon: 'memory',
  description: `Concluiu o protótipo do dispositivo`,
  color: '#f19fff',
};

export const regionalFairFinalist = (fairList): Achievement => ({
  icon: 'bookmark',
  description: `Finalista das feiras regionais: ${fairList.join(', ')}`,
  color: '#f19fff',
});

export const nationalFairFinalist = (fairList): Achievement => ({
  icon: 'flag',
  description: `Finalista das feiras nacionais: ${fairList.join(', ')}`,
  color: '#a185ff',
});

export const internationalFairFinalist = (fairList): Achievement => ({
  icon: 'flight takeoff',
  description: `Finalista das feiras internacionais: ${fairList.join(', ')}`,
  color: '#ffa662',
});

export const awarded = (fairList): Achievement => ({
  icon: 'star rate',
  description: `Premiado em feiras:   ${fairList.join(', \n')}`,
  color: '#e9ef0f',
});

export const selectedByPrograms = (fairList): Achievement => ({
  icon: 'class',
  description: `Selecionados por programas:   ${fairList.join(', \n')}`,
  color: '#ffa662',
});
