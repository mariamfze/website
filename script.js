const scrollSection = document.querySelectorAll(".scroll-section");
const background = document.querySelector('.connect-background');
const serviceCard = document.querySelector("#service-card");
const scrollContainerBlog = document.querySelector("#scroll-container-blog");

if (background) {
    document.addEventListener('scroll', () => {
        const scrollY = window.scrollY;
        background.style.backgroundPosition = scrollY !== 0 ? `calc(50% + ${scrollY}px) calc(50% + ${scrollY}px)` : '';
    });
};

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) { // Adjust this value based on when you want the color to change
      navbar.classList.add('scrolled');
  } else {
      navbar.classList.remove('scrolled');
  }
});


gsap.registerPlugin(ScrollTrigger);

scrollSection.forEach((section) => {
const wrapper = section.querySelector(".wrapper");
const items = wrapper.querySelectorAll(".item");

let direction = null;

if (section.classList.contains("vertical-section")) {
  direction = "vertical";
} else if (section.classList.contains("horizontal-section")) {
  direction = "horizontal";
}

initScroll(section, items, direction);
});

function initScroll(section, items, direction) {
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

fetch("assets/json/blogs.json")
  .then((response) => {
    if (!response.ok) throw new Error(`Failed to load JSON: ${response.status}`);
    return response.json();
  })
  .then((data) => {
    console.log("Loaded JSON Data:", data);

    if (Array.isArray(data)) {
      let serviceHTML = "";
      let blogHTML = "";

      data.forEach((item) => {
        serviceHTML += `
          <div class="service-card d-flex justify-content-around flex-column" data-animation="flip-down">
            <div class="service-card-content">
              <h6>${item.title}</h6>
              <p>${item.para120}</p>
            </div>
            <a href="blog/index.html?id=${item.title}" id="cta">Know More</a>
          </div>
        `;

        blogHTML += `
          <div class="d-flex gap-2 blog-card justify-content-evenly">
            <img class="blog-img" src="assets/blog-images/${item.portrait}" alt="${item.title}">
            <div class="d-flex justify-content-between align-items-start flex-column p-3">
              <div>
                <h6>${item.title}</h6>
                <p>${item.para120}</p>
              </div>
              <a href="blog/index.html?id=${item.id}" id="cta">Know More</a>
            </div>
          </div>
        `;
      });

      if (serviceCard) serviceCard.innerHTML = serviceHTML;
      if (scrollContainerBlog) scrollContainerBlog.innerHTML = blogHTML;
    } else {
      console.error("Error: JSON data is not an array.");
    }
  })
  .catch((error) => console.error("Error loading JSON:", error));