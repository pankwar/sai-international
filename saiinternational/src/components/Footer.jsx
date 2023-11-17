import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css"
export const Footer = () =>{
  return(
   <>
  <div className="upper-footer bg-black footerStylecustom">
  <div className="container">
    <div className="row">
      <div className="col-lg-12">
        <hr />
      </div>
    </div>
  </div>
  <div className="container">
    <div className="row">
      <div className="col-lg-12 pt-5 mt-5"></div>
      <div className="col-md-6 col-12 sm-mb-3">
        <h3>
          <img src="assets/siteimages/logot.png" className="w-100" alt="" srcSet=""></img>
        </h3>
        <ul className="menu">
          <li className="">
            <Link to="">
              Sai International was founded with the sole aim of instilling ease & simplicity in sourcing.
              It’s a one-stop import-export solution provider
               with vast experience in international trade and global exposure in diverse areas of operation.
            </Link>
          </li>

        </ul>
      </div>
      <div className="col-md-3 col-xs-6 sm-mb-3 footerItem">
        <h3 className="text-custom-primary">Address & Contact</h3>
        <ul className="menu">

          <li className="">
            <Link><i className="fa fa-phone me-1"></i> +91-9311208484</Link>
          </li>
          <li>
            <Link><i className="fa fa-phone me-1"></i> +91-9540619385</Link>
          </li>
          <li className="">
            <Link><i className="fa fa-phone me-1"></i> +91-8384011904</Link>
          </li>
           <li className="">
            <Link><i className="fa fa-phone me-1"></i> +91-8700450765</Link>
          </li>
          <li>
            <Link><i className="fa fa-phone me-1"></i> +91-9821974007</Link>
          </li>

          <li className="mt-3"><Link>
            <i className="fa fa-map-marker me-1"></i> Sai International B 160
              Second Floor Azadpur Mandi Delhi - 110033
            </Link>
          </li>
        </ul>
      </div>
      <div className="col-md-3 col-xs-6 sm-mb-3 footerItem">
        <h3 className="text-success">Quick Links</h3>
        <ul className="menu">
          <li><Link to="/home">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/products">Products</Link></li>
          <li><Link to="/pricelist">Pricelist</Link></li>
          <li><Link to="/gallery">Galery</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/lubanacoldchaintransport">Lubana Coldchain Transport</Link></li>
        </ul>
      </div>
      <div className="col-lg-12 pt-5 mt-5"></div>
    </div>
  </div>
</div>
<div className="lower-footer bg-black pb-2 pt-2">
  <div className="container">
    <div className="row">
      <div className="col-md-6 text-center text-sm-start xs-mb-3">
        <p className="text-grey-500 fw-500 font-xssss mb-0">@ Copyright 2022 All rights reserved.</p>
      </div>
      <div className="col-md-6 text-center text-sm-end">
        <ul className="list-inline socialIconStyle">
          <li className="list-inline-item"><Link to=""><i
                className="fa-brands fa-facebook-f text-facebook"></i></Link></li>
          <li className="list-inline-item"><Link to=""><i
                className="fa-brands fa-twitter text-twiiter"></i></Link></li>
          <li className="list-inline-item"><Link to=""><i
                className="fa-brands fa-linkedin text-linkedin"></i></Link></li>
          <li className="list-inline-item"><Link to=""><i
                className="fa-brands fa-instagram text-instagram"></i></Link></li>
          <li className="list-inline-item"><Link to=""><i
                className="fa-brands fa-youtube text-youtube"></i></Link></li>
        </ul>
      </div>
    </div>
  </div>
</div>

   </> 
  )  
} 