const navbar = document.getElementById('navbar');
const serviceCard = document.querySelector("#service-card");
const articleWrapper = document.getElementById('article-wrapper');


let http = new XMLHttpRequest();
http.open('get', './assets/json/home.json', true);
http.send();

http.onload = function(){
  if(this.readyState == 4 && this.status == 200){
     let blogs = JSON.parse(this.responseText);
     let output = "";
     for(let item of blogs){
        output += `
      <div class="service-card d-flex justify-content-around flex-column" data-animation="flip-down">
            <div class="service-card-content">
              <h6>${item.title}</h3>
                <p>${item.para120}</p>
            </div>
            <a href="./assets/blogs/blog.html?id=${item.id}" id="cta">Know More</a>
            </div>
        </div>
     
        `;
     }
     serviceCard.innerHTML = output;
  }
}


// async function serviceCard () {
//   const response = await fetch(`../assets/json/blogs.json`);
//   const service = await response.json();

//   for(let item of service){
//      `
// <div class="d-flex gap-2">
//       <img class="blog-img" src="${console.log(item.portrait)}" alt="">
//       <div class="d-flex justify-content-center align-items-start flex-column">
//       <div>
//         <h6>${item.title}</h6>
//         <p>${item.para120}</p>
//       </div>
//       <a href="./assets/blogs/blog.html?id=${item.id}" id="cta">Know More</a>
//     </div>
//     </div>
//     `;
//  }
// }

// serviceCard.innerHTML = serviceCard()

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) { // Adjust this value based on when you want the color to change
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

const background = document.querySelector('.connect-background');

document.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    
    if(scrollY !== 0) {
        background.style.backgroundPosition = `calc(50% + ${scrollY}px) calc(50% + ${scrollY}px)`;
    } else {
        background.style.backgroundPosition = '';
    }
});


gsap.registerPlugin(ScrollTrigger);

// Select the HTML elements needed for the animation
const scrollSection = document.querySelectorAll(".scroll-section");

scrollSection.forEach((section) => {
  const wrapper = section.querySelector(".wrapper");
  const items = wrapper.querySelectorAll(".item");

  // Initialize
  let direction = null;

  if (section.classList.contains("vertical-section")) {
    direction = "vertical";
  } else if (section.classList.contains("horizontal-section")) {
    direction = "horizontal";
  }

  initScroll(section, items, direction);
});

function initScroll(section, items, direction) {
  // Initial states
  items.forEach((item, index) => {
    if (index !== 0) {
      direction == "horizontal"
        ? gsap.set(item, { xPercent: 100 })
        : gsap.set(item, { yPercent: 100 });
    }
  });

  const timeline = gsap.timeline({
    scrollTrigger: {
      trigger: section,
      pin: true,
      start: "top top",
      end: () => `+=${items.length * 100}%`,
      scrub: 1,
      invalidateOnRefresh: true
      // markers: true,
    },
    defaults: { ease: "none" }
  });
  items.forEach((item, index) => {
    timeline.to(item, {
      scale: 0.9,
      borderRadius: "10px"
    });

    direction == "horizontal"
      ? timeline.to(
          items[index + 1],
          {
            xPercent: 0
          },
          "<"
        )
      : timeline.to(
          items[index + 1],
          {
            yPercent: 0
          },
          "<"
        );
  });
}

async function getOneBlog () {
  const articleid =new URLSearchParams(window.location.search).get('id')
  const response = await fetch(`../assets/json/blogs.json`);
  const article = await response.json();

  displayArticle(article[articleid])
  
}

function displayArticle(article) {
  articleWrapper.innerHTML = `
     <div class="blog-portal-main-card">

      <div class="main-article d-flex justify-content-center align-items-center flex-column">

        <div class="article-container">

          <div class="blog-portal-header">
            <h4>${article.title}</h4>
          </div>
  
          <div class="blog-portal-content d-flex justify-content-between">
              <div class="blog-portal-eyerow d-flex gap-2 align-items-center">
                <div class="blog-portal-date"><p>Jan 2nd, 2020</p></div>
                <p>|</p>
                <div class="blog-portal-read"><p>6 min read</p></div>
              </div>
    
            <div class="d-flex blog-portal-tags gap-2 mb-4">
              <span class="w3-tag w3-blue w3-round">SEO</span>
              <span class="w3-tag w3-red w3-round">Digtial Marketing</span>
            </div>
          </div>

        </div>

        <img class="article-main-img rounded-2 mb-2" src="${article.landscape}" alt="">

        <div class="article-container mt-4">
          ${article.content}
          
        </div>

      </div>
    </div>
  `
}

getOneBlog()