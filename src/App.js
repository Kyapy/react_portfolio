import logo from './assets/img/logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavigationBar } from "./components/NavigationBar";
import { Banner } from "./components/Banner";
import { Skills } from "./components/Skills";
import { Portfolio } from "./components/Profolio";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <Banner />
      <Skills />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
