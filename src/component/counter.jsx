import { useEffect, useState } from "react";

function Counter() {
    const [counter, setCounter] = useState(0);

    useEffect(() => {
        alert("Number of Cllicks: " + counter);
    });

    function increment() {
        setCounter(counter + 1);
    }
    return (
        <div>
            <p>{counter}</p>
            <button onClick={increment}>Increment</button>
        </div>
    )
}


export default Counter;