import React, { Component } from 'react';
import Header from './components/layout/header';
import Todos from './components/todos';
import AddTodo from './components/addtodo';
import { v4 as uuidv4 } from 'uuid';

class App extends Component {
  state = {
    todos: [
      {
        id: uuidv4(),
        title: 'Take out the recyclables',
        completed: false
      },
      {
        id: uuidv4(),
        title: 'Lunch with coworkers',
        completed: false
      },
      {
        id: uuidv4(),
        title: 'Meeting with parents',
        completed: false
      }          
    ]
  }

  addTodo = (title) => {
    const newTodo = {
      id: uuidv4(),
      title: title,
      complete: false
    }
    this.setState({ todos: [...this.state.todos, newTodo] })
  }

  markComplete = (id) => {
    this.setState({ todos: this.state.todos.map(todo => {
      if(todo.id === id) {
        todo.completed = !todo.completed
      }
      return todo;
    })})
  }

  delTodo = (id) => {
    this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)]})
  }


  render() {
    return (
      <div className="App">
        <div className="container">
          <Header />
          <AddTodo addTodo={this.addTodo}/>
          <h1>App</h1>
            <Todos todos={this.state.todos} markComplete={this.markComplete} delTodo={this.delTodo}/>
        </div>
      </div>
    );
  }
}

export default App;