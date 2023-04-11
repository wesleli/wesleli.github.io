import React from 'react';


function Footer () {


    return (
            <div className='footer'>
                <div className='redessociais'>
                    <ul>
                        <li>                            
                            <a href='./'>
                                <img src="linkedin.png" style={{width: '25px'}}>
                                </img>             
                            </a></li>
                        <li>
                            <a href='./'>
                                <img src="iconins.png" style={{width: '25px'}}>
                                </img>             
                            </a>
                        </li>
                        <li>                            
                            <a href='./'>
                                <img src="github.png" style={{width: '25px'}}>
                                </img>             
                            </a>
                        </li>
                        <li>                            
                            <a href='./'>
                                <img src="o-email.png" style={{width: '25px'}}>
                                </img>             
                            </a>
                        </li>
                        <li>                            
                            <a href='./'>
                                <img src="whatsapp.png" style={{width: '25px'}}>
                                </img>             
                            </a>
                        </li>
                        </ul>
                </div>
            </div>

    );
}

export default Footer;