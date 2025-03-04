let http=new XMLHttpRequest;const serviceCard=document.querySelector("#service-card"),articleWrapper=document.getElementById("article-wrapper");async function getOneBlog(){let a=new URLSearchParams(window.location.search).get("id"),e=await fetch("../assets/json/data.json"),t=await e.json();displayArticle(t[a])}function displayArticle(a){articleWrapper.innerHTML=`
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

     <img loading="lazy" class="article-main-img rounded-2 mb-2" src="${a.bloglandscape}" alt="${a.title}">

     <div class="article-container mt-4">
       ${a.content}
       
     </div>

   </div>
 </div>
`}http.open("get","../assets/json/data.json",!0),http.send(),http.onload=function(){if(4==this.readyState&&200==this.status){let a=JSON.parse(this.responseText),e="";for(let t of a)console.log(t.title),e+=`
      
     <div class="blog-portal-more-card">
     <a href="../blog/index.html?id=${t.id}">
     <img loading="lazy" class="blog-portal-more-img rounded-2 mb-2" src="../assets/blog-images/${t.landscape}" alt="${t.title}">
 
     <div class="blog-portal-content">
       <div class="blog-portal-eyerow d-flex gap-2 align-items-center">
         <div class="blog-portal-date"><p>Jan 2nd, 2020</p></div>
         <p>|</p>
         <div class="blog-portal-read"><p>6 min zread</p></div>
       </div>

       
       <div class="blog-portal-header"><h6>${t.title}</h6></div>

       <div class="blog-portal-demo-content">
         <p>${t.para120}</p>
       </div>

       <div class="d-flex blog-portal-tags gap-2">
         <span class="w3-tag w3-blue w3-round">SEO</span>
         <span class="w3-tag w3-red w3-round">Digtial Marketing</span>
       </div>
   
     </div>
      </a>
   </div>
   
      `;document.querySelector(".blog-portal-more").innerHTML=e}},getOneBlog();