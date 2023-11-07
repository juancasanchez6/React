import logo from "./logo.svg";
import Componente from "./componentes/Componente";
import Propiedades from "./componentes/Propiedades";
import Estado from "./componentes/Estado";
import RenderizadoCondicional from "./componentes/RenderizadoCondicional";
import RenderizadoElementos from "./componentes/RenderizadoElementos";
import { EventosES6, EventosES7, MasSobreEventos } from "./componentes/Eventos";
import ComunicacionComponentes from "./componentes/ComunicacionComponentes";
import CicloVida from "./componentes/CicloVida";
import AjaxApis from "./componentes/AjaxApis";
import ContadorHooks from "./componentes/ContadorHooks";
import ScrollHooks from "./componentes/ScrollHooks";
import RelojHooks from "./componentes/RelojHooks";
import AjaxHooks from "./componentes/AjaxHooks";
import HooksPersonalizados from "./componentes/HooksPersonalizados";
import "./App.css";

function App() {
  return (
    <>
      <div className="App">
        <header className="App-header">
          <section>
            <img src={logo} className="App-logo" alt="logo" />

            <p>
              Edit <code>src/App.js</code> and save to reload.
            </p>

            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>
          </section>
          <section>
            <Componente msg="Hola soy un componente funcional expresado desde una prop " />
            <hr />
            <Propiedades
              cadena="Esto es una cadena de texto"
              numero={19}
              booleano={true}
              array={[1, 2, 4]}
              objeto={{
                nombre: "Juan Carlos",
                correo: "Juanca.cpc16@gmail.com",
              }}
              function={(num) => num * num}
              elementoReact={<i>Esto es un elemento react</i>}
              componenteReact={
                <Componente msg="Soy un componente pasado como prop" />
              }
            />
            <hr />
            <Estado />
            <hr />
            <RenderizadoCondicional />
            <hr />
            <RenderizadoElementos />
            <hr />
            <EventosES6 />
            <hr />
            <EventosES7 />
            <hr />
            <MasSobreEventos />
            <hr />
            <ComunicacionComponentes />
            <hr />
            <CicloVida />
            <hr />
            <AjaxApis />
            <hr />
            <ContadorHooks titulo= "Seguidores" />
            <hr />
            <ScrollHooks />
            <hr />
            <RelojHooks />
            <hr />
            <AjaxHooks />
            <hr />
            <HooksPersonalizados />
            <br />
            <br />
            <br />
          </section>
        </header>
      </div>
    </>
  );
}

export default App;
