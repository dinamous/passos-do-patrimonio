import React from "react";
import "./style.css";
import close from "../../images/x-circle.png";
import { LocalContext } from "../../providers/Local";
import Modal from "../Modal";

function Info(props) {
  const { lugar,infoOpen, setInfoOpen } = React.useContext(LocalContext);

  function fechaInfo(){
    setInfoOpen(!infoOpen);
  }

  return (
    <div className={infoOpen ? "Info" : "Info Info-esconde"}>
      
      <div className="conteudo">
      <div className="close" onClick={()=> fechaInfo()}>
        <img src={close} alt="fechar informações" />
      </div>
        <p className="titulo">{lugar.local}</p>

        {lugar.fotos ? (
          <div className="fotos">
            {lugar.fotos.map((foto) => (
              <Modal foto={foto} key={foto}/>
            ))}
          </div>
        ) : null}

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
