import "regenerator-runtime"; /* for async await transpile */
import "../styles/main.css";

import("../DATA.json")
  .then(async function ({ restaurants }) {
    const cardItems = document.querySelector(".row");
    const restaurantss = await restaurants;
    console.log(restaurants);
    let cards = "";
    restaurantss.forEach((e) => {
      // console.log(e);
      cards += `
      <div class="cards">
      <img src="${e.pictureId}" alt="${e.name}"/>
      <div class="deskripsi">
        <h2 class="judul">${e.name}</h2>
        <h3>Rating : ${e.rating}
        <p>${e.description}</p>
      </div>
    </div>`;
    });
    cardItems.innerHTML = cards;
  })
  .catch((e) => {
    console.log(e);
  });

const menuToggle = document.querySelector(".menu-toggle");
menuToggle.addEventListener("click", function () {
  const toggleNav = document.querySelector(".nav-items");
  toggleNav.classList.toggle("nav-itemss");
});
