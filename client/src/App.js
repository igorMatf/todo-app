import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Login from './components/Login';
import Register from './components/Register';
import CreateTodo from './components/CreateTodo';
import ShowMyGoals from './components/ShowMyGoals';
import FinishedGoals from './components/FinishedGoals';
import Homepage from './components/Homepage'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Homepage} />
        <Route path="/login" exact component={Login} />
        <Route path="/register" exact component={Register} />
        <Route path="/createTodo" exact component={CreateTodo} />
        <Route path="/myGoals" exact component={ShowMyGoals} />
        <Route path="/finishedGoals" exact component={FinishedGoals} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
