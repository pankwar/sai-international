import React from "react";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import './HomePageSlider.css'

export const HomePageSlider = () => {
    const allBanners = [
        // {'title':'', 'banner_image_name':'assets/siteimages/bannersphone/f15.jpg'},
        {'title':'', 'banner_image_name':'./assets/siteimages/bannerso/f6.jpeg'},
        {'title':'', 'banner_image_name':'./assets/siteimages/officeimage.jpeg'},
        {'title':'', 'banner_image_name':'./assets/siteimages/bannerso/f1.jpeg'},
        {'title':'', 'banner_image_name':'./assets/siteimages/bannerso/f2.jpeg'},
        {'title':'', 'banner_image_name':'./assets/siteimages/bannerso/f3.jpeg'},
        {'title':'', 'banner_image_name':'./assets/siteimages/bannerso/f4.jpeg'},
        {'title':'', 'banner_image_name':'./assets/siteimages/bannerso/f5.jpeg'},
      ]
    const options = {
        loop: true,
        mouseDrag: true,
        touchDrag: true,
        pullDrag: false, 
        dots: false,
        margin: 10,
        navSpeed: 700,

        navText: ['', '',],
        nav: false,
        autoplay:true,
        autoplayHoverPause: false,
        autoplayTimeout:2000,
        autoplaySpeed:500,
        items:3,
        responsive: {
          0: {
            items: 1,
            nav:false,
            dots:false,

          },
          400: {
            items: 1,
            nav:false,
            dots:false,

          },
          740: {
            items: 1,
            nav:false,
            dots:false,
          },
          940: {
            items: 1,
            nav:false,
            dots:false,
          }
        },
      }
    return (
        <>
        <OwlCarousel className='owl-theme' {...options}>
            {allBanners.map((banner, index)=>{
                return <div key={JSON.parse(JSON.stringify(index))} className="bg-image-center" 
                style={{backgroundImage: `url(${banner.banner_image_name})`, height:'700px'}}>
                <div className="container bannertextstyle">
                    <div className="text-center text-white shadowpremium mb-2 p-2 p-lg-5 d-block d-lg-block" style={{backgroundColor: 'rgba(0,0,0,0.3)'}}>
                        <h2 className="text-capitalize text-white">Quantity Merchandise At Competitive Rate</h2>
                        <h1 className="text-white text-uppercase mt-2 mb-2 mt-lg-4 mb-lg-4"><b>
                          Enjoy The Pleasures Of Fresh Fruits</b></h1>
                        <h2 className="text-white mb-lg-4">sai international fruits is fruits produced by methods that comply with the standard of farming.</h2>
                        <div className="clearfix"></div>
                        <a href="tel:+919871088635" className="btn-lg rounded-25 btn bg-current text-white"> <i className="fa fa-phone me-1"></i> Call Us Now </a>
                    </div>
                </div>
      </div>
            })}
   
</OwlCarousel>
        </>
    )
}