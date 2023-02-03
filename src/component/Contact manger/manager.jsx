import Contact from "./contact";
import PeopleList from "./people";
import { useState } from "react";
import './contact.css'

function Manager(props) {
    const [contacts, setContacts] = useState(props.data);

    function addPerson(name) {
        setContacts([...contacts, name]);
    }

    return (
        <div>
            <Contact handleSubmit={addPerson} />
            <PeopleList data={contacts} />
        </div>
    );
}
export default Manager; 