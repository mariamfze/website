const e=document.querySelectorAll(".scroll-section");const o=document.querySelector(".connect-background");if(o){document.addEventListener("scroll",()=>{const e=window.scrollY;o.style.backgroundPosition=e!==0?`calc(50% + ${e}px) calc(50% + ${e}px)`:""})}window.addEventListener("scroll",()=>{if(window.scrollY>50){navbar.classList.add("scrolled")}else{navbar.classList.remove("scrolled")}});gsap.registerPlugin(ScrollTrigger);e.forEach(e=>{const o=e.querySelector(".wrapper");const n=o.querySelectorAll(".item");let t=null;if(e.classList.contains("vertical-section")){t="vertical"}else if(e.classList.contains("horizontal-section")){t="horizontal"}r(e,n,t)});function r(e,n,t){n.forEach((e,o)=>{if(o!==0){t=="horizontal"?gsap.set(e,{o:100}):gsap.set(e,{t:100})}});const r=gsap.timeline({l:{i:e,u:true,start:"top top",end:()=>`+=${n.length*100}%`,g:1,v:true},p:{m:"none"}});n.forEach((e,o)=>{r.to(e,{scale:.9,borderRadius:"10px"});t=="horizontal"?r.to(n[o+1],{o:0},"<"):r.to(n[o+1],{t:0},"<")})}document.addEventListener("DOMContentLoaded",function(){const t=document.getElementById("service-card");const r=document.getElementById("scroll-container-blog");fetch("assets/json/data.json").then(e=>{if(!e.ok)throw new Error(`Failed to load JSON: ${e.status}`);return e.json()}).then(e=>{console.log("Loaded JSON Data:",e);if(!Array.isArray(e)){console.error("Error: JSON data is not an array.");return}let o="";let n="";e.slice(0,6).forEach(e=>{o+=`
  <div class="service-card d-flex justify-content-around flex-column" data-animation="flip-down">
    <div class="service-card-content">
      <h6>${e.title}</h6>
      <p>${e.service}</p>
    </div>
    <a href="service/index.html?id=${e.id}" id="cta">Know More</a>
  </div>
`;n+=`
  <div class="d-flex gap-2 blog-card justify-content-evenly">
    <img class="blog-img" src="assets/blog-images/${e.portrait}" alt="${e.title}">
    <div class="d-flex justify-content-between align-items-start flex-column p-3">
      <div>
        <h6>${e.title}</h6>
        <p>${e.para120}</p>
      </div>
      <a href="service/index.html?id=${e.id}" id="cta">Know More</a>
    </div>
  </div>
`});if(t){t.innerHTML=o}else{console.error("Error: #service-card element not found.")}if(r){r.innerHTML=n}else{console.error("Error: #scroll-container-blog element not found.")}})["catch"](e=>console.error("Error loading JSON:",e))});