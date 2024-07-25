document.addEventListener("DOMContentLoaded", function() {
    const hamburger = document.querySelector('.hamburger');
    const links = document.querySelector('#links');

    hamburger.addEventListener('click', () => {
        links.classList.toggle('show');
    });
});

const products = [
	{
	  productName: "Chicken Meat",
	  category: "meat",
	  price: 13,
	  imageUrl:
	  "https://github.com/caarloosdab/wdd131/blob/main/project/images/meat.jpg?raw=true"
	},
    {
        productName: "beef",
        category: "meat",
        price: 22,
        imageUrl:
        "https://github.com/caarloosdab/wdd131/blob/main/project/images/ground-beef.jpg?raw=true"
    },
    {
        productName: "shrimp",
        category: "meat",
        price: 16,
        imageUrl:
        "https://home-tyme.com/wp-content/uploads/2016/04/btckdshrimp-scaled.jpg"
    },
    {
        productName: "avocado",
        category: "fruit",
        price: 9,
        imageUrl:
        "https://raw.githubusercontent.com/caarloosdab/wdd131/main/project/images/avocado.png"
    },
    {
        productName: "banana",
        category: "fruit",
        price: 11,
        imageUrl:
        "https://raw.githubusercontent.com/caarloosdab/wdd131/main/project/images/banana.png"
    },
    {
        productName: "apple",
        category: "fruit",
        price: 6,
        imageUrl:
        "https://raw.githubusercontent.com/caarloosdab/wdd131/main/project/images/apple.png"
    }
	
  ];


document.getElementById('sort-meat').addEventListener('click', () => {
  sortCards('meat');
});

document.getElementById('sort-fruit').addEventListener('click', () => {
  sortCards('fruit');
});

document.getElementById('sort-all').addEventListener('click', () => {
  sortCards('all');
});


function sortCards(category) {
  const cardsContainer = document.getElementById('cards-container');
  cardsContainer.innerHTML = ''; 

  products.forEach((product) => {
    if (category === 'all' || product.category === category) {
      const cardHTML = `
        <div class="card">
          <img loading="lazy" src="${product.imageUrl}" alt="${product.productName}" width= 250 >
          <h2>${product.productName}</h2>
          <p>Price: $${product.price}</p>
          <button onclick="window.location.href='index.html';"> BUY </button>
        </div>
      `;
      cardsContainer.innerHTML += cardHTML;
    }
  });
}