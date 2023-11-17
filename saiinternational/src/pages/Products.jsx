import React from "react";
import { useSelector } from "react-redux";
export const Products = () => {

    // const all_product = [
    //     { 'product_name': 'Iran Apple', 'product_image': 'assets/siteimages/productsicon/iranapple.jpeg' },
    //     { 'product_name': 'Zespri Kiwi', 'product_image': 'assets/siteimages/productsicon/zesprikiwi.jpg' },
    //     { 'product_name': 'Washington Apple Red', 'product_image': 'assets/siteimages/productsicon/washingtonredapple.jpg' },
    //     { 'product_name': 'Washington Fuji', 'product_image': 'assets/siteimages/productsicon/washingtonfuji.jpg' },
    //     { 'product_name': 'Turkey Red Delicious', 'product_image': 'assets/siteimages/productsicon/turkeyreddelicious.jpg' },
    //     { 'product_name': 'Turkey Granny', 'product_image': 'assets/siteimages/productsicon/turkeygranny.jpg' },
    //     { 'product_name': 'South Africa Pears', 'product_image': 'assets/siteimages/productsicon/southafricapears.jpg' },
    //     { 'product_name': 'South Africa Gala', 'product_image': 'assets/siteimages/productsicon/southafricagala.jpg' },
    //     { 'product_name': 'Iran Kiwi', 'product_image': 'assets/siteimages/productsicon/iraniankiwi.jpg' },
    //     { 'product_name': 'Egypt Citrus', 'product_image': 'assets/siteimages/productsicon/egyptcitrus.jpg' },
    //     { 'product_name': 'Dragon Fruit', 'product_image': 'assets/siteimages/productsicon/dragonfruitgreen.jpg' },
    //     { 'product_name': 'Chilean Kiwi', 'product_image': 'assets/siteimages/productsicon/chileankiwi.jpg' },
    //     { 'product_name': 'Chile Grapes', 'product_image': 'assets/siteimages/productsicon/chilegrapes.jpg' },
    //     { 'product_name': 'Chilean Cherries', 'product_image': 'assets/siteimages/productsicon/chileancherries.jpeg' },
    //     { 'product_name': 'Beauty Packam Pears', 'product_image': 'assets/siteimages/productsicon/beautypackampears.jpg' },
    //     { 'product_name': 'China Grapes', 'product_image': 'assets/siteimages/productsicon/chinagrapes.jpg' },
    // ]

    const all_product = useSelector(state => state.products.products);

    const handleImageError = (event) =>{
        event.target.src = 'assets/siteimages/producticondefault1.png';
    }
    return (
        <>
            <div className="text-center border-bottom border-2 border-success">
                <img src="../../../../assets/siteimages/bannersphone/f3.jpg"
                    style={{ width: '100%', objectFit: 'cover' }} height="300px"
                ></img>
            </div>

            <div className="listing-wrapper mt-2 pb-3 pt-2 p-lg-0">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 mb-0">
                            <div
                                className="card d-flex flex-row justify-content-center text-uppercase p-3 bg-greylight border-1 border-success mb-3">
                                <span className="text-current fw-700"> All The Fresh Fruits We Have </span>
                            </div>
                        </div>
                    </div>

                    <div className="row pt-3">
                        {all_product && all_product.map((pr, index) => {
                           return <div className="col-lg-6 mb-4" key={JSON.parse(JSON.stringify(index))}>
                                <div className="text-center shadowpremium">
                                    <a href={pr.product_image} target="_blank">
                                        <img src={process.env.REACT_APP_IMAGE_URL+pr.image} className="" width="100%" style={{ objectFit: 'cover' }} height="500px"
                                             onError={handleImageError} />
                                        <h2 className="mt-2 fw-700 d-block lh-18 text-custom-primary pt-3 pb-4">
                                            {pr.product_name}
                                        </h2>
                                    </a>
                                </div>
                            </div>
                        })}
                    </div>
                </div>
            </div>
        </>
    )
}