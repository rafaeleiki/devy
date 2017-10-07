import {Project} from '../../project';
import {
  development,
  nationalFairFinalist,
  program,
  researchPlan
} from '../achievements';

export const sine: Project = {
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
};
