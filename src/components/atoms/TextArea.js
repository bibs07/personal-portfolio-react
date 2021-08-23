import React from 'react'

export const TextArea = (props) => {
    return (
        <p className={`leading-6 ${props.className}`}>{props.text}</p>
    )
}
