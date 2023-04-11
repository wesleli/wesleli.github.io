import React, { useState, useEffect, useRef } from "react";


  

function Letreiro() {
      const elementRef = useRef(null);
      const message = "Hello, world!";
      const [position, setPosition] = useState(0);

      const messages = [];
      for (let i = 0; i < 3; i++) {
        messages.push(<p key={i}>{message}</p>);
      }
    
      useEffect(() => {
        const intervalId = setInterval(() => {
          
          const top = elementRef.current.getBoundingClientRect().top;
          const contentHeight = elementRef.current.getBoundingClientRect().height;
            if (top >= contentHeight) {
            setPosition(-top);
                }
          return (setPosition(prevPosition => prevPosition + 10))
        }, 100);
    
        return () => {
          clearInterval(intervalId);
        };
      }, []);
  
    return (
      <div className='letreiro'><div ref={elementRef} style={{ position: 'relative', bottom:`${position}px` }}>
        {messages}
      </div>
      </div>
    ); }

    export default Letreiro;