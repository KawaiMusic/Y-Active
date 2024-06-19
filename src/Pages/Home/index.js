
import Style from "./style.css";
import Imagem from './image.png';
import Logo from './Logo.png';
import Gear from './gear-128.png'
import {Image} from 'react';
import React from 'react';
import Wallet from '../../Compositions/ph_wallet-thin.png';
import pix from '../../Compositions/fa6-brands_pix.png';

function Home(){
  return(
   <div> <header className="Header">
        <img src={Imagem} alt="Imagem header" className="Logo"/>
        <img src={Gear} alt="Imagem header" className="Gear"/>
        
    </header>
    <div className="CardInfoSuperior">
    <div className="Card1">
<h1>Lauro Bianchin</h1>

<span>Token 164597-8</span>
<br/>
<br/>
<span>Saldo total investido</span>
<br/>
<span className="Saldo">R$8.644,50</span>      

    </div><img src={Logo} alt="Logomarca" className="Logo128"/> 
    

   </div>
<br/>
   <div className="CardInfoSuperior">
    <div className="Card1">
<span>Saldo disponível</span>
<br/>
<br/>
<span className="Saldo">R$145,50 <br/>
-exemplo-</span>      

    </div><img src={Wallet} alt="Logomarca" className="wallet"/> 
    

   
   </div>
   <br/>
   <br/>
   <text> Do que precisa?</text>
   <br/>
   <br/>
   <br/>
<div className="ScrollContainer">
    
<div className="Minicard">

<img src={pix} alt="Pix" className="pix"/>
<br/>

<text className="Precisar">Fazer um aporte</text>
</div>

</div>
</div>
    
    
);
};

export default Home;