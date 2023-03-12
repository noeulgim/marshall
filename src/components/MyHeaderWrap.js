const HeaderWrap = () => {
    return (
        <div className="header-wrap">
                    <div className="header-main">
                        <div className="header-logo">
                            <a href="./Main.js"><img className="logo" alt="logo" src="/marshall-logo-white.svg" /></a>
                        </div>
                        <div className="gnb">
                            <nav>
                                <ul>
                                    <li><a href="#">headphones</a></li>
                                    <li><a href="#">speakers</a></li>
                                    <li><a href="#">diamond jubilee edition</a></li>
                                    <li><a href="#">never stop listening</a></li>
                                </ul>
                            </nav>
                        </div>
                        <div className="header-right">
                            <div className="header-icon">
                                <ul>
                                    <li><a href="#"><i /></a></li>
                                    <li><a href="#"><i /></a></li>
                                    <li><a href="#"><i /></a></li>
                                    <li><a href="#"><i /></a></li>
                                </ul>
                            </div>
                            <div className="header-lang">
                                <div>
                                    <p>south korea / en</p>
                                </div>
                                <i />
                            </div>
                        </div>
                    </div>
                </div>
    )
};

export default HeaderWrap;