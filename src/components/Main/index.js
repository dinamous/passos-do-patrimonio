import { LocalProvider } from "../../providers/Local";
import Info from "../Info";
import Mapa from "../Mapa";
import SideMenu from "../SideMenu";
import "./style.css";

function Main() {
  return (
    <div className="Main">
      <LocalProvider>
        <SideMenu />
        <Mapa />
        <Info/>
      </LocalProvider>
    </div>
  );
}

export default Main;
