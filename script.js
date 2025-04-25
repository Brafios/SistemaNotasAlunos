// Array para armazenar os alunos
let alunos = [];

let aprovados = 0
let recuperacao = 0
let reprovados = 0

// Função para cadastrar um novo aluno
function cadastrarAluno(nome, nota1, nota2) {
  let aluno = {
    nome: nome,
    nota1: nota1,
    nota2: nota2,
    media: (nota1 + nota2) / 2
  };

  alunos.push(aluno)
}

// Função para mostrar o resultado de cada aluno
function mostrarResultados() {
  
//   fazer um contador de aprovados, reprovados e recuperação
  aprovados = 0
  recuperacao = 0
  reprovados = 0

  for (let aluno of alunos) {
    console.log(`Aluno: ${aluno.nome}`)
    console.log(`Média: ${aluno.media.toFixed(1)}`)

// incrementação da quantidade de aprovados e reprovados
    if (aluno.media >= 7 && aluno.media <= 10) {
      console.log("Situação: Aprovado ✅");
      aprovados++
    } 
    
    else if(aluno.media <= 6.9 && aluno.media >=4){
      console.log("Situação: Recuperação ❗")
      recuperacao++
    }

    else {
      console.log("Situação: Reprovado ❌");
      reprovados++
    }

    console.log("------------------")

  }
}

for(let i = 1 ; i <= 2 ; i++){
    nome = prompt("Digite seu nome:").toUpperCase();
    nota1 = Number(prompt("Digite sua sua primeira nota:"))
    nota2 = Number(prompt("Digite sua sua segunda nota:"))
    cadastrarAluno(nome, nota1, nota2);
}

mostrarResultados()

console.log(`Quantidade de aprovados: ${aprovados}`)
console.log("------------------")
console.log(`Quantidade em recuperação: ${recuperacao}`)
console.log("------------------")
console.log(`Quantidade de reprovados: ${reprovados}`)
console.log("------------------")


function removerAlunos(){
    const nomeAluno = prompt("digite o nome do aluno para remover").toUpperCase();
    const alunoRemovido = alunos.findIndex(aluno => aluno.nome === nomeAluno);
    console.log('alunoRemovido', alunoRemovido)
    if(alunoRemovido != -1){
        alunos.splice(alunoRemovido, 1)
    }
}

removerAlunos()

console.log("------------------")

mostrarResultados()

function atualizarNota(){
    const nomeAluno = prompt("digite o nome do aluno que queira alterar nota").toUpperCase();
    const notaAtualizada = alunos.findIndex(aluno => aluno.nome === nomeAluno);

    const menuNota = Number(prompt("Digite se quer altera apenas nota1 - 1 | apenas nota2 - 2 | alterar duas notas - 3"))
    switch (menuNota) {
      case 1:
        if(notaAtualizada !== -1){
          alunos[notaAtualizada].nota1 = Number(prompt("Digite nota entre 0 a 10"))
        }
      break;

      case 2:
        if(notaAtualizada !== -1){
          alunos[notaAtualizada].nota2 = Number(prompt("Digite nota entre 0 a 10"))
        }
      break;

      case 3:
        if(notaAtualizada !== -1){
          alunos[notaAtualizada].nota1 = Number(prompt("Digite nota entre 0 a 10"))
          alunos[notaAtualizada].nota2 = Number(prompt("Digite nota entre 0 a 10"))
        }
      break;
    
      default:
        console.log("opção invalida")
      break;
    }

}

atualizarNota()





