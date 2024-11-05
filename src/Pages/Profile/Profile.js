import React, { useState, useEffect } from 'react'
import './profile.css'
import Header from '../../Components/Header'
import { ToastContainer, toast } from 'react-toastify';

import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { handleError, handlePromise, handleSuccess } from '../../utils';


export default function Profile() {

    const [Role, setRole] = useState("customer");
    const [userDetials, setUserDetials] = useState('')
    const navigate = useNavigate()

    const handleChange = (e) => {
        e.preventDefault()
        setRole("owner")

    }
    const ifLoggedIn = () => {
        const token = localStorage.getItem('token');


        if (!token) {
            navigate('/login')
        }
    }
    const handleLogout = () => {
        localStorage.removeItem("token");
        handleSuccess("Logout Success");
        setTimeout(() => {
            navigate('/login')
        }, 1500);

    }

    const getProfile = async () => {
        const token = localStorage.getItem('token');
        // console.log(token);

        try {
            const response = await fetch('http://13.201.101.91:3000/api/profile', {
                method: 'GET',
                headers: {
                    'Authorization': `${token}`,
                    'Content-Type': 'application/json',
                },
            });

            if (!response.ok) {
                const errorData = await response.json();
                // throw new Error(errorData.message || 'Error fetching profile');
            }

            const data = await response.json();
            // console.log(data)
            setUserDetials(data)
            // console.log('Profile data:', data);
        } catch (error) {
            // console.error('Error fetching profile:', error.message);

        }
    };

    useEffect(() => {

        ifLoggedIn()
        getProfile()
    }, []);
    return (
        <>
            <ToastContainer />

            <Header />
            <div class="container">

                <hr />
                <div class="row my-10">

                    <div class="col-md-3">
                        <div class="text-center d-flex justify-items-center">
                            <img src="https://e7.pngegg.com/pngimages/799/987/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper-thumbnail.png" class="avatar img-circle" alt="avatar" />
                            {/* <h1>{userDetials.name}</h1> */}
                            <button className='btn btn-danger px-20 my-5' onClick={handleLogout}>Logout</button>




                            {/* <input type="file" class="form-control" /> */}
                        </div>
                    </div>


                    <div class="col-md-9 personal-danger">
                        <div class="alert alert-danger alert-dismissable">
                            {/* <a class="panel-close close" data-dismiss="alert">×</a> */}
                            <i class="fa fa-coffee"></i>
                            Note that your <strong>Email and Password</strong>, can not be changed.
                        </div>
                        {/* <h3>Personal info</h3> */}

                        <form class="form-horizontal" role="form">
                            <div class="form-group">
                                <label class="col-md-3 control-label">Username:</label>
                                <div class="col-md-8">
                                    <input class="form-control" type="text" value={userDetials.name} />
                                </div>
                            </div>
                            <div class="form-group">
                                <label class="col-md-3 control-label">Email:</label>
                                <div class="col-lg-8 col-md-8">
                                    <input class="form-control" type="text" disabled value={userDetials.email} />
                                </div>
                            </div>





                            <div class="form-group">
                                <label class="col-md-3 control-label">Current Role:</label>
                                <div class="col-md-6">
                                    <input class="form-control" type="text" value={userDetials.roles} />
                                    {/* <select name="" id="role" onChange={handleChange} className='form-control'>
                                        <option value="customer">{Role}</option>
                                        <option value="owner">Car Owner</option>
                                    </select> */}
                                </div>
                                <div class="col-md-3">
                                    <button className='btn btn-primary' onClick={handleChange}>Join as Owner</button>
                                    <p>currently not working</p>
                                </div>
                            </div>
                            {/* <div class="form-group owner">
                                <label class="col-md-3 control-label">Selected Role:</label>
                                <div class="col-md-6">
                                    <input class="form-control" type="text" value={Role} />

                                </div>
                                <div class="col-md-3">
                                    <button className='btn btn-primary'>Switch Role</button>
                                </div>
                            </div> */}
                            <div class="form-group">
                                <label class="col-md-3 control-label"></label>
                                <div class="col-md-8">
                                    <input type="button" class="btn btn-primary" value="Save Changes" />
                                    <span></span>
                                    <input type="reset" class="btn btn-default" value="Cancel" />
                                </div>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
            <hr></hr>
        </>
    )
}
