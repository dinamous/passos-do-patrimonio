
import './style.css';
import arrow from '../../images/arrow-right.svg'

function ItemMenu(props) {
  return (
    <div className="ItemMenu">
     <div className="info">
       <p className="nome">{props.local}</p>
       <p className="endereco"> {props.endereco}</p>
     </div>
      <img src={arrow} alt="seta" />
    </div>
  );
}

export default ItemMenu;
