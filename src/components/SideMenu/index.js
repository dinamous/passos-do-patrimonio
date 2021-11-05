import "./style.css";
import LogoMenor from "../../images/Logo Menor.png";
import ItemMenu from "../ItemMenu";
import locais from '../../dados.json'

function SideMenu() {
  return (
    <div className="SideMenu">
      <img src={LogoMenor} alt="Logo Passos do Patrimônio" />

      <p id="titulo">Patrimônios Tombados</p>

      <div className="scroll">
        {locais.map(local => (
          <ItemMenu  key={local.id} local={local.local} endereco={local.endereco} />
        ))}
        
      </div>
    </div>
  );
}

export default SideMenu;
