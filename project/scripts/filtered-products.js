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
	  price: 10,
	  imageUrl:
	  "https://pixabay.com/get/g4ea77d67544595e0a435f4fa3499f0200a4b87d033a058f5b7ee16328647d18febf571f6415ce4f7a2214d1b4205253120e79d0f891ec60fc2be0da7b477277182513143aff79bcdd692a2ad9832ef3d_640.jpg"
	},
    {
        productName: "beef",
        category: "meat",
        price: 10,
        imageUrl:
        "https://pixabay.com/get/gae543ed04729c38a87c37b6eab1ddde2739125c2f3c0543f71f3e42a0ee6f7fd513f916447926d984a37d4682e51d5b26db5d808a7f5812e4479a913ff39520fa9907761681445737ad830dc8f21ebc1_640.jpg"
    },
    {
        productName: "shrimp",
        category: "meat",
        price: 10,
        imageUrl:
        "https://home-tyme.com/wp-content/uploads/2016/04/btckdshrimp-scaled.jpg"
    },
    {
        productName: "avocado",
        category: "fruit",
        price: 10,
        imageUrl:
        "https://pixabay.com/get/gc621dd60957a9b11b317e3962ca7ca5cd3bc2f0b72f73fc03b171c367dfba02361ad748628730836a8842c2ffaa67878f0076634900f24ea2c8c94556433ccc151d6cb2eaeadf6191348ae222a8d4fe7_640.png"
    },
    {
        productName: "banana",
        category: "fruit",
        price: 10,
        imageUrl:
        "https://pixabay.com/get/g024e834701c56c4f0382a24d2140b305cdfefe75f4b89ee84d81572fbe9e30ace48dd21f1c179267570d1a366cdf037817cccf2c6b663bfb76b26f3d575d4fe83625b2504bc0a48874bdd52dc50dd10f_640.png"
    },
    {
        productName: "apple",
        category: "fruit",
        price: 10,
        imageUrl:
        "https://pixabay.com/get/g6c752b3fa0eca84661c199f7473e8ee2aaeb8011bcfb3cf7926020abcabc45e682d98b3389b136a878f172c6368d3c77e9e6f39e1be7ed692a9a1bf2387928ffd9e8207b699fc0afa354b6c769b0b691_640.png"
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
          <button> BUY </button>
        </div>
      `;
      cardsContainer.innerHTML += cardHTML;
    }
  });
}