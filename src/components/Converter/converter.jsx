import React, { useState } from 'react';


function Converter(){

const [temperature, setTemperature] = useState('celcius');
const [degrees, setDegrees] = useState(0);

function checkToogle(){
    if(temperature === 'celcius'){
        return 'Farenheit'
    } else {
        return 'Celcius'
    }
}

function saveDegrees(e){
    setDegrees(parseFloat(e.target.value))
    console.log(typeof e.target.value)
}

console.log(typeof degrees)
return (
    <div>
        <input type="number" min='0' onChange={saveDegrees}/>
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