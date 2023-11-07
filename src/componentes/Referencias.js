import React from "react";

export default function Referencias() {
  const handleToggleMenu = (e) => {
    const $menu = document.getElementById("menu");

    if (e.target.textContent === "Menú") {
      e.target.textContent = "Cerrar";
      $menu.style.display = "block";
    } else {
      e.target.textContent = "Menú";
      $menu.style.display = "none";
    }
  };

  return (
    <>
      <h2>Referencias</h2>
      <button id="menu-btn" onClick={handleToggleMenu}>
        Menú
      </button>
      <nav id="menu" style={{ display: "none" }}>
        <a href="#">Seccion 1</a>
        <br />
        <a href="#">Seccion 2</a>
        <br />
        <a href="#">Seccion 3</a>
        <br />
        <a href="#">Seccion 4</a>
        <br />
        <a href="#">Seccion 5</a>
        <br />
      </nav>
    </>
  );
}
