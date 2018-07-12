import React, { Component } from "react";
import axios from "axios";

class ShowListWeek extends Component {
  constructor(props) {
    super(props);
    this.state = {
      weekEntries: []
    };
  }
  componentDidMount() {
    this.getWeek();
  }
  redirectToTarget = () => {
    this.props.history.push(`/entry/${this.props.match.params.weekNumber}`);
  };
  onClick = e => {
    e.preventDefault();
    this.props.deleteEntry();
  };
  getWeek = () => {
    axios
      .get(`${this.origin}/entry/${this.props.match.params.weekNumber}`)
      .then(results => {
        this.setState({ weekEntries: results.data });
      })
      .catch(err => {
        console.log(err);
      });
  };
  render() {
    if (window.location.origin === "http://localhost:3000") {
      this.origin = "http://localhost:4000";
    } else {
      this.origin = "https://boiling-dusk-74498.herokuapp.com";
    }
    let week = this.state.weekEntries.map(entry => {
      if (this.props.admin) {
        return (
          <div className="container">
            <div className="row">
              <div className="col-lg-2 col-md-2" />
              <div className="col-lg-8 col-md-8 col-sm-12">
                <div className="card">
                  <div className="card-body">
                    <p className="card-text">{entry.content}</p>
                    <button
                      onClick={e => {
                        e.preventDefault();
                        axios
                          .delete(`${this.origin}/entry/${entry._id}`)
                          .then(() => {
                            this.getWeek();
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
        );
      } else {
        return (
          <div className="container">
            <div className="row">
              <div className="col-lg-2 col-md-2" />
              <div className="col-lg-8 col-md-8 col-sm-12">
                <div className="card">
                  <div className="card-body">
                    <p className="card-text">{entry.content}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      }
    });
    return (
      <div>
        <h1>Week {this.props.match.params.weekNumber}</h1>
        {week}
      </div>
      // <div className="container">
      //   <div className="row">
      //     <div className="col-lg-2 col-md-2" />
      //     <div className="col-lg-8 col-md-8 col-sm-12">
      //       <div className="card">
      //         <div className="card-body">
      //           <p className="card-text">{week}</p>
      //         </div>
      //       </div>
      //     </div>
      //   </div>
      // </div>
    );
  }
}

export default ShowListWeek;
