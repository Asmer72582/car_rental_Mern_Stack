import React, { useState } from 'react'
import './auth.css'
import bgImage from '../../images/bgs/auth.png'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { handleError, handlePromise, handleSuccess } from '../../utils';
import { useNavigate } from 'react-router-dom';




export default function Register() {

    const navigate = useNavigate()

    const [userInfo, setUserInfo] = useState({
        email: '',
        password: '',
        name: ''

    });

    // const notify = () => toast.error("This is a toast notification !");

    const handleChange = (e) => {

        const { name, value } = e.target;
        // console.log(name, value)
        const copyUserInfo = { ...userInfo }
        copyUserInfo[name] = value;
        setUserInfo(copyUserInfo);
        console.log(userInfo)
    }

    const handleRegister = async (e) => {
        e.preventDefault();

        const { email, password, username } = userInfo;
        if (!email || !password || !username) {
            handleError("Enter All the details")
        }
        try {

            const url = "http://13.201.101.91:3000/api/auth/register";
            const response = await fetch(url, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(userInfo)
            });

            const result = await response.json()
            console.log(result);
            if (result.message == "Firebase: Error (auth/email-already-in-use).") {
                handleError("Email already exist.")
            }

            else {
                handleSuccess("You have successfully created an account..")
                setTimeout(() => {
                    navigate('/login')
                }, 1500);
            }
        } catch (error) {
            handleError(error)
        }
        // navigate('/login')


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
                        <form action="" onSubmit={handleRegister}>
                            <h1>Register</h1>
                            <div class="form-group">
                                <label for="name">Name:</label>
                                <input
                                    type="text"
                                    class="form-control"
                                    onChange={handleChange}
                                    name="name"
                                    value={userInfo.name}
                                    id="name" />
                            </div>
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
                                <label><input type="hidden" /> Already have an account? <a href="/login">Login</a></label>
                            </div>
                            <button type="submit" class="btn btn-default">Submit</button>
                            <ToastContainer />

                        </form>
                        {/* <button type="s" onClick={notify} class="btn btn-default">Submit</button> */}

                    </div>
                </div>
            </div>

        </>
    )
}
