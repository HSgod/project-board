import { Container } from "react-bootstrap";
import { Routes, Route } from 'react-router-dom';
import Header from './components/views/Header/Header';
import Footer from './components/views/Footer/Footer';
import Home from './components/pages/Home/Home';
import Ad from './components/pages/Ad/Ad';
import AddAd from './components/pages/AddAd/AddAd';
import AdEdit from './components/pages/AdEdit/AdEdit';
import AdRemove from './components/pages/AdRemove/AdRemove';
import Search from './components/pages/Search/Search';
import Login from './components/pages/Login/Login';
import Register from './components/pages/Register/Register';
import NotFound from './components/pages/NotFound/NotFound';

function App() {
  return (
    <div>
      <Container>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ad/:id" element={<Ad />} />
          <Route path="/ad/add" element={<AddAd />} />
          <Route path="/ad/edit/:id" element={<AdEdit />} />
          <Route path="/ad/remove/:id" element={<AdRemove />} />
          <Route path="/search/searchPhrase" element={<Search />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </Container>
    </div>
  );
}

export default App;
