"use strict"

const semaforo = document.getElementById("semaforo")
let idInterval

const ligarVermelho = () => semaforo.src = "img/vermelho.png"
const ligarAmarelo = () => semaforo.src = "img/amarelo.png"
const ligarVerde = () => semaforo.src = "img/verde.png"
const semaforoDesligado = () => semaforo.src.includes("desligado")


function trocarCor() {

   
    if (semaforoDesligado()) {
        ligarVermelho()
    }  else {
        
    } 
}

const ligarAutomatico = () => idInterval =  setInterval(trocarCor, 1000)


document.getElementById("vermelho").addEventListener("click", ligarVermelho)
document.getElementById("amarelo").addEventListener("click", ligarAmarelo)
document.getElementById("verde").addEventListener("click", ligarVerde)
document.getElementById("automatico").addEventListener("click", ligarAutomatico)