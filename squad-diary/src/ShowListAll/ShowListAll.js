import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import axios from "axios";
import "./ShowListAll.css";

class ShowListAll extends Component {
  redirectToTarget = () => {
    this.props.history.push(`/entry`);
  };
  render() {
    if (window.location.origin === "http://localhost:3000") {
      this.origin = "http://localhost:4000";
    } else {
      this.origin = "https://boiling-dusk-74498.herokuapp.com";
    }
    let entries = this.props.entries.map(entry => {
      if (this.props.admin) {
        return (
          <div className="container">
            <div className="row">
              <div className="col-lg-2 col-md-2" />
              <div className="col-lg-8 col-md-8 col-sm-12">
                <div className="card">
                  <div className="card-header">
                    <Link to={`/entry/${entry.weekNumber}`}>
                      Week {entry.weekNumber}
                    </Link>
                  </div>
                  <div className="card-body">
                    <p className="card-text">"{entry.content}"</p>
                    <div className="card-footer">
                      <button
                        onClick={e => {
                          e.preventDefault();
                          axios
                            .delete(`${this.origin}/entry/${entry._id}`)
                            .then(() => {
                              this.props.getEntries();
                              this.redirectToTarget();
                            })
                            .catch(err => {
                              console.log(err);
                            });
                        }}
                        type="submit"
                      >
                        Delete
                    </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      } else {
        return (
          <div className="container">
            <div className="row">
              <div className="col-lg-2 col-md-2" />
              <div className="col-lg-8 col-md-8 col-sm-12">
                <div className="card">
                  <Link to={`/entry/${entry.weekNumber}`}>
                    Week {entry.weekNumber}
                  </Link>
                  <div className="card-body">
                    <p className="card-text">{entry.content}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          //   <div className="card">
          //     <Link to={`/entry/${entry.weekNumber}`}>
          //       Week {entry.weekNumber}
          //     </Link>
          //     <div className="card-body">
          //     <p className="card-text">
          //     {entry.content}
          //     </p>
          //   </div>
          // </div>
        );
      }
    });
    return <div>{entries}</div>;
  }
}

export default ShowListAll;
