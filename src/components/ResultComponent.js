import React from 'react';
import '../scss/ResultComponent.scss'

const ResultComponent = ({result})=>{
    return (
        <div className="result-card">
            {result}
        </div>
    )
}

export default ResultComponent;