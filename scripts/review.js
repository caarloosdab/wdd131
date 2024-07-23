const currentyear = document.querySelector("#currentyear");
const lastModified = document.querySelector("#lastModified");
const counter = document.querySelector("#counter");

const today = new Date();

currentyear.innerHTML = today.getFullYear();
lastModified.innerHTML = "Last Modification: " + document.lastModified;

window.onload = () => {
  let loadCount = localStorage.getItem("loadCount");
  if (isNaN(loadCount)) {
    loadCount = 0;
  }
  localStorage.setItem("loadCount", ++loadCount);
  counter.innerText = `Counter: ${loadCount}`;
};