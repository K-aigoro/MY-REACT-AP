
function Header(props) {



    return (
        <ul className="App">
            <li>{props.first}</li>
            <h1>{Math.random() >= 0.5 ? "over 0.5" : "under 0.5"}</h1>
            <h2>{Math.random()}</h2>
        </ul>
    )
}

export default Header;