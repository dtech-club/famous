import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home.jsx";
import Navbar from "./components/Navbar.jsx";
import Artists from "./components/Artists.jsx";
import Albums from "./components/Albums.jsx";
import Login from "./components/Login.jsx";
//import Signup from './components/Signup.jsx';
<<<<<<< HEAD
import CreateArtist from "./components/addingArtistByAdmin/CreateArtist.jsx";
import CreateAlbum from "./components/addingArtistByAdmin/CreateAlbum.jsx";
import CreateTrack from "./components/addingArtistByAdmin/CreateTrack.jsx";
import SearchBar from "./components/SearchBar.jsx";

function App() {
  return (
    <HashRouter>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/search" element={<SearchBar />} />
          <Route path="/" element={<Home />} />
          <Route path="/artists" element={<Artists />} />
          <Route path="/albums" element={<Albums />} />
          <Route path="/login" element={<Login />} />
          <Route path="/createartist" element={<CreateArtist />} />
          <Route path="/createalbum" element={<CreateAlbum />} />
          <Route path="/createtrack" element={<CreateTrack />} />
        </Routes>
      </div>
    </HashRouter>
  );
=======
import CreateArtist from './components/addingArtistByAdmin/CreateArtist.jsx';
import CreateAlbum from './components/addingArtistByAdmin/CreateAlbum.jsx';
import CreateTrack from './components/addingArtistByAdmin/CreateTrack.jsx';
import ArtistPage from '../pages/ArtistPage.jsx'

function App() {
    return (
        <HashRouter>
            <div className="App">
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/artists" element={<Artists />} />
                    <Route path="/artists/:id" element={<ArtistPage/>}/>
                    <Route path="/albums" element={<Albums />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/createartist" element={<CreateArtist />} />
                    <Route path="/createalbum" element={<CreateAlbum />} />
                    <Route path="/createtrack" element={<CreateTrack />} />
                </Routes>
            </div>
        </HashRouter>
    );
>>>>>>> e0a24555de81da62af542b9f5f5284bb4cea629f
}

export default App;
