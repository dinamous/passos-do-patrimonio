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
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ut sodales sem, sed ultricies tortor. Donec iaculis, arcu a tempor condimentum, mauris risus dapibus ex, id porta nulla enim eget eros. Suspendisse interdum leo tempor tellus faucibus, non dignissim neque pretium. Fusce mollis luctus ipsum quis luctus. </p>
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
