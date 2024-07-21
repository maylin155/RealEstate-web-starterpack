import Header from './components/Header/Header.jsx';
import Hero from './components/Hero/Hero';
import Companies from './components/Companies/Companies';
import Residencies from './components/Residencies/Residencies';
import Value from './components/Value/Value';
import GetStarted from './components/GetStarted/GetStarted.jsx';
import Footer from './components/Footer/Footer.jsx';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Companies />
      <Residencies/>
      <Value />
      <GetStarted />
      <Footer />
    </div>
  );
}

export default App;
