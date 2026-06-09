//preparando o formulario pelo ID
const form = document.getElementById("formCadastro")

//pegando o nome digitado no campo input
const inputNome = document.getElementById("nome")

//lista de exibição de alunos cadastrados
const listaAlunos = document.getElementById("listaAlunos")

//array para armazenar os nomes ("nosso BD")
let alunos = [];
console.log