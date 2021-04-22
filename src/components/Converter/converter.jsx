import React, { useState } from 'react';


function Converter(){

const [temperature, setTemperature] = useState('celcius');

function checkToogle(){
    if(temperature === 'celcius'){
        return 'farenheit'
    } else {
        return 'celcius'
    }
}

return (
    <div>
        <section>
            <label>
                <input type='radio' value='celcius' checked={temperature === 'celcius'} onChange={() => setTemperature('celcius')}/>
                Cº
            </label>
            <label>
                <input type='radio' value='farenheit' checked={temperature === 'farenheit'} onChange={() => setTemperature('farenheit')}/>
                Fº
            </label>
        </section>
        <h1>Convert to {checkToogle()}</h1>
    </div>
)

}

export default Converter;