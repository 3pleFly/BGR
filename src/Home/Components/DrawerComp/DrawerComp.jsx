import { Drawer, Typography } from '@mui/material'
import React, { useState } from 'react'
import './DrawerComp.css'

const DrawerComp = () => {
    const [openDrawer, setOpenDrawer] = useState(false)

    const toggleDrawer = (newOpen) => () => {
        setOpenDrawer(newOpen);
    };

    return (
        <div>
            {/* <div className="customMainRectangle"> */}
            <button className="CustomButtonOpenDrawer" onClick={toggleDrawer(true)}>
                <img src={'/assets/images/Icons/OpenDrawer.png'} alt="Open Drawer" />
            </button>
            <Drawer open={openDrawer} anchor={'right'} onClose={toggleDrawer(false)} >
                <div className="customOpenDrawerContent">

                    <button className="CustomButtonOpenDrawer" onClick={toggleDrawer(false)}>
                        <img src={'/assets/images/Icons/CloseDrawer.png'} alt="Close Drawer" />
                    </button>


                    <div className="customButtonForMainPage">
                        <button className="hiddenButton" onClick={() => window.location.href = '/'}>
                            <Typography sx={{ fontSize: '30px', color: '#F2F0E8', textAlign: 'center' }}>
                                דף הבית
                            </Typography>
                        </button>
                    </div>
                    <br />
                    <div className="customRectangle1"></div>
                    <br />
                    <div className="customButtonForContactUs">
                        <button className="hiddenButton" onClick={() => window.location.href = '/contact'}>
                            <Typography sx={{ fontSize: '30px', color: '#F2F0E8', textAlign: 'center' }}>
                                צור קשר
                            </Typography>
                        </button>
                    </div>
                    <br />
                    <div className="customRectangle2"></div>
                    <br />
                    <div className="customButtonForAccessibilityStatement">
                        <button className="hiddenButton" onClick={() => window.location.href = '/Accessibility'}>
                            <Typography sx={{ fontSize: '30px', color: '#F2F0E8', textAlign: 'center' }}>
                                הצהרת נגישות
                            </Typography>
                        </button>
                    </div>

                </div>
            </Drawer>
        </div>
    )
}

export default DrawerComp