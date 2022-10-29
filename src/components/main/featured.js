import React from "react";

function Featured() {
    return (
        <div>
            <section id="featured" className="featured">
                <div className="container">

                    <div className="row">
                        <div className="col-lg-4">
                            <div className="icon-box">
                                <i className="bi bi-mic-fill"></i>
                                <h3><a href="portfolio.html">Somos su mejor eleccion</a></h3>
                                <p>Le ofrecemos una serenata realmente profesional con musicos extranjeros con gran experiancia en el genero del mariachi.</p>
                            </div>
                        </div>
                        <div className="col-lg-4 mt-4 mt-lg-0">
                            <div className="icon-box">
                                <i className="bi bi-music-note-beamed"></i>
                                <h3><a href="portfolio.html">Momentos inolvidables</a></h3>
                                <p>Llamenos y viva momentos inolvidables disfrutando del mejor mariachi actualmente en la Republica Dominicana</p>
                            </div>
                        </div>
                        <div className="col-lg-4 mt-4 mt-lg-0">
                            <div className="icon-box">
                                <i className="bi bi-play-circle-fill"></i>
                                <h3><a href="portfolio.html">Viva La Experiencia!</a></h3>
                                <p>Viva la experiencia de escuchar el mejor espectaculo de mariachi en vivo en la Republica Dominicana</p>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </div>)
}

export default Featured;