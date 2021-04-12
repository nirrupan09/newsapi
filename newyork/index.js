
let url = "https://api.nytimes.com/svc/topstories/v2/world.json?api-key=pZtCAXfYRJLA9kGQBWGkbDM4zpLEAEew";
let headlines = document.getElementById('headlines');
fetch(url)
.then(response => response.json())
.then(data =>{
console.log(data);

data.results.map(article =>  {

    console.log(article.title);

    let news = document.createElement("news");
    news.setAttribute('href', article.url);
    news.innerHTML = article.title;

    let p = document.createElement('p');
    p.innerHTML = article.abstract;

    let img = document.createElement('img');
    img.setAttribute('src',article.multimedia[0].url)

    headlines.appendChild(news);
    headlines.appendChild(p);
    headlines.appendChild(img);

   
});

  });


