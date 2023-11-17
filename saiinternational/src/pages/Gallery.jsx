import React from "react";

export const Gallery = () => {
    const imageList = [
        { 'title': '', 'title_image': 'assets/siteimages/gallery/11.jpeg' },
        { 'title': '', 'title_image': 'assets/siteimages/gallery/10.jpeg' },
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
            <div className="text-center border-bottom border-2 border-success">
                <img src="../../../../assets/siteimages/bannersphone/f12.jpg" style={{ width: '100%', objectFit: 'cover' }} height="300px"></img>
            </div>

            <div className="listing-wrapper mt-2 pb-3 pt-2 p-lg-0">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-12 mb-0">
                            <div
                                className="card d-flex flex-row justify-content-center text-uppercase p-3 bg-greylight border-1 border-success mb-3">
                                <span className="text-current fw-700"> From The Gallery </span>
                            </div>
                        </div>
                    </div>

                    <div className="container">
                        <div className="row">
                            {imageList.map((item, index) => {
                                return <div className="col-lg-3" key={JSON.parse(JSON.stringify(index))}>
                                    <article className="blog-div mb-2">
                                        <div className="card border-0 bg-transparent">
                                            <div className="card-image mb-2 rounded-6 ovh">
                                                <a href={item.title_image} target="_blank">
                                                    <img src={item.title_image} height="210px"
                                                        style={{ objectFit: 'cover' }}
                                                        className="w-100 hover-zoom blogImageStyle shadow"></img>
                                                </a>
                                            </div>
                                        </div>
                                    </article>
                                </div>
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}