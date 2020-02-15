import React from 'react';

const Button = ({showReset}: any) => {
    const [ counter, setCounter ] = React.useState(0);
    const clickHandler = () => {
        setCounter(counter + 1);
        alert(`clicked: ${counter}`);
    };
    const reset = () => {
        setCounter(0);
    }
    return (
        <div className="App">
            <button onClick={clickHandler}>click me </button>
            {(counter > 5 || showReset) && <button onClick={reset}>reset</button>}
        </div>
    );
}

export default Button;
