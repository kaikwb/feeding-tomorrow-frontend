import "./App.css";
import Header from "./components/Header/Header.jsx";
import {navMenuOptions, userMenuOptions} from "./config/menuOptions.js";
import logo from "./assets/logo/logo-white.svg";

export default function App() {
    return (
        <>
            <Header navMenuOptions={navMenuOptions} userMenuOptions={userMenuOptions} logo={logo}/>
        </>
    );
}
