import React from "react";

export const CategoryModal = () => {
    const all_category = [
        { 'product_name': 'Iran Apple', 'product_image': 'assets/siteimages/productsicon/iranianapple.jpg' },
        { 'product_name': 'Zespri Kiwi', 'product_image': 'assets/siteimages/productsicon/zesprikiwi.jpg' },
        { 'product_name': 'Washington Apple Red', 'product_image': 'assets/siteimages/productsicon/washingtonredapple.jpg' },
        { 'product_name': 'Washington Fuji', 'product_image': 'assets/siteimages/productsicon/washingtonfuji.jpg' },
        { 'product_name': 'Turkey Red Delicious', 'product_image': 'assets/siteimages/productsicon/turkeyreddelicious.jpg' },
        { 'product_name': 'Turkey Granny', 'product_image': 'assets/siteimages/productsicon/turkeygranny.jpg' },
        { 'product_name': 'South Africa Pears', 'product_image': 'assets/siteimages/productsicon/southafricapears.jpg' },
        { 'product_name': 'South Africa Gala', 'product_image': 'assets/siteimages/productsicon/southafricagala.jpg' },
        { 'product_name': 'Iran Kiwi', 'product_image': 'assets/siteimages/productsicon/iraniankiwi.jpg' },
        { 'product_name': 'Egypt Citrus', 'product_image': 'assets/siteimages/productsicon/egyptcitrus.jpg' },
        { 'product_name': 'Dragon Fruit', 'product_image': 'assets/siteimages/productsicon/dragonfruit.jpg' },
        { 'product_name': 'Chilean Kiwi', 'product_image': 'assets/siteimages/productsicon/chileankiwi.jpg' },
        { 'product_name': 'Chile Grapes', 'product_image': 'assets/siteimages/productsicon/chilegrapes.jpg' },
        { 'product_name': 'Chilean Cherries', 'product_image': 'assets/siteimages/productsicon/chileancherries.jpeg' },
        { 'product_name': 'Beauty Packam Pears', 'product_image': 'assets/siteimages/productsicon/beautypackampears.jpg' },
    ]
    return (
        <>
            <div className="modal fade left modal-scrollable" id="categorymodal" tabIndex="-1" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content theme-dark-bg p-0 border-0 rounded-0">
                        <button type="button" className="btn-close z-index-5 bg-grey font-xsssss w-26 h-26 text-center rounded-circle posa right-0 top-0 mt-3 me-3" data-bs-dismiss="modal" aria-label="Close"></button>
                        <div className="modal-body vw100 text-start p-0">
                            <div className="card p-4 border-0 text-start">
                                <h4 className="fw-700 font-lg text-custom-primary text-start mb-3 mt-n2 d-block ls-0"> All Fruits</h4>
                                <ul className="ms-0 ps-0 border-0 mt-3">
                                    {all_category.map((category, index) => {
                                        return <li key={JSON.parse(JSON.stringify(index))}>
                                                <img src={category.product_image} width="100%"
                                                    className="d-inline-block me-2 rounded-25" alt="Servesmile Category"></img>
                                                <h3 className="mt-4 mb-4 text-center">
                                                    <a className="d-inline-block text-custom-secondary" data-bs-dismiss="modal">
                                                        <strong>{category.product_name} </strong></a>
                                                </h3>
                                            </li>
                                    })}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
} 