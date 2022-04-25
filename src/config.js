import ComingsoonPage from "./views/comingsoon";
import ContactPage from "./views/contact";
import ErrorPage from "./views/404";
import HomePage from "./views/home";
import InfoPage from "./views/info";
import OfferPage from "./views/offer";
import PrivacyPage from "./views/privacy";

const pageConfig = {
    comingsoon:{
        pageClass:"comingsoon-s1 d-flex align-items-center minh-footer-adj",
        title:"Coming soon!",
        text:"We are not ready yet, but starting soon, please come back later."
    },
    home:{        
        pageClass:"d-flex align-items-center minh-footer-adj",
        returnNav:{
            link:"/offer",
            title:"See more"
        }
    },
    privacy:{
        pageClass:"privacy-s1 d-flex align-items-center minh-footer-adj py-5",
        returnNav:{
            link:"/",
            title:"back to Home"
        }
    },
    error:{
        pageClass:"error-s1 d-flex align-items-center minh-footer-adj py-5",
        title:"Error",
        text:"Page not found.",
        returnNav:{
            link:"/",
            title:"back to Home"
        }
    }
};

const paths=[
    {
        menuItem: false,
        name: "Comingsoon",
        path: "/comingsoon",
        element: <ComingsoonPage config={pageConfig.comingsoon}/>
    },
    {
        menuItem: true,
        name: "Home",
        path: "/",
        element: <HomePage config={pageConfig.home}/>
    },
    {
        menuItem: true,
        name: "Info",
        path: "/info",
        element: <InfoPage/>
    },
    {
        menuItem: true,
        name: "Offer",
        path: "/offer",
        element: <OfferPage/>
    },
    {
        menuItem: true,
        name: "Contact",
        path: "/contact",
        element: <ContactPage/>
    },
    {
        menuItem: false,
        name: "Privacy",
        path: "/privacy",
        element: <PrivacyPage config={pageConfig.privacy}/>
    },
    {
        menuItem: false,
        name: "Error",
        path: "*",
        element: <ErrorPage config={pageConfig.error}/>
    }
];

const socialNav = [
    {
        icon: <span className="fa fa-facebook"></span>,
        path: "https://www.facebook.com"
    },
    {
        icon: <span className="fa fa-instagram"></span>,
        path: "https://www.instagram.com"
    },
    {
        icon: <span className="fa fa-twitter"></span>,
        path: "https://www.twitter.com"
    }
];

export {
    paths,
    socialNav
};