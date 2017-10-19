import {Project} from '../../project';
import {development, regionalFairFinalist, awarded, nationalFairFinalist} from '../achievements';

export const alphaStudy: Project = {
  id: 1,
  title: 'AlphaStudy',
  team: 'Nathália e Thaís - PD15 (matutino)',
  advisor: 'Andréia Cristina de Souza',
  mentors: ['André Luís dos Reis Gomes de Carvalho'],
  shortDescription: `Aplicativo de organização do tempo dedicado aos estudos`,
  description: `Pensando na realidade e cotidiano dos alunos do Colégio Técnico
  de Campinas, foi realizada uma pesquisa, com formulário
  anônimo, no referido local, com o objetivo de averiguar o perfil
  dos alunos e as reais necessidades que os mesmos enfrentam, ao
  se tratar da relação de organização e planejamento da rotina de
  estudos. Com os resultados obtidos na pesquisa, foi possível
  constatar que os mesmos enfrentam dificuldades para se
  organizarem e há a necessidade de uma ferramenta que possam
  auxiliá-los nesse processo. A partir dessas informações, foi
  possível compreender que o potencial público consumidor
  precisava de algo que os auxiliasse na gestão das tarefas diárias,
  então iniciou-se o desenvolvimento de um aplicativo para
  smartphone Android, com as funcionalidades de Agenda e Plano
  de Estudo integradas, visando a praticidade e usabilidade dos
  usuários e tendo como objetivo principal, auxiliar no
  gerenciamento dos horários e no desempenho acadêmico do
  estudante em questão. Palavras Chave: Organização; Agenda; Plano de Estudos;`,
  video: 'https://www.youtube.com/embed/qt9ZSYdbuRU',
  image: 'alpha-study.png',
  achievements: [
    development,
    regionalFairFinalist(['Bragantec 2017']),
    awarded(['3º lugar Informática - Bragantec']),
    nationalFairFinalist(['Mostractc 2017']),
  ],
};
