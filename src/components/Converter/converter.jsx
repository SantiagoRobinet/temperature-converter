import React, { useState } from 'react';
import {handleClick} from '../../utils/functions'


function Converter(){

const [temperature, setTemperature] = useState('celcius');
const [degrees, setDegrees] = useState(null);
const [result, setResult] = useState(null)

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
        <input type="number"  onChange={saveDegrees} autoFocus/>
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
        <button onClick={() => setResult(handleClick(degrees , temperature))}>Convert to {checkToogle()}</button >

       {result ? 
        <div>
            <h2>{result}</h2>
            <h3>{checkToogle()}</h3>
        </div> :
        <h3>Press the button to see the reult</h3>
        }
    </div>
)

}

export default Converter;