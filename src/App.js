import './App.css';

function App() {
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
                 <form>
                   <div className="items-form">
                     <input type="text" placeholder="SEU NOME"/>
                     <input type="text" placeholder="SOBRENOME"/>
                     <input type="text" placeholder="DIGITE SEU E-MAIL"/>
                     <input type="text" placeholder="TELEFONE"/>
                     <select id="typeProject">
                       <option value="webSite">Web Site</option>
                       <option value="app">Aplicativo</option>
                       <option value="ladingPage">Lading Page</option>
                       <option value="API">API</option>
                       <option value="API">Game</option>
                     </select>
                     <select id="pais">
                       <option value="brasil">Brasil</option>
                       <option value="canada">Canada</option>
                       <option value="USA">USA</option>
                     </select>
                     <textarea id="texto" placeholder="O QUE VAMOS CRIAR?" name="projeto"/>
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
