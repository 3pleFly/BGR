import { useState } from "react";
import MainPage from "./Components/MainPage";
import DrawerComp from "./Components/DrawerComp/DrawerComp";

const HomeComp = () => {
    const [openDrawer, setOpenDrawer] = useState(false);
    const [selectedComponent, setSelectedComponent] = useState('MainPage');

    const toggleDrawer = (newOpen) => () => {
        setOpenDrawer(newOpen);
    };

    return (
        <div >
            {/* <DrawerComp />
            <MainPage /> */}

            <div>
ß
            </div>




        </div>
    );
}

export default HomeComp;
