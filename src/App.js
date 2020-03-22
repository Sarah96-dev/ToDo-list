import React, { Component } from "react";
import DateTimePicker from "react-datetime-picker";
import "./App.css";

import Tasks from "./components/Tasks";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [],

      input: "",
      style: {
        textAlign: "center",
        fontStyle: "italic",
        margin: "40px"
      },
      startingdate: new Date(),
      
      endingdate: new Date()
    };
  }



  idGenerator = () => {
    return (
      "_" +
      Math.random()
        .toString(36)
        .substr(2, 9)
    );
  };

  handleStartingDate = startingdate => {
    let hours= startingdate.getHours();
    let minutes= startingdate.getMinutes();
  
    this.setState({startingdate} );
    console.log(startingdate.getFullYear());
  };

  handleEndingDate = endingdate => this.setState({ endingdate });

  addTask = task => {
    let tasks = this.state.tasks;
    tasks.push(task);
    this.setState({ tasks });

    console.log(this.state.tasks);
  };

  handleInput = event => {
    this.setState({ input: event.target.value });
    // console.log(this.state.input);
  };

  handleDelete = taskId => {
    // console.log("handle delete ");

    const tasks = this.state.tasks.filter(task => task.id !== taskId);

    this.setState({ tasks });
  };

  handleDone = task => {
    const tasks = this.state.tasks;
    const index = tasks.indexOf(task);
    if (tasks[index].status == 1) {
      tasks[index].status = 0;
    } else {
      tasks[index].status = 1;
    }

    this.setState(tasks);

    // console.log(task);
  };

  render() {
    let regexp = /^\s+$/;
    return (
      <div>
        <div>
          {" "}
        
          <h4
            style={{
              display: "inline-block",
              marginLeft: "350px",
              marginRight: "50px"
            }}
          >
            Task Starting Date
          </h4>{" "}
          <h4
            style={{
              display: "inline-block",
              marginLeft: "30px",
              marginRight: "50px"
            }}
          >
            Task Deadline
          </h4>{" "}
          <h4
            style={{
              display: "inline-block",
              marginLeft: "100px",
              marginRight: "10px",
              marginTop: "180px"
            }}
          >
            Task title{" "}
          </h4>
        </div>
        <div className="dropdown col-lg-12 input-group">
        
       
          <div style={{ marginLeft: "300px", marginTop: "10px" }}>

            <DateTimePicker
              className="form-control"
              onChange={this.handleStartingDate}
              value={this.state.startingdate}
            />
          </div>
          <div
            style={{
              marginLeft: "50px",
              marginTop: "10px",
              marginRight: "20px"
            }}
          >
            <DateTimePicker
              className="form-control"
              onChange={this.handleEndingDate}
              value={this.state.endingdate}
            />
          </div>
          <input
            className="form-control-lg ml-3 mt-2 "
            type="text"
            name="task"
            value={this.state.input}
            onChange={this.handleInput}
          />


          

          <button
            disabled={
              this.state.input.length > 0
                ? this.state.input.match(regexp)
                  ? true
                  : false
                : true
            }
            onClick={() => {
              this.addTask({
                id: this.idGenerator(),
                title: this.state.input,
                startdate: this.state.startingdate,
                deadline: this.state.endingdate,
                status: 0
              });
              this.setState({ input: " " });
            }}
            className="btn btn-info ml-4 mt-1 "
          >
            add task
          </button>
        </div>

       
         

       
       

        <main className="container mt-5">
          <Tasks
            tasks={this.state.tasks}
            onDelete={this.handleDelete}
            onDone={this.handleDone}
          />
        </main>
      </div>
    );
  }
}

export default App;
