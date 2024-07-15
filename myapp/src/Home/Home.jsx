import ArrowDownComp from "./Arrow Down/ArrowDown";
import LogoComp from "./LOGO/LogoComp";
import LanguageAndAccessibility from "./Language and accessibility/LanguageAndAccessibility";
import SubtitleComp from "./Subtitle/Subtitle";
import './Home.css';

const HomeComp = () => {
    return (
        <div className="home-container">
            <LanguageAndAccessibility />

            <div className="center-content">
                <LogoComp />
                <SubtitleComp />
                <ArrowDownComp />
            </div>
        </div>
    );
}

export default HomeComp;
