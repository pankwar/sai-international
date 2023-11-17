import React from "react";

export const Contact = () => {
  return (
    <>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3499.186695612934!2d77.16961591492532!3d28.71396608238567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d019839f6166b%3A0x892d25a785db019d!2sSai%20International!5e0!3m2!1sen!2sin!4v1653236977481!5m2!1sen!2sin"
       width="100%" height="300" style={{border:'0'}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
      <div className="contact-wrapp pt-0 pb-5 mt-lg-3 mb-lg-3">
        <div className="container">
          <div className="row">
            <div className="col-lg-7">
              <div className="card pt-4 bg-white border-0 mb-3">
                <div className="form-group mb-4">
                  <h6 className="fw-700 text-orange font-sm mb-0"> <i className="fa fa-globe me-1"></i> Reach us</h6>
                </div>
                <div className="row">
                  <div className="col-lg-12 mb-3 mb-lg-12">
                    <h3 className="text-deepgreen lh-30 fw-700 text-justify">
                      You can always visit us in our comfortable office.
                      View Our Office address and opening hours or call/email us directly using the information below.
                    </h3>
                    <h4 className="lh-26 fw-700 text-deepgreen mt-3 text-justify">
                      <span className="text-custom-primary">
                        <i className="fa fa-suitcase me-1"></i> Office Address : </span>
                      C-100, 2 floor, New fruit Market,<br />
                      Azadpur Mandi,Delhi - 110033
                    </h4>

                    <h4 className="lh-26 fw-700 text-deepgreen mt-3 text-justify">
                      <span className="text-custom-primary"> <i className="fa fa-store me-1"></i> Shops Address : </span>
                      B-161, New fruit Market, <br />
                      Azadpur Mandi, Delhi - 110033
                    </h4>

                    <h4 className="lh-22 fw-700 text-deepgreen mt-3 mb-0">
                      <span className="mt-2 mb-2 d-block text-custom-primary"> <i className="fa fa-phone me-1"></i> Contacts </span>
                      <ul className="menu">
                        <li className="">
                          <a> +91-9311208484</a>
                        </li>
                        <li>
                          <a> +91-9540619385</a>
                        </li>
                        <li className="">
                          <a> +91-8384011904</a>
                        </li>
                        <li className="">
                          <a> +91-8700450765</a>
                        </li>
                        <li>
                          <a> +91-9821974007</a>
                        </li>
                      </ul>
                    </h4>

                    <h4 className="lh-22 fw-700 text-deepgreen mt-3 mb-0">
                      <span className="mt-2 mb-2 d-block text-custom-primary">
                        <i className="fa fa-envelope me-1"></i> Email </span>
                    </h4>
                    <h5 className="lh-26 fw-700 text-deepgreen mt-2">
                      pkumar@saiinternational.net
                    </h5>

                    <h5 className="lh-26 fw-700 text-deepgreen mt-2">
                      skaur@saiinternational.net
                    </h5>

                    <h5 className="lh-26 fw-700 text-deepgreen mt-2">
                      skumar@saiinternational.net
                    </h5>

                    <h5 className="lh-26 fw-700 text-deepgreen mt-2">
                      sk@saiinternational.net
                    </h5>

                    <h5 className="lh-26 fw-700 text-deepgreen mt-2">
                      rkumar@saiinternational.net
                    </h5>

                    <h4 className="lh-22 fw-700 text-deepgreen mt-3 mb-0">
                      <span className="mt-2 mb-2 d-block text-custom-primary"> <i className="fa fa-clock me-1"></i> Timings </span>
                    </h4>
                    <h5 className="lh-26 fw-700 text-deepgreen mt-2">
                      Monday To Saturday : 10am - 7pm <br />
                      Sunday is Closed
                    </h5>

                    <h4 className="lh-22 fw-700 text-deepgreen mt-3 mb-0">
                      <span className="mt-2 mb-2 d-block text-custom-primary"> <i className="fa fa-bank me-1"></i> Account Details </span>
                    </h4>
                    <h5 className="lh-26 fw-700 text-deepgreen mt-2">
                      SAI INTERNATIONAL <br />
                      A/C NO 042305501941 <br />
                      IFSC CODE ICIC0000423 <br />
                      AZAD PUR BRANCH <br />
                      DELHI 110033
                    </h5>
                    <h5 className="lh-26 fw-700 mt-5">
                      <a href="tel:+919821974007" className="btn btn-lg btn-success bg-current text-white"> <i className="fa fa-phone me-2"></i>  Call Us Now </a>
                    </h5>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-5 ">
              <div className="card p-lg-5 p-4 bg-lightgrey border-0">
                <div className="form-group mb-3">
                  <h6 className="fw-700 text-grey-900 font-sm mb-0">Get in touch with us</h6>
                </div>
                <div className="form-group mb-3">
                  <input type="text" placeHolder="Name" className="lh-38 p-2 ps-3 font-xssss fw-500 rounded-6 posr border border-light w-100"></input>
                </div>
                <div className="form-group mb-3">
                  <input type="text" placeHolder="Email" className="lh-38 p-2 ps-3 font-xssss fw-500 rounded-6 posr border border-light w-100"></input>
                </div>
                <div className="form-group mb-3">
                  <input type="text" placeHolder="Phone" className="lh-38 p-2 ps-3 font-xssss fw-500 rounded-6 posr border border-light w-100"></input>
                </div>
                <div className="form-group mb-1">
                  <textarea name="message" className="border-light border font-xssss fw-500 text-grey-600 p-2 rounded-6 ovh w-100 ps-3" cols="30" rows="6">Message</textarea>
                </div>
                <a href="#" className="btn-lg rounded-6 font-xssss p-3 fw-600 ls-3 text-white  btn bg-current">SEND</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}