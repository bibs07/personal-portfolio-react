import React from 'react'

export const Button = (props) => {
    return (
        <div className="flex justify-center">
            <button className={"bg-button p-2 rounded text-white font-bold mt-5"}>{props.text}</button>
        </div>
    )
}
