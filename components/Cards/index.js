// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

axios

.get("https://lambda-times-backend.herokuapp.com/articles")
.then((res) => {
    console.log(res)

    Object.values(res.data).forEach(topics => {
            console.log(topics)
            let topic = Object.values(topics)
            console.log(topic)
            topic.forEach(arr => {
                console.log(arr)
               arr.forEach(article => {
                   console.log(article)

                let cardContainer = document.querySelector(".cards-container")
                cardContainer.append(component(article))
               })
            })
        })
    })
.catch((err) => {
    console.log(`You hit an error: ${err}`);
  })

  function component(article) {
      const card = document.createElement("div")
      const headLine = document.createElement("div")
      const author = document.createElement("div")
      const imgContainer = document.createElement("div")
      const img = document.createElement("img")
      const span = document.createElement("span")

      card.appendChild(headLine)
      card.appendChild(author)
      author.appendChild(imgContainer)
      card.appendChild(span)
      imgContainer.appendChild(img)

      headLine.textContent = article.headline
      img.src = article.authorPhoto
      span.textContent = `By ${article.authorName}`

      card.classList.add("card")
      headLine.classList.add("headline")
      author.classList.add("author")
      imgContainer.classList.add("img-container")

      return card
  }