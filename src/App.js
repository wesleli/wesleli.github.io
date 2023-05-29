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
  const blackline = {
    right: '0',
    borderRight: '8px solid #030303',
    position: 'fixed',
    height: '100%',
    marginRight: '3%'
  };

  return (
   
      <div className='corpo conteiner'>
        
          <div style={blackline}></div>  
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
