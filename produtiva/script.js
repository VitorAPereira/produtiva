function toggleSidebar(){

document
.getElementById("sidebar")
.classList.toggle("active");

}

/* RENDERIZAR */

function renderProducts(lista){

const grid = document
.getElementById("productsGrid");

if(!grid) return;

grid.innerHTML = "";

lista.forEach(produto => {

grid.innerHTML += `

<a href="produto.html?id=${produto.id}" class="product-link">

<div class="product-card">

<img src="${produto.imagem}">

<h3>
${produto.nome}
</h3>

<p>
${produto.descricao}
</p>

</div>

</a>

`;

});

}

/* FILTRO */

function filterCategory(category){

if(category === "todos"){

renderProducts(produtos);

return;

}

const filtrados = produtos.filter(produto =>
produto.categoria === category
);

renderProducts(filtrados);

}

/* PESQUISA */

function searchProducts(){

let input = document
.getElementById("searchInput")
.value
.toLowerCase();

const filtrados = produtos.filter(produto =>

produto.nome
.toLowerCase()
.includes(input)

);

renderProducts(filtrados);

}

/* FAVORITOS */

function favoriteCurrentProduct(){

const params = new URLSearchParams(window.location.search);

const id = Number(params.get("id"));

const produto = produtos.find(p => p.id === id);

let favoritos = JSON.parse(
localStorage.getItem("favoritos")
) || [];

const existe = favoritos.find(f => f.id === produto.id);

if(!existe){

favoritos.push(produto);

localStorage.setItem(
"favoritos",
JSON.stringify(favoritos)
);

alert("Produto favoritado!");

}

}

/* MOSTRAR FAVORITOS */

function renderFavorites(){

const grid = document
.getElementById("favoritesGrid");

if(!grid) return;

let favoritos = JSON.parse(
localStorage.getItem("favoritos")
) || [];

grid.innerHTML = "";

favoritos.forEach(produto => {

grid.innerHTML += `

<a href="produto.html?id=${produto.id}" class="product-link">

<div class="product-card">

<img src="${produto.imagem}">

<h3>
${produto.nome}
</h3>

<p>
${produto.descricao}
</p>

</div>

</a>

`;

});

}

/* PRODUTO */

function loadProduct(){

const params = new URLSearchParams(window.location.search);

const id = Number(params.get("id"));

const produto = produtos.find(p => p.id === id);

if(!produto) return;

document.getElementById("productName").innerText =
produto.nome;

document.getElementById("productCategory").innerText =
produto.categoria;

document.getElementById("productDescription").innerText =
produto.descricao;

document.getElementById("productImage").src =
produto.imagem;

/* SEMELHANTES */

const similares = produtos.filter(p =>
p.categoria === produto.categoria &&
p.id !== produto.id
);

const grid = document
.getElementById("similarProducts");

if(grid){

similares.forEach(prod => {

grid.innerHTML += `

<a href="produto.html?id=${prod.id}" class="product-link">

<div class="product-card">

<img src="${prod.imagem}">

<h3>
${prod.nome}
</h3>

<p>
${prod.descricao}
</p>

</div>

</a>

`;

});

}

}

/* COMENTÁRIOS */

function addComment(){

let input = document
.getElementById("commentInput");

if(!input) return;

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

/* INIT */

renderProducts(produtos);

renderFavorites();

renderComments();

loadProduct();