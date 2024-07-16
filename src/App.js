import 'bootstrap/dist/css/bootstrap.min.css'; 
import 'bootstrap/dist/js/bootstrap.bundle.min';

// imprto i componenti NAVBAR, SIDEBAR, FOOTER
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';

//importo le varie pagine
import AboutScreen from './screen/AboutScreen';
import HomeScreen from './screen/HomeScreen';
import ErrorScreen from './screen/ErrorScreen';
import SingleGameScreen from './screen/SingleGameScreen';
import ContactScreen from './screen/ContactScreen';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import { useGlobalContext } from './context';

function App() {

  return (
    <Router className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={<HomeScreen/>}/>
        <Route path="/about" element={<AboutScreen/>}/>
        <Route path="/contattaci" element={<ContactScreen/>}/>
        <Route path="/game/:id" element={<SingleGameScreen/>}/>
        <Route path="*" element={<ErrorScreen/>}/>
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
