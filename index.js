console.log("connected");

const createCard = (cardData) => {

    const col = document.createElement("div")
    col.className = "col-auto"
    
    const card = document.createElement("div")
    card.className = "card"
    card.style.width = "250px"
    card.style.height = "100%"

    const cardBody = document.createElement("div")
    cardBody.className = "card-body"

    const cardImg = document.createElement("img")
    cardImg.className = "card-img-top"
    cardImg.src = cardData.image
    cardImg.alt = cardData.name

    const cardTitle = document.createElement("h4")
    cardTitle.className = "card-title"
    cardTitle.textContent = cardData.name

    const cardDescription = document.createElement("p")
    cardDescription.className = "card-text"
    cardDescription.textContent = cardData.description
    
    const cardLink = document.createElement("a")
    cardLink.classList.add("btn", "btn-dark")
    cardLink.textContent = "Recipe"

    cardBody.append(cardTitle, cardDescription, cardLink)
    card.append(cardImg, cardBody)
    col.appendChild(card)

    return col
}

const renderDesserts = (dessertData) => {
    // append row to the desserts-container
    // for each card, create a card el
    // Append card el to row
    const dessertsContainer = document.querySelector("#dessert-container")
    const row = document.createElement("div")
    row.classList.add("row","gy-3")

    dessertData.forEach(card => {
        const newCard = createCard(card)
        row.appendChild(newCard)
    })

    dessertsContainer.appendChild(row)

    

}

const fetchDesserts = () => {
  fetch("http://localhost:3000/desserts")
    .then((response) => {
      return response.json();
    })
    .then((desserts) => {
      renderDesserts(desserts);
    });
};

fetchDesserts()

/* 
    1. Fetch data
    2. Render cards
        a. Make Bootstrap row
        b. Loop over JSON and for each card, create: https://getbootstrap.com/docs/5.3/components/card/#example
            - col 
                - card 
                    - img
                    - card body
                        - card title
                        - card text
                        - primary button (recipe link)
        c. Append each col to the row
    3. Adjust row columns to auto
    4. Adjust gutters x and y to 3        
*/
