
import Style from "./style.css";
import React, { useState, Link } from 'react';


import Logo from './Logo.png';

function Login(){
    const [Email, setEmail] = useState('');
    const [Senha, setSenha] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        //Enviar formulário
    }

  return(
    <div className="divSplash">
  <img src={Logo} alt="YawActiveLogo" className="logo" />

        <form className="form">
       <label>
            Email
        </label>
        <br/>
        <input className="Input" onChange={(e) => setEmail(e.target.value)}
        placeholder="Digite seu Email..." 
        type="text"
        value={Email}
        
        />


        <br/>
        <label>
            Senha
        </label>
        
        <br/>
        <input className="Input" onChange={(e) => setSenha(e.target.value)} 
        placeholder="Digite sua senha..." 
        type="password"
        value={Senha}
        
        />
        <br/>
      
        <button className="BTNLOGAR">
            Entrar
        </button>
        <p className="Texto">Esqueci minha senha</p>
        
        </form>
        
    </div>
    
);
};

export default Login;