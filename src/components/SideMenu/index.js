import "./style.css";
import LogoMenor from "../../images/Logo Menor.png";
import ItemMenu from "../ItemMenu";
import locais from "../../dados.json";
import arrow from '../../images/arrow-white.png'

import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { LocalContext } from "../../providers/Local";

function SideMenu() {

  const { setInfoOpen,menuOpen, setMenuOpen} = React.useContext(LocalContext);

  function AtivaMenu(){
    setMenuOpen(!menuOpen);

    if(window.innerWidth < 700){
      setInfoOpen(false)
    }
  }

  return (
    <div className={menuOpen ? "SideMenu" : "SideMenu SideMenu-esconde"}>
      <Link to = "/" >
      <img src={LogoMenor} alt="Logo Passos do Patrimônio" />
      </Link>

      <p id="titulo">Patrimônios Tombados</p>

      <div className="scroll">
        {locais.map((local) => (
          <ItemMenu
            key={local.id}
            id={local.id}
            local={local.local}
            endereco={local.endereco}
            GPS={local.GPS}
            fotos={local.fotos}
            descricao={local.descricao}

          />
        ))}
      </div>
      <div className="seta " onClick={()=> AtivaMenu()}>
        <img src={arrow} alt="" className={menuOpen ? "rotaciona" : null}/>
      </div>
    </div>
  );
}

export default SideMenu;
