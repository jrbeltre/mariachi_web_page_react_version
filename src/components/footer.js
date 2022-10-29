import React from "react";

function Footer ()
{
    return(
       <div>
            <footer id="footer">

            {/* <!-- <div className="footer-newsletter">
            <div className="container">
                <div className="row">
                <div className="col-lg-6">
                    <h4>Our Newsletter</h4>
                    <p>Tamen quem nulla quae legam multos aute sint culpa legam noster magna</p>
                </div>
                <div className="col-lg-6">
                    <form action="" method="post">
                    <input type="email" name="email"><input type="submit" value="Subscribe">
                    </form>
                </div>
                </div>
            </div>
            </div> --> */}

            <div className="footer-top">
            <div className="container">
                <div className="row">

                <div className="col-lg-3 col-md-6 footer-links">
                    <h4>Enlaces</h4>
                    <ul>
                    <li><i className="bx bx-chevron-right"></i> <a href="#">Inicio</a></li>
                    {/* <!-- <li><i className="bx bx-chevron-right"></i> <a href="#">About us</a></li> --> */}
                    <li><i className="bx bx-chevron-right"></i> <a href="portfolio.html">Galeria</a></li>
                    <li><i className="bx bx-chevron-right"></i> <a href="contact.html">Contacto</a></li>
                    {/* <!-- <li><i className="bx bx-chevron-right"></i> <a href="#">Terms of service</a></li> --> */}
                    {/* <!-- <li><i className="bx bx-chevron-right"></i> <a href="#">Privacy policy</a></li> --> */}
                    </ul>
                </div>

                <div className="col-lg-3 col-md-6 footer-links">
                    <h4>Nuestros Servicios</h4>
                    <ul>
                    <li><i className="bx bx-chevron-right"></i> <a href="portfolio.html">Cumpleaños</a></li>
                    <li><i className="bx bx-chevron-right"></i> <a href="portfolio.html">Serenatas de amor</a></li>
                    <li><i className="bx bx-chevron-right"></i> <a href="portfolio.html">Mañanitas</a></li>
                    <li><i className="bx bx-chevron-right"></i> <a href="portfolio.html">Aniversarios</a></li>
                    <li><i className="bx bx-chevron-right"></i> <a href="portfolio.html">Bodas</a></li>
                    </ul>
                </div>

                <div className="col-lg-3 col-md-6 footer-contact">
                    <h4>Contactanos</h4>
                    <p>
                    Calle 32 35 <br/>
                    Santo Domingo Este 11704 <br/>
                    República Dominicana <br/><br/>

                    {/* <!-- <i className="bi bi-envelope d-flex align-items-center"><a href="mailto:contact@example.com">mariachiherenciademexicord@gmail.com</a></i>
                    <i className="bi bi-phone d-flex align-items-center ms-4"><a href="https://api.whatsapp.com/send?phone=18296588996&text=&source=&data=" className="headerWhatsap" target="_blank">+1 829 658 8996</a></i> --> */}
                    <strong>Phone:</strong> +1 829 658 8996<br/>
                    <strong>Email:</strong> mariachiherenciademexicord@gmail.com<br/>
                    </p>

                </div>

                <div className="col-lg-3 col-md-6 footer-info">
                    <h3>Sobre nosotros</h3>
                    <p>Somos un grupo de profesionales de la mùsica especializados en mariachis, directamente desde Mexico podras disfrutar de un Mariachi genuino.</p>
                    <div className="social-links mt-3">
                    {/* <!-- <a href="#" className="twitter"><i className="bx bxl-twitter"></i></a> --> */}
                    <a href="https://www.facebook.com/mariachiherenciademexicord/" className="facebook"><i className="bx bxl-facebook"></i></a>
                    <a href="https://instagram.com/mariachi_herenciademexico_rd?igshid=YmMyMTA2M2Y=" className="instagram"><i className="bx bxl-instagram"></i></a>
                    {/* <!-- <a href="#" className="google-plus"><i className="bx bxl-skype"></i></a> --> */}
                    {/* <!-- <a href="#" className="linkedin"><i className="bx bxl-linkedin"></i></a> --> */}
                    </div>
                </div>

                </div>
            </div>
            </div>

            <div className="container">
            <div className="copyright">
                &copy; Copyright <strong><span>mariachiherenciademexicord</span></strong>. All Rights Reserved
            </div>
            <div className="credits">
            {/*     <!-- All the links in the footer should remain intact. -->
                <!-- You can delete the links only if you purchased the pro version. -->
                <!-- Licensing information: https://bootstrapmade.com/license/ -->
                <!-- Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/eterna-free-multipurpose-bootstrap-template/ --> */}
                Designed by <a href="mailto:joelrbeltre@gmail.com/">JBC_WebDevelopment</a>
            </div>
            </div>
            </footer>

            <a href="#" className="back-to-top d-flex align-items-center justify-content-center"><i className="bi bi-arrow-up-short"></i></a>

            {/* <!-- Vendor JS Files --> */}
            <script src="assets/vendor/purecounter/purecounter_vanilla.js"></script>
            <script src="assets/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
            <script src="assets/vendor/glightbox/js/glightbox.min.js"></script>
            <script src="assets/vendor/isotope-layout/isotope.pkgd.min.js"></script>
            <script src="assets/vendor/swiper/swiper-bundle.min.js"></script>
            <script src="assets/vendor/waypoints/noframework.waypoints.js"></script>
            <script src="assets/vendor/php-email-form/validate.js"></script>

            {/* <!-- Template Main JS File --> */}
            <script src="assets/js/main.js"></script>
       </div>
    );
}
export default Footer;