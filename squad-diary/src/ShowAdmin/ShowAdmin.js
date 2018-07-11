import React, { Component } from "react";
import { Redirect } from "react-router-dom";
class ShowAdmin extends Component {
  redirectToTarget = () => {
    this.props.history.push(`/entry`);
  };
  onClick = e => {
    this.props.onClickAdmin(e);
    this.redirectToTarget();
  };
  render() {
    return (
      <div>
        <input
          onClick={this.onClick}
          type="button"
          value="Swear You Are An Admin"
        />
      </div>
    );
  }
}

export default ShowAdmin;
