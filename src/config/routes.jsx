import Mission from "../pages/Mission/Mission.jsx";
import Challenge from "../pages/Challenge/Challenge.jsx";

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
