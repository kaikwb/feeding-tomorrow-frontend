import "./App.css";
import Header from "./components/Header/Header.jsx";
import {navMenuOptions, userMenuOptions} from "./config/menuOptions.js";
import logo from "./assets/logo/logo-white.svg";
import Footer from "./components/Footer/Footer.jsx";
import {members} from "./config/members.js";
import {socialNetworks} from "./config/socialNetworks.js";
import {address} from "./config/address.js";

export default function App() {
    return (
        <>
            <Header navMenuOptions={navMenuOptions} userMenuOptions={userMenuOptions} logo={logo}/>
            <Footer members={members} siteMap={navMenuOptions} socialNetworks={socialNetworks} address={address}
                    copyrightName="Feeding Tomorrow" copyrightYear="2023"/>
        </>
    );
}
