import React from "react";
import './Header.css'
import { Link, useNavigate } from "react-router-dom";

export const Header = () => {
    const navigate = useNavigate();
    return (
        <>
            <div className="header-menu-mob pt-2 pb-2 shadow-xss position-fixed w-100 z-index-5 bg-white d-none d-block-md">
                <div className="container">
                    <div className="row">
                        <div className="col text-start"><button className="navbar-toggler border-0" type="button" data-bs-toggle="modal"
                            data-bs-target="#menumodal"><span className="navbar-toggler-icon"></span></button></div>
                        <div className="col text-center">
                            <Link to="/">
                                <img src="../assets/siteimages/logot.png"
                                    alt="logo" className="logo w-100 pt-1"></img>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="upper-header bg-lightgrey pt-2 pb-2 d-none d-lg-block">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">

                            <ul className="nav">
                                <li className="nav-item"><a className="text-deepgreen ">
                                    <i className="fa fa-envelope me-1"></i> pkumar@saiinternational.net</a></li>
                                <li className="nav-item">
                                    <button onClick={() => navigate('/contact')} className="btn btn-sm btn-success" role="button">
                                        <i className="fa fa-envelope me-1"></i> Enquiry
                                    </button>
                                </li>
                            </ul>

                        </div>
                        <div className="col-lg-6 text-end">
                            <ul className="navbar-nav float-end socialIconStyle">
                                <li className="list-inline-item"><Link href=""><i className="fa-brands fa-facebook-f text-facebook"></i></Link></li>
                                <li className="list-inline-item"><Link href=""><i className="fa-brands fa-twitter text-twiiter"></i></Link></li>
                                <li className="list-inline-item"><Link href=""><i className="fa-brands fa-linkedin text-linkedin"></i></Link></li>
                                <li className="list-inline-item"><Link href=""><i className="fa-brands fa-instagram text-instagram"></i></Link></li>
                                <li className="list-inline-item"><Link href=""><i className="fa-brands fa-youtube text-youtube"></i></Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="header-wrapper pt-4 pb-4 z-index-5 ovh bg-white d-none d-lg-block">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <Link to="/">
                                <img src="../assets/siteimages/logot.png" alt="logo"
                                    className="logo"></img>
                            </Link>
                        </div>
                        <div className="col-lg-6 text-end">
                            <a type="button" href="tel:+919555511987" className="btn btn-lg btn-outline-success shadowpremium mt-2">
                                <i className="fa fa-phone me-2"></i> Call Now
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="lower-header pt-0 pb-0 shadow-xss z-index-1 bg-invert bg-deepgreen d-none d-lg-block">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 pe-0">
                            <div className="dropdown dropdown-right border-0">
                                <button className="btn border-0 rounded-0 dropdown-toggle dropdown-toggle-white bg-warning ps-3"
                                    type="button" data-bs-toggle="modal" data-bs-target="#categorymodal">
                                    <i className="feather-align-left"></i> All Fruits
                                </button>

                            </div>
                        </div>
                        <div className="col-lg-9">
                            <div className="navbar navbar-expand-lg p-0">
                                <div className="navbar-collapse collapse show" id="main_nav" >
                                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#main_nav" aria-expanded="true" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
                                    <ul className="navbar-nav m-auto">

                                        <li className="nav-item active">
                                            <Link className="nav-link" to="/home" aria-expanded="false">Home </Link>
                                        </li>

                                        <li className="nav-item active">
                                            <Link className="nav-link" to="/products" aria-expanded="false">Products </Link>
                                        </li>

                                        <li className="nav-item active nav-item-toggle">
                                            <Link className="nav-link" to="/about" aria-expanded="false"> About </Link>
                                        </li>

                                        <li className="nav-item active nav-item-toggle">
                                            <Link className="nav-link" to="/gallery" aria-expanded="false">Gallery</Link>
                                        </li>

                                        <li className="nav-item active nav-item-toggle">
                                            <Link className="nav-link" to="/contact" aria-expanded="false">Contact</Link>
                                        </li>

                                        <li className="nav-item active nav-item-toggle">
                                            <Link className="nav-link" to="/team" > Team </Link>
                                        </li>

                                        <li className="nav-item active nav-item-toggle">
                                            <Link className="nav-link" to="/lubanacoldchain"> Lubana Coldchain Transport </Link>
                                        </li>
                                        <li className="nav-item active nav-item-toggle">
                                            <Link className="nav-link" to="/pricelist"> Price List </Link>
                                        </li>
                                    </ul>
                                    <ul className="navbar-nav ms-auto">
                                        <li className="nav-item text-grey-200 fw-500 font-xssss">
                                            <a href="tel:+919555511987" className="fw-700 text-white">
                                                +91-9555511987</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}