document.addEventListener("DOMContentLoaded",async function(){try{let e=await fetch("../../assets/json/data.json"),l=await e.json();if(console.log("Loaded services JSON:",l),!Array.isArray(l))throw Error("Invalid JSON format: Expected an array");let n="";l.forEach(e=>{let l=String(e.id);if(l&&e.id){let s=e.title.split(" – ")[0];n+=`<li><a class="dropdown-item" href="../../service/index.html?id=${l}" onclick="handleServiceClick(event, '${l}')">${s}</a></li>`}else console.warn("Skipping invalid service entry:",e)});let s=`
<div class="container">
    <a class="navbar-brand" href="../../index.html">
        <img loading="lazy" src="../../assets/logo.svg" alt="logo" id="logo">
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
                <ul class="dropdown-menu">${n}</ul>
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
        `,t=document.getElementById("navbar");t&&(t.innerHTML=s),document.addEventListener("click",function(e){e.target.closest(".dropdown")||document.querySelectorAll(".dropdown-menu").forEach(e=>e.classList.remove("show"))})}catch(o){console.error("Error loading services JSON:",o)}});function a(e,l){e.preventDefault(),window.location.href=`../../service/index.html?id=${l}`}