document.addEventListener("DOMContentLoaded",()=>{const t=document.getElementById("service-wrapper");const e=document.getElementById("main-service-card");const s=new URLSearchParams(window.location.search);const c=s.get("id");if(!c){t.innerHTML="<p class='text-center'>Service not found.</p>";return}fetch("../assets/json/data.json").then(t=>t.json()).then(s=>{const n=s.find(t=>t.id==c);if(!n){t.innerHTML="<p class='text-center'>Service not found.</p>";return}t.innerHTML=`
                <div class="main-service-card container mb-5">
                    <img loading="lazy" class="service-svg" src="../assets/blog-images/${n.landscape}" alt="${n.title}">
                    <div class="service-content">
                    <div class="service-text">
                        <h4>${n.title}</h4>
                        <p>${n.service}</p>
                    </div>
                    
                    <div class="service-btns">
                            <button type="button" class="me-2 btn btn-success"><a style="color: white; text-decoration: none;" href="../blog/index.html?id=${n.id}">Read Blog</a></button>

                      <button type="button" class="btn btn-primary"><a style="color: white; text-decoration: none;" href="tel:+971526763400">Call Now</a></button>
                      <button type="button" class="btn btn-primary "><a style="color: white; text-decoration: none;" href="mailto:info@catalystmediafze.com">Email Us</a></button>
                    </div>
                    </div>
                </div>
            `;let o=[];while(o.length<4){let t=Math.floor(Math.random()*s.length);let e=s[t];if(e&&e.id!==n.id&&!o.includes(e)){o.push(e)}}e.innerHTML=`
              <div class="d-flex justify-content-center flex-wrap gap-3">
                ${o.map(t=>`
                  <a href="../blog/index.html?id=${t.id}" style="text-decoration: none"; color: white;">
                  <div class="random-service-card mt-5" style="width: 300px;">
                      <img loading="lazy" class="service-img" src="../assets/blog-images/${t.landscape}" alt="${t.title}">
                      <div class="service-content d-flex justify-content-between flex-column">
                        <div class="service-text">
                          <h6>${t.title}</h6>
                          <p>${t.para120}</p>
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
            `})["catch"](t=>console.error("Error fetching service details:",t))});