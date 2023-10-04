// capturar os elementos da pagina
const frm= document.querySelector("form");
const dvPalco= document.querySelector("#divPalco");

const POLTRONAS=240;//quantidade de poltronas

const reservadas =[];//Vetor com as poltronas Reservadas

window.addEventListener("load", () => {
    const ocupadas = localStorage.getItem("teatroOcupadas")
    ? localStorage.getItem("teatroOcupadas").split(";")
    : [];

    for(let i=1;i<=POLTRONAS;i++){
        const figure = document.createElement("figure");
        const imgStatus = document.createElement("img");

        imgStatus.src= ocupadas.includes(i.toString())
            ?"img/ocupada.jpg"
            :"img/disponivel.jpg";
        imgStatus.className = "Poltrona"

        const figureCap= document.createElement("figcaption");

        //quantidade de 00 antes do numero da poltrona
        const zeros = i< 10? "00": i<100 ? "0": "";

        //cria o numero da poltrona
        const num = document.createTextNode(`[${zeros}${i}]`);

        figureCap.appendChild(num);
        figure.appendChild(imgStatus);
        figure.appendChild(figureCap);
        
        if(i%24 == 12 ) figure.style.marginRight = "60px";

        dvPalco.appendChild(figure);

        if( i % 24 == 0 && dvPalco.appendChild(document.createElement("br")));
    }


})

frm.addEventListener("submit", (e) => {
    e.preventDefault();

    const poltrona = Number(frm.inPoltrona.value);

    const ocupadas= localStorage.getItem("teatroOcupadas")
    ?localStorage.getItem("teatroOcupadas").split(";")
    : [];// salva algumas informacoes.
    if(poltrona > POLTRONAS){
        alert("Informe um numero de poltrona valido");
        frm.inPoltrona.value = "";
        frm.inPoltrona.focus();
        return;
    }
    if(ocupadas.includes(poltrona.toString())){
        alert(`Poltrona ${poltrona} ja esta reservada`);
        frm.inPoltrona.value = "";
        frm.inPoltrona.focus();
        return;
    }
    //captura a imagem da poltrona, filha de divPalco. E -1 pois comeca em zero. 0.
    const imgPoltrona = dvPalco.querySelectorAll("img")[poltrona -1];
    imgPoltrona.src= "img/reservada.jpg"//modifica ao tributo da imagem
    reservadas.push(poltrona);

    frm.inPoltrona.value = "";
    frm.inPoltrona.focus();

})

frm.btConfirmar.addEventListener("click", () => {
    
    if(reservadas.length == 0 ){
        alert("Nao ha poltronas reservadas");
        frm.inPoltrona.value = "";
        frm.inPoltrona.focus();
        return;
    }

    

    
    const ocupadas= localStorage.getItem("teatroOcupadas")
    ?localStorage.getItem("teatroOcupadas").split(";")
    : [];// salva algumas informacoes.

    for(let i = reservadas.length -1; i >= 0; i--){
        ocupadas.push(reservadas[i]);
        const imgPoltrona= dvPalco.querySelectorAll("img")[reservadas[i] -1];
        imgPoltrona.src = "img/ocupada.jpg"

        reservadas.pop();
    }
    localStorage.setItem("teatroOcupadas", ocupadas.join(";"));

})