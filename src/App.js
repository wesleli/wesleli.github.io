import './normalize.css';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Letreiro from './Letreiro';
import Footer from './Footer';
import Navegador from './Navegador';
import ConteinerOne from './ConteinerOne';
import ConteinerTwo from './ConteinerTwo';
import ConteinerThree from './ConteinerThree';


function App () {

  return (
   
      <div className='corpo conteiner'>
          
          <Navegador></Navegador>
          <div>
          <Letreiro></Letreiro>
          <ConteinerOne></ConteinerOne>
          <ConteinerTwo></ConteinerTwo>
          <ConteinerThree></ConteinerThree>
          
          </div>
          <Footer></Footer>
          
          
      </div>
  );
};



export default App;
