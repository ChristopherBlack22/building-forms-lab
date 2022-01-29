import React from "react";

const Bands = props => {
    return (
        <ol>
            {props.bands.map((band, index) => {
                return <li key={index} >{band.name}</li>
            })}
        </ol>
    )
}

export default Bands;