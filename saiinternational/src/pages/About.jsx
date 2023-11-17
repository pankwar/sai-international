import React from "react";

export const About = () => {
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
        // {
        //     name: "Sunil Tyagi",
        //     role: "Marketing Director",
        //     image: "team/sunil tyagi.jpeg",
        //     text: "",
        // },
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
    ]
    return (
        <>
            <div className="text-center border-bottom border-2 border-success">
                <img src="../../../../assets/siteimages/bannersphone/f6.jpg"
                    style={{width:'100%', objectFit: 'cover'}} height="300px"
                ></img>
            </div>

            <div className="blog-wrapper">
                <div className="container">
                    <div className="row">
                        <div className=" m-auto p-3">
                            <h2 className="fw-700 text-grey-900 font-xl lh-3 text-custom-primary pt-4 pb-4 text-center"> <i className="fa fa-info-circle me-1"></i> About Sai International</h2>
                            <div className="row justify-content-center">
                                <div className="col-lg-5">
                                    <img src="../../../../assets/siteimages/officeimage.jpeg"
                                        width="100%" height="335px" 
                                        style={{objectFit: 'cover', objectPosition:'top'}}></img>
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

                        <div className="row">
                            {teamMembers.map((team, index) => {
                                return <div key={JSON.parse(JSON.stringify(index))} className="col-lg-10 m-auto card bg-white shadow-xs border-0 rounded-6 p-lg-5 p-4">
                                    <div className="section full">
                                        <div className="row">
                                            <div className="col-lg-8 text-left">
                                                <img src={`../../../../assets/siteimages/${team.image}`}
                                                    style={{ width: '100%', height: '380px', objectFit: 'cover' }} className="shadowpremium rounded-25"></img>
                                            </div>
                                            <div className="col-lg-4 d-flex justify-content-center align-items-center">
                                                <div className=" fw-600 text-grey-600 lh-28 text-custom-secondary">
                                                    <h2 className="text-center mt-5 text-custom-primary"> {team.name} </h2>
                                                    <h2 className="text-center text-custom-secondary"> {team.role} </h2>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}