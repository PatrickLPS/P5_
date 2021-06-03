
document.addEventListener('DOMContentLoaded', async _ => {
  // your implementation
  try {
    const api= "https://orinoco-p5.herokuapp.com/api/furniture"
    const json = await ( await fetch(api)).json() 
    console.log ("json",json) 
    if (Array.isArray(json) && json.length >0){
      let html = ""
      for (const camera of json) {  
        html += `<span>${camera.name}</span>`
        html += `<strong>${camera.price}</strong>`
        html += `<a href="product.html?id=${camera._id}"> <img src="${camera.imageUrl}"/></a>`
        html += `<p>${camera.description}</p>` 
         
      }
      document.querySelector("#templateArticle").innerHTML=html
    } else{
      document.querySelector("#templateArticle").innerHTML="No Result from Api"
    }

  } catch (e) {
    console.warn(e)
  }
})
/* 
(async function() {
    const articles = await getArticles()
  
    for (article of articles) {
      displayArticle(article)
    }
  })()
  
  function getArticles() {
    return fetch("https://jsonplaceholder.typicode.com/posts")
      .then(function(httpBodyResponse) {
        return httpBodyResponse.json()
      })
      .then(function(articles) {
        return articles
      })
      .catch(function(error) {
        alert(error)
      })
  }
  
  function displayArticle(article) {
    const templateElt = document.getElementById("templateArticle")
    const cloneElt = document.importNode(templateElt.content, true)

  
    document.getElementById("main").appendChild(cloneElt)
  }*/