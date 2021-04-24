import React, { useState } from 'react';
import {handleClick, checkToogle} from '../../utils/functions'
import '../Converter/Converter.css'


function Converter(){

const [temperature, setTemperature] = useState('celcius');
const [degrees, setDegrees] = useState(null);
const [result, setResult] = useState(null)


function saveDegrees(e){
    setDegrees(parseFloat(e.target.value))
}

return (
    <div>
        <input className='degrees' type="number" onChange={saveDegrees} autoFocus/>
        <section className='radio-button__container'>
            <label className='radio-button'>
                <input type='radio' value='celcius' checked={temperature === 'celcius'} onChange={() => setTemperature('celcius')}/>
                ºC
            </label>
            <label className='radio-button'>
                <input type='radio' value='farenheit' checked={temperature === 'farenheit'} onChange={() => setTemperature('farenheit')}/>
                ºF
            </label>
        </section>
        <button className='convert-button' onClick={() => setResult(handleClick(degrees , temperature))}>Convert to {checkToogle(temperature)}</button >

       {result ? 
        <div className='result__container'>
            <h2 className='result'>{result}</h2>
        </div> :
        <h3>Press the button to see the result</h3>
        }
    </div>
)

}

export default Converter;