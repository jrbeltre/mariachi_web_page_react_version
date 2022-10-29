import React from "react";

function Header() {
    return (
        <div>
            <header id="header" className="d-flex align-items-center">
                <div className="container d-flex justify-content-between align-items-center">
                    <div className="logo">
                        <h1><a href="index.html">Herencia de Mexico R.D.</a></h1>
                        {/* <!-- Uncomment below if you prefer to use an image logo -->
                        <!-- <a href="index.html"><img src="assets/img/logo.png" alt="" className="img-fluid"></a>--> */}
                    </div>

                    <nav id="navbar" className="navbar">
                        <ul>
                            <li><a className="active" href="index.html">Inicio</a></li>
                            {/* <!-- <li><a href="about.html">About</a></li> --> */}
                            {/* <!-- <li><a href="services.html">Services</a></li> --> */}
                            <li><a href="portfolio.html">Galeria</a></li>
                            {/* <!-- <li><a href="team.html">Team</a></li> --> */}
                            {/* <!-- <li><a href="pricing.html">Pricing</a></li> --> */}
                            {/* <!-- <li><a href="blog.html">Blog</a></li> */}
                            {/* <li className="dropdown"><a href="#"><span>Drop Down</span> <i className="bi bi-chevron-down"></i></a>
                                <ul>
                                    <li><a href="#">Drop Down 1</a></li>
                                    <li className="dropdown"><a href="#"><span>Deep Drop Down</span> <i className="bi bi-chevron-right"></i></a>
                                        <ul>
                                            <li><a href="#">Deep Drop Down 1</a></li>
                                            <li><a href="#">Deep Drop Down 2</a></li>
                                            <li><a href="#">Deep Drop Down 3</a></li>
                                            <li><a href="#">Deep Drop Down 4</a></li>
                                            <li><a href="#">Deep Drop Down 5</a></li>
                                        </ul>
                                    </li>
                                    <li><a href="#">Drop Down 2</a></li>
                                    <li><a href="#">Drop Down 3</a></li>
                                    <li><a href="#">Drop Down 4</a></li>
                                </ul>
                            </li>  */}
                            <li><a href="contact.html">Contacto</a></li>
                        </ul>
                        <i className="bi bi-list mobile-nav-toggle"></i>
                    </nav>

                </div>
            </header>
        </div>
    );
}

export default Header;