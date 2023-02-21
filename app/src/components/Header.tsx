import '../styles/Header.css';
import { useNavigate } from 'react-router-dom';

export default function Header() {
    const navigate = useNavigate();
    const tag1 = '<';
    const tag2 = '/>';

    return(
        <header>
            <span id='logo'>
                <h1 className='tag'>{tag1}</h1>
                <h1 id='logo-name'>TiagoHenrique</h1>
                <h1 className='tag'>{tag2}</h1>
            </span>
            <nav>
                <input
                    onClick={() => navigate('/home')}
                    type='button'
                    value='Home'
                />
                <a href="#previwProjectsContainer">
                    <input
                        /* onClick={() => navigate('/projects')} */
                        type='button'
                        value='Projetos'
                    />
                </a>
            </nav>
        </header>
    );
}