const body = document.querySelector(`body`);
body.style.backgroundColor = "pink";
body.style.opacity = '55%'
body.style.display = "flex";
body.style.justifyContent ="center";
body.style.overflow = "hidden";
body.style.alignItems = "center";

const div2 = document.createElement("div")
div2.style.width = "800px";
div2.style.height = "800px";
div2.style.display = "flex";
div2.style.backgroundColor = "purple";
div2.style.opacity = '50%';
div2.style.alignItems = "center";
div2.style.justifyContent = `center`
div2.style.flexDirection = `column`
div2.style.borderRadius = "15px";
div2.style.backgroundImage = "url(maxresdefault.svg)";
div2.style.backgroundRepeat = `no-repeat`;
div2.style.backgroundSize = `contain`
body.appendChild(div2);

const textoDiv = document.createElement("h1");
textoDiv.textContent = "Descubra sua Média";
textoDiv.style.color = 'white';
div2.appendChild(textoDiv);

const nome = document.createElement("input")
nome.placeholder = "Digite seu nome: ";
nome.style.display = "flex-end";
nome.style.color = "blue";
div2.appendChild(nome);

const nota_1 = document.createElement("input")
nota_1.placeholder = "Digite a 1° nota: ";
nota_1.style.display = "flex-end";
nota_1.style.color = "gray";
nota_1.style.margin = "25px";
div2.appendChild(nota_1);

const nota_2 = document.createElement("input")
nota_2.placeholder = "Digite a 2° nota: ";
nota_2.style.display = "flex-end";
nota_2.style.color = "gray";
nota_2.style.margin = '25px';
div2.appendChild(nota_2);

const nota_3 = document.createElement("input")
nota_3.placeholder = "Digite a 3° nota: ";
nota_3.style.display = "flex-end";
nota_3.style.color = "gray";
nota_3.style.margin = '25px';
div2.appendChild(nota_3);

const bt = document.createElement("button")
bt.textContent = "Calcular Média";
bt.style.display = "flex-end";
div2.appendChild(bt);
bt.addEventListener(`click`, function (){
   var media = (parseFloat(nota_1.value) + parseFloat(nota_2.value) + parseFloat(nota_3.value))/3

   const h = document.createElement(`h1`);
   h.textContent = `sua média é ${media}`;
   h.style.color = `white`
   div2.appendChild(h)
})





