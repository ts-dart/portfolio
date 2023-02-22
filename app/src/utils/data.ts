import { project, tySkillsTools } from '../types/types';

const arrProjects:project[] = [
    {
        name: 'TTunes',
        repLink: 'https://github.com/ts-dart/TTunes',
        deployLink: 'https://t-tunes.vercel.app/',
        technologies: ['React', 'JavaScript', 'React Router Dom'],
        description: 'reproduza o preview de suas musicas favoritas',
        imageThumbUrl: 'https://raw.githubusercontent.com/ts-dart/portfolio/main/app/public/images/Captura%20de%20tela%20de%202023-02-20%2019-38-29.png',
    },
    {
        name: 'TTrivia',
        repLink: 'https://github.com/ts-dart/frontend-app-trivia',
        deployLink: 'https://app-trivia.vercel.app/',
        technologies: ['React', 'TypeScript', 'React Router Dom'],
        description: 'faça o maximo de pontos que puder',
        imageThumbUrl: 'https://raw.githubusercontent.com/ts-dart/portfolio/main/app/public/images/Captura%20de%20tela%20de%202023-02-20%2019-41-14.png',
    },
    {
        name: 'TFutebol',
        repLink: 'https://github.com/ts-dart/trybe-futebol-clube',
        deployLink: '',
        technologies: ['TypeScript', 'Express', 'Sequelize'],
        description: 'veja classificação de times, jogos e mais "dados simulados"',
        imageThumbUrl: 'https://raw.githubusercontent.com/ts-dart/portfolio/main/app/public/images/Captura%20de%20tela%20de%202023-02-21%2000-23-37.png',
    }
];

const skillsTools:tySkillsTools[] = [
    {
        name: 'JavaScript',
        urlImg: 'https://skillicons.dev/icons?i=js&theme=dark'
    },
    {
        name: 'TypeScript',
        urlImg: 'https://skillicons.dev/icons?i=ts&theme=dark'
    },
    {
        name: 'Python',
        urlImg: 'https://skillicons.dev/icons?i=python&theme=dark'
    },
    {
        name: 'React',
        urlImg: 'https://skillicons.dev/icons?i=react&theme=dark'
    },
    {
        name: 'HTML',
        urlImg: 'https://skillicons.dev/icons?i=html&theme=dark'
    },
    {
        name: 'CSS',
        urlImg: 'https://skillicons.dev/icons?i=css&theme=dark'
    },
    {
        name: 'GIT',
        urlImg: 'https://skillicons.dev/icons?i=git&theme=dark'
    },
    {
        name: 'Docker',
        urlImg: 'https://skillicons.dev/icons?i=docker&theme=dark'
    },
    {
        name: 'Express',
        urlImg: 'https://skillicons.dev/icons?i=express&theme=dark'
    },
    {
        name: 'Sequelize',
        urlImg: 'https://skillicons.dev/icons?i=sequelize&theme=dark'
    },
    {
        name: 'VS Code',
        urlImg: 'https://skillicons.dev/icons?i=vscode&theme=dark'
    },
    {
        name: 'GitHub',
        urlImg: 'https://skillicons.dev/icons?i=github&theme=dark'
    },
];

export {
    arrProjects,
    skillsTools,
}
