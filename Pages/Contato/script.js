function dadosFormulario(event){
    event.preventDefault();
    const nome = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    const novoContato = {
        nome : nome,
        email : email,
        mensagem : message
    }

    const contatos = JSON.parse(localStorage.getItem("contatoMensagens")) || [];

    contatos.push(novoContato);

    localStorage.setItem("contatoMensagens", JSON.stringify(contatos));

}

document.addEventListener("DOMContentLoaded", function(){
    document.getElementById("enviarForms").addEventListener("click", dadosFormulario)
});