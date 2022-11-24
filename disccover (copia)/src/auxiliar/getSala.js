import axios from "axios";

export const SERVER_URL = process.env.REACT_APP_SERVER_URL;
const salaCodigo = 'XDZ123';
const getSala = async () => {
    const url = `${SERVER_URL}/salas/${salaCodigo}`;
    await axios.get(url).then((response) => {
        const sala = response.data["sala"];
        const player1 = response.data["player1"];
        const player2 = response.data["player2"];
        const player3 = response.data["player3"];
        const player4 = response.data["player4"];
        const match = response.data["match"];
    }).catch((error)=>alert(`[${error.response.status}] ${error.response.data}`));
};

export default getSala;