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

function handleClick(degrees, convertion){

    let finalResult = null;

    switch(convertion){
        case 'celcius':
            finalResult = celciusToFarenheit(degrees);
            break;
        
        case 'farenheit':
            finalResult = farenheitToCelcius(degrees);
            break;

        default:
            finalResult = 'Something ocurred';
    }

    return finalResult;
}
