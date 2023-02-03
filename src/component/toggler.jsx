function Toggle() {
    const darkModeOn = true;
    const darkMode = <h1>Dark Mode is On</h1>
    const lightMode = <h2>Light Mode is On</h2>


    return (
        <div>
            {darkModeOn ? darkMode : lightMode}

        </div>
    )
}
export default Toggle;