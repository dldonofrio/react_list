import React, { Component } from 'react';
import Header from './components/layout/header';
import Todos from './components/todos';
import AddTodo from './components/addtodo';
import About from './components/pages/about'
import { v4 as uuidv4 } from 'uuid';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import axios from 'axios';


class App extends Component {
  state = {
    todos: []
  }

  componentDidMount() {
    axios.get('http://localhost:5000/fetch')
    .then(res => this.setState({ todos: res.data.data }))
      // .then(res => console.log(res.data));
    .catch(function (e) {
      console.log(e);
    })
  }

  addTodo = (title) => {
    var newTodo = {
      title: title,
      completed: false
    }

    axios.post('http://localhost:5000/add', newTodo)
    .then(res => 
      this.setState(
        { 
          todos: [...this.state.todos, newTodo] 
        }
      )
    )
    .catch(function (e) {
      console.log(e);
    })

    // this.setState({ todos: [...this.state.todos, newTodo] })
  }

  markComplete = (id) => {

    var todoId = {
      id: id
    }

    axios.post('http://localhost:5000/check', todoId)
    .then(res =>
      this.setState({ 
        todos: this.state.todos.map(todo => {
          if(todo.id === id) {
            todo.completed = !todo.completed
          }
        return todo;
      })
    }))   
  }

  delTodo = (id) => {
    var todoId = {
      id: id
    }
    console.log(todoId)
    axios.post('http://localhost:5000/delete', todoId)
    .then(res => 
      this.setState({ 
        todos: [...this.state.todos.filter(todo => 
          todo.id !== id)]
      })
    ) 
  }


  render() {
    return (
      <Router>
        <div className="App">
          <div className="container">
            <Header />
            <Route exact path="/" render={props => (
              <React.Fragment>
                <AddTodo addTodo={this.addTodo}/>
                <h1>App</h1>
                  <Todos todos={this.state.todos} markComplete={this.markComplete} delTodo={this.delTodo}/>
              </React.Fragment>
            )} />
            <Route path="/about" component={About} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;