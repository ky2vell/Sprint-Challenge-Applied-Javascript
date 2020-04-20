// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each 'article' in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that returns the following markup:
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
// Use your function to create a card for each of the articles and add the card to the DOM.

const cardsDiv = document.querySelector('.cards-container');

axios.get('https://lambda-times-backend.herokuapp.com/articles')
    .then(res => {
        let allCards = res.data.articles;
        Object.keys(allCards).forEach(key => {
            let newCards = (key, allCards[key]);
            newCards.forEach(article => cardsDiv.appendChild(cardCreator(article)));
        })
    })
    .catch(console.log);

function cardCreator(data) {
    const card = document.createElement('div');
    const headLine = document.createElement('div');
    const author = document.createElement('div');
    const imageDiv = document.createElement('div');
    const image = document.createElement('img');
    const authorsName = document.createElement('span');

    card.classList.add('card');
    headLine.classList.add('headline');
    author.classList.add('author');
    imageDiv.classList.add('img-container');

    headLine.textContent = data.headline;
    image.src = data.authorPhoto;
    authorsName.textContent = `By ${data.authorName}`;

    card.appendChild(headLine);
    card.appendChild(author);
    author.appendChild(imageDiv);
    imageDiv.appendChild(image);
    author.appendChild(authorsName);

    return card;
}
