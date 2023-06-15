import ApiSection from './ApiSection.jsx';
import FeaturedAlbums from './FeaturedAlbums.jsx';
import FeaturedArtists from './FeaturedArtists.jsx';
import Footer from './Footer.jsx';
import Header from './Header.jsx';
import Navbar from './Navbar.jsx';

const Home = () => {
    return (
        <div className="App">
            <main class="w-full mt-20">
                {/* <section>
                    <ApiSection />
                </section> */}
                <section>
                    <FeaturedArtists />
                </section>
                <section>
                    <FeaturedAlbums />
                </section>
            </main>
            <Footer />
            <p>&copy; 2023 Famous. All Rights Reserved.</p>
        </div>
    );
};
export default Home;
