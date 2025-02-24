document.addEventListener("DOMContentLoaded", function () {
  const footerContent = `
      <footer id="footer" class="text-center mt-5 p-5 container-fluid d-flex align-items-center flex-column">
          <img src="../.../../assets/logo.svg" alt="logo">
          <h1 class="mt-2 mb-2">Catalyst Media FZE</h1>

        //   <div class="footer-nav-links d-flex justify-content-evenly mt-4 mb-1">
        //       <a href="" class="footer-link">About Us</a>
        //       <a href="" class="footer-link">Our Services</a>
        //       <a href="" class="footer-link">Our Work</a>
        //       <a href="" class="footer-link">Contact Us</a>
        //   </div>

          <div class="footer-social-icons d-flex justify-content-between mt-1 mb-4">
              <a href="">
                  <img src="../.../../assets/socials/facebook-f.svg" alt="facebook-f" class="footer-social-icon">
              </a>
              <a href="">
                  <img src="../.../../assets/socials/x.svg" alt="x" class="footer-social-icon">
              </a>
              <a href="">
                  <img src="../.../../assets/socials/instagram.svg" alt="instagram" class="footer-social-icon">
              </a>
              <a href="">
                  <img src="../.../../assets/socials/youtube.svg" alt="youtube" class="footer-social-icon">
              </a>
              <a href="">
                  <img src="../.../../assets/socials/linkedin-in.svg" alt="linkedin-in" class="footer-social-icon">
              </a>
          </div>

          <span class="seperator" style="border-bottom: 1px solid white;"></span>

          <p>Copyright ©2025 All rights reserved by Catalyst Media FZE</p>
      </footer>
  `;

  // Insert footer content into the existing <footer> element
  const footer = document.getElementById("footer");
  if (footer) {
      footer.innerHTML = footerContent;
  }
});
