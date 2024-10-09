class Aluno {
    constructor(nome, telemovel, email, aula) {
        this.nome = nome;
        this.telemovel = telemovel;
        this.email = email;
        this.aula = aula;
    }
}

let aluno= {
    "nome": "",
    "telemovel":"",
    "email": "",
    "aula": ""
}

let arrAluno = [

];

let cont = 0;

document.getElementById("inserirAluno").onclick = function () { insert_Aluno(); };
document.getElementById("eliminaAluno").onclick = function () { elimina_Aluno(); };
document.getElementById("muda").onclick = function () { muda_Aluno() };



function insert_Aluno() {
    cont++;

    //INPUTS
    let nome = document.getElementById("nomeAluno").value;
    let telemovel = document.getElementById("TelemovelAluno").value;
    let email = document.getElementById("emailAluno").value;
    let aula = document.getElementById("AulaAluno").value;

    let aluno = new Aluno(nome, telemovel, email, aula)
    // CRIA ELEMENTOS DE FORMA DINAMICA!
    arrAluno.push(aluno);

    let element = document.createElement('tr');
    document.getElementById("mostrarAlunos").appendChild(element);

    let numeroAluno = document.createElement('td');
    numeroAluno.innerHTML = cont;
    element.appendChild(numeroAluno);

    let nomeElement = document.createElement('td');
    nomeElement.innerHTML = aluno.nome;
    element.appendChild(nomeElement);

    let telemovelElement = document.createElement('td');
    telemovelElement.innerHTML = aluno.telemovel;
    element.appendChild(telemovelElement);

    let emailElement = document.createElement('td');
    emailElement.innerHTML = aluno.email;
    element.appendChild(emailElement);

    let aulaElement = document.createElement('td');
    aulaElement.innerHTML = aluno.aula;
    element.appendChild(aulaElement);

}

function muda_Aluno() {

    let numeroAlunoMudar = document.getElementById("numeroAlunoMudar").value;

    let mudaNome = document.getElementById("mudaNome").value;
    let mudaTelemovel = document.getElementById("mudaTelemovel").value;
    let mudaEmail = document.getElementById("mudaEmail").value;
    let mudaAula = document.getElementById("mudaAula").value;

    console.log(numeroAlunoMudar, mudaNome);
    console.log(numeroAlunoMudar, mudaTelemovel);
    console.log(numeroAlunoMudar, mudaEmail);
    console.log(numeroAlunoMudar, mudaAula);

    arrAluno[numeroAlunoMudar - 1].nome = mudaNome;      
    arrAluno[numeroAlunoMudar - 1].telemovel = mudaTelemovel;
    arrAluno[numeroAlunoMudar - 1].email = mudaEmail;
    arrAluno[numeroAlunoMudar - 1].aula = mudaAula;


    console.log(arrAluno);
}

function elimina_Aluno() {

    let numeroAlunoEliminar = document.getElementById("numeroAlunoEliminar").value;

    arrAluno.splice(numeroAlunoEliminar - 1, 1)

    console.log(arrAluno);

    let AlunoEliminar = document.getElementById("mostrarAluno").childNodes[numeroAlunoEliminar];
    console.log(AlunoEliminar);
    document.getElementById("mostrarAluno").deleteRow(numeroAlunoEliminar);
    cont--;
    //Após apagar um número deve atualizar a página e voltar a escrever o array para assim ser mostrados os números corretamente.
}


    
