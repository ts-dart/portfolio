import '../styles/TextImgContent.css';
import genPopup from '../utils/popupEmail';

export default function TextImgContent() {
    const emailsPopup = () => {
        /* window.open (
            'popup.html',
            'pagina',
            "width=350, height=255, top=100, left=110, scrollbars=no "
        ); */
        genPopup();
    }

    return(
        <div id='mainContent'>
            <div id='TextContent'>
                <h1>
                    Olá 👋.<br/>
                    Me chamo <span>Thiago Henrique</span><br/>
                    Desenvolvedor <span>Web Full-stack</span>
                </h1>
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
