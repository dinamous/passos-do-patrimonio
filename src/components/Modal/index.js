import React, { useState } from "react";
import "./style.css";

import { LocalContext } from "../../providers/Local";

function Modal(props) {
  const { setOrigem, setLugar, setZoom } = React.useContext(LocalContext);
  const [modal, setModal] = useState(false);

  function abreModal() {
    setModal(!modal);
  }

  console.log(props.foto);

  return (
    <>
      <div className="modal-img" onClick={abreModal}>
        <img src={props.foto} alt="" />
      </div>

      {modal ? (
        <div className="modal">
          <div className="overlay" onClick={abreModal}></div>
          <div className="modal-content">
            <img src={props.foto} alt="" />
          </div>
        </div>
      ) : null}
    </>
  );
}

export default Modal;
