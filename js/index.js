//promise
const miPromesa = new Promise((resolve, reject) => {
    setTimeout(() => {
        const exito = true
        if (exito){
            resolve("La promesa se ha cumplido")
        }
        else{
            reject('Hubo error')
        }
    }, 2000)
});


const miPromesa2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        const exito = true
        if (exito){
            resolve("La promesa se ha cumplido")
        }
        else{
            reject('Hubo error')
        }
    }, 2000)
});


const miPromesa3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        const exito = true
        if (exito){
            resolve("La promesa se ha cumplido")
        }
        else{
            reject('Hubo error')
        }
    }, 2000)
});

miPromesa
   .then(resultado => {
    console.log('Exito 1: ${resultado}')
    miPromesa2
    .then(resultado => {
    console.log('Exito 2: ${resultado}')
    miPromesa3
    .then(resultado => {
        console.log('Exito 3: ${resultado}')

   })
   .catch(error => {
    console.error('Error:  ${error}')
   })
})
})



   console.log('Operacion en progreso...')