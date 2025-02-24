let http = new XMLHttpRequest();
const articleWrapper = document.getElementById('article-wrapper');

http.open('get', '../assets/json/blogs.json', true);
http.send();
http.onload = function(){
   if(this.readyState == 4 && this.status == 200){
      let blogs = JSON.parse(this.responseText);
      let output = "";
      for(let item of blogs){
        console.log(item.landscape)
         output += `
         
        <div class="blog-portal-more-card">
        <a href="../blog/index.html?id=${item.title}">
        <img class="blog-portal-more-img rounded-2 mb-2" src="../assets/blog-images/${item.landscape}" alt="">
    
        <div class="blog-portal-content">
          <div class="blog-portal-eyerow d-flex gap-2 align-items-center">
            <div class="blog-portal-date"><p>Jan 2nd, 2020</p></div>
            <p>|</p>
            <div class="blog-portal-read"><p>6 min zread</p></div>
          </div>
  
          
          <div class="blog-portal-header"><h6>${item.title}</h6></div>
  
          <div class="blog-portal-demo-content">
            <p>${item.para120}</p>
          </div>
  
          <div class="d-flex blog-portal-tags gap-2">
            <span class="w3-tag w3-blue w3-round">SEO</span>
            <span class="w3-tag w3-red w3-round">Digtial Marketing</span>
          </div>
      
        </div>
         </a>
      </div>
      
         `;
      }
      document.querySelector(".blog-portal-more").innerHTML = output;
   }
}

async function getOneBlog () {
  const articleid =new URLSearchParams(window.location.search).get('id')
  const response = await fetch(`../assets/json/blogs.json`);
  const article = await response.json();

  displayArticle(article[articleid])
  
}

function displayArticle(article) {
  articleWrapper.innerHTML = `
     <div class="blog-portal-main-card">

      <div class="main-article d-flex justify-content-center align-items-center flex-column">

        <div class="article-container">

          <div class="blog-portal-header">
            <h4>${article.title}</h4>
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

        <img class="article-main-img rounded-2 mb-2" src="../assets/blog-images/${article.landscape}" alt="">

        <div class="article-container mt-4">
          ${article.content}
          
        </div>

      </div>
    </div>
  `
}

getOneBlog()