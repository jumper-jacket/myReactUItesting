import React, { useState } from 'react';

const FizzBuzz = () => {
    const [output, setOutput] = useState<number | "Fizz" | "Buzz" | "FizzBuzz">(0);

    const FizzBuzz = (e: React.ChangeEvent<HTMLInputElement>) => {
        const userInput = Number(e.target.value);
        if(userInput % 3 === 0 && userInput % 5 === 0){
            setOutput("FizzBuzz");
        }else if(userInput % 3 === 0) {
            setOutput("Fizz");
        }else if(userInput % 5 === 0) {
            setOutput("Buzz");
        }else{
            setOutput(userInput);
        }
    }
    return(
<div>
    <h1>Fizz Buzz</h1>
    <p>入力:
        <input type="number" onChange={FizzBuzz}/>
    </p>
    <p>
        出力:
        <span data-testid="output">{output}</span>
    </p>
</div>
    );
}

export default FizzBuzz;