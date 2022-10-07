import React from 'react'
import {NavLink} from 'react-router-dom'
function Menu() {
    let activeClass="activepage"
    return (
        <div className="container bg-white rounded-none">
            <div className="navbar">
                <nav className="main-menu-container">
                    <ul className="flex font-semibold">
                        <li><NavLink to="/" className={({ isActive }) =>isActive ? activeClass : "menuitems"}>Ana Sayfa</NavLink></li>
                        <li><NavLink to="/tarifler" className={({ isActive }) =>isActive ? activeClass : "menuitems"}>Tarifler</NavLink></li>
                        <li><NavLink to="/blog" className={({ isActive }) =>isActive ? activeClass : "menuitems"}>Blog</NavLink></li>
                        <li><a href="/diyetler" className='px-4 py-5 block'>Alerjiler</a></li>
                        <li><a href="/diyetler" className='px-4 py-5 block'>Blog</a></li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default Menu