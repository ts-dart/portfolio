import { arrProjects } from '../utils/data';
import { project } from '../types/types';
import '../styles/PreviwProjects.css';

export default function PreviwProjects() {
    return (
        <div id="previwProjectsContainer">
            <div id='previwProjectsCabecalho'>
                <img id='rowImg' src='data:image/svg+xml;charset=utf-8,%3Csvg%20width%3D%22580%22%20height%3D%2220%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%20%20%3Crect%20x%3D%220%22%20y%3D%220%22%20width%3D%22580%22%20height%3D%2220%22%20rx%3D%2210%22%20ry%3D%2210%22%20fill%3D%22%232F72BC%22%3E%3C%2Frect%3E%0A%3C%2Fsvg%3E' alt='' />
                <h1>Aqui estão alguns dos meus projetos favoritos.</h1>
            </div>
            <div id='projects-content'>
                {arrProjects.map((project:project, index:number) => (
                    <div className='previwCardProject' key={index}>
                        <div id='divImage'>
                            <img src={project.imageThumbUrl} alt="" />
                        </div>
                        <h1>{project.name}</h1>
                        <p>{project.description}</p>
                        <div id='divTechnologiesTexts'>
                            {project.technologies.map((technologie) => <p>{technologie}</p>)}
                        </div>
                        <div id='buttonsInCardPreviwProjects'>
                            <a href={project.repLink} target='_blank' rel="noreferrer">
                                <button 
                                disabled={project.comingSoon} 
                                className={project.comingSoon ? 'btnDisabled' : 'btnInCardPreviwProjects'}
                                >
                                    Acessar repositorio
                                </button>
                            </a>
                            {project.deployLink.length > 0 
                                ? (
                                <a href={project.deployLink} target='_blank' rel="noreferrer">
                                    <button
                                    disabled={project.comingSoon}
                                    className={project.comingSoon ? 'btnDisabled' : 'btnInCardPreviwProjects'}
                                    >
                                        Acessar aplicação
                                    </button>
                                </a>)
                                : null}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
