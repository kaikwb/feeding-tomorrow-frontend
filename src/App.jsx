import "./App.css";
import Header from "./components/Header/Header.jsx";
import {pages, userMenuOptions} from "./config/routes.jsx";
import logo from "./assets/logo/logo-white.svg";
import Footer from "./components/Footer/Footer.jsx";
import {members} from "./config/members.js";
import {socialNetworks} from "./config/socialNetworks.js";
import {address} from "./config/address.js";
import {createBrowserRouter, RouterProvider} from "react-router-dom";

export default function App() {
    const router = createBrowserRouter(pages.map((page) => {
        return {path: page.link, element: page.element};
    }));

    return (
        <>
            <Header navMenuOptions={pages} userMenuOptions={userMenuOptions} logo={logo}/>
            <RouterProvider router={router}/>
            <Footer members={members} siteMap={pages} socialNetworks={socialNetworks} address={address}
                    copyrightName="Feeding Tomorrow" copyrightYear="2023"/>
        </>
    );
}
