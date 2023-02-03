import { useState } from "react";

function Form() {
    // const [sum, setSum] = useState(0);
    // const [num, setNum] = useState(0);
    const [sum, setSum] = useState(0);
    const [num, setNum] = useState(0);

    function handleChange(e) {
        setNum(e.target.value);
    }
    function handleSubmit(e) {
        setSum(sum + Number(num));
        e.preventDefault();
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="number" value={num} onChange={handleChange} />
            <br /><br/>
            <input type="submit" value="Add" />
            <p> Sum is {sum}</p>
        </form>
    )
}
export default Form;