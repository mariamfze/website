document.addEventListener("DOMContentLoaded",async function(){try{const n=await fetch("../../assets/json/data.json");const o=await n.json();console.log("Loaded services JSON:",o);if(!Array.isArray(o)){throw new Error("Invalid JSON format: Expected an array")}let s="";o.forEach(n=>{let o=String(n.id);if(o&&n.id){let a=n.title.split(" – ")[0];s+=`<li><a class="dropdown-item" href="../../service/index.html?id=${o}" onclick="handleServiceClick(event, '${o}')">${a}</a></li>`}else{console.warn("Skipping invalid service entry:",n)}});const e=`
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
                <ul class="dropdown-menu">${s}</ul>
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
        `;const l=document.getElementById("navbar");if(l){l.innerHTML=e}document.addEventListener("click",function(a){if(!a.target.closest(".dropdown")){document.querySelectorAll(".dropdown-menu").forEach(a=>a.classList.remove("show"))}})}catch(a){console.error("Error loading services JSON:",a)}});function a(a,n){a.preventDefault();window.location.href=`../../service/index.html?id=${n}`}