"use strict"
document.querySelector("#button").addEventListener("click", startCar);


function startCar() {
    document.querySelector(".car").classList.add("carStart");

    document.querySelector(".wheels").classList.add("wheelsStart");
    document.querySelector(".wheels2").classList.add("wheelsStart");
}