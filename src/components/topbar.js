import React from "react"

function Topbar() {
    return (
        <div>
            <a href="https://api.whatsapp.com/send?phone=18296588996&text=&source=&data=" className="whatsApp" target="_blank"><i className="fa fa-whatsapp my-whatsApp"></i></a>
            <section id="topbar" className="d-flex align-items-center">
                <div className="container d-flex justify-content-center justify-content-md-between">
                    <div className="contact-info d-flex align-items-center">
                        <i className="bi bi-envelope d-flex align-items-center"><a href="mailto:mariachiherenciademexicord@gmail.com">mariachiherenciademexicord@gmail.com</a></i>
                        <i className="bi bi-phone d-flex align-items-center ms-4"><a href="https://api.whatsapp.com/send?phone=18296588996&text=&source=&data=" className="headerWhatsap" target="_blank">+1 829 658 8996</a></i>
                    </div>
                    <div className="social-links d-none d-md-flex align-items-center">
                        <a href="https://www.facebook.com/mariachiherenciademexicord/" className="facebook"><i className="bi bi-facebook"></i></a>
                        <a href="https://instagram.com/mariachi_herenciademexico_rd?igshid=YmMyMTA2M2Y=" className="instagram"><i className="bi bi-instagram"></i></a>
                  </div>
                </div>
            </section >
        </div >
);
}
export default Topbar;