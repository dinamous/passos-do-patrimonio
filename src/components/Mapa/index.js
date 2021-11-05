
import './style.css';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import locais from '../../dados.json'
import marker from '../../images/marker.svg'
import L from 'leaflet';

function Mapa() {
  function GetIcon(_iconSize ) {
    return L.icon({
      iconUrl: marker,
      iconSize: [45,75],
    });
  }
 
  return ( 
     <MapContainer center={[-20.7204, -46.6101]} zoom={14} scrollWheelZoom={true}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

          {locais.map(local => (
             <Marker  key={local.id} position={[local.GPS.lat, local.GPS.long]} icon={GetIcon(30)}>
             <Popup>
              {local.local}
             </Popup>
           </Marker>
          ))}

       
      </MapContainer>
  );
}

export default Mapa;
