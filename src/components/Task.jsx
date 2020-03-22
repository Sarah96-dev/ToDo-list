import React, { Component } from "react";
import Modal from "react-bootstrap/Modal";
import ModalDialog from "react-bootstrap/ModalDialog";
import ModalHeader from "react-bootstrap/ModalHeader";
import ModalTitle from "react-bootstrap/ModalTitle";
import ModalBody from "react-bootstrap/ModalBody";
import ModalFooter from "react-bootstrap/ModalFooter";

class Task extends Component {
  state = {
    show: false,
    close: false
  };

  handleShow = () => {
    this.setState({ show: true });
  };

  handleClose = () => {
    this.setState({ close: true });
  };

  render() {
    //const {start} = this.props.task.startdate;
    //const {end} = this.props.task.deadline;
    return (
      <div>
        <div className="dropdown col-lg-10 input-group">
          <div
            style={
              this.props.task.status == 1
                ? {
                    textDecoration: "line-through",
                    backgroundColor: "lightgrey"
                  }
                : { textDecoration: "" }
            }
            className="list-group-item m-3 col-lg"
          >
            {this.props.task.title}
          </div>

          <div
            style={
              this.props.task.status == 1
                ? {
                    textDecoration: "line-through",
                    backgroundColor: "lightgrey"
                  }
                : { textDecoration: "" }
            }
            className="list-group-item m-3 col-lg"
          >
            {JSON.stringify(this.props.task.startdate).slice(1, 11) +
              " / " +
              this.props.task.startdate.getHours() +
              " : " +
              this.props.task.startdate.getMinutes()}
          </div>
          <div
            style={
              this.props.task.status == 1
                ? {
                    textDecoration: "line-through",
                    backgroundColor: "lightgrey"
                  }
                : { textDecoration: "" }
            }
            className="list-group-item m-3 col-lg"
          >
            {JSON.stringify(this.props.task.deadline).slice(1, 11)+
            " / " +
            this.props.task.deadline.getHours() +
            " : " +
            this.props.task.deadline.getMinutes()
            }
          </div>

          <button onClick={this.handleShow} className="btn btn-danger m-3  ">
            {" "}
            delete
          </button>

          <Modal show={this.state.show} onHide={this.handleClose}>
            <Modal.Header
              closeButton
              onClick={() => this.setState({ show: false })}
            >
              <Modal.Title>Delete Modal</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              Are you sure you want to delete {this.props.task.title} ?{" "}
            </Modal.Body>
            <Modal.Footer>
              <button
                className="btn btn-secondary m-3"
                onClick={() => this.setState({ show: false })}
              >
                Close
              </button>
              <button
                className="btn btn-danger m-3"
                onClick={() => this.props.onDelete(this.props.task.id)}
              >
                delete
              </button>
            </Modal.Footer>
          </Modal>

          <button
            onClick={() => this.props.onDone(this.props.task)}
            className="btn btn-success m-3 "
          >
            {this.props.task.status == 1 ? "undone" : "done"}
          </button>
        </div>
      </div>
    );
  }
}

export default Task;
