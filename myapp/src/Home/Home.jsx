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

const HomeComp = () => {
    const [openDrawer, setOpenDrawer] = useState(false);
    const [selectedComponent, setSelectedComponent] = useState('MainPage');

    const toggleDrawer = (newOpen) => () => {
        setOpenDrawer(newOpen);
    };

    return (
        <div style={{ display: 'grid', placeItems: 'center', minHeight: '100vh' }}>
            <DrawerComp />
            <div style={{ 
                width: '100%',
                maxWidth: '1200px',  // ניתן להתאים את הרוחב המקסימלי לפי הצורך
            }}>
                <MainPage />
            </div>
        </div>
    );
}

export default HomeComp;
