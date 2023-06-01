import { HashRouter, Routes, Route } from 'react-router-dom';

//import Signup from './components/Signup.jsx';
import Navbar from './components/Navbar.jsx';
import Home from './components/Home.jsx';
import Artists from './components/Artists.jsx';
import Albums from './components/Albums.jsx';
import ArtistPage from './components/pages/ArtistPage.jsx';
import AlbumPage from './components/pages/AlbumPage.jsx';
import Login from './components/Login.jsx';
import CreateArtist from './components/content_managment_system/CreateArtist.jsx';
import PageNotFound from './components/pages/PageNotFound.jsx';

function App() {
    return (
        <HashRouter>
            <div className="App">
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/artists" element={<Artists />} />
                    <Route path="/artists/:id" element={<ArtistPage />} />
                    <Route path="/albums" element={<Albums />} />
                    <Route path="/albums/:id" element={<AlbumPage />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/createartist" element={<CreateArtist />} />
                    {/* route for page not found */}
                    <Route path="*" element={<PageNotFound />} />
                </Routes>
            </div>
        </HashRouter>
    );
}

export default App;
