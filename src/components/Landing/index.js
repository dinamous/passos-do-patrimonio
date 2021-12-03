import React from "react";
import "./style.css";
import arrow from "../../images/arrow-white.png";
import logo from "../../images/Group 3.png";
import nomeapp from "../../images/PASSOS DO PATRIMÔNIO.png";
import hero from "../../images/hero-img.png";

import { LocalContext } from "../../providers/Local";
import { Link } from "react-router-dom";

function ItemMenu(props) {
  return (
    <div className="Landing">
      <div className="logo">
        <img src={logo} alt="Logo Passos do Patrimônio" />
      </div>
      <div className="landing-main">
        <div className="left">
          <img src={nomeapp} alt="Passos do patrimônio" />
          <p>A aplicação Passos do Patrimônio, foi desenvolvida com o propósito de possibilitar a divulgação dos locais e evento que foram tombados na Cidade de Passos - MG. A fim de promover o conhecimento e a história destes locais como um informativo para a população.</p>
          <Link to="/app">ACESSAR PLATAFORMA <img src={arrow} alt="" /></Link>
        </div>
        <div className="right">
          <img src={hero} alt="Ilustração do app" />
        </div>
      </div>
    </div>
  );
}

export default ItemMenu;
