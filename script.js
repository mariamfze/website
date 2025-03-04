const scrollSection=document.querySelectorAll(".scroll-section"),background=document.querySelector(".connect-background");function initScroll(e,r,t){r.forEach((e,r)=>{0!==r&&("horizontal"==t?gsap.set(e,{xPercent:100}):gsap.set(e,{yPercent:100}))});let o=gsap.timeline({scrollTrigger:{trigger:e,pin:!0,start:"top top",end:()=>`+=${100*r.length}%`,scrub:1,invalidateOnRefresh:!0},defaults:{ease:"none"}});r.forEach((e,l)=>{o.to(e,{scale:.9,borderRadius:"10px"}),"horizontal"==t?o.to(r[l+1],{xPercent:0},"<"):o.to(r[l+1],{yPercent:0},"<")})}background&&document.addEventListener("scroll",()=>{let e=window.scrollY;background.style.backgroundPosition=0!==e?`calc(50% + ${e}px) calc(50% + ${e}px)`:""}),window.addEventListener("scroll",()=>{window.scrollY>50?navbar.classList.add("scrolled"):navbar.classList.remove("scrolled")}),gsap.registerPlugin(ScrollTrigger),scrollSection.forEach(e=>{let r=e.querySelector(".wrapper"),t=r.querySelectorAll(".item"),o=null;e.classList.contains("vertical-section")?o="vertical":e.classList.contains("horizontal-section")&&(o="horizontal"),initScroll(e,t,o)}),document.addEventListener("DOMContentLoaded",function(){let e=document.getElementById("service-card"),r=document.getElementById("scroll-container-blog");fetch("assets/json/data.json").then(e=>{if(!e.ok)throw Error(`Failed to load JSON: ${e.status}`);return e.json()}).then(t=>{if(console.log("Loaded JSON Data:",t),!Array.isArray(t)){console.error("Error: JSON data is not an array.");return}let o="",l="";t.slice(0,6).forEach(e=>{o+=`
  <div class="service-card d-flex justify-content-around flex-column" data-animation="flip-down">
    <div class="service-card-content">
      <h6>${e.title}</h6>
      <p>${e.service}</p>
    </div>
    <a href="service/index.html?id=${e.id}" id="cta">
    <span>Know More</span>
    </a>
  </div>
`,l+=`
  <div class="d-flex gap-2 blog-card justify-content-evenly">
    <img class="blog-img" src="assets/blog-images/${e.portrait}" alt="${e.title}">
    <div class="d-flex justify-content-between align-items-start flex-column p-3">
      <div>
        <h6>${e.title}</h6>
        <p>${e.para120}</p>
      </div>
      <a href="service/index.html?id=${e.id}" id="cta">
    <span>Know More</span>
    </a>
    </div>
  </div>
`}),e?e.innerHTML=o:console.error("Error: #service-card element not found."),r?r.innerHTML=l:console.error("Error: #scroll-container-blog element not found.")}).catch(e=>console.error("Error loading JSON:",e))});