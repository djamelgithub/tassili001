import React, { useState } from 'react';
import { postDataAPI } from '../../utils/fetchData';
import { useSelector } from 'react-redux';
//import { v4 as uuidv4 } from 'uuid'; // Importar la función v4 de uuid para generar un UUID

const Confirmacioncorreo = () => {
    const { auth } = useSelector((state) => state);
    const [correoDestino, setCorreoDestino] = useState('');
    const [loading, setLoading] = useState(false);

    const enviarCorreoConfirmacion = async () => {
        try {
            setLoading(true);
            // Generar un token UUID único
          //  const token = uuidv4();

            // Enviar solicitud para enviar correo electrónico de confirmación
            const respuesta = await postDataAPI('enviarcorreoconfirmacion', {
                correoDestino: correoDestino, // Usar el valor del campo de entrada
              //  token: token, // Incluir el token UUID en la solicitud
            }, auth.token);

            if (respuesta.ok) {
                alert('Correo electrónico de confirmación enviado correctamente. Por favor, verifica tu correo electrónico.');
            } else {
                 
                alert('Hubo un error al enviar el correo electrónico de confirmación. Por favor, inténtalo de nuevo más tarde.');
            }
        } catch (error) {
             
            alert('Hubo un error al enviar el correo electrónico de confirmación. Por favor, inténtalo de nuevo más tarde.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <input
                type="email"
                placeholder="Correo electrónico de destino"
                value={correoDestino}
                onChange={(e) => setCorreoDestino(e.target.value)}
            />

            <button onClick={enviarCorreoConfirmacion} disabled={loading}>
                {loading ? 'Enviando...' : 'Enviar Correo de Confirmación'}
            </button>
        </div>
    );
};

export default Confirmacioncorreo;
