import React from 'react'
import Noonlogo from "../images/Noonlogo.svg";
// import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-warning">
                <div className="container-fluid">
                    <img className="navbar-brand" src={Noonlogo} width="70" />
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Deliver to Dubai &nbsp;
                                </a>
                                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><a class="dropdown-item" href="#">Action</a></li>
                                    <li><a class="dropdown-item" href="#">Another action</a></li>
                                    <li><hr class="dropdown-divider" /></li>
                                    <li><a class="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                    <input className="form-control me-2" type="search" placeholder="What are you looking for?" aria-label="Search" />
                    <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="/">العربية</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Sign In</a>
                            {/* <PersonOutlineIcon/> */}
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#" tabindex="-1" aria-disabled="true">Cart</a>
                        </li>
                    </ul>
                </div>
            </nav>
            <div className="container-fluid navbar navbar-expand-lg navbar-light bg-light  text-dark fw-bold">
                <div class="dropdown">
                    <button class="btn text-primary btn-lg dropdown-toggle border-end" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                    All Categories  &nbsp; &nbsp; &nbsp;
                    </button>
                    <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                        <li><a class="dropdown-item" href="#">Action</a></li>
                        <li><a class="dropdown-item" href="#">Another action</a></li>
                        <li><a class="dropdown-item" href="#">Something else here</a></li>
                    </ul>
                </div>
                <ul className="navbar-nav  mb-2 mb-lg-0">
                    <li className="nav-item px-2"><a className="nav-link" href="">Electronics</a></li>
                    <li className="nav-item px-2"><a className="nav-link" href="">Men</a></li>
                    <li className="nav-item px-2"><a className="nav-link" href="">Women</a></li>
                    <li className="nav-item px-2"><a className="nav-link" href="">Home</a></li>
                    <li className="nav-item px-2"><a className="nav-link" href="">Beauty &Fragrance</a></li>
                    <li className="nav-item px-2"><a className="nav-link" href="">Baby & Toys</a></li>
                    <li className="nav-item px-2"><a className="nav-link" href="">Grocery</a></li>
                    <li className="nav-item px-2"><a className="nav-link" href="">Sports</a></li>
                    <li className="nav-item px-2"><a className="nav-link" href="">Bestsellers</a></li>
                    <li className="nav-item px-2"><a className="nav-link" href="">Sell on noon</a></li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar
