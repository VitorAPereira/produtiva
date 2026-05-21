/* SIDEBAR */

function toggleSidebar(){

document
.getElementById("sidebar")
.classList.toggle("active");

}

/* FILTRO */

function filterCategory(category){

let cards = document
.querySelectorAll(".product-card");

cards.forEach(card => {

if(category === "todos"){

card.style.display = "block";
return;

}

if(card.classList.contains(category)){

card.style.display = "block";

}else{

card.style.display = "none";

}

});

}

/* PESQUISA */

function searchProducts(){

let input = document
.getElementById("searchInput")
.value
.toLowerCase();

let cards = document
.querySelectorAll(".product-card");

cards.forEach(card => {

let text = card.innerText.toLowerCase();

if(text.includes(input)){

card.style.display = "block";

}else{

card.style.display = "none";

}

});

}