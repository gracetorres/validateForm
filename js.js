// let nombre = "die";
// console.log(nombre)

// nombre = "rosa";
// console.log(nombre)


// const numero = 12;
// console.log(numero)

// const numeDos = "12";
// console.log(numeDos)

// const resultado = 4 + numero;
// console.log(resultado)

// const resultadoDos = 4 + numeDos;
// console.log(resultadoDos)

// const apellido = "gutierrez"

// const juntado = nombre + " " + apellido;
// console.log(juntado)

// let nombreNuevo = "victor";
// let apellidoNuevo = "zapata";

// let primeraLetraNombre = nombreNuevo.substring(0,1);
// console.log(primeraLetraNombre)
// let primeraLetraApellido = apellidoNuevo.substring(0,1);
// console.log(primeraLetraApellido)

// const final = (primeraLetraNombre + primeraLetraApellido).toUpperCase();
// console.log(final)

// const letra = "string";
// const numeritos = 12312;
// const boolean = true;
// const vacio = undefined;

// const objetos = {};
// const array = [];


// const lapicero = {
//     color: "verde",
//     marca: "pilot",
//     precio: 2,
//     tipo: "tinta liquida",
//     familia: {
//         id:1,
//         nombre: "caros",
//         subfamilia: {
//             id: 2,
//             nombre: "utiles de oficina"
//         },
//     },
// };

// console.log(lapicero.familia.nombre)

// console.log(lapicero.familia.subfamilia.nombre)

// console.log(lapicero.marca);

// lapicero.marca = "faber castell";
// console.log(lapicero.marca)

// delete lapicero.tipo;
// console.log(lapicero)


// const listaDeArticulos = [
//     "lapicero", "borrador" , "tijera"
// ]

// console.log(listaDeArticulos)


// console.log(listaDeArticulos[1])

// listaDeArticulos[2] = "regla";
// console.log(listaDeArticulos)

// listaDeArticulos.push("cuaderno");
// console.log(listaDeArticulos)

// listaDeArticulos.splice(2,1)
// console.log(listaDeArticulos)

// const listaDeArticulosDos = [
//     {
//         id: 1,
//         nombre: "lapiz",
//         precio: 1.50,
//         familia: {
//             id: 2,
//             nombre: "utiles",
//             subfamilia: {
//                 id: 3,
//                 nombre: "ni??os",

//             }
//         }
//     },

//     {
//         id: 2,
//         nombre: "borrador",
//         precio: 0.50,
//         familia: {
//             id: 2,
//             nombre: "utiles",
//             subfamilia: {
//                 id: 3,
//                 nombre: "ni??os",

//             }
//         }
//     },

//     {
//         id: 3,
//         nombre: "cuadernoUniversitario",
//         precio: 30,
//         familia: {
//             id: 2,
//             nombre: "utiles",
//             subfamilia: {
//                 id: 4,
//                 nombre: "adultos",

//             }
//         }
//     },

// ]

// console.log(listaDeArticulosDos);

// const clon = [...listaDeArticulosDos];


// clon[1].familia.subfamilia.nombre = "general";
// console.log(clon)


// // let aumentador = listaDeArticulosDos.length;
// // do {
    
// //     aumentador = aumentador + 1;
    
// //     console.log("nombre del producto: ",listaDeArticulosDos[aumentador].nombre);
// //     console.log("nombre de la familia: ",listaDeArticulosDos[aumentador].familia.nombre);
  
// // } while (aumentador100);

// const carritoDeCompra = [
//     {
//         id: 1,
//         nombre: "celular",
//         precio: 100,
//         cantidad: 2,
//     },

//     {
//         id: 2,
//         nombre: "carcasa",
//         precio: 1000,
//         cantidad: 2,
//     },

//     {
//         id: 3,
//         nombre: "portacelular",
//         precio: 5,
//         cantidad: 10,
//     }
// ]

// let incrementador = 0;
// let sumaTotal = 0;
// do {

//     // re

//     const sumaDePrecios = carritoDeCompra[incrementador].precio * carritoDeCompra[incrementador].cantidad; //100 
//     sumaTotal = sumaDePrecios + sumaTotal;

//     incrementador = incrementador +1;

    
// } while (incrementador < carritoDeCompra.length);



// console.log(sumaTotal)




// const personas = [
//     {
//         id: 1,
//         nombre: "ana",
//         edad: 70,
        
//     },

//     {
//         id: 2,
//         nombre: "maria",
//         edad: 30,
        
//     },

//     {
//         id: 3,
//         nombre: "boo",
//         edad: 20,
        
//     }
// ]


// // let i = 0;
// // let resultadoFinal = 0;

// // do {
// //     const sumaDeEdasdes = personas[i].edad ;
// //     resultadoFinal = resultadoFinal + sumaDeEdasdes;    
// //     i = i + 1;

// // } while (i < personas.length);
// // console.log(resultadoFinal)

// // const sumFinal = resultadoFinal / personas.length;

// // console.log(sumFinal)






// // const numeros  = [ 2, 6, -1, -7, 4, -3, 10, -8];


// // let i = 0;
// // let numerosPositivos= [];
// // let numerosNegativos= [];



// // do {
// //     const numero = numeros[i];
// //     if(numero>0) {
// //         numerosPositivos.push(numero) ;
// //     }
// //     else {
// //         numerosNegativos.push(numero) ;
// //     }

// //     i= i + 1;
    
// // } while (i<numeros.length);




// // // const aa = numeros[0];



// // console.log(numerosPositivos);
// // console.log(numerosNegativos);
// // //numeros positivos = [2,6,4,10]


// // const altura = [1.68, 1.65, 1.70, 1.75, 1.58, 1.80, 1.85, 1.62];


// // let i= 0;
// // let sumaDeAltura= 0;

// // let superan= [];
// // let noSuperan=[];

// // do {
// //     sumaDeAltura = altura[i] + sumaDeAltura;
// //     i=i+1;

// // } while (i<altura.length);

// // const promedio = sumaDeAltura/ altura.length;

// // let o=0;

// // do {
// //     const alturaNueva = altura[o];
// //     if(alturaNueva>promedio){
// //         superan.push(alturaNueva);
// //     }
// //     else{
// //         noSuperan.push(alturaNueva);
// //     };
// //     o=o+1;
// // } while (o<altura.length);


// // console.log(superan)
// // console.log(noSuperan)
// // console.log(promedio)




// const baraja = [
//     // {
//     //     numero: 1, 
//     //     simbolo: "espada",
//     // },

//     // {
//     //     numero: 2, 
//     //     simbolo: "espada",
//     // },


// ]


// const simbolos = [
//     "trebol", "corazones", "diamante", "espada"
// ]

// // let i= 1;

// // do {
// //     console.log(i);
    
// //     let o= 0;
// //     do {
// //         
// //         })

// //         o++;
        
// //     } while (o<simbolos.length);
// //     i++;
// // } while (i<14);
// for (let i = 1; i < 14; i++) {

//     for (let o = 0; o < simbolos.length; o++) {
//         baraja.push({
//             numero: i,
//             simbolo: simbolos[o],
//         });
//     }
    
// }

// console.log(baraja);
// const random = getRandomInt(0,51);

// const cartasJulio =[];
// const cartasGrace =[];

// cartasJulio.push(baraja[random])
// baraja.splice(random,1)

// const randomGrace=getRandomInt(0,50);
// cartasGrace.push(baraja[randomGrace]);
// baraja.splice(randomGrace,1);

// console.log("random",random)
// console.log("julio",cartasJulio)
// console.log("baraja",baraja)

// console.log("random",randomGrace)
// console.log("grace",cartasGrace)


// // Retorna un n??mero aleatorio entre min (incluido) y max (excluido)
// function getRandomInt(min, max) {
//     return Math.floor(Math.random() * (max - min)) + min;
//   }



const arrayy = [
    {
        due??o: "aa",
        mascota: "perro",
        nombreDeMascota : " fido",
    },
    {
        due??o: "lele",
        mascota: "gato",
        nombreDeMascota : " miau",
    },
    {
        due??o: "paiola",
        mascota: "pato",
        nombreDeMascota : " pato",
    },
    {
        due??o: "fiorela",
        mascota: "gato",
        nombreDeMascota : " michi",
    }

]
/// perros y patos
const patosYPerros = [];

for (let index = 0; index < arrayy.length; index++) {
    
    if (arrayy[index].mascota = "perro" || "pato" ) {
       patosYPerros.push(arrayy.due??o)
        
    }

}

const usuarios = [ 
    {
        usuario: "nana",
        contrase??a: "asdasd",
        nombreCompleto:"nayra lala",
    },
    {
        usuario: "lili",
        contrase??a: "yjtjty",
        nombreCompleto: "lupita lele",

    },
    {
        usuario: "tata",
        contrase??a: "qweqweqw",
        nombreCompleto: "tatiana lili",

    },
    {
        usuario: "eeee",
        contrase??a:"plplplp" ,
        nombreCompleto: "Enrique lolo" ,

    },
    {
        usuario: "vayne",
        contrase??a: "vvbvbvbvb",
        nombreCompleto: "lucrecia lulu",

    }

];


const usuarioYLogeo = {
    usuario: "Lili",
    contrase??a: "yjtjty",
};



// for (let index = 0; index < usuarios.length; index++) {

   
//     if (usuarioYLogeo.usuario.toUpperCase() == usuarios[index].usuario.toUpperCase() && usuarioYLogeo.contrase??a==usuarios[index].contrase??a){
//         console.log("logeoExitoso");
//         break;
//     }
//     else{
//         console.log("Escribiste Mal Tu Usuario ?? contrase??a.")
//     }
// }




// const buscar = usuarios.find(x => x.usuario.toUpperCase() === usuarioYLogeo.usuario.toUpperCase() && x.contrase??a === usuarioYLogeo.contrase??a );
// console.log(buscar)


// function eliminarUsuario( ){
//     const inputNombre = document.getElementById("nombreUsuario").value;
//     if (inputNombre) {
//         const buscar = usuarios.findIndex(x => x.usuario.toUpperCase() === inputNombre.toUpperCase() );

//         if (buscar>= 0) {
//             usuarios.splice(buscar,1)
//             alert("se elimino correctamente")
//         }
//         else{
//             alert("el usuario no existe")
//         }
//     }
//     else{
//         alert('Es ncesario completar el texto')
//     }
// }

// function agregarUsuario(){
//     const inputusuario = document.getElementById("nombre").value;
//     const inputContra = document.getElementById("contrasena").value;
//     const inputNombre = document.getElementById("nombreCompleto").value;

//     if (inputusuario && inputContra && inputNombre) {
//         const objetoAgregar={
//             usuario:inputusuario,
//             contrase??a:inputContra,
//             nombreCompleto:inputNombre,
//         }
//         usuarios.push(objetoAgregar);
//         alert("a??adido correctamente")
//     }
//     else{
//         alert("debe llenra los campos obligatoriamente")
//     }
// }


// const nombnrees= ["ana", "lupita"]
// const numero= [1, 2]

// let buscaratm= -1;
// function buscarUsuario(){
//     const buscarUsuario= document.getElementById("buscarUsuario").value;
//     if (buscarUsuario) {
//         buscaratm = usuarios.findIndex(x => x.usuario.toUpperCase() === buscarUsuario.toUpperCase() );

//         if (buscaratm>= 0) {
//             const contenedor = document.getElementById("contenedor");
//             contenedor.style.display="block";

//             const usuarioEncontrado= usuarios[buscaratm];
//             const inputusuario = document.getElementById("nombreActualizar");
//             const inputContra = document.getElementById("contrasenaActualizar");
//             const inputNombre = document.getElementById("nombreCompletoActualizar");
//             inputusuario.value= usuarios[buscaratm].usuario;
//             inputContra.value= usuarios[buscaratm].contrase??a;
//             inputNombre.value= usuarios[buscaratm].nombreCompleto;
//         }
//         else{
//             alert("el usuario no existe")
//         }
//     }
//     else{
//         alert('Es ncesario completar el texto')
//     }
// }

// function ActualizarUsuario(){
//     if (buscaratm>= 0) {
//         const inputusuario = document.getElementById("nombreActualizar").value;
//         const inputContra = document.getElementById("contrasenaActualizar").value;
//         const inputNombre = document.getElementById("nombreCompletoActualizar").value;

//         usuarios[buscaratm].usuario = inputusuario;
//         usuarios[buscaratm].contrase??a = inputContra;
//         usuarios[buscaratm].nombreCompleto = inputNombre;

//         console.log(usuarios)
//     }

// }



const semaforo = {
    rojo: true,
    amarillo: false,
    verde: false,
}

function cambiarVerde(){

    const rojo = document.getElementById("rojo");
    const amarillo = document.getElementById("amarillo");
    const verde = document.getElementById("verde");

    verde.classList.remove("opacidad");
    rojo.classList.add("opacidad");
    amarillo.classList.add("opacidad");

    semaforo.rojo=false;
    semaforo.verde=true;
    semaforo.amarillo=false;
}

function cambiarAmarillo(){
    const rojo = document.getElementById("rojo");
    const amarillo = document.getElementById("amarillo");
    const verde = document.getElementById("verde");

    amarillo.classList.remove("opacidad");
    verde.classList.add("opacidad"); 
    rojo.classList.add("opacidad"); 

    semaforo.rojo=false;
    semaforo.verde=false;
    semaforo.amarillo=true;
}



function cambiarRojo(){
    const rojo = document.getElementById("rojo");
    const amarillo = document.getElementById("amarillo");
    const verde = document.getElementById("verde");

    amarillo.classList.add("opacidad");
    verde.classList.add("opacidad") ;
    rojo.classList.remove("opacidad");

    semaforo.rojo=true;
    semaforo.verde=false;
    semaforo.amarillo=false;

}



function cambiarcolor(){//
    if(semaforo.rojo == true){
        cambiarVerde();
        return;
    }

    if(semaforo.verde == true){
        cambiarAmarillo();
        return;
    }

    if (semaforo.amarillo==true) {
        cambiarRojo();
        return;
    }
}


setInterval(() => {
cambiarcolor()
}, 2000);



const datosDeFormulario=[];


function botonRegistrar(){

    const inputNombre= document.getElementById("inputNombre"); 
    const inputApellido= document.getElementById("inputApellido");
    const inputCorreoElectr??nico= document.getElementById("inputCorreoElectr??nico");
    const inputContrase??a= document.getElementById("inputContrase??a");
    const selectFechasNacimiento=document.getElementById("selectFechas");
    const selectMeses=document.getElementById("selectMeses");
    const selectAnos=document.getElementById("selectAnos");
    const sexoMujer=document.getElementById("mujer");
    const sexoHombre=document.getElementById("hombre");
    const divMujer=document.getElementById("divMujer");
    const divHombre=document.getElementById("divHombre");



    if (!inputNombre.value) {
        inputNombre.classList.remove("silver");
        inputNombre.classList.add("red"); 
    }else{
        inputNombre.classList.add("silver");
        inputNombre.classList.remove("red"); 
    }

    if (!inputApellido.value) {
        inputApellido.classList.remove("silver");
        inputApellido.classList.add("red"); 
    }else{
        inputApellido.classList.add("silver");
        inputApellido.classList.remove("red"); 
    }

    if (!inputCorreoElectr??nico.value) {
        inputCorreoElectr??nico.classList.remove("silver");
        inputCorreoElectr??nico.classList.add("red"); 
    }else{
        inputCorreoElectr??nico.classList.add("silver");
        inputCorreoElectr??nico.classList.remove("red"); 
    }

    if (!inputContrase??a.value) {
        inputContrase??a.classList.remove("silver");
        inputContrase??a.classList.add("red"); 
    }else{
        inputContrase??a.classList.add("silver");
        inputContrase??a.classList.remove("red"); 
    }

    if (selectFechasNacimiento.value) {
        selectFechasNacimiento.classList.add("silver");
        selectFechasNacimiento.classList.remove("red"); 
    }else{
        selectFechasNacimiento.classList.remove("silver");
        selectFechasNacimiento.classList.add("red"); 
    }

    if (selectMeses.value) {
        selectMeses.classList.add("silver");
        selectMeses.classList.remove("red"); 
    }else{
        selectMeses.classList.remove("silver");
        selectMeses.classList.add("red"); 
    }


    if (selectAnos.value) {
        selectAnos.classList.add("silver");
        selectAnos.classList.remove("red"); 
    }else{
        selectAnos.classList.remove("silver");
        selectAnos.classList.add("red"); 
    }

    if (sexoMujer.checked || sexoHombre.checked ) {
        divMujer.classList.add("silver");
        divMujer.classList.remove("red"); 
        divHombre.classList.add("silver");
        divHombre.classList.remove("red"); 
    }else{
        divMujer.classList.remove("silver");
        divMujer.classList.add("red"); 
        divHombre.classList.remove("silver");
        divHombre.classList.add("red"); 
    }




    
   
    if (inputNombre.value && inputApellido.value && inputCorreoElectr??nico.value && inputContrase??a.value &&
         selectFechasNacimiento.value && selectMeses.value && selectAnos.value) {
        if (datosDeFormulario.length>0) {
            const buscar =  datosDeFormulario.find(x => x.correo===inputCorreoElectr??nico.value);
            if (buscar) {
                alert("ya se registro")
            }else{
                let sexo="";
                if(sexoMujer.checked){
                    sexo=sexoMujer.value;
                }else{
                    sexo=sexoHombre.value;
                }
                datosDeFormulario.push({
                    nombre:inputNombre.value,
                    apellido:inputApellido.value,
                    correo:inputCorreoElectr??nico.value,
                    contrase??a:inputContrase??a.value,
                    fechaNacimiento:selectFechasNacimiento.value + "/" + selectMeses.value + "/" + selectAnos.value,
                    sexo:sexo
        
                })
                
            }
        }else{
            let sexo="";
            if(sexoMujer.checked){
                sexo=sexoMujer.value;
            }else{
                sexo=sexoHombre.value;
            }
            datosDeFormulario.push({
                nombre:inputNombre.value,
                apellido:inputApellido.value,
                correo:inputCorreoElectr??nico.value,
                contrase??a:inputContrase??a.value,
                fechaNacimiento:selectFechasNacimiento.value + "/" + selectMeses.value + "/" + selectAnos.value,
                sexo:sexo,
    
            })
        }
        
        
    }

    console.log(datosDeFormulario)


 
};




