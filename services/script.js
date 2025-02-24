let http = new XMLHttpRequest();
const serviceWrapper = document.getElementById('service-wrapper');

http.open('get', '../assets/json/services.json', true);
http.send();
http.onload = function(){
   if(this.readyState == 4 && this.status == 200){
      let blogs = JSON.parse(this.responseText);
      let output = "";
      for(let item of blogs){
         output += `
         
        <div class="blog-portal-more-card">
        <a href="../services/index.html?id=${item.title}">
        <img class="blog-portal-more-img rounded-2 mb-2" src="../assets/blog-images/${item.landscape}" alt="">
    
        <div class="blog-portal-content">
          <div class="blog-portal-eyerow d-flex gap-2 align-items-center">
            <div class="blog-portal-date"><p>Jan 2nd, 2020</p></div>
            <p>|</p>
            <div class="blog-portal-read"><p>6 min zread</p></div>
          </div>
  
          
          <div class="blog-portal-header"><h6>${item.title}</h6></div>
  
          <div class="blog-portal-demo-content">
            <p>${item.para120}</p>
          </div>
  
          <div class="d-flex blog-portal-tags gap-2">
            <span class="w3-tag w3-blue w3-round">SEO</span>
            <span class="w3-tag w3-red w3-round">Digtial Marketing</span>
          </div>
      
        </div>
         </a>
      </div>
      
         `;
      }
      document.querySelector("#main-service-card").innerHTML = output;
   }
}

async function getOneBlog () {
  const serviceid =new URLSearchParams(window.location.search).get('id')
  const response = await fetch(`../assets/json/services.json`);
  const service = await response.json();

  displayService(service[serviceid])
  
}

function displayService(service) {
  console.log(service.id)
  serviceWrapper.innerHTML = `
       <article class="blog-portal d-flex gap-4">
    <div class="blog-portal-main-card">
      <img class="blog-portal-main-img rounded-2 mb-2" src="../assets/blog-images/${service.landscape}" alt="">
  
      <div class="blog-portal-content">
        <div class="blog-portal-eyerow d-flex gap-2 align-items-center">
          <div class="blog-portal-date"><p>Jan 2nd, 2020</p></div>
          <p>|</p>
          <div class="blog-portal-read"><p>6 min read</p></div>
        </div>

        <div class="blog-portal-header d-flex justify-content-between">
          <h4>${service.title}</h4>
          <img class="blog-portal-icon" src="../assets/icons/link.svg" width="20" height="20" alt="">
        </div>

        <div class="blog-portal-demo-content">
          <p>${service.para120}</p>
        </div>

        <div class="d-flex blog-portal-tags gap-2">
          <span class="w3-tag w3-blue w3-round">SEO</span>
          <span class="w3-tag w3-red w3-round">Digtial Marketing</span>
        </div>

      </div>
    </div>

    <div class="blog-portal-main-card">
      <img class="blog-portal-main-img rounded-2 mb-2" src="../assets/blog-images/landscape/12.jpg" alt="">
  
      <div class="blog-portal-content">
        <div class="blog-portal-eyerow d-flex gap-2 align-items-center">
          <div class="blog-portal-date"><p>Jan 2nd, 2020</p></div>
          <p>|</p>
          <div class="blog-portal-read"><p>6 min read</p></div>
        </div>

        <div class="blog-portal-header d-flex justify-content-between">
          <h4>WhatsApp Marketing – Connecting with Your Audience Directly</h4>
          <img class="blog-portal-icon" src="../assets/icons/link.svg" width="20" height="20" alt="">
        </div>

        <div class="blog-portal-demo-content">
          <p>Boost engagement with WhatsApp marketing! Personalized messages, offers & support—connect with customers now!</p>
        </div>

        <div class="d-flex blog-portal-tags gap-2">
          <span class="w3-tag w3-blue w3-round">SEO</span>
          <span class="w3-tag w3-red w3-round">Digtial Marketing</span>
        </div>

      </div>
    </div>
  </article>

  <div class="blog-portal-main-card mt-5 mb-5">
    <img class="blog-portal-main-img rounded-2 mb-2" src="../assets/blog-images/landscape/8.jpg" alt="">

    <div class="blog-portal-content">
      <div class="blog-portal-eyerow d-flex gap-2 align-items-center">
        <div class="blog-portal-date"><p>Jan 2nd, 2020</p></div>
        <p>|</p>
        <div class="blog-portal-read"><p>6 min read</p></div>
      </div>

      <div class="blog-portal-header d-flex justify-content-between">
        <h4>Email Marketing – Building Relationships & Driving Conversions</h4>
        <img class="blog-portal-icon" src="../assets/icons/link.svg" width="20" height="20" alt="">
      </div>

      <div class="blog-portal-demo-content">
        <p>Drive engagement and sales with expert email marketing! At Catalyst Media Fze, we craft compelling campaigns, segment audiences, and optimize automation for maximum impact. Improve open rates, conversions, and ROI with data-driven strategies. Elevate your email marketing today!</p>
      </div>

      <div class="d-flex blog-portal-tags gap-2">
        <span class="w3-tag w3-blue w3-round">SEO</span>
        <span class="w3-tag w3-red w3-round">Digtial Marketing</span>
      </div>

    </div>
  </div>
  `
}

getOneBlog()