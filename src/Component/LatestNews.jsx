import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";


const LatestNews = () => {
    return (
        <div className="flex items-center gap-2 bg-base-200 p-2">
            <p className="bg-[#D72050] text-base-100 px-3 py-1">Latest</p>
            <Marquee pauseOnHover={true} speed={50} className="space-x-10">
                <Link to='/news'>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam, minus!
                </Link>
                <Link to='/news'>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam, minus!
                </Link>
                <Link to='/news'>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam, minus!
                </Link>
                <Link to='/news'>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam, minus!
                </Link>
            </Marquee>
        </div>
    );
};

export default LatestNews;