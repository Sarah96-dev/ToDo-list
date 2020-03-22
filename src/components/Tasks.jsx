import React, { Component } from 'react';
import Task from "./Task"
class Tasks extends Component {
    render(){


          const {tasks, onDelete, onDone} = this.props;
         // console.log (tasks);
        return(
      

            tasks.map(task =>(

     <Task key = {task.id} task={task} onDelete={onDelete}  onDone={onDone} ></Task>

        ))
        )
    }
}
export default Tasks;
