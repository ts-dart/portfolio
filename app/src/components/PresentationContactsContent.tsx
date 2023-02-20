import '../styles/TextImgContent.css';
import genPopup from '../utils/popupEmail';

export default function TextImgContent() {
    const emailsPopup = ():void => {
        genPopup();
    }

    return(
        <div id='mainContent'>
            <div id='TextContent'>
                <div id='salutation'>
                    <h2>Olá 👋, meu nome é</h2>
                    <h1 id='name-text-content'>Thiago Henrique</h1>
                    <h2>sou Desenvolvedor Web Full-stack</h2>
                </div>
                <img src='images/undraw_coding_re_iv62.svg'/>
            </div>
            <div id='contactsContent'>
                <h2>Você pode me encontrar em :</h2>
                <span>
                    <a href="https://github.com/ts-dart" target="_blank" rel="noreferrer">GitHub</a>
                    <a href="https://www.linkedin.com/in/thiago-henrique-da-silva-souza-634162127/" target="_blank" rel="noreferrer">Linkedin</a>
                    <button onClick={()=>emailsPopup()}>Email</button>
                </span>
            </div>
        </div>
    );
}
