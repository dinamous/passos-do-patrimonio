import React from "react";
import "./style.css";
import arrow from "../../images/arrow-right.png";
import { LocalContext } from "../../providers/Local";
import Modal from "../Modal";

function Info(props) {
  const { lugar } = React.useContext(LocalContext);
  console.log(lugar.fotos);

  return (
    <div className="Info">
      {/* <div className="seta">
      <img src={arrow} alt="seta" />
    </div> */}
      <div className="conteudo">
        <p className="titulo">{lugar.local}</p>

        {lugar.fotos ?
           lugar.fotos.map((foto) => <Modal foto={foto} />) 
           
           : null}

        <div className="box">
          <p className="tit">História do Local</p>
          <p className="text">{lugar.descricao}</p>
        </div>

        <div className="box">
          <p className="tit">Endereço</p>
          <p className="text">{lugar.endereco}</p>
        </div>
      </div>
    </div>
  );
}

export default Info;
