import ArrowDownComp from "./Arrow Down/ArrowDown";
import LogoComp from "./LOGO/LogoComp";
import LanguageAndAccessibility from "./Language and accessibility/LanguageAndAccessibility";
import SubtitleComp from "./Subtitle/Subtitle";
import './Home.css';
import ProfilesComp from "./Profile/Profiles";


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
                    <ProfilesComp/>
                </div>
            </div>
            {/* </div> */}
        </div>
    );
}

export default HomeComp;
