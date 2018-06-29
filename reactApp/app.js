import React from 'react'
import ReactDOM from 'react-dom'

let dummyData = [{ taskText: "Get all 8 gym badges", completed: true },
{ taskText: "Defeat Elite Four", completed: false },
{ taskText: "Catch 'em all", completed: false }];

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      todos: []
    }
  }

  componentDidMount(){
    this.setState({todos: dummyData})
  }

  render(){
    return(
      <div>
        <InputLine />
        <TodoList todos={this.state.todos}/>
      </div>
    )
  }
}

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

class TodoList extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return(<Todo todos={this.props.todos} />);
  }
}

class InputLine extends React.Component{
  constructor(props){
    super(props);
    this.state={
      value:""
    }
  }
  render(){
    return(
     <div><input type ="text" name="task" placeholder="task" value={this.state.value}/>
     <button type="submit">Add To Do</button></div>
   )
  }
}

ReactDOM.render(<App todos={dummyData}/>, document.getElementById('root'));
