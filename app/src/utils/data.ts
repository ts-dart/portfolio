import { project, tySkillsTools } from '../types/types';

const arrProjects:project[] = [
    {
        name: 'TTunes',
        comingSoon: false,
        repLink: 'https://github.com/ts-dart/TTunes',
        deployLink: 'https://t-tunes.vercel.app/',
        technologies: ['React', 'JavaScript', 'React Router Dom'],
        description: 'reproduza o preview de suas musicas favoritas',
        imageThumbUrl: 'https://raw.githubusercontent.com/ts-dart/portfolio/main/app/public/images/Captura%20de%20tela%20de%202023-02-20%2019-38-29.png',
    },
    {
        name: 'TTrivia',
        comingSoon: false,
        repLink: 'https://github.com/ts-dart/frontend-app-trivia',
        deployLink: 'https://app-trivia.vercel.app/',
        technologies: ['React', 'TypeScript', 'React Router Dom'],
        description: 'faça o maximo de pontos que puder',
        imageThumbUrl: 'https://raw.githubusercontent.com/ts-dart/portfolio/main/app/public/images/Captura%20de%20tela%20de%202023-02-20%2019-41-14.png',
    },
    {
        name: 'SolarSystem',
        comingSoon: true,
        repLink: 'https://github.com/ts-dart/solar-system',
        deployLink: 'https://solar-system-alpha.vercel.app/',
        technologies: ['JavaScript', 'React', 'CSS', 'API Request'],
        description: 'aprenda sobre o sistema solar',
        imageThumbUrl: 'data:image/jpeg;base64,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',
    }
    /* {
        name: 'TFutebol',
        repLink: 'https://github.com/ts-dart/trybe-futebol-clube',
        deployLink: '',
        technologies: ['TypeScript', 'Express', 'Sequelize'],
        description: 'veja classificação de times, jogos e mais "dados simulados"',
        imageThumbUrl: 'https://raw.githubusercontent.com/ts-dart/portfolio/main/app/public/images/Captura%20de%20tela%20de%202023-02-21%2000-23-37.png',
    } */
];

const skillsTools:tySkillsTools[] = [
    {
        name: 'JavaScript',
        urlImg: 'https://skillicons.dev/icons?i=js&theme=dark'
    },
    {
        name: 'GIT',
        urlImg: 'https://skillicons.dev/icons?i=git&theme=dark'
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
        name: 'TypeScript',
        urlImg: 'https://skillicons.dev/icons?i=ts&theme=dark'
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
