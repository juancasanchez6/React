import React from "react";
import "./Estilos.css";
import moduleStyles from "./Estilos.module.css";

export default function Estilos() {
  let myStyles = {
    borderRadius: "0.5rem",
    margin: "2rem auto",
    maxWidth: "50%",
  };
  return (
    <>
      <section className="estilos">
        <h2>Estilos Css en React</h2>
        <h3 className="bg-react">Estilos en hoja Css externa</h3>
        <h3
          className="bg-react"
          style={{ borderRadius: ".25rem", margin: "1rem" }}
        >
          Estilos Css linea (atributo style)
        </h3>
        <h3 className="bg-react" style={myStyles}>
          Estilos en linea
        </h3>
        <h3 className="bg-react">
            Agregando Normalize con
            <br />
            <code>@import-normalize;</code>
        </h3>
        <h3 className={moduleStyles.error}>Estilos con módulos</h3>
        <h3 className={moduleStyles.success}>Estilos con módulos</h3>
      </section>
    </>
  );
}
