import React from 'react';

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

export default InputLine
