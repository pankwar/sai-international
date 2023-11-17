import React from "react";
import './AboutShort.css'
export const AboutShort = () =>{
  return(
   <>
   <div className="content-wrap">
  <div className="container m-auto p-3">
    <h2 className="fw-700 text-grey-900 font-xl lh-3 text-custom-primary pt-4 pb-4"> 
    <i className="fa fa-info-circle me-1"></i> About Sai International</h2>
      <div className="row justify-content-center">
        <div className="col-lg-5">
          <img src="../../../../assets/siteimages/officeimage.jpeg" 
          width="100%" height="335px" style={{objectFit: 'cover', objectPosition:'top'}} alt=""></img>
        </div>
          <div className="col-lg-7 text-lg-justify">
              <p className="text-custom-secondary fw-700 lh-24 text-justify">
                Sai International traces its history in the field of fresh fruits and vegetables (F&V) back to Jan 2015 and
                is a name of trust
                in quality and services in F&V business in India. Company deals in bulk and custom packed,
                Imported as well as Domestic fruits and vegetables. Sai International is an established name
                among the growers, suppliers and dealers & distributors with strong relations dating back to
                couple of decades and only growing stronger by each day. Group started its operations as
                'fruit exporter and order supplier' of different varieties of apples. Over the decades of operation's
                company has added many more fruits and vegetables to its product line and is open experiment and add more.
                We pride ourselves in being present across the whole value chain with a deep understand of the business
                and a rich inheritance in this sector.
                Sound which can be carry to market area. Our business model operates
                in a mutually beneficial and long-term relationship by obtaining quality
                 merchandise at best possible competitive rates
              </p>
          </div>


      </div>
  </div>
</div>



   </> 
  )  
} 