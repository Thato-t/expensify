import React from 'react'
import './navbar.scss'

function Navbar() {
    
  return (
    <>
        <div className="wrapper">
            <div className="containerOne">
                <p className="logo">Budget App</p>
            </div>
            <div className="containerTwo">
                <div className="navigation">
                    <ul className="nav">
                        <a href="#" className="nav-links"><li className="options">Home</li></a>
                        <a href="#" className="nav-links"><li className="options">Reports</li></a>
                        <a href="#" className="nav-links"><li className="options settings">Settings</li></a>
                    </ul>
                </div>
            </div>
        </div>
    </>
  )
}

export default Navbar