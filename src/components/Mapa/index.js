import React from "react";
import "./style.css";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import locais from "../../dados.json";
import marker from "../../images/marker.png";
import L from "leaflet";

import { LocalContext } from "../../providers/Local";

function Mapa() {
  const { origem, zoom } = React.useContext(LocalContext);

  console.log(origem);

  function GetIcon(_iconSize) {
    return L.icon({
      iconUrl: marker,
      iconSize: [55, 55],
    });
  }

  function ChangeView({ center, zoom }) {
    const map = useMap();
    map.setView(center, zoom);
    return null;
  }

  return (
    <MapContainer center={origem} zoom={zoom} scrollWheelZoom={true}>
      <ChangeView center={origem} zoom={zoom} />
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {locais.map((local) => (
        <Marker
          key={local.id}
          position={[local.GPS.lat, local.GPS.long]}
          icon={GetIcon(30)}
        >
          <Popup>
            <div className="centro">
              <h3>{local.local}</h3>
              <img src={local.fotos[0]} alt="" style={{ width: "200px" }} />
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}

export default Mapa;
