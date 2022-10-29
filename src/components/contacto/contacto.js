function Contacto() {
    return(
        <div>
             <section id="contact" className="contact">
      <div className="container">

        <div className="row">
          <div className="col-lg-6">
            <div className="info-box mb-4">
              <i className="bx bx-map"></i>
              <h3>Nuestra direccion</h3>
              {/* <!-- <p>Calle 32 35, Santo Domingo Este 11704, República Dominicana.</p> --> */}
              <p><a href="https://www.google.com/maps?ll=18.472851,-69.821614&z=13&t=m&hl=en-US&gl=US&mapclient=embed&cid=1904483156756487295">Calle 32 35, Santo Domingo Este 11704, República Dominicana.</a></p>
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <div className="info-box  mb-4">
              <i className="bx bx-envelope"></i>
              <h3>Email</h3>
              {/* <!-- <p>mariachiherenciademexicord@gmail.com</p> --> */}
              <p><a href="mailto:mariachiherenciademexicord@gmail.com">mariachiherenciademexicord@gmail.com</a></p>
            </div>
          </div>
          
          <div className="col-lg-3 col-md-6">
            <div className="info-box  mb-4">
              <i className="bx bx-phone-call"></i>
              <h3>Llamanos</h3>
              {/* <!-- <p>+1 829 658 8996</p> --> */}
              <p><a href="https://api.whatsapp.com/send?phone=18296588996&text=&source=&data=" target="_blank">+1 829 658 8996</a></p>
            </div>
          </div>

        </div>

        <div className="row">

          <div className="col-lg-6 ">
            <div className="mapouter" style={{position:"relative", textAlign:"right", height:"500px", width:"600px"}}><div className="gmap_canvas" style= {{overflow:"hidden",background:"none"!=null?"none":"important",height:"500px",width:"600px",}}><iframe width="600" height="500" id="gmap_canvas" src="https://maps.google.com/maps?q=Mariachi+Herencia+de+Mexico+RD&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe><a href="https://123movies-to.org">123movies</a><br/><a href="https://www.embedgooglemap.net"></a></div></div>
          </div>

          <div className="col-lg-6">
            <form action="forms/contact.php" method="post" role="form" className="php-email-form">
              <div className="row">
                <div className="col-md-6 form-group">
                  <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" required />
                </div>
                <div className="col-md-6 form-group mt-3 mt-md-0">
                  <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" required />
                </div>
              </div>
              <div className="form-group mt-3">
                <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" required />
              </div>
              <div className="form-group mt-3">
                <textarea className="form-control" name="message" rows="5" placeholder="Message" required></textarea>
              </div>
              <div className="my-3">
                <div className="loading">Cargando...</div>
                <div className="error-message"></div>
                <div className="sent-message">Su mensaje ha sido enviado, Muchas Gracias! </div>
              </div>
              <div className="text-center"><button type="submit">Enviar Mensaje</button></div>
            </form>
          </div>

        </div>

      </div>
    </section>
        </div>
    )
}

export default Contacto;