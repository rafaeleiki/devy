import {Project} from '../../project';
import {development, researchPlan, support, interfacePrototypes, nationalFairFinalist } from '../achievements';

export const isopin: Project = {
  id: 3,
  title: 'ISOPIN',
  team: 'Gabriel, Guilherme, Júlia - PD16 (matutino)',
  image: 'isopin.png',
  advisor: 'Patrícia Gagliardo de Campos',
  mentors: ['Marcelo Mendes Brandão'],
  shortDescription: `Sistema de busca e visualização gráfica de interações 
	proteicas entre espécies vegetais.`,
  description: `Sistema de busca e visualização gráfica de interações 
	proteicas entre espécies vegetais. Procura, através de uma ferramenta que
	facilita o trabalho dos pesquisadores da área de biologia molecular, 
	diminuir o custo de produção de alimentos transgênicos.`,
  video: 'https://www.youtube.com/embed/mdhpdorGUTQ',
  achievements: [
    researchPlan,
    support,
    development,
    interfacePrototypes,
    nationalFairFinalist(['Mostractc 2017'])
  ],
};
