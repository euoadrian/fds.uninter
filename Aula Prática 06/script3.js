const campo1 = document.querySelector("#campo1");
const campo2 = document.querySelector("#campo2");
const seletor= document.querySelector("#operacao");
let resposta = document.querySelector("#resposta");


seletor.addEventListener("change", calcular); //Exercultar quando for mudado

campo1.addEventListener("keyup", calcular); //Pode ser change também mas o change enquanto tá editando não modifica
campo2.addEventListener("keyup", calcular); //O Keyup muda quando está digitando ou quando tira o dedo da tecla, também tem o keydown

function calcular() {

   if(campo1.value === '' || campo2.value === ''){
    resposta.classList.add("problema");
    resposta.innerHTML="Campo Vazio";
    setTimeout(()=>{
        resposta.classList.remove("problema");
        resposta.innerHTML='';
   },3000);
   } 
   else{
            const valor1 = parseInt(campo1.value);
            const valor2 = parseInt(campo2.value);
    
            const operacao = seletor.value;
    
          
            if (operacao === "somar")
           
                resposta.innerHTML = valor1 + valor2;
    
            if (operacao === "subtrair")
                resposta.innerHTML = valor1 - valor2;
    
            if (operacao === "multiplicar")
                resposta.innerHTML = valor1 * valor2;
    
            if (operacao === "dividir")
                resposta.innerHTML = valor1 / valor2;
   }
    
}
    