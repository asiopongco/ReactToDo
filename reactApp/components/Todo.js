import React from 'react';

class Todo extends React.Component{
  constructor(props){
    super(props)
  }
  render(){
    return(
      <ul>
        {this.props.todos.map((todo) => <li><button>X</button>
          {todo.completed ? <strike>{todo.taskText}</strike>:todo.taskText}</li>)}
      </ul>
    )
  }
}

export default Todo;
