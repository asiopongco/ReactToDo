import React from 'react'
import ReactDOM from 'react-dom'

let dummyData = ["Take a shit", "Eat", "Sleep"];

class Todo extends React.Component{
  constructor(props){
    super(props)
  }
  render(){
    return(
      <ul>
        {this.props.todos.map((todo) => <li><button>X</button>{todo}</li>)}
      </ul>
    )
  }
}

class TodoList extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return(<Todo todos={dummyData} />);
  }
}


ReactDOM.render(<TodoList todos={dummyData}/>, document.getElementById('root'));
