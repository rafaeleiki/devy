import {Project} from '../../project';
import {development, researchPlan, support} from '../achievements';

export const isopin: Project = {
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
};
