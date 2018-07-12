import React, { Component } from "react";

class ShowRandom extends Component {
  componentDidMount() {
    this.props.getEntries();
  }
  render() {
    let random = this.props.entries[
      Math.floor(Math.random() * this.props.entries.length)
    ];
    return (
      <div className="container">
        <div className="row">
          <div className="col-lg-2 col-md-2" />
          <div className="col-lg-8 col-md-8 col-sm-12">
            <div className="card">
              <div className="card-body">
                <p className="card-text">{random && random.content}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ShowRandom;
