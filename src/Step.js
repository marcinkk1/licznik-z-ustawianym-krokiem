import React from 'react';
import './Step.css';

function Step(props) {

    return(
        <div>
            <span>Krok:</span>
            <input type="number" min="1" value={props.stateValue} onChange={props.stateChange} />
        </div>
    );
}

export default Step;