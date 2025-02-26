document.addEventListener("DOMContentLoaded", () => {
    const serviceWrapper = document.getElementById("service-wrapper");
    const mainServiceCard = document.getElementById("main-service-card");
    const urlParams = new URLSearchParams(window.location.search);
    const serviceId = urlParams.get("id");
  
    if (!serviceId) {
        serviceWrapper.innerHTML = "<p class='text-center'>Service not found.</p>";
        return;
    }
  
    fetch("../assets/json/data.json")
        .then((response) => response.json())
        .then((services) => {
            // Find the main service by ID
            const mainService = services.find(item => item.id == serviceId);
  
            if (!mainService) {
                serviceWrapper.innerHTML = "<p class='text-center'>Service not found.</p>";
                return;
            }
  
            // Render Main Service Card
            serviceWrapper.innerHTML = `
                <div class="main-service-card container mb-5">
                    <img class="service-svg" src="../assets/blog-images/${mainService.landscape}" alt="${mainService.title}">
                    <div class="service-content">
                    <div class="service-text">
                        <h4>${mainService.title}</h4>
                        <p>${mainService.service}</p>
                    </div>
                    
                    <div class="service-btns">
                            <button type="button" class="me-2 btn btn-success"><a style="color: white; text-decoration: none;" href="../blog/index.html?id=${mainService.id}">Read Blog</a></button>

                      <button type="button" class="btn btn-primary"><a style="color: white; text-decoration: none;" href="tel:+971526763400">Call Now</a></button>
                      <button type="button" class="btn btn-primary "><a style="color: white; text-decoration: none;" href="mailto:info@catalystmediafze.com">Email Us</a></button>
                    </div>
                    </div>
                </div>
            `;
  
            // Generate three random service cards (excluding the main service)
            let randomServices = [];
            while (randomServices.length < 4) {
                let randomIndex = Math.floor(Math.random() * services.length);
                let randomService = services[randomIndex];
  
                if (randomService && randomService.id !== mainService.id && !randomServices.includes(randomService)) {
                    randomServices.push(randomService);
                }
            }
  
            // Render the three random service cards inside a flex container
            mainServiceCard.innerHTML = `
              <div class="d-flex justify-content-center flex-wrap gap-3">
                ${randomServices.map(service => `
                  <a href="../blog/index.html?id=${service.id}" style="text-decoration: none"; color: white;">
                  <div class="random-service-card mt-5" style="width: 300px;">
                      <img class="service-img" src="../assets/blog-images/${service.landscape}" alt="${service.title}">
                      <div class="service-content d-flex justify-content-between flex-column">
                        <div class="service-text">
                          <h6>${service.title}</h6>
                          <p>${service.para120}</p>
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
            `;
        })
        .catch(error => console.error("Error fetching service details:", error));
  });
  