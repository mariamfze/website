document.addEventListener("DOMContentLoaded",()=>{let e=document.getElementById("service-wrapper"),t=document.getElementById("main-service-card"),n=new URLSearchParams(window.location.search),i=n.get("id");if(!i){e.innerHTML="<p class='text-center'>Service not found.</p>";return}fetch("../assets/json/data.json").then(e=>e.json()).then(n=>{let s=n.find(e=>e.id==i);if(!s){e.innerHTML="<p class='text-center'>Service not found.</p>";return}e.innerHTML=`
                <div class="main-service-card container mb-5">
                    <img loading="lazy" class="service-svg" src="../assets/blog-images/${s.landscape}" alt="${s.title}">
                    <div class="service-content">
                    <div class="service-text">
                        <h4>${s.title}</h4>
                        <p>${s.service}</p>
                    </div>
                    
                    <div class="service-btns">
                            <button type="button" class="me-2 btn btn-success"><a style="color: white; text-decoration: none;" href="../blog/index.html?id=${s.id}">Read Blog</a></button>

                      <button type="button" class="btn btn-primary"><a style="color: white; text-decoration: none;" href="tel:+971526763400">Call Now</a></button>
                      <button type="button" class="btn btn-primary "><a style="color: white; text-decoration: none;" href="mailto:info@catalystmediafze.com">Email Us</a></button>
                    </div>
                    </div>
                </div>
            `;let a=[];for(;a.length<4;){let o=n[Math.floor(Math.random()*n.length)];o&&o.id!==s.id&&!a.includes(o)&&a.push(o)}t.innerHTML=`
              <div class="d-flex justify-content-center flex-wrap gap-3">
                ${a.map(e=>`
                  <a href="../blog/index.html?id=${e.id}" style="text-decoration: none"; color: white;">
                  <div class="random-service-card mt-5" style="width: 300px;">
                      <img loading="lazy" class="service-img" src="../assets/blog-images/${e.landscape}" alt="${e.title}">
                      <div class="service-content d-flex justify-content-between flex-column">
                        <div class="service-text">
                          <h6>${e.title}</h6>
                          <p>${e.para120}</p>
                        </div>
                        <div class="service-btns">
                          <button type="button" class="btn btn-primary">
                            <a style="color: white; text-decoration: none;" href="tel:+971526763400">Call Now</a>
                          </button>
                          <button type="button" class="btn btn-success">
                            <a style="color: white; text-decoration: none;" href="mailto:info@catalystmediafze.com">Email Us</a>
                          </button>

                        
                        </div>
                      </div>
                  </div>
                  </a>
                `).join("")}
              </div>
            `}).catch(e=>console.error("Error fetching service details:",e))});