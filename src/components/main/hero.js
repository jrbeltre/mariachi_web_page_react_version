
import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';

import slide0 from "../../assets/img/slide/logo.jpg";
import slide1 from "../../assets/img/slide/group_nave.JPG";
var interval =1000;
function Hero() {

    // const [index, setIndex] = useState(0);

    // const handleSelect = (selectedIndex, e) => {
    //   setIndex(selectedIndex);
    // };
    
    return (
        <div>
            <section id="hero">
                <div className="hero-container">
                    <div id="heroCarousel"  className="carousel slide carousel-fade" data-bs-ride="carousel">

                        <ol className="carousel-indicators" id="hero-carousel-indicators"></ol>

                        <Carousel /* activeIndex={index} onSelect={handleSelect} */ className="carousel-inner" role="listbox">

                            {/* <!-- Slide 1 --> */}
                            <Carousel.Item className="carousel-item" interval={interval} style={{ backgroundImage: `url(${slide0})`, backgroundSize: "contain", backgroundColor: "white" }}>
                           <Item titleStart="El Mariachi" titleSpam="Herencia de Mexico" description="El mejor mariachi de la Republica Dominicana, heredamos directamente desde Mexico lo mejor de los mariachis."/>
                           </Carousel.Item>  
                            {/* <!-- Slide 2 --> */}
                            <Carousel.Item className="carousel-item" interval={interval} style={{ backgroundImage: `url(${slide1})`, backgroundSize: "contain", backgroundColor: "white" }} >
                           <Item titleStart="Los mejores " titleSpam="Musicos de mariachi." description="Los clasicos mas importantes, relevantes y reconocidos, sin duda la mejor experiencia de mariachi en Republica Dominicana."/>
                           </Carousel.Item>  
                            {/* <!-- Slide 3 --> */}
                            <Carousel.Item className="carousel-item" interval={interval} style={{ backgroundImage: `url(${slide0})`, backgroundSize: "contain", backgroundColor: "white" }}>
                           <Item titleStart="Diferentes " titleSpam="Estilos Profesionales." description="Contamos con diversos estilos de mariachi para ofrecer la mas amplia diversidad."/>
                           </Carousel.Item>  
                            {/* <!-- Slide 4 --> */}
                            <Carousel.Item className="carousel-item" interval={interval} style={{ backgroundImage: `url(${slide1})`, backgroundSize: "contain", backgroundColor: "white" }} >
                           <Item titleStart="Una gran" titleSpam="Variedad de musica." description="Escucharas una coleccion variada de los mejores clasicos de la historia."/>
                           </Carousel.Item>  


                        </Carousel>
{/* 
                        <a className="carousel-control-prev" href="#heroCarousel" role="button" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon bi bi-chevron-left" aria-hidden="true"></span>
                        </a>

                        <a className="carousel-control-next" href="#heroCarousel" role="button" data-bs-slide="next">
                            <span className="carousel-control-next-icon bi bi-chevron-right" aria-hidden="true"></span>
                        </a> */}

                    </div>
                </div>
            </section>
        </div>
    );
};

function Item(props)
{
    return(
        
        <div className="carousel-container">
            <div className="carousel-content">
                <h2 className="animate__animated fanimate__adeInDown">{props.titleStart} <span>{props.titleSpam}</span></h2>
                <p className="animate__animated animate__fadeInUp">{props.description}</p>
                <a href="#" className="btn-get-started animate__animated animate__fadeInUp">Conoce mas sobre nosotros.</a>
            </div>
        </div>
    
    )
}


export default Hero;


// import Carousel from 'react-bootstrap/Carousel';
// import { CarouselItem } from "react-bootstrap";

// function Hero() {
//     return (
//         <Carousel>
//             <Carousel.Item>
//                 <img
//                     className="d-block w-100"
//                     src="holder.js/800x400?text=First slide&bg=373940"
//                     alt="First slide"
//                 />
//                 <Carousel.Caption>
//                     <h3>First slide label</h3>
//                     <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
//                 </Carousel.Caption>
//             </Carousel.Item>
//             <Carousel.Item>
//                 <img
//                     className="d-block w-100"
//                     src="holder.js/800x400?text=Second slide&bg=282c34"
//                     alt="Second slide"
//                 />

//                 <Carousel.Caption>
//                     <h3>Second slide label</h3>
//                     <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
//                 </Carousel.Caption>
//             </Carousel.Item>
//             <Carousel.Item>
//                 <img
//                     className="d-block w-100"
//                     src="holder.js/800x400?text=Third slide&bg=20232a"
//                     alt="Third slide"
//                 />

//                 <Carousel.Caption>
//                     <h3>Third slide label</h3>
//                     <p>
//                         Praesent commodo cursus magna, vel scelerisque nisl consectetur.
//                     </p>
//                 </Carousel.Caption>
//             </Carousel.Item>
//         </Carousel>
//     );
// }

// export default Hero;