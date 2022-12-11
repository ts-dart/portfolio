import '../styles/Header.css';
import { useNavigate } from 'react-router-dom';

export default function Header() {
    const navigate = useNavigate();

    return(
        <header>
            <img src='images/logo.png' alt='imagem contendo uma logo'/>
            <nav>
                <input
                    onClick={() => navigate('/home')}
                    type='button'
                    value='Home'
                />
                <input
                    onClick={() => navigate('/projects')}
                    type='button'
                    value='Projetos'
                />
            </nav>
        </header>
    );
}