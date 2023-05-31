import Mission from "../pages/Mission/Mission.jsx";
import Challenge from "../pages/Challenge/Challenge.jsx";
import Sustainability from "../pages/Sustainability/Sustainability.jsx";
import Distribution from "../pages/Distribution/Distribution.jsx";

export const pages = [
    {
        "label": "A missão",
        "link": "/mission",
        "element": <Mission/>
    },
    {
        "label": "O desafio",
        "link": "/challenge",
        "element": <Challenge/>
    },
    {
        "label": "Desenvolvimento sustentável",
        "link": "/sustainability",
        "element": <Sustainability/>
    },
    {
        "label": "Do campo a mesa",
        "link": "/distribution",
        "element": <Distribution/>
    }
];

export const userMenuOptions = [
    {
        "label": "Profile",
        "link": "/profile"
    },
    {
        "label": "Account",
        "link": "/account"
    },
    {
        "label": "Dashboard",
        "link": "/dashboard"
    },
    {
        "label": "Logout",
        "link": "/logout"
    }
];
