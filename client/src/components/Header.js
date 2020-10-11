import React, { useEffect } from 'react'
import { Nav, Navbar } from 'react-bootstrap';

function Header() {

    function logoutPage() {
        if (!localStorage.email) {
            window.alert("You are not logged in");
        } else {
            let confirm = window.confirm("Logout from your account?");
            if (confirm) {
                localStorage.clear();

                window.location.href = "/";
            }
        }
    }

    useEffect(() => {
        let loginNav = document.getElementById("login-nav");
        let registerNav = document.getElementById("register-nav");
        let logoutNav = document.getElementById("logout-nav");
        let addGoal = document.getElementById("add-goal-nav");
        let myTasks = document.getElementById("my-tasks-nav");
        let finishedTasks = document.getElementById("finished-tasks-nav");
        if (!localStorage.email) {
            loginNav.style.display = "block";
            registerNav.style.display = "block";
            logoutNav.style.display = "none";
            addGoal.style.display = "none";
            myTasks.style.display = "none";
            finishedTasks.style.display = "none";
        } else {
            loginNav.style.display = "none";
            registerNav.style.display = "none";
            logoutNav.style.display = "block";
            addGoal.style.display = "block";
            myTasks.style.display = "block";
            finishedTasks.style.display = "block";
        }

    }, []);
    return (
        <Navbar fixed="top" bg="dark" variant="dark" expand="lg">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link id="home-nav" className="nav-link-header" href="/"> Home </Nav.Link>
                    <Nav.Link id="add-goal-nav" className="nav-link-header" href="/createTodo"> Add goal </Nav.Link>
                    <Nav.Link id="my-tasks-nav" className="nav-link-header" href="/myGoals"> My tasks </Nav.Link>
                    <Nav.Link id="finished-tasks-nav" className="nav-link-header" href="/finishedGoals"> Finished tasks </Nav.Link>
                </Nav>
                <Nav>
                    <Nav.Link id="login-nav" className="nav-link-header" href="/login" > Login </Nav.Link>
                    <Nav.Link id="register-nav" className="nav-link-header" href="/register" > Register </Nav.Link>
                    <Nav.Link id="logout-nav" className="nav-link-header" href="#" onClick={logoutPage}> Logout </Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>

    )
}

export default Header
