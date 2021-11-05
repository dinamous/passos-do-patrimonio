
import './style.css';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

function Mapa() {
  return ( 
     <MapContainer center={[-20.7204, -46.6101]} zoom={14} scrollWheelZoom={true}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[-20.7204, -46.6101]}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
  );
}

export default Mapa;
