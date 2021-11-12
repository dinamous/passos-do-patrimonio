import "./style.css";
import LogoMenor from "../../images/Logo Menor.png";
import ItemMenu from "../ItemMenu";
import locais from "../../dados.json";

import React from "react";

function SideMenu() {

  return (
    <div className="SideMenu">
      <img src={LogoMenor} alt="Logo Passos do Patrimônio" />

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
    </div>
  );
}

export default SideMenu;
