import React, { useState } from "react";
import AppBody from "./appBody";

var view=1;

export function Header() {

    const [activePage, setActivePage] = useState(1);

    return (
        <div>
            <header id="header" className="d-flex align-items-center">
                <div className="container d-flex justify-content-between align-items-center">
                    <div className="logo">
                        <h1><a href="#">Herencia de Mexico R.D.</a></h1>
                        {/* <!-- Uncomment below if you prefer to use an image logo -->
                        <!-- <a href="index.html"><img src="assets/img/logo.png" alt="" className="img-fluid"></a>--> */}
                    </div>

                    <nav id="navbar" className="navbar">
                        <ul>
                            <li onClick={() => manageActivePage(1)} ><a className={getClassName(1, activePage)} href="#" >Inicio</a></li>
                            {/* <!-- <li><a href="about.html">About</a></li> --> */}
                            {/* <!-- <li><a href="services.html">Services</a></li> --> */}
                            <li onClick={() => manageActivePage(2)} ><a className={getClassName(2, activePage)}href="#" >Galeria</a></li>
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
                            <li onClick={() => manageActivePage(3)} ><a className={getClassName(3, activePage)} href="#" >Contacto</a></li>
                        </ul>
                        <i className="bi bi-list mobile-nav-toggle" ></i>
                    </nav>

                </div>
            </header>
            <AppBody/>
        </div>
    );

    function manageActivePage(page) {
        setActivePage(page);
        view = page;
    };

}

export function getView() {
    return view;
};

function getClassName(elementId, activeId) {
    if (elementId === activeId)
        return ("active")
    else
        return ""
}
