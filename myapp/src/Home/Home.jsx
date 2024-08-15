import ArrowDownComp from "./Arrow Down/ArrowDown";
import LogoComp from "./LOGO/LogoComp";
import LanguageAndAccessibility from "./Language and accessibility/LanguageAndAccessibility";
import SubtitleComp from "./Subtitle/Subtitle";
import ProfilesComp from "./Profile/Profiles";
import { Drawer, Typography } from "@mui/material";
import { useState } from "react";
import MainPage from "./Components/MainPage";
import AboutPage from "./Components/AboutPage";
import ProjectsComp from "./Components/Projects";
import DrawerComp from "./Components/DrawerComp/DrawerComp";
import ContractDetailsComp from "./Components/ContractDetails/ContractDetails";

const HomeComp = () => {
    const [openDrawer, setOpenDrawer] = useState(false);
    const [selectedComponent, setSelectedComponent] = useState('MainPage');

    const toggleDrawer = (newOpen) => () => {
        setOpenDrawer(newOpen);
    };

    return (
        <div >
            <DrawerComp />
            
            <div style={{ display: 'flex', position: 'relative' }}>
                <MainPage />
            </div>

            <div>
                <ContractDetailsComp />
            </div>






        </div>
    );
}

export default HomeComp;
