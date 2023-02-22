import Header from '../components/Header';
import PresentationContactsContent from '../components/PresentationContactsContent';
import PreviwProjects from '../components/PreviwProjects';
import SkillsContent from '../components/SkillsContent';

export default function Home() {
    return(
        <>
            <Header/>
            <main>
                <PresentationContactsContent/>
                <PreviwProjects/>
                <SkillsContent/>
            </main>
        </>
    );
}