const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

const year = document.querySelector("#currentyear");
const today = new Date();
let nLastModif = document.lastModified;

hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');

year.innerHTML = `<span class="highlight">${today.getFullYear()}</span>`;


const date = document.lastModified
document.getElementById("lastModified").innerHTML = 'Last modified:  ' + date;
});