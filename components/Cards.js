// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-api.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each article in the response.
// This won't be as easy as just iterating over an array though.
//

axios
.get("https://lambda-times-api.herokuapp.com/articles") 
.then( data => {
    const articles = data.data.articles;
    for (const value of Object.entries(articles)) {
        value[1].forEach(element => {
            const card = singleCard(element);
            card.classList.add(value[0]);
            document.querySelector(".cards-container").appendChild(card); // Use your function to create a card for each of the articles, and append each card to the DOM.
        });
    }
})
.catch(err => {
    document.querySelector('.errors-container').appendChild(errorMsg());
    console.log("Error: ",err);

})

// Write a function that takes a single article object and returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//


function singleCard (artObj) {
    const card = document.createElement('div');
    const headline = document.createElement('div');
    const author = document.createElement('div');
    const imgContainer = document.createElement('div');
    const img = document.createElement('img');
    const name = document.createElement('span');

    card.classList.add('card');
    headline.classList.add('headline');
    author.classList.add('author');
    imgContainer.classList.add('img-container');

    img.setAttribute("src", artObj.authorPhoto);

    headline.textContent = artObj.headline;
    name.textContent = `By: ${artObj.authorName}`;

    card.appendChild(headline);
    card.appendChild(author);

    author.appendChild(imgContainer);
    author.appendChild(name);

    imgContainer.appendChild(img);

    // Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
    card.addEventListener('click', () => {
        console.log("Headline: ", headline.textContent);
    })

    return card;
} 

 function errorMsg () {
    const msgBox = document.createElement('div')
    msgBox.classList.add('error-msg');
    msgBox.style.color = 'red';
    msgBox.textContent = 'Something went wrong! Details are in console';

    return msgBox;
}

