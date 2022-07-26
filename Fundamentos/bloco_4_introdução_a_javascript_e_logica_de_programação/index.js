// let info = {
//     personagem: 'Margarida',
//     origem: 'Pato Donald',
//     nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
//     recorrente: 'Sim'
//   };
// //   console.log("Bem-vinda, ", info.personagem)

// info["recorrente"] = "Sim";


// console.log(info)

// for (let key in info ) {
//   console.log(key);
// }

// for (let key in info) {
//     console.log(info[key])
// }

// let info2 = {
//     personagem: "Tio Patinhas",
//     origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
//     nota: "O último MacPatinhas",
//     recorrente: "Sim"
// }
// console.log(info.personagem,"e",info2.personagem);
// console.log(info.origem,"e",info2.origem);
// console.log(info.nota,"e",info2.nota);

// if(info.recorrente === "Sim" && info2.recorrente === "Sim") {
//     console.log("Ambos recorrentes")
// }

// for (let i in info && info2) {
//     if (info2.recorrente === "Sim" && info.recorrente === "Sim") {
//     info2.recorrente = "Ambos recorrentes"
//     }
//     console.log(info[i], " e ", info2[i])
// }
    // for (let i2 in info2) {
        
    // }
    // console.log(info[i], info2[i2]);

let leitor = {
    nome: 'Julia',
    sobrenome: 'Pessoa',
    idade: 21,
    livrosFavoritos: [
      {
        titulo: 'O Pior Dia de Todos',
        autor: 'Daniela Kopsch',
        editora: 'Tordesilhas',
      },
    ],
  };

    // console.log("O livro favorito de ", leitor.nome, leitor.sobrenome, " se chama ", leitor.livrosFavoritos[0].titulo);
    
leitor.livrosFavoritos.push({titulo:'Harry Potter e o Prisioneiro de Azkaban', autor:'JK Rowling', editora:'Rocco'});
console.log(leitor.nome,"tem",leitor.livrosFavoritos.length,"livros favoritos");