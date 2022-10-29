import React from "react";



// `url(${slide0})`


function About()
{
    return(
        <div>
<section id="about" className="about">
      <div className="container">

        <div className="row">
          <div className="col-lg-6">
            <img src="../../assets/img/about.jpg" className="img-fluid" alt=""></img>
          </div>
          <div className="col-lg-6 pt-4 pt-lg-0 content">
            <h3>Siempre enfocados en brindar la mas alta calidad.</h3>
            <p className="fst-italic">
              Nuestros musicos conocen perfectamente el repertorio mas importante de la música de mariachi y se mantienen en constante evolucion para
              siempre brindar un contenido optimo, hermoso e impactante con una imagen que vas a recordar por siempre.

              Lo mejor de la música Mexicana ahora lo puedes tener aquí en Republica Dominicana.
            </p>
            <ul>
              <li><i className="bi bi-check-circle"></i> Músicos Profesionales.</li>
              <li><i className="bi bi-check-circle"></i> Músicos extranjeros.</li>
              <li><i className="bi bi-check-circle"></i> Amplio Repertorio.</li>
              <li><i className="bi bi-check-circle"></i> Variedad de vestuarios de gala.</li>
              <li><i className="bi bi-check-circle"></i> Tres Cantantes.</li>
              <li><i className="bi bi-check-circle"></i> Amplificación profesional.</li>
            </ul>
            <p>
              Llama y pregunta por nuestra promoción de una SERENATA DE ORO VIP y disfruta de 1 hora de canciones por una tarifa super especial.
              a promoción de una SERENATA DE ORO VIP y disfruta de 1 hora de canciones por una tarifa super especial.
            </p>
          </div>
        </div>

      </div>
    </section>
        </div>
    )
}

export default About;