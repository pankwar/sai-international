import React from "react";
import { UseSelector, useSelector } from "react-redux/es/hooks/useSelector";

export const PriceList = () => {
    const products_price_list = useSelector(state=>state.products.products);

    const handleImageError = (event) =>{
        event.target.src = 'assets/siteimages/producticondefault1.png';
    }
    return (
        <>
            <div className="text-center border-bottom border-2 border-success">
                <img src="../../../../assets/siteimages/bannersphone/f14.jpg"
                    style={{ width: '100%', objectFit: 'cover' }} height="300px" >
                </img>
            </div>

            <div className="blog-wrapper">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <h2 className="fw-700 text-grey-800 display1-size display1-sm-size lh-3 mt-4 mb-3 pe-lg-5 text-center">
                                <span className="text-current"> Price List </span>
                            </h2>

                            <div className="card">
                    <div className="card-header">
                        <div className="card-body">
                            <table className="table w-100 table-bordered">
                                <thead>
                                    <tr>
                                        {/* <th>Image</th> */}
                                        <th> Product Name </th>
                                        <th> Quantity in Numbers </th>
                                        <th> Price </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {products_price_list && products_price_list.map((item, index) => {
                                        return <tr key={JSON.parse(JSON.stringify(index))}>
                                            {/* <td>
                                            <img src={process.env.REACT_APP_IMAGE_URL+item.image} className="" 
                                            width="100%" style={{ objectFit: 'cover' }} height="500px"
                                             onError={handleImageError} />
                                            </td> */}
                                            <td> {item.product_name} </td>
                                            <td> {item.quantity} </td>
                                            <td> {item.price} </td>
                                        </tr>
                                    })}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

                        </div>

                        <div className="row mt-4">
                            <div className="col-lg-3 text-center mt-lg-5 mt-4">
                                <h1 className="display-1 fw-700 text-custom-secondary mt-2 mb-2">
                                    <i className="fa fa-users"></i>
                                </h1>
                                <h4 className="text-custom-primary fw-700 lh-18">PROFESSIONAL TEAM</h4>
                                <small className="font-xssss">
                                    Our team consists of highly expert professionals.
                                    Our team’s efforts towards products, services & processes
                                    seek consistent breakthrough development.
                                </small>
                            </div>

                            <div className="col-lg-3 text-center mt-lg-5 mt-4">
                                <h1 className="display-1 fw-700 text-custom-secondary mt-2 mb-2">
                                    <i className="fa fa-certificate"></i>
                                </h1>
                                <h4 className="text-custom-primary fw-700 lh-18">HIGH QUALITY PRODUCTS</h4>
                                <small className="font-xssss">
                                    Along with the other agricultural products that we have on offer,
                                    you can be sure of good production and peace of mind.
                                </small>
                            </div>

                            <div className="col-lg-3 text-center mt-lg-5 mt-4">
                                <h1 className="display-1 fw-700 text-custom-secondary mt-2 mb-2">
                                    <i className="fa fa-paper-plane"></i>
                                </h1>
                                <h4 className="text-custom-primary fw-700 lh-18">COMPLETE SOLUTIONS</h4>
                                <small className="font-xssss">
                                    We at Sai International are committed to provide high quality Agro Solutions
                                    with wide product range and short delivery time.
                                </small>
                            </div>

                            <div className="col-lg-3 text-center mt-lg-5 mt-4">
                                <h1 className="display-1 fw-700 text-custom-secondary mt-2 mb-2">
                                    <i className="fa fa-check-circle"></i>
                                </h1>
                                <h4 className="text-custom-primary fw-700 lh-18">GENUINE SERVICES</h4>
                                <small className="font-xssss">
                                    We provide wide range of services. We have our own strong marketing strategies for
                                    the promotion of various products.
                                </small>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}