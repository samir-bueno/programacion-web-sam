import {Header} from './components/Header'
import {About} from './components/About'
import {Projects} from './components/Projects'
import {Contact} from './components/Contact'
import {Footer} from './components/Footer'
import './index.css'

const App = () => {
  return (
    <div className="App">
      <Header />
      <div className='centrar_imagen'>
        <img className='imagen' src="./imgs/nuevo_icono.png"/>
      </div>
      <main>
        <About />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
