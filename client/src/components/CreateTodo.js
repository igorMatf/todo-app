import React, { useState } from 'react'
import axios from 'axios';
import Header from './Header';

function CreateTodo() {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    async function handleSubmit(event) {
        const data = {
            email: localStorage.getItem('email'),
            title: title,
            description: description
        };

        console.log(data);

        try {
            const response = await axios.post("/api/todos/createGoal", data);
        } catch (e) {

        }
    }

    return (

        <div className="container" id="registerAccount" style={{ paddingTop: '70px', paddingBottom: '50px' }}>
            <Header />
            <div className="row">

                <div className="col-lg-3">
                </div>

                <div className="card col-lg-6">
                    <div className="card-body">

                        <h2>Add your goal</h2>

                        <form id="formAccount">


                            <div className="form-group">
                                <label htmlFor="title">Title:</label>
                                <input type="title" className="form-control" id="title" placeholder="Enter title" name="title" onChange={e => { setTitle(e.target.value) }} />
                            </div>



                            <div className="form-group">
                                <label htmlFor="message">Message:</label>
                                <textarea className="form-control" rows="5" id="message" placeholder="Enter message" name="message" onChange={e => { setDescription(e.target.value) }}></textarea>
                            </div>


                            <div className="text-center">
                                <button type="button" onClick={handleSubmit} className="btn btn-success"> Submit </button>
                            </div>
                        </form>

                    </div>
                </div>

                <div className="col-lg-3">
                </div>

            </div>

        </div>
    )
}

export default CreateTodo
