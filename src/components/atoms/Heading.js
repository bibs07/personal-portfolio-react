import { stringify } from 'postcss'
import React from 'react'

export const Heading = (props) => {

    return (
        <h1 className={` font-bold text-3xl tracking-wide ${props.className}`}>{props.heading}</h1>
    )
}
