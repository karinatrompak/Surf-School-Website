//BASE DE DADOS

let alunos = [

  {
    num: 1,
    nome: "Andreia",
    telemovel:"913234565",
    email: "andreia@gmail.com",
    aula: "Yoga"
  },
  
];


/// - CODIGO BASE PARA HOSTING DE WEB APP
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false}));

// parse application/json
app.use(bodyParser.json());

app.use(express.static('public'));

app.get("/mostrarAlunos",(req,res) =>{

    res.send(alunos);
  
});

app.put("/editarAluno/:id", (req,res) =>{
    const id = req.params.id;
    changeDesc(id);
    function changeDesc(id) {
      for (var i in alunos) {
        if (alunos[i].num == id) {
           alunos[i].num =  parseInt(req.body.num);
           alunos[i].nome =  req.body.nome;
           alunos[i].telemovel = req.body.telemovel;
           alunos[i].email = req.body.email;
           alunos[i].aula = req.body.aula;
           break; 
        }
    }
}
 res.send("Successful!");
  
});

app.delete("/apagarAluno/:id",(req,res) =>{
    // req.params.id é o valor que recebe pelo url que foi enviado pelo ajax
    const id = req.params.id;
    
    // procura dentro do array 
    const pos = alunos.map(alunos => alunos.num).indexOf(parseInt(id));
    alunos.splice(pos, 1);
    res.send("Successful!")
});

app.post('/criarAluno',(req,res)=>{

    let size = alunos.length + 1;
  
    data={
      num: size,
      nome: req.body.nome,
      telemovel: req.body.telemovel,
      email: req.body.email,
      aula: req.body.aula
    }
    alunos.push(data);
    res.send("Inscrição realizada com sucesso");
  
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
// --- 

