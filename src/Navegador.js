import React, { useState, useEffect } from 'react';


function Navegador () {

    const [data, setData] = useState(new Date());

    // eslint-disable-next-line
    const [showText, setShowText] = useState(true); 

    const dia = data.getDate().toString().padStart(2, '0');
    const mes = data.toLocaleString('default', { month: 'short' });
    const firstThreeLetters = (mes.slice(0, 3)).toUpperCase();
    const hour = data.getHours().toString().padStart(2, '0');
    const minutes = data.getMinutes().toString().padStart(2, '0');


   

    useEffect(() => {
      const tiktok = document.querySelector('.tiktok');
      const makeClock = setInterval(() => {
        if (tiktok.style.animationPlayState === 'running') {
          tiktok.style.animationPlayState = 'paused';
        } else {
          tiktok.style.animationPlayState = 'running';
        }
      }, 500);

      return () => clearInterval(makeClock)
    }, []);


    useEffect(() => {
      const intervalId = setInterval(() => {
        setData(new Date());
      }, 1000);
  
      return () => clearInterval(intervalId);
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
          setShowText(false);
          setTimeout(() => {
            setShowText(true);
          }, 6000);
        }, 6000);
    
        return () => clearInterval(interval);
      }, []);

    const [isNavBarFixed, setIsNavBarFixed] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
          const scrollTop = window.scrollY;
          const threshold = window.innerHeight - 100; // Define o ponto em que a barra de navegação irá diminuir de tamanho e ficar fixa
    
              // Verifica se o scrollTop ultrapassou o threshold e a barra ainda não está fixa
              if (scrollTop > threshold && !isNavBarFixed) {
                setIsNavBarFixed(true);
                console.log(scrollTop)
              } else if (scrollTop <= threshold && isNavBarFixed) {
                // Verifica se o scrollTop está abaixo ou igual ao threshold e a barra já está fixa
                setIsNavBarFixed(false);
                console.log(scrollTop)
              }
          
        };
    
        window.addEventListener('scroll', handleScroll);
    
        // Limpe o evento de scroll ao desmontar o componente
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, [isNavBarFixed]);


      const [isMenuOpen, setIsMenuOpen] = useState(false);
      
        const handleButtonClick = () => {
          setIsMenuOpen(!isMenuOpen);
        };


    return (
        <div className='conteiner'>
                <div className={`navegador ${isNavBarFixed ? 'fixed' : ''}`}>
                    <nav>
                        <div className={`buttonMenu`} onClick={handleButtonClick}><img src='./menu-icon.png' width={'30px'}></img></div>
                        <ul className={`listaMenu ${isMenuOpen ? 'open' : ''}`}>
                          
                            <li><a href='#Inicio'><p>INICIO</p></a>
                            </li>
                            <li><a href='#SobreMim'><p>SOBRE MIM</p></a>
                            </li>
                            <li><a href='#Portfolio'><p>PORTIFÓLIO</p></a></li>
                        </ul> 
                    </nav>
                </div>           
            <div className='nameoclock'>
                <div className='clock'>
                    <img className='tiktok' src="./clockminutescalc-2.png"></img>
                    <p className='data'>{dia}{firstThreeLetters}</p>
                    <p className='hour'>{hour}:{minutes}</p>
                    <p className='saudacao'>Olá, meu nome é</p>
                </div>
            </div>
                
        </div>
    )

}

export default Navegador;