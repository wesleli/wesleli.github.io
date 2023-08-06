import React from 'react';

function ConteinerOne () {

    return (
        <div id="Inicio" style={{display: 'block', height:'100vh'}}>
        <div style={{display: 'flex', height:'90%', width: '93%', position:'absolute', alignItems:'end', justifyContent:'end'}}>
            <div className='circular-inicial'>
                <div className='circular-segundo'>   
                </div>
                <div><span className='texto-01'>Artista Visual,</span><span className='texto-02'>
                 designer</span><span className='texto-03'> e programador.</span>
                </div>
            </div>
        </div>
        </div>
    )
}




export default ConteinerOne;