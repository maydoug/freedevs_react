import React, { useEffect, useState } from 'react'
import './App.css';
//import { api } from './api'
// import axios from 'axios' ;

function App() { 
   //useEffect(() => {})

   async function fetchPost(body){
    fetch('https://api-freedevs.herokuapp.com/person', { 
      method:'POST',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify(body),
  })
  .then((response) => response.json())
  .then((data) => alert('Recebemos o seu projeto, entraremos em contato em breve. Obrigado!', data))
  }

   function envForm(e){
      e.preventDefault() 

      const dadosForm = {
        name: document.getElementById('name').value,
        sobrenome: document.getElementById('sobrenome').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        app: document.getElementById('app').value,
        pais: document.getElementById('pais').value,
        descricao: document.getElementById('descricao').value
      }

      //const dados = JSON.stringify(dadosForm);

      //console.log(dadosForm)
      
      fetchPost(dadosForm);


    /* api.post('https://api-freedevs.herokuapp.com/person', { 
      headers: {'Content-Type': 'application/json'},
      method: 'POST',
      data: JSON.stringify(dadosForm),
      responseType: 'json'
    })
    .then((response) => console.log(response))
    .catch((error) => (error))
   */
   }

  return (
    <div className="App">
      <div className="main">
        <div className="center">
          
          <div className="menu">
                <div className="logo">
                 <h1>FreeDevs <spam className="fa-blink">_</spam></h1>
                </div>
                <div className="item-menu">
                <a href="#">LOGIN</a>
               </div>
            </div>
          <div className="form">
            <h3>Encontre um desenvolvedor para seu projeto</h3>
                 <form onSubmit={envForm}>
                   <div className="items-form">
                     <input type="text" id="name" name="name" placeholder="SEU NOME"/>
                     <input type="text" id="sobrenome" name="nome" placeholder="SOBRENOME"/>
                     <input type="text" id="email" name="email" placeholder="DIGITE SEU E-MAIL"/>
                     <input type="text" id="phone" name="phone" placeholder="TELEFONE"/>
                     <select id="app" name="app">
                       <option value="webSite">Web Site</option>
                       <option value="app">Aplicativo</option>
                       <option value="ladingPage">Lading Page</option>
                       <option value="API">API</option>
                       <option value="API">Game</option>
                     </select>
                     <select id="pais" name="pais">
                       <option value="brasil">Brasil</option>
                       <option value="canada">Canada</option>
                       <option value="USA">USA</option>
                     </select>
                     <textarea id="descricao" name="descricao" placeholder="O QUE VAMOS CRIAR?"/>
                     <input type="submit" />
                   </div>
                  </form> 
                  <div className="cadastro">
            <a href="#">é desenvolvedor? cadastre-se!</a>
          </div>
          </div>

          
        
        </div>
      
        <div className="footer"><p>Make with ♡ MR '</p>
        </div>

      </div>
    </div>
  );
}

export default App;
