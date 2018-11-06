import './Nav.css'
import React from 'react'
import NavItem from './NavItem'

export default props =>
    <aside className="menu-area">
        <nav className="menu">
            {/* Refatorar em casa*/}
            <NavItem link="home" icon="home" nome="Início"/>
            <NavItem link="users" icon="users" nome="Usuários"/>            
        </nav>
    </aside>