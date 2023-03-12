import './MyHeader.css';
import HeaderWrap from './MyHeaderWrap';
import CommonBox from './CommonBox';

const Header = () => {
    return (
        <header>
            <div className="top-banner">
                <p>free returns within 30 days</p>
                <p>1 year warranty</p>
            </div>
            <div className="header-wrapper">
                <img src="/header_bg_00.jpg" alt="" />
                <HeaderWrap />
                <CommonBox title='on the go hero' 
                explain='MEET THE LATEST AND LOUDEST MEMBER OF OUR PORTABLE LINE-UP' 
                text='find out more'/>
            </div>
        </header>
    )
};



export default Header;