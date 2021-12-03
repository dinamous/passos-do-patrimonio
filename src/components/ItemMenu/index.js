
import React from 'react';
import './style.css';
import arrow from '../../images/arrow-right.png'

import { LocalContext } from '../../providers/Local';

function ItemMenu(props) {
  const { setMenuOpen,setInfoOpen,setOrigem, setLugar,setZoom} = React.useContext(LocalContext);
  
  function MoverMapa(local){
    
    let coord = [local.GPS.lat,local.GPS.long]
    setOrigem(coord)
    setLugar(local)
    setZoom(17)
    setInfoOpen(true)

    if(window.innerWidth < 700){
      setMenuOpen(false)
    }

  }

  return (
    <div className="ItemMenu"
      onClick={()=> MoverMapa(props)}>
     <div className="info">
       <p className="nome">{props.local}</p>
       <p className="endereco"> {props.endereco}</p>
     </div>
      <img src={arrow} alt="seta" />
    </div>
  );
}

export default ItemMenu;
