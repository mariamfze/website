document.addEventListener("DOMContentLoaded", function () {
    const servicesContainer = document.getElementById("services-container");
    const popup = document.getElementById("popup");
    const closeBtn = document.querySelector(".close-btn");

    if (!servicesContainer) {
        console.warn("Skipping JSON fetch: #services-container not found.");
        return; // Exit if the container doesn't exist (prevents errors on home page)
    }

    // Create an overlay for the popup
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
                    <img src="../assets/blog-vectors/${item.svg}" alt="" height="180">
                    <h6>${item.title}</h6>
                    <p>${item.service}</p>
                    <a href="tel:+971526763400" class="cta">Call Us Now</a>
                `;

                // Click event to open the popup
                card.addEventListener("click", function () {
                    if (popup) {
                        popup.style.display = "block";
                        popupOverlay.style.display = "block";
                    }
                });

                servicesContainer.appendChild(card);
            });
        })
        .catch(error => console.error("Error fetching JSON:", error));

    // Close popup when clicking the close button
    if (closeBtn) {
        closeBtn.addEventListener("click", function () {
            popup.style.display = "none";
            popupOverlay.style.display = "none";
        });
    }

    // Close popup when clicking the overlay
    popupOverlay.addEventListener("click", function () {
        popup.style.display = "none";
        popupOverlay.style.display = "none";
    });
});
