import React from "react";

const Cards = ({name, image, type, species})=>{
    const style = `thumb-container ${type}`
    return(
        <div className={style}>
            <div className="number">
                <small>#0{species}</small>
            </div>
            <img src={image} alt={name} />
            <div className="detail-wrapper">
                <h3>{name}</h3>
                <small>Type: {type}</small>
            </div>
         </div>
    )
}
export default Cards