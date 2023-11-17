import React from "react";

export const Team = () => {
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
            <div className="text-center border-bottom border-2 border-success">
                <img src="../../../../assets/siteimages/bannersphone/f13.jpg"
                    style={{ width: '100%', objectFit: 'cover' }} height="300px"
                ></img>
            </div>

            <div className="listing-wrapper mt-2 pb-3 pt-2 p-lg-0">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-12 mb-0">
                            <div
                                className="card d-flex flex-row justify-content-center text-uppercase p-3 bg-greylight border-1 border-success mb-3">
                                <span className="text-current fw-700"> Our Team </span>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        {teamMembers.map((item, index) => {
                            return <div key={JSON.parse(JSON.stringify(index))} className="col-lg-6 m-auto card bg-white shadow-xs border-0 rounded-6 p-lg-5 p-4">
                                <div className="section full">
                                    <div className="row">
                                        <div className="col-lg-8 text-left">
                                            <a href={`../../../../assets/siteimages/${item.image}`} target="_blank">
                                                <img src={`../../../../assets/siteimages/${item.image}`}
                                                    style={{ width: '100%', height: '380px', objectFit: 'cover' }}
                                                    className="shadowpremium rounded-25"></img>
                                            </a>
                                        </div>
                                        <div className="col-lg-4 d-flex justify-content-center align-items-center">
                                            <div className=" fw-600 text-grey-600 lh-28 text-custom-secondary">
                                                <h2 className="text-center mt-5 text-custom-primary"> {item.name} </h2>
                                                <h2 className="text-center text-custom-secondary"> {item.role} </h2>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        })}
                    </div>
                </div>
            </div>
        </>
    )
}