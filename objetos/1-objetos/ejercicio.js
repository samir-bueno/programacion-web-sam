//arrays

const ejemploArray = [1, 2, 3];
console.log(ejemploArray[1]);





//objetos 

const persona = {
    //hay dos partes: clave y valor
    name: "samir",
    edad: 17,
    isWorking: true,
    cats: ["felipe", "zoe", "collar"],
    walk: function(){
        //si la funcion retorna vpod es que no devuelve nada, si no, aclara el tipo de dato
        return "estoy caminando";
        //si la funcion no devuelve ningun valor, va a devolver un undefined por deafult
        //console.log("estoy caminando");
    }
};

console.log(persona.name);
console.log(persona["name"]);
console.log(persona.cats[1]);
console.log(persona["cats"][1]);
//si cuando estan mostrando/ejecutando la funcion no le ponen los parantesis esta no va a funcionar
console.log(persona.walk());

//reasigna el valor de la propiedad age
persona.age = 29;

console.log(persona.age);

//borra las propiedades seleccionadas del objeto
delete persona.age;
console.log(persona.age);



/////////////// EJERCICIO 1///////////////////////////////



const nombre = "samir";
const subscribers = 200;


function createObject(name, subs) {
    
    const objeto = {
        hash: (name.length) * subs,
        name: name,
        subscribers: subs,
        getStatus: function() {
            return `El canal de ${name} tiene ${subs} subscriptores`
            }   
      }
   return objeto

}

const objeto = createObject(nombre, subscribers)
console.log(createObject(nombre, subscribers))
console.log(objeto.getStatus())


