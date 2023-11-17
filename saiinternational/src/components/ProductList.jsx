import React, { useEffect } from "react";
import "./ProductList.css"
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";


export const ProductList = () => {

//    var all_product = [
//         { 'product_name': 'Iran Apple', 'product_image': './assets/siteimages/productsicon/iranapple.jpeg' },
//         { 'product_name': 'Zespri Kiwi', 'product_image': 'assets/siteimages/productsicon/zesprikiwi.jpg' },
//         { 'product_name': 'Washington Apple Red', 'product_image': 'assets/siteimages/productsicon/washingtonredapple.jpg' },
//         { 'product_name': 'Washington Fuji', 'product_image': 'assets/siteimages/productsicon/washingtonfuji.jpg' },
//         { 'product_name': 'Turkey Red Delicious', 'product_image': 'assets/siteimages/productsicon/turkeyreddelicious.jpg' },
//         { 'product_name': 'Turkey Granny', 'product_image': 'assets/siteimages/productsicon/turkeygranny.jpg' },
//         { 'product_name': 'South Africa Pears', 'product_image': 'assets/siteimages/productsicon/southafricapears.jpg' },
//         { 'product_name': 'South Africa Gala', 'product_image': 'assets/siteimages/productsicon/southafricagala.jpg' },
//         { 'product_name': 'Iran Kiwi', 'product_image': 'assets/siteimages/productsicon/iraniankiwi.jpg' },
//         { 'product_name': 'Egypt Citrus', 'product_image': 'assets/siteimages/productsicon/egyptcitrus.jpg' },
//         { 'product_name': 'Dragon Fruit', 'product_image': 'assets/siteimages/productsicon/dragonfruitgreen.jpg' },
//         { 'product_name': 'Chilean Kiwi', 'product_image': 'assets/siteimages/productsicon/chileankiwi.jpg' },
//         { 'product_name': 'Chile Grapes', 'product_image': 'assets/siteimages/productsicon/chilegrapes.jpg' },
//         { 'product_name': 'Chilean Cherries', 'product_image': 'assets/siteimages/productsicon/chileancherries.jpeg' },
//         { 'product_name': 'Beauty Packam Pears', 'product_image': 'assets/siteimages/productsicon/beautypackampears.jpg' },
//         { 'product_name': 'China Grapes', 'product_image': 'assets/siteimages/productsicon/chinagrapes.jpg' },
//     ]


    const all_product = useSelector(state => state.products.products)
    console.log("products ", all_product);


    const handleImageError = (event) =>{
        event.target.src = 'assets/siteimages/producticondefault1.png';
    }

    return (
        <>
            <div className="content-wrap">
                <div className=" m-auto p-3">
                    <div className="row justify-content-center">
                        <div className="col-lg-9 m-auto text-justify">
                            <h2 className="fw-700 font-xl lh-3 text-custom-primary"> <i className="fa fa-apple-alt me-1"></i> Browse All The Fuits
                                We have</h2>
                            <p className=" fw-700 lh-24 text-custom-secondary text-capitalize">
                                Sai International fruits is fruits produced by methods that comply with the standard of farming.
                            </p>

                            <div className="row mt-4 mb-4">
                                {all_product && all_product.map((item, index)=>{
                                    return <div className="col-lg-4 mb-4" key={ JSON.parse(JSON.stringify(index))}>
                                    <div className="text-center shadowpremium">
                                        <Link to={item.product_image} target="_blank">
                                            <img src={process.env.REACT_APP_IMAGE_URL+item.image} className="productImage" width="100%" style={{ objectFit: 'cover' }} height="500px" alt=""
                                                srcSet="" onError={handleImageError}></img>
                                            <h2 className="mt-2 fw-700 d-block lh-18 text-custom-primary pt-3 pb-4">
                                                {item.product_name}
                                            </h2>
                                            {/* <button className="btn btn-md btn-warning"> Enquiry </button> */}
                                        </Link>
                                    </div>
                                </div>
                                })}
                              
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}