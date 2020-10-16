import React, { Component } from 'react';
import Header from './components/layout/header'
import Todos from './components/todos';

class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: 'Take out the recyclables',
        completed: false
      },
      {
        id: 2,
        title: 'Lunch with coworkers',
        completed: false
      },
      {
        id: 3,
        title: 'Meeting with parents',
        completed: false
      }          
    ]
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
        <Header />
        <h1>App</h1>
          <Todos todos={this.state.todos} markComplete={this.markComplete} delTodo={this.delTodo}/>
      </div>
    );
  }
}

export default App;