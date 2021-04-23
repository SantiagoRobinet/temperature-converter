function celciusToFarenheit(degrees){
   const farenheit =  (degrees * 9/5) + 32
  
   if(isNaN(farenheit)){
    return 'Something went wrong :('
    }else if(farenheit%1 === 0 ){
    return farenheit;
    } else {
    return farenheit.toFixed(2)
    }
}

function farenheitToCelcius(degrees){
    const celcius = (degrees - 32) * 5/9;
    
    if(isNaN(celcius)){
        return 'Something went wrong :('
    }else if(celcius%1 === 0 ){
        return celcius;
    } else {
        return celcius.toFixed(2)
    }
}


console.log(celciusToFarenheit('f'))
console.log(farenheitToCelcius(120)) 