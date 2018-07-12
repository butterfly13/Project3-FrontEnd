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
      <div className="row">
        <div className="col-lg-7 col-md-7 col-sm-12">
          <input
            className="btn btn-lg btn-block btn-secondary"
            onClick={this.onClick}
            type="button"
            value="Swear You Are An Admin"
          />
        </div>
      </div>
    );
  }
}

export default ShowAdmin;
