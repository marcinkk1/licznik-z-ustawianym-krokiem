import React from 'react';
import './ButtonsPanel.css'

function ButtonsPanels(props) {

    return(
        <div className="buttons-panel">
            <button onClick={ () => {props.buttonMethod('add');}}>Add {props.stateValue}</button>
            <button onClick={ () => {props.buttonMethod('reinit');}}>ReInit</button>
            <button onClick={ () => {props.buttonMethod('reset');}}>Reset</button>
        </div>
    );
}

export default ButtonsPanels;

