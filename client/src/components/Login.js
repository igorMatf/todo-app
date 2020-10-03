import React, { useState } from 'react'
import axios from 'axios';
import Header from './Header'

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    async function handleSubmit(event) {

        const validationEmailRegex = new RegExp("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$");
        const validationPasswordRegex = new RegExp("^(?=.*\\d).{4,12}$");

        if ((email === "") || !validationEmailRegex.test(email)) {
            window.alert("Please insert valid email!");
            return false;
        } else if (password === "" || !validationPasswordRegex.test(password)) {
            window.alert("Password must contain between 4-12 characters and at least one digit!");
            return false;
        }

        const data = {
            email: email,
            password: password
        }
        console.log(data)
        try {
            const response = await axios.post('/api/user/login', data);
            const { user, token } = response.data;

            localStorage.setItem("token", token);
            localStorage.setItem("email", data.email)

        } catch (e) {
            if (e.request.status === 400) {
                window.alert('Account with that email does not exist!');
            } else if (e.request.status === 401) {
                window.alert('Wrong password! Try again...');
            }
        }
    }
    return (
        <div className="login">
            <Header />
            <div className="container" id="loginAccount" style={{ paddingTop: '6%' }}>

                <div className="row">

                    <div className="col-lg-3">
                    </div>

                    <div className="card col-lg-6">
                        <div className="card-body">

                            <h2>Login</h2>

                            <form id="formAccount">
                                <div className="form-group">
                                    <label htmlFor="email">Email:</label>
                                    <input type="email" className="form-control" id="email" placeholder="Enter email" name="email" onChange={e => setEmail(e.target.value)} />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="pwd">Password:</label>
                                    <input type="password" className="form-control" id="pwd" placeholder="Enter password" name="pwd" onChange={e => setPassword(e.target.value)} />
                                </div>

                                <div className="text-center">
                                    <button type="button" className="btn btn-success" onClick={handleSubmit}>Log in</button>
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

export default Login
