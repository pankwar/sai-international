import React from "react";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

export const TeamsList = () => {
    const options = {
        loop: true,
        mouseDrag: true,
        touchDrag: true,
        pullDrag: false,
        dots: false,
        margin: 40,
        navSpeed: 700,
        navText: ['', '',],
        nav: false,
        autoplay: true,
        autoplayHoverPause: true,
        autoplayTimeout: 2000,
        autoplaySpeed: 500,
        items: 3,
        responsive: {
            0: {
                items: 1,
                nav: false,
                dots: false,
            },
            400: {
                items: 2,
                nav: false,
                dots: false,
            },
            740: {
                items: 3,
                nav: false,
                dots: false,
            },
            940: {
                items: 3,
                nav: false,
                dots: false,
            }
        },
    }
    const teamMembers = [
        {
            name: "Pawan Kumar",
            role: "Managing Director",
            image: "team/Pawan Kumar.jpeg",
            text: "",
        },
        {
            name: "Sukhwinder Kaur",
            role: "Director",
            image: "team/sukhwinder kaur.jpeg",
            text: "",
        },
        {
            name: "Satish Kumar",
            role: "Sales Manager",
            image: "team/2.jpeg",
            text: "",
        },
        {
            name: "Rajesh Kumar",
            role: "Sales Manager",
            image: "team/1.jpeg",
            text: "",
        },
        {
            name: "Sunil Kumar",
            role: "Account Manager",
            image: "team/3.jpeg",
            text: "",
        },
        // {
        //   name:"Sunil Tyagi",
        //   role:"Marketing Director",
        //   image:"team/sunil tyagi.jpeg",
        //   text:"",
        // },
    ]
    return (
        <>
            <div className="feedback-wrapper pt-4 pb-lg-5 pt-lg-5 pb-4" 
            style={{backgroundImage: 'url(../../../../assets/siteimages/bannersphone/f6.jpg)',  
            backgroundPosition: 'center'}}>
                <div className="container">
                    <div className="row justify-content-center mb-4">
                        <div className="col-lg-6 text-center">
                            <h2 className="fw-700 text-white font-xxl lh-3"> Our <span > <strong> Team </strong></span> </h2>
                        </div>
                    </div>
                    <OwlCarousel className='owl-theme' {...options}>
                    {teamMembers.map((item, index) => {
                        return <div key={JSON.parse(JSON.stringify(index))} className="col-lg-12 card bg-white shadow-xs border-0 rounded-6 p-lg-5 p-4">
                            <div className="section full">
                                <div className="row">
                                    <div className="col-12 text-left">
                                        <a href={`../../../../assets/siteimages/${item.image}`} target="_blank">
                                            <img src={`../../../../assets/siteimages/${item.image}`}
                                                style={{ width: '100% !important', height: '200px', objectFit: 'cover'}} alt="image" 
                                                className="shadowpremium rounded-25"></img>
                                        </a>
                                        <h2 className="text-center mt-5 text-custom-primary"> {item.name} </h2>
                                        <h2 className="text-center text-custom-secondary"> {item.role} </h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    })}
                    </OwlCarousel>
                </div>
            </div>
        </>
    )
}