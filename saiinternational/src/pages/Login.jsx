import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
export const Login = ()=> {

    const navigate = useNavigate();

    const isLoggedIn = window.localStorage.getItem('isLoggedIn');

    useEffect(()=>{
       if(isLoggedIn){
        navigate('/admin_si_in')
       }
    },[isLoggedIn])

    const [loginFormData, setLoginFormData] = useState({
        email:'',
        password:'',
    })
     
    const mySwal = withReactContent(Swal);


    // const [redirect, setRedirect] = useState(false);

    const handleChange = (e) =>{
        const {name, value} = e.target;
        setLoginFormData((prev) => ({...prev, [name]:value}));
    }

    const handleLogin = (e) =>{
        e.preventDefault();
        console.log("loginForm ", loginFormData);

        axios.post(process.env.REACT_APP_API_END_POINT+'login', loginFormData,{
          withCredentials:true
        }).
        then(res=>{
            console.log("res ", res);
            console.log('res data ', res.data);
            if(res.data.status_code == 200){
                // setRedirect(true);
                window.localStorage.setItem("isLoggedIn", true);
                navigate('/admin_si_in');
            }else{
                mySwal.fire({
                    title:'Login Failed',
                    text:'wrong credentials',
                    icon:'error'
                })
            }
        });
    }

    // if(redirect){
    //     return <Navigate to="/admin_si_in" />
    // }

  return (
    <>
    <div className='col-sm-4 m-auto mt-5 mb-5 shadow'>
        <div className="card">
            <div className="card-header bg-custom-primary">
                <div className="card-title text-center"> 
                  <h2 className='text-white'> <i className='fa fa-sign-in me-1'></i> Login </h2> 
                </div>
            </div>
            <div className="card-body">
                <form onSubmit={handleLogin}>
                <div className="form-group mb-2">
                    <label htmlFor="email mb-1"> Email </label>
                    <input type="text" name='email' value={loginFormData.email} 
                    onChange={handleChange} className='form-control' placeholder='Email' />
                </div>
                <div className="form-group mb-2">
                    <label htmlFor="password mb-1"> Password </label>
                    <input type="text" name='password' value={loginFormData.password} 
                    onChange={handleChange} className='form-control' placeholder='Password' />
                </div>
                <div className='text-center'>
                <button type='submit' className='btn btn-md btn-success mt-2'>
                     log me in
                </button>
                </div>
                </form>
            </div>
        </div>
    </div>
    </>
  )
}
