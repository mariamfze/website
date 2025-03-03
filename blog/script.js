let a=new XMLHttpRequest;const s=document.getElementById("article-wrapper");a.open("get","../assets/json/data.json",true);a.send();a.onload=function(){if(this.readyState==4&&this.status==200){let s=JSON.parse(this.responseText);let t="";for(let a of s){console.log(a.landscape);t+=`
         
  <div class="blog-portal-more-card">
  <a href="../blog/index.html?id=${a.id}">
  <img class="blog-portal-more-img rounded-2 mb-2" src="../assets/blog-images/${a.landscape}" alt="">

  <div class="blog-portal-content">
    <div class="blog-portal-eyerow d-flex gap-2 align-items-center">
      <div class="blog-portal-date"><p>Jan 2nd, 2020</p></div>
      <p>|</p>
      <div class="blog-portal-read"><p>6 min zread</p></div>
    </div>

    
    <div class="blog-portal-header"><h6>${a.title}</h6></div>

    <div class="blog-portal-demo-content">
      <p>${a.para120}</p>
    </div>

    <div class="d-flex blog-portal-tags gap-2">
      <span class="w3-tag w3-blue w3-round">SEO</span>
      <span class="w3-tag w3-red w3-round">Digtial Marketing</span>
    </div>

  </div>
   </a>
</div>

   `}document.querySelector(".blog-portal-more").innerHTML=t}};async function t(){const a=new URLSearchParams(window.location.search).get("id");const s=await fetch(`../assets/json/data.json`);const t=await s.json();l(t[a])}function l(a){s.innerHTML=`
<div class="blog-portal-main-card">

<div class="main-article d-flex justify-content-center align-items-center flex-column">

  <div class="article-container">

    <div class="blog-portal-header">
      <h4>${a.title}</h4>
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

  <img class="article-main-img rounded-2 mb-2" src="../assets/blog-images/${a.landscape}" alt="">

  <div class="article-container mt-4">
    ${a.content}
    
  </div>

</div>
</div>
`}t();