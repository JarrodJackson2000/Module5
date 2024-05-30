let jsonData = {};

let categoriesArray = [];

async function fetchData() {
  const response = await fetch("http://localhost:3000/Data/Retrieve");
  jsonData = await response.json();
}

async function handleData() {
  await fetchData();
  const categories = new Set();
  for (const product of jsonData.res) {
    categories.add(product.category);
  }
  categoriesArray = Array.from(categories);
}

async function addDropdown() {
  await handleData();
  const categoryTemplate = document
    .getElementById("categoryTemplate")
    .content.cloneNode(true);
  const categoryElements = categoryTemplate.querySelectorAll(".category");
  categoriesArray.forEach((category, index) => {
    if (index < categoryElements.length) {
      categoryElements[index].innerText = category;
    }
  });

  document.querySelector("#insertCategory").appendChild(categoryTemplate);
}

async function addCard() {
  await addDropdown();

  jsonData.res.forEach((data) => {
    const cardTemplate = document
      .getElementById("cardTemplate")
      .content.cloneNode(true);

    cardTemplate.querySelector(".card-img-top").src = data.image;
    cardTemplate.querySelector(".card-title").innerText = data.title;
    cardTemplate.querySelector(".card-subtitle").innerText = data.category;
    cardTemplate.querySelector(".card-text").innerText = data.description;
    cardTemplate.querySelector(
      ".text-body-secondary"
    ).innerText = `$${data.price}`;
    cardTemplate.querySelector(
      ".text-body-rating"
    ).innerText = `${data.rating.rate}/5`;

    document.querySelector("#insertTemplate").appendChild(cardTemplate);
  });
}

function organiseCategory(categoryText) {
  document.getElementById("insertTemplate").innerHTML = "";
  const categoryArray = [];
  jsonData.res.forEach((data) => {
    if (data.category == categoryText) {
      categoryArray.push(data);
    }
  });
  categoryArray.forEach((data) => {
    const cardTemplate = document
      .getElementById("cardTemplate")
      .content.cloneNode(true);

    cardTemplate.querySelector(".card-img-top").src = data.image;
    cardTemplate.querySelector(".card-title").innerText = data.title;
    cardTemplate.querySelector(".card-subtitle").innerText = data.category;
    cardTemplate.querySelector(".card-text").innerText = data.description;
    cardTemplate.querySelector(
      ".text-body-secondary"
    ).innerText = `$${data.price}`;
    cardTemplate.querySelector(
      ".text-body-rating"
    ).innerText = `${data.rating.rate}/5`;

    document.querySelector("#insertTemplate").appendChild(cardTemplate);
  });
}

function searchFunction() {
  const searchTerm = document
    .getElementById("searchInput")
    .value.trim()
    .toLowerCase();

  const filteredData = jsonData.res.filter((data) =>
    data.title.toLowerCase().includes(searchTerm)
  );

  const insertTemplate = document.getElementById("insertTemplate");
  insertTemplate.innerHTML = "";

  const cardTemplate = document.getElementById("cardTemplate");

  filteredData.forEach((data) => {
    const cardClone = cardTemplate.content.cloneNode(true);

    cardClone.querySelector(".card-img-top").src = data.image;
    cardClone.querySelector(".card-title").innerText = data.title;
    cardClone.querySelector(".card-subtitle").innerText = data.category;
    cardClone.querySelector(".card-text").innerText = data.description;
    cardClone.querySelector(
      ".text-body-secondary"
    ).innerText = `$${data.price}`;
    cardClone.querySelector(
      ".text-body-rating"
    ).innerText = `${data.rating.rate}/5`;

    insertTemplate.appendChild(cardClone);
  });
}

addCard();
