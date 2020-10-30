// STEP 2: Create tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-api.herokuapp.com/topics
// Once the data is resolved use console logs or breakpoints to review the structure.
// Iterate over the topics creating a new tab for each topic, and appending it to the DOM
// under the div.topics element.

axios
.get("https://lambda-times-api.herokuapp.com/topics")
.then(structure => {
    console.log("Structure: ",structure);
    const topics = structure.data.topics;
    topics.forEach(topic => {
        document.querySelector('.topics').appendChild(topicCreator(topic));
    })
})
.catch(err => {
    console.log("Error: ",err);
})

//
//  Each tab should look like this:
//    <div class="tab">topic here</div>
//
// NOTE: you do _not_ need to install axios as it's included in the HTML via script element

function topicCreator (data) {
    const tab = document.createElement('div');
    tab.classList.add('tab');
    tab.textContent = data;

    tab.addEventListener('click', () => {
        const cards = document.querySelectorAll('.card');
        cards.forEach(card => card.style.display = "none");
        const clickedCards = document.querySelectorAll(`.${data}`);
        clickedCards.forEach(card => card.style.display = "block");
    })

    return tab;
}