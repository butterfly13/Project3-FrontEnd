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
      <div class="container">
        <div class="row">
          <div className="col-lg-2 col-md-2" />
          <div className="col-lg-8 col-md-8 col-sm-12">
            <div class="container">
              <blockquote class="quote-card">
                <p>Are you sure you are THE admin?</p>
                <button
                  className="btn btn-lg btn-block btn-secondary"
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
