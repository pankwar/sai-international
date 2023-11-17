import React from "react";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import './GallerySection.css'

export const GallerySection = () => {
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
        autoplayHoverPause: false,
        autoplayTimeout: 2500,
        autoplaySpeed: 800,
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
    const galleryList = [
        { 'title': '', 'title_image': 'assets/siteimages/bannersphone/f15.jpg' },
        { 'title': '', 'title_image': 'assets/siteimages/bannerso/f1.jpeg' },
        { 'title': '', 'title_image': 'assets/siteimages/bannerso/f2.jpeg' },
        { 'title': '', 'title_image': 'assets/siteimages/bannerso/f3.jpeg' },
        { 'title': '', 'title_image': 'assets/siteimages/bannerso/f4.jpeg' },
        { 'title': '', 'title_image': 'assets/siteimages/bannerso/f5.jpeg' },
        { 'title': '', 'title_image': 'assets/siteimages/bannerso/f6.jpeg' },
        { 'title': '', 'title_image': 'assets/siteimages/gallery/1.jpeg' },
        { 'title': '', 'title_image': 'assets/siteimages/gallery/2.jpeg' },
        { 'title': '', 'title_image': 'assets/siteimages/gallery/3.jpeg' },
        { 'title': '', 'title_image': 'assets/siteimages/gallery/4.jpeg' },
        { 'title': '', 'title_image': 'assets/siteimages/gallery/5.jpeg' },
        { 'title': '', 'title_image': 'assets/siteimages/gallery/6.jpeg' },
        { 'title': '', 'title_image': 'assets/siteimages/gallery/7.jpeg' },
        { 'title': '', 'title_image': 'assets/siteimages/gallery/8.jpeg' },
        { 'title': '', 'title_image': 'assets/siteimages/gallery/9.jpeg' },
    ]
    return (
        <>
            <div className="blog-wrapper pt-4 pb-lg-5 pt-lg-5 pb-4">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <h2 className="fw-700 font-sm mb-4 mt-2 text-uppercase d-flex lh-18 text-custom-primary">
                                From The Gallery
                            </h2>
                        </div>
                        <OwlCarousel className='owl-theme' {...options}>
                            {galleryList.map((item, index) => {
                                return <div className="col-lg-12" key={JSON.parse(JSON.stringify(index))}>
                                        <article className="blog-div sm-mb-3">
                                            <div className="card border-0 bg-transparent">
                                                <div className="card-image mb-2 rounded-6 ovh">
                                                    <a href={item.title_image} target="_blank">
                                                        <img src={item.title_image} alt="blog" className="w-100 hover-zoom blogImageStyle"></img>
                                                    </a>
                                                </div>
                                            </div>
                                        </article>
                                    </div>
                            })}
                        </OwlCarousel>
                    </div>
                </div>
            </div>

        </>
    )
} 