import React from 'react'
import LogoComp from '../LOGO/LogoComp'
import SubtitleComp from '../Subtitle/Subtitle'
import ArrowDownComp from '../Arrow Down/ArrowDown'
import ProfilesComp from '../Profile/Profiles'

const MainPage = () => {
    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <div>
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <div style={{ textAlign: 'center' }}>
                    <LogoComp />
                    <br />
                    <br />
                    <SubtitleComp />
                    <ArrowDownComp />
                    <br /><br /><br /><br /><br />
                </div>
                <ProfilesComp />

            </div>
        </div>
    )
}

export default MainPage