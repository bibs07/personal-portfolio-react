import React from 'react'
import {Button,Required} from '../index';

export const Contact = () => {
    return (
        <section className = "bg-form mt-5" id="contact">
            <form className="p-5 flex flex-col justify-center rounded-lg">
                <div className="flex justify-between">
                    <label htmlFor="name">Name</label><Required/><br/>
                </div>
                <input id="name" name="name" type="text" className="my-3 p-3 w-full"/><br />
                <div className="flex justify-between">
                <label htmlFor="email">Email</label><Required/><br />
                </div>
                <input id='email' type="email" className="my-3 p-3 w-full"/><br />
                <div className="flex justify-between">
                <label htmlFor="message">Message</label><Required/><br />
                </div>
                <textarea id='message' type="text" rows="4" cols="50"className="resize-none my-3 p-3"/>
                <Button text={"Submit"} />
            </form>
            
        </section>
    )
}
