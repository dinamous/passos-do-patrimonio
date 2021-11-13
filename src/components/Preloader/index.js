import "./style.css";
import logo from "../../images/Group 3.png";
import logoNome from "../../images/PASSOS DO PATRIMÔNIO.svg";
import { useEffect, useState } from "react";
import passos from "../../images/brasao-rodape.png";

function Preloader() {
  const [visivel, setVisivel] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setVisivel(false);
    }, 2000);
  }, []);

  return (
    <div className={!visivel ? "Preloader fadeOut" : "Preloader"}>
      <img src={logo} alt="Logo da aplicação Passos do Patrimônio" />
      <img src={logoNome} alt="Passos do Patrimônio" />
      {/* <div className="linha">
        <p>por Itamar Machado</p>
        <img src={passos} alt="Brasão da cidade de Passos" />
      </div> */}
    </div>
  );
}

export default Preloader;
