const frm= document.querySelector("form");
const resp= document.querySelector("h3");

//cria um ouvinte para o evento submit
frm.addEventListener("submit", (e) => {
    e.preventDefault(); //para nao enviar o formulario

    {const Impar =   
        numero=Number(frm.inNumero.value)
            if(numero%2==1){
        resp.innerText= `${numero}: o número é impar.`
        resp.style.color="green"
    }}
    {const par=
        numero=Number(frm.inNumero.value)
        if(numero%2==0){
        resp.innerText= `${numero}: o numero é par`
        resp.style.color="red"
        }}
    

})
frm.addEventListener("reset", () =>{
    resp.innerText = "";
})

