import React from "react";
import { Link, useNavigate } from "react-router-dom";
export const MobileMenuModal = () => {
    const naviagte = useNavigate();
    function refresh() {
        window.location.reload();
    }
    return (
        <>
            <div className="modal fade left modal-scrollable" id="menumodal" tabIndex="-1" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content theme-dark-bg p-0 border-0 rounded-0">
                        <button type="button" className="btn-close z-index-5 bg-grey font-xsssss w-26 h-26 text-center rounded-circle posa right-0 top-0 mt-4 me-3" data-bs-dismiss="modal" aria-label="Close"></button>
                        <div className="modal-body vw100 text-start p-0 h-100">
                            <div className="card p-4 border-0 text-start h-100 ">
                                <h4 className="fw-700 font-lg text-grey-900 text-start mb-3 d-block ls-0"> Menu</h4>

                                <ul className="navbar-nav">
                                    <li className="nav-item active">
                                        <Link className="nav-link" to="/home" data-bs-dismiss="modal" onClick={()=>naviagte('/home')} aria-expanded="false">
                                            <i className="fa fa-home me-1"></i> Home </Link>
                                    </li>

                                    <li className="nav-item active">
                                        <Link className="nav-link" to="/products" data-bs-dismiss="modal" onClick={()=>naviagte('/products')} aria-expanded="false">
                                            <i className="fa fa-apple-alt me-1"></i> Products </Link>
                                    </li>

                                    <li className="nav-item active nav-item-toggle">
                                        <Link className="nav-link" to="/pricelist" data-bs-dismiss="modal" onClick={()=>naviagte('/pricelist')}>
                                            <i className="fa fa-paper-plane me-1"></i> Price List </Link>
                                    </li>

                                    <li className="nav-item active nav-item-toggle">
                                        <Link className="nav-link" to="/about" data-bs-dismiss="modal" onClick={()=>naviagte('/about')} aria-expanded="false">
                                            <i className="fa fa-user me-1"></i> About </Link>
                                    </li>

                                    <li className="nav-item active nav-item-toggle">
                                        <Link className="nav-link" to="/gallery" data-bs-dismiss="modal" onClick={()=>naviagte('/gallery')} aria-expanded="false">
                                            <i className="fa fa-image me-1"></i> Gallery</Link>
                                    </li>

                                    <li className="nav-item active nav-item-toggle">
                                        <Link className="nav-link" to="/contact" data-bs-dismiss="modal" onClick={()=>naviagte('/contact')} aria-expanded="false">
                                            <i className="fa fa-phone me-1"></i> Contact</Link>
                                    </li>

                                    <li className="nav-item active nav-item-toggle">
                                        <Link className="nav-link" to="/team" data-bs-dismiss="modal" onClick={()=>naviagte('/team')}>
                                            <i className="fa fa-users me-1"></i> Team </Link>
                                    </li>

                                    <li className="nav-item active nav-item-toggle">
                                        <Link className="nav-link" to="/lubanacoldchain" data-bs-dismiss="modal" onClick={()=>naviagte('/lubanacoldchain')}>
                                            <i className="fa fa-paper-plane me-1"></i> Lubana Coldchain Transport </Link>
                                    </li>

                                    <li className="nav-item active">
                                        <a href="" type="button" className="nav-link" role="button" data-bs-dismiss="modal" onClick={refresh} aria-expanded="false">
                                            <i className="fa fa-sync-alt"></i> Refresh Application
                                        </a>
                                    </li>
                                </ul>

                                <ul className="navbar-nav">
                                    <li className="nav-item text-grey-800 fw-500 font-xssss" >Need help? Call Us :
                                        <a href="tel:+919871088635" className="fw-700 btn btn-sm text-white">
                                            +91-9871088635</a></li>
                                </ul>

                                <div className="card h-auto mt-auto p-4 w-100 rounded-10 theme-bg border-0 text-center bg-image-cover">
                                    <img src="assets/siteimages/logot.png" className="w-100" ></img>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}