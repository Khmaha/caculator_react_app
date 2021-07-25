import React, {useState} from 'react';
import ResultComponent from './ResultComponent';
import SwitchThemeComponent from './SwitchThemeComponent';
import '../scss/CalculatorCardComponent.scss';

let numbersArray=
['7','8','9','DEL','4','5','6','+',
'1','2','3','-', '.','0','/','x','RESET', '=']

const CalculatorCardComponent = ()=>{
    const calculate = () => {
        try {
            const resultat = eval(result);
            setResult( resultat);

        } catch (e) {
            setResult('error')
        }
    }
     const handleClick = (ev,char) => {
        switch(char) {
            case 'x':
                setResult(result + '*');
                break;
            case 'DEL':
                setResult(result.toString().substring(0, result.toString().length - 1));
                break;
            case 'RESET':
                setResult('');
                break;
            case '=':
                calculate();
                break;
            default:
                setResult(typeof result === 'number' && !isNaN(parseInt( char)) && typeof parseInt(char) === 'number' ? char : (result !== '0' ? result + char : char));

            }
    }
    const [result, setResult]=  useState("")
    return (
        <>
        <div className="calculator-emp">
           <SwitchThemeComponent></SwitchThemeComponent>
            <ResultComponent result={result}></ResultComponent>
            <div className="calculator-emp-grid">
                {
                   numbersArray.map((char, index)=>{
                        return <div key={index} className={"calculator-emp-grid--item " + (char==='DEL' ? ' delete-item ' : '') + "item"+index} 
                        onClick={(event)=>handleClick(event, char)}>
                        {char}
                       </div>
                   })
                }
            </div>
        </div>
        </>
    )
}

export default CalculatorCardComponent;