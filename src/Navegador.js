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

    const [width, setWidth] = useState(0);

   

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
        const handleResize = () => {
        const screenWidth = window.innerWidth;
        const percentageWidth = screenWidth * 0.10;
        const pixelWidth = 360; // exemplo de valor em pixels
        const totalWidth = percentageWidth + pixelWidth;
        setWidth(totalWidth);
      };
  
      handleResize();
  
      window.addEventListener('resize', handleResize);
  
      return () => {
        window.removeEventListener('resize', handleResize);
      };
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
          const scrollTop = window.pageYOffset;
          const threshold = 100; // Define o ponto em que a barra de navegação irá diminuir de tamanho e ficar fixa
    
          // Verifica se o scrollTop ultrapassou o threshold e atualiza o estado para fixar a barra de navegação
          setIsNavBarFixed(scrollTop > threshold);
        };
    
        window.addEventListener('scroll', handleScroll);
    
        // Limpe o evento de scroll ao desmontar o componente
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);

    return (
        <div className='conteiner'>
                <div className={`navegador ${isNavBarFixed ? 'fixed' : ''}`}>
                    <div style={{marginLeft: width}}>
                        <ul>
                            <li><a href='#Inicio'><p>INICIO</p></a>
                            </li>
                            <li><a href='#SobreMim'><p>SOBRE MIM</p></a>
                            </li>
                            <li><a href='./'><p>PORTIFÓLIO</p></a>
                              <ul>
                                <li><a href='#'>Web</a></li>
                                <li><a href='#'>Desenhos</a></li>
                                <li><a href='#'>Pintura</a></li>
                                <li><a href='#'>Fotografia</a></li>
                              </ul>
                            </li>
                        </ul>
                    </div>
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