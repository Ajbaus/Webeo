import axios from "axios";
import getSala from "./getSala";
import {nombreSala, codigoSala, jugadores} from '../components/FormSalas';

export const SERVER_URL = process.env.REACT_APP_SERVER_URL;

const newSala = async (event) => {
    let body;
    const url = `${SERVER_URL}/salas`;
    const target = event.target.id;

    body = {
        name: nombreSala,
        code: codigoSala,
        player1: jugadores.jug1,
        player2: jugadores.jug2,
        player3: jugadores.jug3,
        player4: jugadores.jug4
    };
    await axios
    .post(url, body)
    .then(() => {
      getSala(nombreSala, codigoSala);
    })
    .catch((error) =>
      alert(`[${error.response.status}] ${error.response.data}`)
    );
};

export default newSala;