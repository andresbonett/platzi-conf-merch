import '../styles/components/Success.css';
import { useContext } from 'react';
import AppContext from '../context/AppContext';
import Map from '../components/Map';

export default function Succsses() {
  const { state } = useContext(AppContext);
  const { buyer } = state;

  return (
    <div className="Succes">
      <div className="Success-content">
        <h2>{`${buyer.name}, Gracias por tu compra`}</h2>
        <span>Tu pedido llegara en 3 dias a tu dirección:</span>
        <div className="Success-map">
          <Map />
        </div>
      </div>
    </div>
  );
}
