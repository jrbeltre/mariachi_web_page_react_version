import logo from './logo.svg';
import './App.css';
import Topbar from './components/topbar';
import {Header} from './components/header';
import Footer from './components/footer';
import AppBody from './components/appBody';
import MainSection from './components/main/main_section';
import Portfolio from './components/galeria/portfolio';
import Contacto from './components/contacto/contacto';



function App() {
  return (
    <div className="App">
      <Topbar/>
      <Header/>
      {/* <AppBody /> */}
      {/* <MainSection/> */}
      {/* <Portfolio/> */}
      {/* <Contacto/> */}
      <Footer/>

    </div>
  );
}

export default App;
