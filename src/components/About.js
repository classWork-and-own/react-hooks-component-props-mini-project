import React from "react";

function About (props){
    const imgSrc="https://via.placeholder.com/215 "
    return(<aside>
        <img src={props.imgSrc} alt="blog logo"/>
        <p> {props.about}</p>
    </aside>);
}
export default About;