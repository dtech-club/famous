import ApiSection from "./components/ApiSection.jsx";
import FeaturedAlbums from "./components/FeaturedAlbums.jsx";
import FeaturedArtists from "./components/FeaturedArtists.jsx";
import Footer from "./components/Footer.jsx";
import Header from "./components/Header.jsx";
import Navbar from "./components/Navbar.jsx";

function App() {
  return (
    <div className="App">
      <Header />
      <Navbar />

      <main>
        <section>
          <ApiSection />
        </section>
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
}

export default App;
