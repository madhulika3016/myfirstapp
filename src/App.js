import logo from './logo.svg';
import './App.css';
import First, { Four, Third } from './components/First';
import Car, { Bike } from './components/Car';
import ParentComponent from './components/ParentComponent';
import { Garage } from './components/Car2';
import Form from './components/Form';
import Form1 from './components/Form1';
import Layout from './components/Layout';
import { Route,Routes,BrowserRouter } from 'react-router-dom';
import Blogs from './components/Blogs';
import Home from './components/Home';
import Contact from './components/Contact';

function App() {
  return (
  <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;

