document.addEventListener("DOMContentLoaded", function () {
  const contactSection = document.getElementById("contact-us");
  if (contactSection) {
      contactSection.innerHTML = `
          <div class="connect-background"><span>Let's Connect.</span></div>
          <div class="contact-us-container">
              <div class="innerwrap">
                  <section class="contact-header" id="contact-us">
                      <div class="textcenter">
                          <h5 class="shtext">Contact Us</h5>
                          <p>We’re here to help your business grow. Reach out to us today for a free consultation and take the first step toward digital success.</p>
                          <span class="seperator"></span>
                      </div>
                  </section>
                  <section class="contact-container d-flex justify-content-center align-items-start">
                      <div class="embedded-video-container m-3">
                          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3606.4513862554345!2d55.48858149999999!3d25.322630000000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5f5df14e533d%3A0x73cc61cd6d65a7e3!2sSharjah%20Research%20Technology%20and%20Innovation%20Park!5e0!3m2!1sen!2sin!4v1739627030427!5m2!1sen!2sin" 
                          loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                      </div>
                      <div class="last m-3">
                          <div class="sec2innercont">
                              <div class="contact-details">
                                  <p><strong>Address:</strong> Office B20-174, Sharjah Research Technology & Innovations Park (SRTIP) complex, University City, Sharjah, U.A.E</p>
                                  <p><strong>Phone:</strong> +971526763400</p>
                                  <p><strong>Email:</strong> info@catalystmediafze.com</p>
                              </div>
                          </div>
                          <div class="contact-form">
                              <h6 class="contact-form-title">Let’s create something amazing together.<br><strong>Contact us today!</strong></h6>
                              <form action="https://formsubmit.co/info@catalystmediafze.com" method="POST">
                                  <div class="d-flex gap-2">
                                      <input class="form-control" type="text" name="first_name" placeholder="First Name" required>
                                      <input class="form-control" type="text" name="last_name" placeholder="Last Name">
                                  </div>
                                  <div class="d-flex gap-2 mt-2">
                                      <input class="form-control" type="email" name="email" placeholder="Email" required>
                                      <input class="form-control" type="tel" name="phone" placeholder="Contact Number" required>
                                  </div>
                                  <textarea class="form-control mt-2" name="message" cols="30" rows="7" placeholder="Your message here..."></textarea>
                                  <div><input class="btn btn-primary mt-2" type="submit" value="Send"></div>
                              </form>
                          </div>
                      </div>
                  </section>
              </div>
          </div>
      `;
  }

  // Ensure the background animation runs only if the element exists
  const background = document.querySelector('.connect-background');
  if (background) {
      document.addEventListener('scroll', () => {
          const scrollY = window.scrollY;
          background.style.backgroundPosition = scrollY !== 0 ? `calc(50% + ${scrollY}px) calc(50% + ${scrollY}px)` : '';
      });
  }
});
