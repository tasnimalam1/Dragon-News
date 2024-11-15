import moment from 'moment';
import logo from '../assets/logo.png';

const Header = () => {
    return (
        <div className='flex flex-col justify-center items-center py-4 gap-2'>
            <div className='logo'>
                <img className='w-[300px]' src={logo} alt="" />
            </div>
            <h2 className='text-gray-500'>Journalism Without Fear or Favour</h2>
            <p>{moment().format("dddd, MMMM Do YYYY")}</p>
        </div>
    );
};

export default Header;