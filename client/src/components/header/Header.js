import React from 'react'
import { Link } from 'react-router-dom'
 
import Menu from './Menu'
import Searchnavbar from './Searchnavbar'
 
 

const Header = () => {

    return (
        <div className="header bg-primary">
            <nav className="navbar navbar-expand-lg navbar-light 
            bg-primary justify-content-between align-middle">

                <Link to="/" className="logo">
                    <h1 className="navbar-brand text-uppercase p-0 m-0"
                    onClick={() => window.scrollTo({top: 0})}>
                       Tassili
                    </h1>
                </Link>

                <Searchnavbar  />

                <Menu />
            </nav>
        </div>
    )
}

export default Header
