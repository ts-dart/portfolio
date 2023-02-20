import Header from '../components/Header';
import PresentationContactsContent from '../components/PresentationContactsContent';
import PreviwProjects from '../components/PreviwProjects';

export default function Home() {
    return(
        <>
            <Header/>
            <main>
                <PresentationContactsContent/>
                <PreviwProjects/>
            </main>
        </>
    );
}