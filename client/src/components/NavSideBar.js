import React from 'react'
import './navsidebar.css'
import Logo from "../assets/img/logo.png"
import Search from '../components/Search'


function NavSideBar() {
    return (
        <div className="m-2">
            <nav className="navbar navbar-expand-lg text-success">
                <div className="container-fluid">
                    <a href="/home" className="navbar-brand">
                        <img src={Logo} alt="" width="130" height="57" />
                    </a>
                    <button type="button" className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <Search />
                    <div className="collapse navbar-collapse" id="navbarCollapse">
                        <div className="navbar-nav ms-auto">
                            <a href="/home" className="nav-item nav-link m-0">
                                <i className="bi bi-list text-success px-1"></i>
                                Home
                            </a>
                            <a href="/viewprofile" className="nav-item nav-link m-0">
                                <i className="bi bi-people-fill text-success px-1"></i>
                                Profiles
                            </a>
                            
                            <a href="/signupcreate" className="nav-item nav-link m-0">
                                <i className="bi bi-pencil-square text-success px-1"></i>
                                SignUp
                            </a>
                            <a href="/registration" className="nav-item nav-link m-0">
                                <i className="bi bi-calendar2-check text-success px-1"></i>
                                Registration
                            </a>
                            <a href="/registration/uploads" className="nav-item nav-link m-0">
                                <i className="bi bi-upload text-success px-1"></i>
                                Uploads
                            </a>
                        </div>
                        <div className="navbar-nav ms-auto">
                        <a href="/" className="nav-item nav-link p-1">
                                <i className="bi bi-box-arrow-right text-success px-1"></i>
                                Logout
                            </a>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default NavSideBar