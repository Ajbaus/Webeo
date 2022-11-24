import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Game from './components/Game';
import Landing from './components/Landing';
import SalaEspera from './components/SalaEspera';
import Login from './components/loginRegister';
import CookieAuthProvider from './components/context/cookieAuth';
import AccountInfo from './components/AccountInfo';
import LandingUser from './components/LandingUser';

function Routing() {
    return (
        <BrowserRouter>
            <CookieAuthProvider>
                <Routes>
                    <Route path={"/"} element={<Landing />}/>
                    <Route path={"/game"} element={<Game />}/>
                    <Route path={"/registro"} element={<Login />}/>
                    <Route path={"/sala-espera"} element={<SalaEspera />}/>
                    <Route path={"/account-info"} element={<AccountInfo />}/>
                    <Route path={"/landing-user"} element={<LandingUser/>}/>
                </Routes>
            </CookieAuthProvider>

        </BrowserRouter>
    )
}

export default Routing;
