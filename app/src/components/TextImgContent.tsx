import '../styles/TextImgContent.css';

export default function TextImgContent() {
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
                    <button>GitHub</button>
                    <button>Linkedin</button>
                    <button>Email</button>
                </span>
            </div>
        </div>
    );
}
