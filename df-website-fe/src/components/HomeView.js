import React from 'react'
import '../css/homeview.css'

export default function HomeView(props) {
    return (
        <span aria-label={props.text}>
            {props.text.split("").map((char, index) => {
                let style = {"animation-delay": (0.5 + index / 10) + "s"}
                return <span aria-hidden="true" key={index} style={style}>{char}</span>
            })}
        </span>
    )
}
