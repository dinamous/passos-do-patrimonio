import { LocalProvider } from "../../providers/Local";
import Mapa from "../Mapa";
import SideMenu from "../SideMenu";
import "./style.css";

function Main() {
  return (
    <div className="Main">
      <LocalProvider>
        <SideMenu />
        <Mapa />
      </LocalProvider>
    </div>
  );
}

export default Main;
