import React, { useState } from 'react'
import axios from 'axios';
import Header from './Header'

function Register() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [repeatPassword, setRepeatPassword] = useState('');
    async function handleSubmit(event) {
        const validationEmailRegex = new RegExp("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$");
        const validationPasswordRegex = new RegExp("^(?=.*\\d).{4,12}$");

        if ((email === "") || !validationEmailRegex.test(email)) {
            window.alert("Please insert valid email!");
            return false;
        } else if (password === "" || !validationPasswordRegex.test(password)) {
            window.alert("Password must contain between 4-12 characters and at least one digit!");
            return false;
        } else if (password !== repeatPassword) {
            window.alert("Passwords do not match!");
            return false;
        }

        const data = {
            email: email,
            password: password
        }
        console.log(data)
        try {
            const response = await axios.post('/api/user/register', data);

            localStorage.setItem("email", data.email)

        } catch (e) {
            window.alert(e);
        }
    }
    return (
        <div className="signin">
            <Header />
            <div className="container" id="registerAccount" style={{ paddingTop: '6%' }}>

                <div className="row">

                    <div className="col-lg-3">
                    </div>

                    <div className="card col-lg-6">
                        <div className="card-body">

                            <h2>Register</h2>

                            <form id="formAccount">

                                <div className="form-group">
                                    <label htmlFor="email">Email:</label>
                                    <input type="email" className="form-control" id="email" placeholder="Enter email" name="email" onChange={e => setEmail(e.target.value)} />
                                </div>

                                <div className="form-group" id="date-of-birth-reg-group" style={{ display: "none" }}>
                                    <label htmlFor="date-of-birth-register"> Date of birth: </label>
                                    <input type="date"
                                        className="form-control"
                                        id="date-of-birth-register"
                                        name="dateOfBirth"
                                    />
                                </div>


                                <div className="form-group">
                                    <label htmlFor="pwd">Password:</label>
                                    <input type="password" className="form-control" id="pwd" placeholder="Enter password" name="pwd" onChange={e => setPassword(e.target.value)} />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="pwd">Confirm password:</label>
                                    <input type="password" className="form-control" id="pwdConfirm" placeholder="Enter password" name="pwd" onChange={e => setRepeatPassword(e.target.value)} />
                                </div>

                                <div className="text-center">
                                    <button type="button" className="btn btn-success" onClick={handleSubmit}> Register </button>
                                </div>
                            </form>

                        </div>
                    </div>

                    <div className="col-lg-3">
                    </div>

                </div>

            </div>
        </div>
    )
}

export default Register
