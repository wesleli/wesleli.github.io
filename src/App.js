import './normalize.css';
import './App.css';
import Letreiro from './Letreiro';
import Footer from './Footer';
import Navegador from './Navegador';
import ConteinerOne from './ConteinerOne';
import ConteinerTwo from './ConteinerTwo';
import ConteinerThree from './ConteinerThree';


function App () {
  const blackline = {
    height: '100%',
    width: '97%',
    borderRight: '8px solid #030303',
    position: 'fixed',
  };

  return (
   
      <div className='corpo'>
        
          <div style={blackline}></div>  
          <Navegador></Navegador>
          <div style={{zIndex: '0'}}>
          <ConteinerOne></ConteinerOne>
          <ConteinerTwo></ConteinerTwo>
          <ConteinerThree></ConteinerThree>
          </div>
          <Footer></Footer>
          <Letreiro></Letreiro> 
          
      </div>
  );
};



export default App;
