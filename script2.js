let livros = []

const qtdLivros = Number(prompt("quantos livros salvos:"))

for(let i = 1; i <= qtdLivros; i++){
    let livro = prompt("nome do livro")
    livros.push(livro)
    let index = i - 1 
    console.log(livros[index])
}

console.log(livros)

const nomeLivro = prompt("Digite o nome do livro")

const livroRemovido = livros.indexOf(nomeLivro)

console.log('livroRemovido', livroRemovido)

if(livroRemovido != -1){
    livros.splice(livroRemovido,1)
}

console(livros)