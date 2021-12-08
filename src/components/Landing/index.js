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
          <p>A criação do web aplicativo Passos do Patrimnônio contribuirá para o ensino da História sobre os patrimônios históricos tombados na cidade de Passos, propiciando aos educandos, novas fontes de conhecimento e a consecução de aulas mais abrangentes.</p>
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
