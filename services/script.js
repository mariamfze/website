document.addEventListener("DOMContentLoaded",function(){const c=document.getElementById("services-container");const e=document.getElementById("popup");const n=document.querySelector(".close-btn");if(!c){console.warn("Skipping JSON fetch: #services-container not found.");return}const t=document.createElement("div");t.classList.add("popup-overlay");document.body.appendChild(t);fetch("../assets/json/data.json").then(n=>n.json()).then(n=>{n.forEach(n=>{const o=document.createElement("div");o.classList.add("service-box");o.innerHTML=`
    <img loading="lazy" src="../assets/blog-vectors/${n.svg}" alt="${n.title}" height="200">
    <div class="d-flex justify-content-between flex-column">
    <div>
    <h6>${n.title}</h6>
    <p>${n.service}</p>
    </div>
    <div class="d-flex gap-2 justify-content-end w-100 mt-4">
    <a href="tel:+971526763400" class="cta">Contact Us</a>
    <a href="../blog/index.html?id=${n.id}" class="cta">Read Blog</a>
    </div>
    </div>
`;o.addEventListener("click",function(){if(e){e.style.display="block";t.style.display="block"}});c.appendChild(o)})})["catch"](n=>console.error("Error fetching JSON:",n));if(n){n.addEventListener("click",function(){e.style.display="none";t.style.display="none"})}t.addEventListener("click",function(){e.style.display="none";t.style.display="none"})});