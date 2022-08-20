function createFooter() {
    const nav =document.querySelector('footer');
    nav.innerHTML =`
      <div class="container">
      <div class="row">
        <div class="col-md-3 footer-item">
          <h4>OTOTECH Industries</h4>
          <p> For more enquires and service placement please feel free to contact us through the following Social media's.</p>
          <ul class="social-icons">
            <li><a href="#"><i class="fa fa-facebook"></i></a></li>
            <li><a href="tel:08160816821"><i class="fa fa-phone"></i></a></li>
            <li><a href="#"><i class="fa fa-linkedin"></i></a></li>
            <li><a href="#"><i class="fa fa-whatsapp"></i></a></li>
            <li><a href="mailto:ototechindutries@gmail.com?subject={subject}&body={content}"><i class="fa fa-google"></i></a></li>
            <li><a href="sms:08160816821?body={content}"><i class="fa fa-envelope"></i></a></li>
          </ul>
        </div>
        <div class="col-md-3 footer-item">
        <h4>Additional Pages</h4>
        <ul class="menu-list">
          <li><a href="about.html">About Us</a></li>
          <li><a href="services.html">How We Work</a></li>
          <li><a href="contact.html">Quick Support</a></li>
          <li><a href="privacy.gitignore@copyright">Privacy Policy</a></li>
        </ul>
      </div>
        <div class="col-md-3 footer-item">
          <h4>Useful Links</h4>
          <ul class="menu-list">
            <li><a href="#">Page Privacy</a></li>
            <li><a href="#">Licences and Registration</a></li>
          </ul>
        </div>
   
        <div class="col-md-3 footer-item last-item">
          <h4>Contact Us</h4>
          <div class="contact-form">
            <form id="contact footer-contact" action="" method="post">
              <div class="row">
                <div class="col-lg-12 col-md-12 col-sm-12">
                  <fieldset>
                    <input name="name" type="text" class="form-control" id="name" placeholder="Full Name" required="">
                  </fieldset>
                </div>
                <div class="col-lg-12 col-md-12 col-sm-12">
                  <fieldset>
                    <input name="email" type="text" class="form-control" id="email" pattern="[^ @]*@[^ @]*" placeholder="E-Mail Address" required="">
                  </fieldset>
                </div>
                <div class="col-lg-12">
                  <fieldset>
                    <textarea name="message" rows="6" class="form-control" id="message" placeholder="Your Message" required=""></textarea>
                  </fieldset>
                </div>
                <div class="col-lg-12">
                  <fieldset>
                    <button type="submit" id="form-submit" class="filled-button">Send Message</button>
                  </fieldset>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    
    `;
}
createFooter();