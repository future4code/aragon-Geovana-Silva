function conversorDeTemperatura(temperatura, unidade){
    if(typeof temperatura !== "number"){
        return "Deve ser digitada em algarismos."
    } else if(typeof unidade !== "string"){
        return "Deve ser escrito em unidade, não por extenso. Ex: K para Kelvin, F para Fahrenheit e C para Celsius."
    } else if(unidade === "K"){
        return `${temperatura}°C equivale a ${temperatura + 273.15}K`
    } else if(unidade === "F"){
        return `${temperatura}°C equivale a ${9 * temperatura/5 + 32}°F`
    } else if (unidade !== "F" || unidade !== "K"){
        return `As unidades devem ser maiúsculas. Ex: "F" não "f".`
    }
}

console.log(conversorDeTemperatura(30, "F"))
console.log(conversorDeTemperatura(30, "K"))
console.log(conversorDeTemperatura(30, "k"))