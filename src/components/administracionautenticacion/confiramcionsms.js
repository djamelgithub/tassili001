 
import React, { useState } from 'react';
//import { postDataAPI } from '../utils/fetchData';
import { useSelector } from 'react-redux';
import { postDataAPI } from '../../utils/fetchData';


const Confirmacionsms= () => {
  const { auth } = useSelector((state) => state);


  const [phoneNumber, setPhoneNumber] = useState('+213658556296');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const accountSid = 'ACa5724c5f271940043056f5637eb5bbfe';
      const authToken = '3f1bbcc254a9dd87d4f0130c8762abaa';
      const body = 'hello djamel';
      const messagingServiceSid = 'MG32afc826a0c88506a1df074ae7a9ceb8';

      const response = await postDataAPI('enviarsms', {
        accountSid,
        authToken: auth.token,
        authToken, // Aquí se incluye el token de autenticación desde auth.token
        body,
        messagingServiceSid,
        to: phoneNumber,
      });



      console.log(response.data); // Manejar la respuesta según sea necesario
    } catch (error) {
      console.error('Error al enviar el mensaje SMS client:', error);
    }
  };


  return (
    <div>
      <h1>Enviar Mensaje SMS</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Número de Teléfono:
          <input
            type="text"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
        </label>
        <button type="submit">Enviar SMS</button>
      </form>
    </div>
  );
}

export default Confirmacionsms