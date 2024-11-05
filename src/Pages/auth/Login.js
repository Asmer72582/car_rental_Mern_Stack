import React, { useState } from 'react'
import './auth.css'
import bgImage from '../../images/bgs/auth.png'
// import { handleError } from '../../utils'


import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { handlePromise, handleSuccess, handleError } from '../../utils';
import { useNavigate } from 'react-router-dom';



export default function Login() {
    const navigate = useNavigate()

    const [userInfo, setUserInfo] = useState({
        email: '',
        password: ''

    });

    // const notify = () => toast.error("This is a toast notification !");

    const handleChange = (e) => {
        const { name, value } = e.target;
        // console.log(name, value)
        const copyUserInfo = { ...userInfo }
        copyUserInfo[name] = value;
        setUserInfo(copyUserInfo);
        // console.log(userInfo)
    }


    const handleRegister = async (e) => {
        e.preventDefault();



        const { email, password } = userInfo;
        if (!email || !password) {

        }
        try {

            const url = "http://13.201.101.91:3000/api/auth/login";
            const response = await fetch(url, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(userInfo)
            });

            const jwtToken = response.headers.get('authorization');

            console.log(jwtToken)
            const result = await response.json()
            const { success, message, error, } = result;

            console.log(result);


            localStorage.setItem('token', jwtToken)
            // localStorage.setItem('LoggedInUser', name)
            if (response.status == 200) {
                handleSuccess("Login success")
                setTimeout(() => {
                    navigate('/profile')
                }, 1500);
            }

        } catch (error) {
            handleError(error)
        }


    }


    return (
        <>
            <div className="containers">
                <div className="row ">
                    <div className="bgImage col-lg-5">
                        <img src={bgImage} alt="" srcset="" />
                    </div>
                    <div className="bgForm col-lg-7">
                        <div className="shape">
                        </div>
                        <form action="">
                            <h1>Login</h1>
                            <div class="form-group">
                                <label for="email">Email address:</label>
                                <input
                                    type="email"
                                    class="form-control"
                                    onChange={handleChange}
                                    name="email"
                                    value={userInfo.email}
                                    id="email" />
                            </div>
                            <div class="form-group">
                                <label for="pwd">Password:</label>
                                <input
                                    type="password"
                                    onChange={handleChange}
                                    value={userInfo.password}
                                    name="password"
                                    class="form-control"
                                    id="pwd" />
                            </div>
                            <div class="checkbox">
                                <label><input type="hidden" /> Don't have an account? <a href="/register">Register</a></label>
                            </div>

                            <button type="submit" onClick={handleRegister} class="btn btn-default w-100">Submit</button>
                            <ToastContainer />



                        </form>


                    </div>
                </div>
            </div>

        </>
    )
}
