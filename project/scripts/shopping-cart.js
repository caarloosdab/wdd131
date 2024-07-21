const hamburger = document.querySelector('.hamburger');
const links = document.querySelector('#links');

hamburger.addEventListener('click', () => {
  links.classList.toggle('show');
});

const products = [
    {
        productName: "meat",
        category: "meat",
        price: 13,
    },
    {
        productName: "ground-beef",
        category: "meat",
        price: 22,
    },
    {
        productName: "shrimp",
        category: "meat",
        price: 16,
    },
    {
        productName: "avocado",
        category: "fruit",
        price: 9,
    },
    {
        productName: "banana",
        category: "fruit",
        price: 11,

    },
    {
        productName: "apple",
        category: "fruit",
        price: 6,
    }

];


const cart = document.querySelectorAll('.bProducts');
const list = document.querySelector('ul');
const totalElement = document.querySelector('#total');

let totalPrice = 0;

cart.forEach((item) => {
  item.addEventListener('click', (e) => {
    const productName = e.target.id;
    const product = products.find((p) => p.productName === productName);
    if (product) {
      const listItem = document.createElement('li');
      listItem.innerHTML = `<a href="#" class="delete">X</a> ${product.productName}.... $${product.price}`;
      list.appendChild(listItem);

      totalPrice += product.price;
      totalElement.textContent = `Total:  $${totalPrice}`;

      const deleteButton = listItem.querySelector('.delete');
      deleteButton.addEventListener('click', (e) => {
        e.preventDefault();
        listItem.remove();
        totalPrice -= product.price;
        totalElement.textContent = `Total:  $${totalPrice}`;
      });
    }
  });
});




