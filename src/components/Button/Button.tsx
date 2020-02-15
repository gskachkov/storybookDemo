import React from 'react';
import './Button.css';

declare interface ButtonProps {
    textValue?: string
    classValue?: string
}

const Button = ({textValue, classValue}: ButtonProps) => {
    const setClass = classValue || 'default'
    const [ active, setActive ] = React.useState(false);
    return (
        <div className="App">
            <button className={setClass} onClick={() => setActive(!active)}>{textValue || 'click'}</button>
            <br/>
            {active && <span>hidden text</span>}
        </div>
    );
}

export default Button;
