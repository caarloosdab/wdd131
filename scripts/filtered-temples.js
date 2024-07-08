let currentYear = new Date().getFullYear();

let lastModified = document.lastModified;
document.getElementById("currentYear").textContent = currentYear;
document.getElementById("lastModified").textContent = `Last Modification: ${lastModified}`;



const temples = [
	{
	  templeName: "Aba Nigeria",
	  location: "Aba, Nigeria",
	  dedicated: "2005, August, 7",
	  area: 11500,
	  imageUrl:
	  "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
	},
	{
	  templeName: "Manti Utah",
	  location: "Manti, Utah, United States",
	  dedicated: "1888, May, 21",
	  area: 74792,
	  imageUrl:
	  "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
	},
	{
	  templeName: "Payson Utah",
	  location: "Payson, Utah, United States",
	  dedicated: "2015, June, 7",
	  area: 96630,
	  imageUrl:
	  "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
	},
	{
	  templeName: "Yigo Guam",
	  location: "Yigo, Guam",
	  dedicated: "2020, May, 2",
	  area: 6861,
	  imageUrl:
	  "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
	},
	{
	  templeName: "Washington D.C.",
	  location: "Kensington, Maryland, United States",
	  dedicated: "1974, November, 19",
	  area: 156558,
	  imageUrl:
	  "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
	},
	{
	  templeName: "Lima Perú",
	  location: "Lima, Perú",
	  dedicated: "1986, January, 10",
	  area: 9600,
	  imageUrl:
	  "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
	},
	{
	  templeName: "Mexico City Mexico",
	  location: "Mexico City, Mexico",
	  dedicated: "1983, December, 2",
	  area: 116642,
	  imageUrl:
	  "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
	},
	{
		templeName: 'Arequipa Peru Temple',
		location: 'Arequipa, Peru',
		dedicated: '2019, December 15',
		area: 26969,
		imageUrl: 
		'https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/arequipa-peru/400x250/4-48661c257177c19a0f39a3991b1a7e7aa0338487.jpeg'
	},
	{
		templeName: 'Belém Brazil Temple',
		location: 'Belem, Brazil',
		dedicated: '2022, November 20',
		area:  28675,
		imageUrl:
		'https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/belem-brazil/400x250/belem_brazil_temple_exterior2.jpg'
	},
	{
		templeName: 'Colonia Juárez Chihuahua Mexico Temple',
		location: 'Colonia Juárez, Chihuahua, Mexico',
		dedicated: '1999, March 6',
		area: 6800,
		imageUrl:
		'https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/colonia-juarez-chihuahua-mexico/400x250/colonia-juarez-mexico-temple-lds-126123-wallpaper.jpg'
		
	}
	
  ];

const mainnav = document.querySelector('nav')
const hambutton = document.querySelector('#menu');

hambutton.addEventListener('click', () => {
    mainnav.classList.toggle('show');
    hambutton.classList.toggle('show');
});

let actualPage = window.location.href;


const urlParams = new URLSearchParams(window.location.search);
const queryParamType = urlParams.get('type');

document.querySelector("#home").classList.add("active");

function renderTemples(filteredTemples) {
    const templesAlbumSection = document.getElementById("album");
    templesAlbumSection.innerHTML = "";

    filteredTemples.forEach((temple) => {
        const templeCard = document.createElement("div");
        templeCard.classList.add("card");

        const templeImage = document.createElement("img");
        templeImage.src = temple.imageUrl;
        templeImage.alt = temple.templeName;
        templeImage.loading = "lazy";
        let width = temple.imageUrl.split("/")[8].split("x")[0];
        let height = temple.imageUrl.split("/")[8].split("x")[1];
        templeImage.width = width;
        templeImage.height = height;

        templeCard.appendChild(templeImage);

        const templeInfo = document.createElement("div");
        templeInfo.classList.add("info");

        const templeName = document.createElement("h3");
        templeName.textContent = temple.templeName;
        templeInfo.appendChild(templeName);

        const templeLocation = document.createElement("p");
        templeLocation.innerHTML = `<b>${temple.location}</b>`;
        templeInfo.appendChild(templeLocation);

        const templeDedicated = document.createElement("p");
        templeDedicated.innerHTML = `<b>Dedicated: </b>${temple.dedicated}`;
        templeInfo.appendChild(templeDedicated);

        const templeArea = document.createElement("p");
        templeArea.innerHTML = `<b>Area: </b>${temple.area.toLocaleString()} sqft`;
        templeInfo.appendChild(templeArea);

        templeCard.appendChild(templeInfo);

        templesAlbumSection.appendChild(templeCard);
    });
}


renderTemples(temples);


document.querySelectorAll("nav a").forEach((link) => {
    link.addEventListener("click", () => {
        const type = link.id;
        let filteredTemples;

        
        document.querySelectorAll("nav a").forEach((navLink) => {
            navLink.classList.remove("active");
        });

        if (type === "old") {
            
            filteredTemples = temples.filter(temple => temple.dedicated.split(",")[0] < 1900);
            document.querySelector("#old").classList.add("active");
        } else if (type === "new") {
            
            filteredTemples = temples.filter(temple => temple.dedicated.split(",")[0] > 2000);
            document.querySelector("#new").classList.add("active");
        } else if (type === "large") {
           
            filteredTemples = temples.filter(temple => temple.area > 90000);
            document.querySelector("#large").classList.add("active");
        } else if (type === "small") {
            
            filteredTemples = temples.filter(temple => temple.area < 10000);
            document.querySelector("#small").classList.add("active");
        } else {
            filteredTemples = temples;
            document.querySelector("#home").classList.add("active");
        }

        renderTemples(filteredTemples);
    });
});


