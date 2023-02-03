import { useState } from "react";
import './converter.css';

function Converter() {
    const [km, setKm] = useState(0);

    function handleChange(e) {
        setKm(e.target.value);
    }
    function convert(km) {
        return (km / 1.5).toFixed(2);
    }
    return (
        <div className="yes">
            <input type="text" value={km} onChange={handleChange} />
            <p>  {km} km is {convert(km)} miles</p>
        </div>
    )
}
export default Converter;