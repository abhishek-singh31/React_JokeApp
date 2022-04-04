import React from "react"

export default function Joke(props){
    return (
        <div>
            <h3>{props.setup}</h3>
            <h4>{props.punchline}</h4>
            <br/>
        </div>
        
    )
}