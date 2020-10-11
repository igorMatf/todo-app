import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from './Header';
import Footer from './Footer';
function FinishedGoals() {
    const [todos, setTodos] = useState([]);

    async function deleteGoal(title) {
        console.log("deleteGoal");
        console.log(title)

        const data = {
            email: localStorage.getItem("email"),
            title: title
        }

        try {
            const response = await axios.post("/api/todos/deleteGoal", data);

        } catch (e) {
            console.log(e);
        }

        window.location.href = "/finishedGoals"
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
                {todos.map((todo) => todo.isFinished ? (
                    <div key={todo._id} className="card col-lg-4" style={{ paddingBottom: '10px', marginTop: '10px' }}>
                        <div className="card-body">
                            <h3>{todo.title}</h3>

                            <p>{todo.description}</p>

                            <p>Finished at: {todo.updatedAt ? todo.updatedAt.substring(0, 10) : console.log("Missing update date")}</p>
                            <div>

                                <button className="btn btn-danger" onClick={() => deleteGoal(todo.title)}> Delete </button>
                            </div>
                        </div>

                    </div>
                ) : console.log("not finished"))}
            </div>
            <Footer />
        </div>

    )
}

export default FinishedGoals
