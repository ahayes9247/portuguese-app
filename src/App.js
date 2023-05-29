import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './components/Home';
import MobileApps from './components/MobileApps';
import Books from './components/Books';
import Contact from './components/Contact';
import SiteList from './components/SiteList';
import Sitemap from './SiteMap';
import Confirmation from './components/Confirmation';

function App() {
  return (
    <main>
      <section>
      <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} exact />
          </Routes>
          <Routes>
            <Route path="/MobileApps" element={<MobileApps />} exact />
          </Routes>
          <Routes>
            <Route path="/Books" element={<Books />} exact />
          </Routes>
          <Routes>
            <Route path="/Websites" element={<SiteList />} exact />
          </Routes>
          <Routes>
            <Route path="/Contact" element={<Contact />} exact />
          </Routes>
          <Routes>
            <Route path="/Sitemap" element={<Sitemap />} exact />
          </Routes>
          <Routes>
            <Route path="/Confirmation" element={<Confirmation />} exact />
          </Routes>
        </Router>
      </section>
    </main>
  );
}

export default App;
