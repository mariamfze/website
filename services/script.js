document.addEventListener("DOMContentLoaded", function () {
  const servicesContainer = document.getElementById("services-container");
  const popup = document.getElementById("popup");
  const closeBtn = document.querySelector(".close-btn");
  const popupOverlay = document.createElement("div");
  
  popupOverlay.classList.add("popup-overlay");
  document.body.appendChild(popupOverlay);

  fetch("../assets/json/data.json")
      .then(response => response.json())
      .then(data => {
          data.forEach(item => {
              const card = document.createElement("div");
              card.classList.add("service-box");
              card.innerHTML = `
                  <img src="../assets/blog-vectors/${item.svg}" alt="" height="120">
                  <h6>${item.title}</h6>
                  <p>${item.service}</p>
                  <a href="tel:+971526763400" class="cta">Call Us Now</a>
              `;

              card.addEventListener("click", function () {
                  popup.style.display = "block";
                  popupOverlay.style.display = "block";
              });

              servicesContainer.appendChild(card);
          });
      })
      .catch(error => console.error("Error fetching JSON:", error));

  closeBtn.addEventListener("click", function () {
      popup.style.display = "none";
      popupOverlay.style.display = "none";
  });

  popupOverlay.addEventListener("click", function () {
      popup.style.display = "none";
      popupOverlay.style.display = "none";
  });
});
