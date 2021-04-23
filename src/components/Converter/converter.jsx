import React, { useState } from 'react';


function Converter(){

const [temperature, setTemperature] = useState('celcius');
const [degrees, setDegrees] = useState(null);

function checkToogle(){
    if(temperature === 'celcius'){
        return 'Farenheit'
    } else {
        return 'Celcius'
    }
}

function saveDegrees(e){
    setDegrees(parseFloat(e.target.value))
}

return (
    <div>
        <input type="number"  onChange={saveDegrees}/>
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
        <button>Convert to {checkToogle()}</button >
    </div>
)

}

export default Converter;