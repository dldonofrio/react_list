import React, { Component } from 'react';
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
  render() {
    return (
      <div className="App">
        <h1>App</h1>
          <Todos todos={this.state.todos}/>
      </div>
    );
  }
}

export default App;