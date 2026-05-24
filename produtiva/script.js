function toggleSidebar(){

document
.getElementById("sidebar")
.classList.toggle("active");

}

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

/* COMENTARIOS */

function addComment(){

let input = document
.getElementById("commentInput");

if(input.value.trim() === "") return;

let comments = JSON.parse(
localStorage.getItem("comments")
) || [];

comments.push(input.value);

localStorage.setItem(
"comments",
JSON.stringify(comments)
);

renderComments();

input.value = "";

}

function renderComments(){

let comments = JSON.parse(
localStorage.getItem("comments")
) || [];

let list = document
.getElementById("commentsList");

if(!list) return;

list.innerHTML = "";

comments.forEach(comment => {

list.innerHTML += `

<div class="comment">

${comment}

</div>

`;

});

}

renderComments();