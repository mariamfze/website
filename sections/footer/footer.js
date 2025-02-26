document.addEventListener("DOMContentLoaded", function () {
  const footerContent = `
      <footer id="footer" class="text-center mt-5 p-5 container-fluid d-flex align-items-center flex-column">
          <img src="../../../assets/logo.svg" alt="The Logo">
          <h1 class="mt-2 mb-2">Catalyst Media FZE</h1>


          <div class="footer-social-icons d-flex justify-content-between mt-1 mb-4">
              <a href="https://x.com/CatalystMedia24">
                  <img src="../../../assets/socials/x.svg" alt="x" class="footer-social-icon">
              </a>
              <a href="https://www.instagram.com/catalystmediafze/">
                  <img src="../../../assets/socials/instagram.svg" alt="instagram" class="footer-social-icon">
              </a>
              <a href="https://www.linkedin.com/company/catalyst-media-fze/posts/?feedView=all">
                  <img src="../../../assets/socials/linkedin-in.svg" alt="linkedin-in" class="footer-social-icon">
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
