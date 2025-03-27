const cardsData = [
    {
        id: "1-unit",
        title: "1 Unit",
        discount: "10% Off",
        popular: false,
        currentPrice: "$10.00 USD",
        originalPrice: "$20.40 USD",
        sizes: ["S", "M", "L"],
        colors: ["Black", "White", "Gray"]
    },
    {
        id: "2-unit",
        title: "2 Unit",
        discount: "20% Off",
        popular: true,
        currentPrice: "$18.00 USD",
        originalPrice: "$24.40 USD",
        sizes: ["S", "M", "L"],
        colors: ["Black", "White", "Gray"]
    },
    {
        id: "3-unit",
        title: "3 Unit",
        discount: "30% Off",
        popular: false,
        currentPrice: "$25.00 USD",
        originalPrice: "$36.00 USD",
        sizes: ["S", "M", "L", "XL"],
        colors: ["Black", "White", "Blue"]
    }
    // Add more cards as needed
];

function createCard(cardData) {
    const cardContainer = document.createElement('div');
    cardContainer.className = 'card-container';

    cardContainer.innerHTML = `
      <div class="card-content">
        <div class="card-header">
          <div class="card-header-label">
            <input type="radio" name="bogo-option" id="${cardData.id}" value="${cardData.title}" />
            <label for="${cardData.id}" class="label">${cardData.title}</label>
            <label for="${cardData.id}" class="offer-label">${cardData.discount}</label>
          </div>
          ${cardData.popular ? '<div class="popular-tag">MOST POPULAR</div>' : ''}
          <div class="card-header-price">
            <span class="top-value">${cardData.currentPrice}</span><br>
            <span class="stashed-value">${cardData.originalPrice}</span>
          </div>
        </div>
        <div class="card-body">
          <div class="card-body-content">
            <br>
            <span class="span-text">#1</span>
            <span class="span-text">#2</span>
          </div>
          <div class="card-body-content">
            <span class="span-label">Size</span>
            <select class="select-size" name="size1-${cardData.id}" id="size1-${cardData.id}">
              ${cardData.sizes.map(size => `<option value="${size.toLowerCase()}">${size}</option>`).join('')}
            </select>
            <select class="select-size" name="size2-${cardData.id}" id="size2-${cardData.id}">
              ${cardData.sizes.map(size => `<option value="${size.toLowerCase()}">${size}</option>`).join('')}
            </select>
          </div>
          <div class="card-body-content">
            <span class="span-label">Colour</span>
            <select class="select-size" name="colour1-${cardData.id}" id="colour1-${cardData.id}">
              ${cardData.colors.map(color => `<option value="${color.toLowerCase()}">${color}</option>`).join('')}
            </select>
            <select class="select-size" name="colour2-${cardData.id}" id="colour2-${cardData.id}">
              ${cardData.colors.map(color => `<option value="${color.toLowerCase()}">${color}</option>`).join('')}
            </select>
          </div>
        </div>
      </div>
    `;

    return cardContainer;
}

document.addEventListener('DOMContentLoaded', function() {
    const cardsContainer = document.getElementById('cards-container');
    let currentlyOpenCard = null;
  
    cardsData.forEach((cardData) => {
      const card = createCard(cardData);
      cardsContainer.appendChild(card);
      
      const cardHeader = card.querySelector('.card-header');
      const cardBody = card.querySelector('.card-body');
      const radioInput = card.querySelector('input[type="radio"]');
      
      // Initialize - only popular card is open
      if (cardData.popular) {
        cardBody.style.display = 'flex';
        card.classList.add('active'); // Add highlight
        radioInput.checked = true;
        currentlyOpenCard = card;
      } else {
        cardBody.style.display = 'none';
      }
      
      cardHeader.addEventListener('click', function() {
        // If clicking a different card
        if (currentlyOpenCard && currentlyOpenCard !== card) {
          currentlyOpenCard.querySelector('.card-body').style.display = 'none';
          currentlyOpenCard.classList.remove('active'); // Remove old highlight
        }
        
        // Toggle current card
        if (cardBody.style.display === 'none') {
          cardBody.style.display = 'flex';
          card.classList.add('active'); // Add new highlight
          radioInput.checked = true;
          currentlyOpenCard = card;
        } else {
          cardBody.style.display = 'none';
          card.classList.remove('active');
          currentlyOpenCard = null;
        }
      });
    });
  });

// document.addEventListener('DOMContentLoaded', function () {
//     const cardHeader = document.querySelector('.card-header');
//     const cardBody = document.querySelector('.card-body');
//     const radioInput = document.querySelector('input[type="radio"]');

//     // Initially hide the card body
//     cardBody.style.display = 'none';

//     // Add click event to the header
//     cardHeader.addEventListener('click', function () {
//         if (cardBody.style.display === 'none') {
//             cardBody.style.display = 'flex';
//             radioInput.checked = true;
//         } else {
//             cardBody.style.display = 'none';
//         }
//     });
// });