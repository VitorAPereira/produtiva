function loginUser(){

const nome =
document.getElementById("loginName").value;

if(nome.trim() === ""){

alert("Digite um nome");

return;

}

localStorage.setItem(
"usuarioLogado",
nome
);

window.location.href = "index.html";

}

function getUsuario(){

return localStorage.getItem("usuarioLogado");

}

function renderProducts(lista){

const grid =
document.getElementById("productsGrid");

if(!grid) return;

grid.innerHTML = "";

lista.forEach(produto => {

grid.innerHTML += `

<a href="${produto.pagina}" class="product-link">

<div class="product-card">

<img src="${produto.imagem}">

<h3>${produto.nome}</h3>

<p>${produto.descricao}</p>

</div>

</a>

`;

});

}

function searchProducts(){

let input =
document.getElementById("searchInput")
.value
.toLowerCase();

const filtrados =
produtos.filter(produto =>

produto.nome
.toLowerCase()
.includes(input)

);

renderProducts(filtrados);

}

function favoriteProduct(nome, imagem, pagina){

const usuario = getUsuario();

if(!usuario){

alert("Faça login primeiro!");

window.location.href = "../login.html";

return;

}

let favoritos = JSON.parse(

localStorage.getItem(
`favoritos_${usuario}`
)

) || [];

favoritos.push({
nome,
imagem,
pagina
});

localStorage.setItem(

`favoritos_${usuario}`,

JSON.stringify(favoritos)

);

alert("Produto favoritado!");

}

function renderFavorites(){

const usuario = getUsuario();

const grid =
document.getElementById("favoritesGrid");

if(!grid) return;

if(!usuario){

grid.innerHTML = `
<p>
Faça login para ver favoritos.
</p>
`;

return;

}

let favoritos = JSON.parse(

localStorage.getItem(
`favoritos_${usuario}`
)

) || [];

grid.innerHTML = "";

favoritos.forEach(produto => {

grid.innerHTML += `

<a href="${produto.pagina}" class="product-link">

<div class="product-card">

<img src="${produto.imagem}">

<h3>${produto.nome}</h3>

</div>

</a>

`;

});

}

function changeImage(src){

document.getElementById("mainImage")
.src = src;

}

function addComment(){

const usuario = getUsuario();

if(!usuario){

alert("Faça login!");

return;

}

const input =
document.getElementById("commentInput");

if(input.value.trim() === "") return;

let comments =
JSON.parse(localStorage.getItem("comments"))
|| [];

comments.push(`
<b>${usuario}</b><br>${input.value}
`);

localStorage.setItem(
"comments",
JSON.stringify(comments)
);

renderComments();

input.value = "";

}

function renderComments(){

const list =
document.getElementById("commentsList");

if(!list) return;

let comments =
JSON.parse(localStorage.getItem("comments"))
|| [];

list.innerHTML = "";

comments.forEach(comment => {

list.innerHTML += `

<div class="comment">

${comment}

</div>

`;

});

}

if(typeof produtos !== "undefined"){

renderProducts(produtos);

}

renderFavorites();

renderComments();