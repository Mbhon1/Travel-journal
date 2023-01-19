import React from "react";

const Main = (props) => {    
    return (
        <div className="main">
            <div className="container">
            <img src={props.image} alt=""/>
                <div className="pad-right">
                    <div className="main--badge">
                        <i className="fa fa-map-marker"></i>
                        {props.location} 
                        <a href={props.googleMaps}><span className="gmaps">View On Google Maps.</span></a>
                        <h2>{props.title}</h2>
                        <p><span>{props.date.startDate} - {props.date.endDate}</span></p>
                        <p className="desc">{props.description}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main