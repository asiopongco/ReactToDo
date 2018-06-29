import React from 'react'
import Todo from './Todo'

class TodoList extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return(<Todo todos={this.props.todos} />);
  }
}

export default TodoList;
