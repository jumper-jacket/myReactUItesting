import React, { useState } from 'react';

const FizzBuzz = () => {
    const [input, setInput] = useState<number>(0);
    
    const FizzBuzz = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInput(Number(e.target.value));
    }
    return(
<div>
    <h1>Fizz Buzz</h1>
    <p>入力: 
        <input type="number" onChange={FizzBuzz}/>
    </p>
    <p>
        出力:
        <span data-testid="output">{input}</span>
    </p>
</div>
    );
}

export default FizzBuzz;