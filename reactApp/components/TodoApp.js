import React from 'react';
import InputLine from './InputLine';
import TodoList from './TodoList';

let dummyData = [{ taskText: "Get all 8 gym badges", completed: true },
{ taskText: "Defeat Elite Four", completed: false },
{ taskText: "Catch 'em all", completed: false }];

class TodoApp extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      todos: []
    }
  }

  componentDidMount(){
    this.setState({todos: dummyData})
  }

  addTodo(task){
    let newTask = new Object();
    newTask.taskText = task;
    newTask.completed = false;
    dummyData.push(newTask);
    this.setState({todos: dummyData})
  }

  render(){
    return(
      <div>
        <InputLine submit={(task) => this.addTodo(task)}/>
        <TodoList todos={this.state.todos}/>
      </div>
    )
  }
}

export default TodoApp;
