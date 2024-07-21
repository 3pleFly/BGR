import ArrowDownComp from "./Arrow Down/ArrowDown";
import LogoComp from "./LOGO/LogoComp";
import LanguageAndAccessibility from "./Language and accessibility/LanguageAndAccessibility";
import SubtitleComp from "./Subtitle/Subtitle";
import './Home.css';
import Profile from "./Profile/Profile";
import image_Profile_B from './../Images/Profile/B.png';
import image_Profile_Berger from './../Images/Profile/Berger.png'

const HomeComp = () => {
    return (
        <div>
            <LanguageAndAccessibility />

            {/* <div className="center-content"> */}
            <div style={{ display: 'flex', textAlign: 'center', justifyContent: 'center', alignItems: 'center' }}>
                <div>
                    <LogoComp />
                    <SubtitleComp />
                    <ArrowDownComp />
                    <br /><br /><br /><br /><br />
                    <Profile image_Profile={image_Profile_Berger} imageProfileLogo={image_Profile_B} en_name={'Aharon Berger'} />
                </div>
            </div>
            {/* </div> */}
        </div>
    );
}

export default HomeComp;
