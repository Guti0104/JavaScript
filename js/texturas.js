"use strict";



let contenedor_texturas= document.querySelector(".texturas");
let zona= document.querySelector(".zona");


let trasferir_textura= (n,e)=>{   //funciona para transeferir textura
  e.dataTransfer.setData("textura",n); //obteniendo los datos de la clase textura
}

zona.addEventListener("dragover",(e)=>{ //dragover y el prevent defual para permitir desplazar aqui
    e.preventDefault();
})

zona.addEventListener("drop",(e)=>{ //cuando soltamos se ejecuta el evento
    let n= e.dataTransfer.getData("textura"); //captura los datos
    zona.style.background=`url(img/texturas/descarga${n}.jpg)`; //cambiamos el estilo
})

for(let i=1;i<contenedor_texturas.children.length+1;i++)
{
    let textura_select= document.querySelector(`.textura${i}`);
    textura_select.addEventListener("dragstart",(e)=>{
        trasferir_textura(i,e);
    })
    console.log(i);
    console.log(textura_select);
}