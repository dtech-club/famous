import Image from '../page_components/Image.jsx';
import Name from '../page_components/Name.jsx';
import Biography from '../page_components/Biography.jsx';
import Discography from '../page_components/Discography.jsx';
import PersonalInfo from '../page_components/PersonalInfo.jsx';

const ArtistPage = () => {
    return (
            <main>
                <section>
                    <Image />
                </section>
                <section>
                    <Name/>
                </section>
                <section>
                    <Biography />
                </section>
                <section>
                    <PersonalInfo />
                </section>
                <section>
                    <Discography/>
                </section>
            </main>
    );
};

