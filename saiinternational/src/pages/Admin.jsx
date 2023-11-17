import axios from "axios";
import React, { useState } from "react";
import { addProduct, deleteAllProduct, deleteProduct, updateProduct, updateProductImage } from "../redux/features/productSlice";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
export const Admin = () => {
    const products_price_list = useSelector(state => state.products.products)
    console.log("Before added products ", products_price_list);

    const dispatch = useDispatch();

    const mySwal = withReactContent(Swal);

    const navigate = useNavigate();

    const [product_name, setProductName] = useState();
    const [quantity, setQuantity] = useState();
    const [price, setPrice] = useState();
    const [image, setImage] = useState();
    const [productStates, setProductStates] = useState([]);
    
    useEffect(() => {
        setProductStates(products_price_list.map(item => ({ ...item, editMode: false })));
    }, [products_price_list]);

    useEffect(()=>{
        if(!localStorage.getItem('isLoggedIn')){
            navigate('/login');
        }
    },[])

    const handleProductChange = (index, field, value) =>{
        const newProductStates = [...productStates];
        newProductStates[index] = {
            ...newProductStates[index], [field]:value
        };
        // newProductStates[index] = Object.assign({},
        //     newProductStates[index], 
        //     {[field]:value} );

        //  newProductStates[index] = Object.assign({},
        //     {...newProductStates[index], 
        //     [field]:value} );
        setProductStates(newProductStates);
    }
    const hadnleEdit = (index) => {
        const newProductStates = [...productStates];
        newProductStates[index] = {
            ...newProductStates[index],
            editMode: !newProductStates[index].editMode
        };
        setProductStates(newProductStates);

        if(newProductStates[index].editMode == false){
            const selectedRecord = productStates[index];
            delete(selectedRecord.editMode)
            axios.put(process.env.REACT_APP_API_END_POINT+'updateProductsById/'+productStates[index]._id, selectedRecord,{
                withCredentials:true
            })
            .then(res=>{
                console.log("res ", res.data.data);
                console.log("res ", res.data.status_code);
                if(res.data.status_code == 200){
                    dispatch(updateProduct(selectedRecord))
                    mySwal.fire({
                        title:'Success',
                        text:'Product Updated Successfuly',
                        icon:'success'
                    })
                }else{
                    mySwal.fire({
                        title:'Failed',
                        text:'There is an error',
                        icon:'error'
                    })
                }
            }) 
            console.log("selectedRecord ", selectedRecord)
            console.log("newProductStates ", productStates)
        }
    };

    const handleImage = (e) => {
        setImage(e.target.files[0])
    }
    const handleEditImage = (e, _id)=>{
        setImage(e.target.files[0])
        console.log("e.target.files[0] ", e.target.files[0])
        
        mySwal.fire({
            title: "Are you sure?",
            text: "Image will be updated if you press yes!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, update it!"
        }).then((result) => {

            if(result.isConfirmed){
            const formData = new FormData();
            formData.append('image', e.target.files[0])
            axios.put(process.env.REACT_APP_API_END_POINT+'updateImageById/'+_id, formData,{
                withCredentials:true
            })
            .then(res=>{
                console.log(res);
                console.log(res.data.data);
                if(res.data.status_code == 200){
                    dispatch(updateProductImage(res.data.data))
                    mySwal.fire({
                        title:'Success',
                        text:'Image Updated Successfuly',
                        icon:'success'
                    })
                }else{
                    mySwal.fire({
                        title:'Failed',
                        text:'There is an Error',
                        icon:'error'
                    })
                }
            })  
        }
        });    
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("image while submit ", image);
        const formData = new FormData();
        formData.append('product_name', product_name);
        formData.append('quantity', quantity);
        formData.append('price', price);
        formData.append('image', image);

        axios.post(process.env.REACT_APP_API_END_POINT+'addProducts/', formData,{
            withCredentials:true
        })
            .then(res => {
                dispatch(addProduct(res.data.data));
                // console.log("res from post ", res.data.data)
                // console.log("after added products ", products);
                if(res.data.status_code == 200){
                    mySwal.fire({
                        title:"Sucess",
                        text:"Product Added Successfuly",
                        icon:"success"
                    })
                }else{
                    mySwal.fire({
                        title:"Failed",
                        text:"Failed to Add Product",
                        icon:"error"
                    }) 
                }
            }).catch(err => console.log(err));
    }
    const handleDelete = (_id) => {
        mySwal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axios.delete(process.env.REACT_APP_API_END_POINT+'deleteProductById/' + _id,{
                    withCredentials:true
                })
                .then(res => {
                    dispatch(deleteProduct({ _id }));
                    console.log("res.data.data ", res.data.data);
                    if (res.data.status_code == 200) {
                        Swal.fire({
                            title: "Deleted!",
                            text: "Your file has been deleted.",
                            icon: "success"
                        });
                    }else{
                        Swal.fire({
                            title: "Not Deleted!",
                            text: "There is some Error",
                            icon: "error"
                        });
                    }
                }).catch(err=>{
                    console.log(err)
                    Swal.fire({
                        title: "Not Deleted!" + err.message,
                        text: "There is some server side Error",
                        icon: "error"
                    });
                })
            }
        });
    }
    const handleAllDelete = () => {
        mySwal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axios.delete(process.env.REACT_APP_API_END_POINT+'deleteAllProducts',{
                    withCredentials:true
                })
                    .then(res => {
                        console.log("res.data.data ", res.data.data);
                        if (res.data.status_code == 200) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                        }else{
                            Swal.fire({
                                title: "Not Deleted!",
                                text: "There is some Error",
                                icon: "error"
                            });
                        }
                        dispatch(deleteAllProduct())
                    }).catch(err=>{
                        console.log(err)
                        Swal.fire({
                            title: "Not Deleted!" + err.message,
                            text: "There is some server side Error",
                            icon: "error"
                        });
                    })
            }
        });
    }

    const handleLogout = () => {
        mySwal.fire({
            title: "Logout?",
            text: "Are you sure want to logout ?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, log me out!"
        }).then((result) => {
            if (result.isConfirmed) {
                axios.get(process.env.REACT_APP_API_END_POINT+'logout',{
                    withCredentials:true
                })
                .then(res=>{
                    console.log(res);
                    if(res.data.status_code == 200){
                        window.localStorage.clear();
                        navigate('/login');
                    }else if(res.data.status_code == 401){
                        console.log("res ", res.data);
                    }else{

                    }
                }).catch(err=>{
                    console.log(err);
                })
            }
        })
    }

    return (
        <>
            <div className="col-lg-10 m-auto mt-5 mb-5">
                <div className="text-end p-3">
                    <button className="btn btn-sm btn-danger" onClick={handleLogout}> <i className="fa fa-sign-out me-1"></i> Logout </button>
                </div>
                <div className="accordion" id="accordionExample">
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingOne">
                            <button type="button" className="accordion-button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                Add More Items
                            </button>
                        </h2>
                        <div id="collapseOne" className="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                <form onSubmit={handleSubmit} encType="multipart/form-data">
                                    <div className="form-group mt-2 mb-2">
                                        <label htmlFor=""> Product Name </label>
                                        <input type="text" className="form-control"
                                            placeholder="Product Name" onChange={(e) => setProductName(e.target.value)} />
                                    </div>
                                    <div className="form-group mt-2 mb-2">
                                        <label htmlFor=""> Quantity </label>
                                        <input type="text" className="form-control"
                                            placeholder="Quantity" onChange={(e) => setQuantity(e.target.value)} />
                                    </div>
                                    <div className="form-group mt-2 mb-2">
                                        <label htmlFor=""> Price </label>
                                        <input type="text" className="form-control"
                                            placeholder="Price" onChange={(e) => setPrice(e.target.value)} />
                                    </div>
                                    <div className="mt-2 mb-2">
                                        <label htmlFor="formFile" className="form-label"> Image </label>
                                        <input type="file" className="form-control" id="formFile"
                                            placeholder="Product Name" accept=".png, .jpg, .jpeg"
                                            onChange={handleImage} style={{ height: 'auto' }} />
                                    </div>
                                    <button type="submit" className="btn btn-md btn-primary mt-2 mb-2"> <i className="fa fa-plus me-1"></i> Add Product </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="card-header">
                        <div className="card-title d-flex justify-content-between">
                            <h4 style={{ color: 'inherit' }}> Price List </h4>
                            <button type="button" className="btn btn-sm btn-danger"
                                onClick={handleAllDelete} > Delete All </button>
                        </div>
                        <div className="card-body">
                            <table className="table w-100">
                                <thead>
                                    <tr>
                                        <th> Image </th>
                                        <th> Product Name </th>
                                        <th> Quantity in Numbers </th>
                                        <th> Price </th>
                                        <th> Action </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {productStates.map((item, index) => {
                                        return <tr key={JSON.parse(JSON.stringify(index))}>
                                             <td> 
                                                {/* {item._id}  */}
                                               {item.image ? <img src={process.env.REACT_APP_IMAGE_URL+item.image} 
                                                style={{width:'100px', display:'block', height:'100px', objectFit:'contain'}}
                                                alt="" /> : <span className="d-block text-danger"> No Image </span>} 
                                                <input type="file" className="form-control-sm" id="formFile"
                                            placeholder="Product Name" accept=".png, .jpg, .jpeg"
                                            onChange={(e) => handleEditImage(e, item._id)} style={{ height: 'auto' }} />
                                            </td> 
                                            <td> 
                                            { 
                                            item.editMode ? <input type="text" className="form-control-sm" value={productStates[index]?.product_name || ''} onChange={(e)=> handleProductChange(index, 'product_name', e.target.value)}/> :
                                            item.product_name
                                            } 
                                             </td>
                                            <td>  
                                            {item.editMode ? <input type="text" className="form-control-sm"  value={productStates[index]?.quantity || ''} onChange={(e)=> handleProductChange(index, 'quantity', e.target.value)}/> :
                                            item.quantity}
                                            </td>
                                            <td> 
                                            
                                            {item.editMode ? <input type="text" className="form-control-sm" value={productStates[index]?.price || ''} onChange={(e)=> handleProductChange(index, 'price', e.target.value)}/> : 
                                            item.price}
                                            </td>
                                            <td>
                                                <button type="button" 
                                                className={item.editMode ? 'btn btn-sm btn-success me-1' : 'btn btn-sm btn-primary me-1'} 
                                                onClick={() => hadnleEdit(index)}>
                                                    <i className={item.editMode ? 'fa fa-save me-1' : 'fa fa-pencil me-1'}></i>
                                                    {item.editMode ? 'Save' : 'Edit'}
                                                </button>
                                                <a role="button" className="text-danger" onClick={() => handleDelete(item._id)}>
                                                    <i className="fa fa-trash"></i> Delete
                                                </a>
                                            </td>
                                        </tr>
                                    })}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}