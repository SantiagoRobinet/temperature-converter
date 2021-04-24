import {handleClick, checkToogle, celciusToFarenheit, farenheitToCelcius} from './functions'

describe('Given functions files', () => {
    
    describe('When celciusToFarenheit function is called', () => {
        describe('And degrees parameter has value of null', () => {
            test('Then should return error message', () => {
                const errorMessage = celciusToFarenheit(null);

                expect(errorMessage).toBe('Something went wrong :(');
            })
        })

        describe('And degrees parameter is NaN', () => {
            test('Then should return error message', () => {
                const errorMessage = celciusToFarenheit("Fail");

                expect(errorMessage).toBe('Something went wrong :(');
            })
        })

        
        describe('And degrees parameter has value of 10', () => {
            test('Then should return "50 ºF', () => {
                const result = celciusToFarenheit(10);

                expect(result).toBe('50 ºF');
            })
        })
       
        describe('And degrees parameter has value of 17', () => {
            test('Then should return "62.60 ºF', () => {
                const result = celciusToFarenheit(17);

                expect(result).toBe('62.60 ºF');
            })
        })

    })

     
    describe('When farenheitToCelcius function is called', () => {
        describe('And degrees parameter has value of null', () => {
            test('Then should return error message', () => {
                const errorMessage = farenheitToCelcius(null);

                expect(errorMessage).toBe('Something went wrong :(');
            })
        })

        describe('And degrees parameter is NaN', () => {
            test('Then should return error message', () => {
                const errorMessage = farenheitToCelcius("Fail");

                expect(errorMessage).toBe('Something went wrong :(');
            })
        })

        
        describe('And degrees parameter has value of 2', () => {
            test('Then should return "-16.67 ºC', () => {
                const result = farenheitToCelcius(2);

                expect(result).toBe('-16.67 ºC');
            })
        })
       
        describe('And degrees parameter has value of 180', () => {
            test('Then should return "82.22 ºC', () => {
                const result = farenheitToCelcius(180);

                expect(result).toBe('82.22 ºC');
            })
        })

    })

    describe('When handleClick function is called', () => {
        describe('And pass 10 and "celcius" as parameters', () => {
            test('Then it should return "50 ºF"', () => {
                 const result = handleClick(10, 'celcius');

                 expect(result).toBe('50 ºF')
            })
        })
       
        describe('And pass 80 and "farenheit" as parameters', () => {
            test('Then it should return "50 ºF"', () => {
                 const result = handleClick(80, 'farenheit');

                 expect(result).toBe('26.67 ºC')
            })
        })
    })

    describe('When checkToogle is called', () => {
        describe('And pass "celcius" as parameter', () => {
            test('Then it should return "Farenheit"', () => {
                const result = checkToogle('celcius');

                expect(result).toBe('Farenheit')
            })
        })
        
        describe('And pass "farenheit" as parameter', () => {
            test('Then it should return "Celcius"', () => {
                const result = checkToogle('farenheit');

                expect(result).toBe('Celcius')
            })
        })
    })
})