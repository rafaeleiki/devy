import {Project} from '../../project';
import {
  development,
  nationalFairFinalist,
  program,
  researchPlan,
  interfacePrototypes
} from '../achievements';

export const sine: Project = {
  id: 5,
  title: 'Sine',
  team: 'Igor e Vitor - PD16 (matutino)',
  advisor: 'Francisco da Fonseca Rodrigues',
  mentors: [],
  shortDescription: `Inclusão digital de seniores por meio
      de análise de aspectos de interface.`,
  description: `Sabendo do grande crescimento da população
      idosa no Brasil e no mundo, vimos o problema de que
      grande parte dos idosos não conseguem utilizar ou instalar
      apps sem a ajuda de familiares, como netos e filhos.
      Para resolver esse problema, que tira a independência do
      grupo, teremos um aplicativo, que identificará o app
      sendo usado no momento e fará tutoriais de como atingir
      cada funcionalidade, tudo isso de forma objetiva e
      intuitiva, tudo para facilitar a compreensão.`,
  video: 'https://www.youtube.com/embed/2_mPCaNDSi4',
  image: 'sine.png',
  achievements: [
    program,
    researchPlan,
    development,
    interfacePrototypes,
    nationalFairFinalist(['Febrat 2017', 'Mostractc 2017']),
  ],
};
