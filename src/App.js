import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "./App.css";
import chargingTesla from "./teslaData.json";

function App() {
  console.log(chargingTesla);
  return (
    <MapContainer center={[44.5, -89.5]} zoom={5} scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {chargingTesla.map((tesla) => (
        <Marker
          key={tesla.id}
          position={[tesla.gps.latitude, tesla.gps.longitude]}
        ></Marker>
      ))}
    </MapContainer>
  );
}

export default App;
