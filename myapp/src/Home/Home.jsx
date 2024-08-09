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
        <div>

            <button className="CustomButtonOpenDrawer" onClick={toggleDrawer(true)}>
                <img src={'/Images/Icons/OpenDrawer.png'} alt="Open Drawer" />
            </button>


            <Drawer open={openDrawer} anchor={'right'} onClose={toggleDrawer(false)} >
                <div className="customOpenDrawerContent">
                    <br /><br /><br /><br />
                    <button className="hiddenButton" onClick={() => setSelectedComponent('AboutPage')}>
                        <Typography sx={{ fontSize: '30px', color: '#F2F0E8', textAlign: 'center' }}>

                            אודות

                        </Typography>
                    </button>
                    <br />
                    <div className="customRectangle"></div>
                    <br />
                    <button className="hiddenButton" onClick={() => setSelectedComponent('MainPage')}>
                        <Typography sx={{ fontSize: '30px', color: '#F2F0E8', textAlign: 'center' }}>
                            קצת עלינו
                        </Typography>
                    </button>
                    <br />
                    <div className="customRectangle"></div>
                    <br />
                    <button className="hiddenButton" onClick={() => setSelectedComponent('ProjectsPage')}>
                        <Typography sx={{ fontSize: '30px', color: '#F2F0E8', textAlign: 'center' }}>
                            טעימה מהפרויקטים שלנו
                        </Typography>
                    </button>
                    <br />
                    <div className="customRectangle"></div>
                    <br />
                    <button className="hiddenButton">
                        <Typography sx={{ fontSize: '30px', color: '#F2F0E8', textAlign: 'center' }}>
                            מידע טכני
                        </Typography>
                    </button>
                </div>
            </Drawer>

            {/* <LanguageAndAccessibility /> */}

            {
                renderComponent()
            }




        </div>
    );
}

export default HomeComp;
