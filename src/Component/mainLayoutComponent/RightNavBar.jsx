import QZone from "./QZone/QZone";
import SocialLinks from "./SocialLinks/SocialLinks";
import SocialLogin from "./SocialLogin/SocialLogin";


const RightNavBar = () => {
    return (
        <div className="space-y-10">
            <SocialLogin></SocialLogin>
            <SocialLinks></SocialLinks>
            <QZone></QZone>
        </div>
    );
};

export default RightNavBar;