let i = 0
const BtnInserir = document.getElementById("Btn_Inserir")
const Compras = document.getElementById("Compras")
const Tarefas = document.getElementById("Tarefas")
const Texto = document.getElementById("TxtTexto")

BtnInserir.addEventListener("click", SetText)


function SetText(){
    const idLi = "Li_" + i;
    const li = document.createElement("li")
    const btnRemove = document.createElement("button")
    btnRemove.innerText = "Excluir"
    btnRemove.className = "btnRemove"
    li.id = idLi
    const RemoverLi = () => {
        document.getElementById(idLi).remove()
    }
    btnRemove.addEventListener("click", RemoverLi)
    li.innerText = Texto.value
    li.appendChild(btnRemove)
    if(document.getElementById("radioCompras").checked){
        Compras.appendChild(li)
    }
    if(document.getElementById("radioTarefas").checked){
        Tarefas.appendChild(li)
    }
    i++
}