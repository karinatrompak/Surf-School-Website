function getInfo() {
	var username = document.getElementById('username').value
	var password = document.getElementById('password').value

    if (username.value == "admin" && password.value == "12345"){
		localStorage.setItem("acesso",true);
		alert("Logado com sucesso")
		window.location.href="http://localhost:3000/inscricao.html";
	} else{
    alert("Login inválido")
  }
};