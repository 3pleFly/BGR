import ArrowDownComp from "./Arrow Down/ArrowDown";
import LogoComp from "./LOGO/LogoComp";
import LanguageAndAccessibility from "./Language and accessibility/LanguageAndAccessibility";
import SubtitleComp from "./Subtitle/Subtitle";
import './Home.css';
import ProfilesComp from "./Profile/Profiles";
import { Drawer, Typography } from "@mui/material";
import { useState } from "react";
import MainPage from "./Components/MainPage";
import AboutPage from "./Components/AboutPage";
import ProjectsComp from "./Components/Projects";
import DrawerComp from "./Components/DrawerComp/DrawerComp";


const HomeComp = () => {
    const [openDrawer, setOpenDrawer] = useState(false)
    const [selectedComponent, setSelectedComponent] = useState('MainPage')

    const toggleDrawer = (newOpen) => () => {
        setOpenDrawer(newOpen);
    };

    const renderComponent = () => {
        switch (selectedComponent) {
            case "MainPage":
                return <MainPage />
            case "AboutPage":
                return <AboutPage />
            case 'ProjectsPage':
                return <ProjectsComp />
            default:
                return null;
        }
    };

    return (
        <div className="container">


            <DrawerComp />

            {/* </div> */}


            {/* <LanguageAndAccessibility /> */}
            {/* <div className="contentWrapper"> */}
            {
                renderComponent()
            }
            {/* </div> */}



        </div>
    );
}

export default HomeComp;
