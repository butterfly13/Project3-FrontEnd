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
      <div className="container">
        <div className="row">
          <div className="col-lg-2 col-md-2" />
          <div className="col-lg-8 col-md-8 col-sm-12">
            <div className="container">
              <blockquote className="quote-card">
                <h4>Are you sure you are THE admin?</h4>
                <button
                  className="btn btn-lg btn-block btn-secondary text"
                  onClick={this.onClick}
                  type="submit"
                >
                  I swear!
                </button>
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ShowAdmin;
