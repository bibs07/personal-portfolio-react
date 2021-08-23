import React from 'react'

export const Footer = () => {
    return (
        <footer className = "mt-5 bg-footer" id="footer">
            <p className="text-center">Bibek &#xa9; 2021<br /> All rights reserved. </p>
            <p className="text-center">Campsie, NSW 2194, Australia</p>
            <p className="text-center">+61 434 539 613</p>
            <div className="flex justify-center">
            <a href="https://github.com/bibs07"><img src="./gitIcon.png" alt="github icon" className="w-20 h-20"/></a>
            <a href="https://www.linkedin.com/in/bibek-dulal-6857891bb/"><img src="./linkedinIcon.png" alt="linkedin icon" className="w-20 h-20"/></a>
            </div>
        </footer>
    )
}
