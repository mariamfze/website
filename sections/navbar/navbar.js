document.addEventListener("DOMContentLoaded", async function () {
    try {
        const response = await fetch("../../assets/json/services.json");
        const services = await response.json();

        console.log("Loaded services JSON:", services); // Debugging log

        if (!Array.isArray(services)) {
            throw new Error("Invalid JSON format: Expected an array");
        }

        let servicesMenu = "";
        services.forEach(service => {
            let serviceId = String(service.title); // Ensure ID is a string
            if (serviceId && service.title) {
                let shortTitle = service.title.split(" – ")[0]; // Crop sentence after first '-'
                servicesMenu += `<li><a class="dropdown-item" href="../../services/index.html?id=${serviceId}" onclick="handleServiceClick(event, '${serviceId}')">${shortTitle}</a></li>`;
            } else {
                console.warn("Skipping invalid service entry:", service);
            }
        });

        const navbarContent = `
<div class="container">
    <a class="navbar-brand" href="../../index.html">
        <img src="../../assets/logo.svg" alt="logo" id="logo">
    </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
        <ul class="navbar-nav ms-auto">
            <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#our-services" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Our Services
                </a>
                <ul class="dropdown-menu">${servicesMenu}</ul>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="../../index.html#about-us">About Us</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="../../blogs/index.html">Blogs</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#contact-us">Contact Us</a>
            </li>
        </ul>
    </div>
</div>
        `;

        const navbar = document.getElementById("navbar");
        if (navbar) {
            navbar.innerHTML = navbarContent;
        }

        // Close dropdown when clicking outside
        document.addEventListener("click", function (event) {
            if (!event.target.closest(".dropdown")) {
                document.querySelectorAll(".dropdown-menu").forEach(menu => menu.classList.remove("show"));
            }
        });
    } catch (error) {
        console.error("Error loading services JSON:", error);
    }
});

function handleServiceClick(event, serviceId) {
    event.preventDefault();
    window.location.href = `../../services/index.html?id=${serviceId}`;
}