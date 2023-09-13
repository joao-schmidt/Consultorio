// capturar os elementos da pagina
const frm= document.querySelector("form");
const dvPalco= document.querySelector("#divPalco");

const POLTRONAS =240;//quantidade de poltronas

const reservadas =[];//Vetor com as poltronas Reservadas

window.addEventListener("load", () => {
    const ocupadas = localStorage.getItem("teatroOcupadas")
    ? localStorage.getItem("teatroOcupadas").split(";")
    : [];

    for(let i=1;i<=POLTRONAS;i++){
        const figure = document.createElement("figure");
        const imgStatus = document.createElement("img");

        imgStatus.src= ocupadas.includes(i.toString())
            ? "img/ocupada.jpg"
            :"img/disponivel.jpg";
        imgStatus.className = "poltrona "

        const figureCap= document.createElement("figcaption");

        //quantidade de 00 antes do numero da poltrona
        const zeros = i< 10? "00": i<100 ? "0": "";

        //cria o numero da poltrona
        const num = document.createTextNode(`[${zeros}${i}]`);

        figureCap.appendChild(num);
        figure.appendChild(imgStatus);
        figure.appendChild(figureCap);

        dvPalco.appendChild(figure);

    }


});