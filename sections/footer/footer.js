document.addEventListener("DOMContentLoaded",function(){let e=document.getElementById("footer");e&&(e.innerHTML=`
        <div class="d-flex align-items-center flex-column mt-5 container-fluid p-5 text-center" id=footer><img alt="Website's Logo" src=../assets/logo.svg>
        <h1 class="mt-2 mb-2">Catalyst Media FZE</h1>
        <div class="d-flex mb-4 justify-content-between mt-1 footer-social-icons">
            <a href=https://x.com/CatalystMedia24><img alt="Follow us on X" src=../assets/socials/x.svg class=footer-social-icon> </a><a href=https://www.instagram.com/catalystmediafze/><img alt="Follow us on Instagram" src=../assets/socials/instagram.svg class=footer-social-icon>            </a>
            <a href="https://www.linkedin.com/company/catalyst-media-fze/posts/?feedView=all"><img alt="Follow us on LinkedIn" src=../assets/socials/linkedin-in.svg class=footer-social-icon></a>
        </div><span class=seperator style="border-bottom:1px solid #fff"></span>
        <p>Copyright ©2025 All rights reserved by Catalyst Media FZE</p></div>
`);let t=document.querySelector(".connect-background");t&&document.addEventListener("scroll",()=>{let e=window.scrollY;t.style.backgroundPosition=0!==e?`calc(50% + ${e}px) calc(50% + ${e}px)`:""})});