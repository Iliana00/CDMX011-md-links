function comida(food){
    if(food=='enchiladas'){
        return 'Buena eleccion'
    }else{
        return 'Mala eleccion'
    }
}

console.log(comida(process.argv[2]))
