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
      <div className='centrar_imagen white'>
        <img className='imagen_logo' src="./imgs/nuevo_icono.png"/>
      </div>
      <main className='white'>
        <About />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
