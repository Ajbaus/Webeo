import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Cookies from "js-cookie";
export const SERVER_URL = process.env.REACT_APP_SERVER_URL;

export default function Logout() {
    console.log("logout")
    const navigate = useNavigate();
    const userLogout = async (e) => {
        const url = `${SERVER_URL}/logout`;
        const session = Cookies.session
        e.preventDefault();
        console.log(session)
        const response = await axios.post(url,  session);
        if (!response.data.error) {
           
            navigate("/");

        } else {
            console.log(response.data.error);  
        }
    }
    userLogout()
}
