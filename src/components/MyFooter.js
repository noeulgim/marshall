import './MyFooter.css';
import MoreBtn from './MoreBtn';

const Footer = () => {
    return (
        <footer>
            <div className="footer-wrapper">
                <div className="footer-top">
                    <div className="newsletter-wrap ft-width">
                        <div className="news-title">
                            <h3>sign up for our newsletter</h3>
                            <span>Get 10% off on your first order.</span>
                            <span>Coupon shared through email.</span>
                        </div>
                        <div className="email-form">
                            <form>
                                <div className="input-email">
                                    <input type='email'
                                    placeholder='Your email address goes here'
                                    style={{textAlign: 'center'}}>
                                    </input>
                                </div>
                                <div className="policy">
                                    <p>by subscribing you accept our <span>privacy policy.</span></p>
                                </div>
                                <MoreBtn title="subscribe" />
                            </form>
                        </div>
                    </div>
                </div>
                <div className="footer-menu ft-width">
                    <div className='ser-menu'>
                        <h4>customer service</h4>
                        <ul>
                            <li><a href="#">contact us</a></li>
                            <li><a href="#">about zound industries</a></li>
                            <li><a href="#">business customers</a></li>
                            <li><a href="#">authorised retailers</a></li>
                            <li><a href="#">deliveries</a></li>
                            <li><a href="#">exchange and return</a></li>
                            <li><a href="#">user manuals</a></li>
                            <li><a href="#">counterfeit products</a></li>
                            <li><a href="#">complaints and disputes</a></li>
                            <li><a href="#">help centre</a></li>
                        </ul>
                    </div>
                    <div className='pol-menu'>
                        <h4>policies</h4>
                        <ul>
                            <li><a href="#">security</a></li>
                            <li><a href="#">terms of use</a></li>
                            <li><a href="#">terms of purchase</a></li>
                            <li><a href="#">payment methods</a></li>
                            <li><a href="#">declaration of conformity</a></li>
                            <li><a href="#">global warranty</a></li>
                            <li><a href="#">privacy policy</a></li>
                            <li><a href="#">gdpr</a></li>
                            <li><a href="#">cookies</a></li>
                            <li><a href="#">commitment to accessibility</a></li>
                        </ul>
                    </div>
                    <div className='edi-menu'>
                        <h4>editorials</h4>
                        <ul>
                            <li><a href="#">backstage</a></li>
                            <li><a href="#">press room</a></li>
                        </ul>
                    </div>
                    <div className='acc-menu'>
                        <h4>my account</h4>
                        <ul>
                            <li><a>log in or create an account</a></li>
                        </ul>
                        <a><MoreBtn title="login" /></a>
                        <a><MoreBtn title="create account" /></a>
                    </div>
                </div>
                <div className="payments-wrap ft-width">
                    <h2>safe payments</h2>
                    <p>we provide the following payment<br />methods</p>
                    <div className="ft-icon">
                        <img src="/footer/Mastercard.svg" alt="" />
                        <img src="/footer/Visa.svg" alt="" />
                        <img src="/footer/American-Express.svg" alt="" />
                        <img src="/footer/Discover.svg" alt="" />
                        <img src="/footer/Maestro.svg" alt="" />
                    </div>
                </div>
                <div className="footer-bottom ft-width">
                    <div className="copyright">
                        <span>&copy;2023 zound industries. all rights reserved. org. nr 5567674610</span>
                    </div>
                    <div className="logo">
                        <img src="/marshall-logo-white.svg" />
                    </div>
                    <div className="contact-sns">
                        <a href="#"><i></i></a>
                        <a href="#"><i></i></a>
                        <a href="#"><i></i></a>
                        <a href="#"><i></i></a>
                    </div>
                </div>
            </div>
        </footer>
    )
};

export default Footer;