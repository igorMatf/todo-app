import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from './Header';
function ShowMyGoals() {
    const [todos, setTodos] = useState([]);

    async function finishedGoal() {
        console.log("finishedGoal")
    }
    useEffect(() => {
        axios.post("api/todos/getTodos", { email: localStorage.getItem('email') })
            .then((todos) => setTodos(todos.data));
    }, []);
    return (
        <div className="container" style={{ paddingTop: '70px', paddingBottom: '50px' }}>
            <Header />
            <div className="row">
                {console.log(localStorage.getItem('email'))}
                {console.log(todos)}
                {todos.map((todo) => (
                    <div key={todo._id} className="card col-lg-6" style={{ paddingBottom: '10px', marginTop: '10px' }}>
                        <div className="card-body">
                            <h3>{todo.title}</h3>

                            <p>{todo.description}</p>
                            <div>
                                <button className="btn btn-success"> Finished </button>
                                <button className="btn btn-danger"> Delete </button>
                            </div>
                        </div>

                    </div>
                ))}
            </div>
        </div>
    )
}

export default ShowMyGoals
