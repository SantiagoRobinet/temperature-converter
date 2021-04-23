function celciusToFarenheit(degrees){

   const farenheit =  (degrees * 9/5) + 32

   if(isNaN(farenheit) || !degrees){
    return 'Something went wrong :('
    }else if(farenheit%1 === 0 ){
    return `${farenheit} ºF`;
    } else {
    return `${farenheit.toFixed(2)} ºF`
    }
}

function farenheitToCelcius(degrees){
    const celcius = (degrees - 32) * 5/9;
    
    if(isNaN(celcius) || !degrees){
        return 'Something went wrong :('
    }else if(celcius%1 === 0 ){
        return `${celcius} ºC`;
    } else {
        return `${celcius.toFixed(2)} ºC`
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

function checkToogle(temperature){
    if(temperature === 'celcius'){
        return 'Farenheit'
    } else {
        return 'Celcius'
    }
}


export {handleClick, checkToogle};