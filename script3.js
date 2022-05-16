const paragrafo = document.createElement("p")
paragrafo.innerHTML= "É CULPA DO MIKE!"

document.body.appendChild(paragrafo)



function mostraTelefone(){
    document.getElementById("telefone").style.display="block"
}

function apagar(){

    document.getElementById("telefone").style.display="none"

  

}