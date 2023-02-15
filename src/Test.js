import { useState } from "react";

function Test() {
    const [Text, setText] = useState("Kazeem");

    function handleChange(e) {
        setText(e.target.value);
    }
    return (<div>
        <h1>Hello {Text}.</h1>
        <input value={Text} onChange={handleChange}/>
        <p>You typed: {Text}</p>
        <button onClick={() => setText('Welcome')}>
            Reset
        </button>
    </div>);

}
export default Test;