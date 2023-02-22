import { skillsTools } from '../utils/data';
import { tySkillsTools } from '../types/types';
import '../styles/SkillsContent.css';

export default function SkillsContent() {
    return(
        <div id='skillsContent'>
            <h1 id='textSkillsContent'>Skills e ferramentas</h1>
            <div id='divImgsSkillsContent'>
                {skillsTools.map((obj:tySkillsTools, index:number) => (
                    <div className='divImgSkillTool' key={index}>
                        <img src={obj.urlImg} alt='imagem logo' />
                        <p>{obj.name}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
