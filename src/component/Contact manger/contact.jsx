import React, { useState } from "react";

function Contact(props) {
    const [person, setPerson] = useState("");

    function handleChange(e) {
        setPerson(e.target.value);
    }

    function handleSubmit(e) {
        props.handleSubmit(person);
        setPerson('');
        e.preventDefault();
    }

    return (
        <React.Fragment>
            <h1 style={{ color: 'red', textAlign:'center' }}>Contact Manager</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Add new contact" onChange={handleChange} value={person} />
                <button type="submit">ADD</button>

            </form>
        </React.Fragment>
    )

}




export default Contact;
// export default PeopleList;
