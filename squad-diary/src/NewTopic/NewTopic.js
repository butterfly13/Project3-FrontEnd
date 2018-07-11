import React, { Component } from 'react';
import axios from 'axios'

class NewTopic extends Component {
    constructor(props){
        super(props)
        this.state = {
            newLunchTopic: '',
            newEntry: '',
            WeekNumber:''
        }

        if (window.location.origin === "http://localhost:3000") {
        this.origin = "http://localhost:4000";
        } else {
        this.origin = "https://murmuring-badlands-90875.herokuapp.com";
        }
        
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange (e ) {
        this.setState({[e.target.name]: e.target.value})
        
    }

    handleSubmit (e) {
        e.preventDefault()
        console.log(this.state)
        const newLunchTopic = {
            content: this.state.newLunchTopic
        }
        axios.post(`${this.origin}`, {newLunchTopic})
        .then(res => {
            console.log(res)
            console.log(res)
        })
        .catch(err => console.log(err))
        // console.log(newLunchTopic)
    }
    render() {

        return (
            <div>
                <div className="addLunchTopic">
                    <h3>Add New Lunch Topic</h3>
                    <form onSubmit={this.handleSubmit}>
                        <label>Suggest Lunch Topic: </label>
                        <textarea  name="newLunchTopic" value={this.state.value}  onChange={this.handleChange} /> <br />
                        <label>Content</label>
                        <textarea name="newEntry" value={this.state.value} onChange={this.handleChange} placeholder="Please put some recommendation, high, or low "/> <br />
                        <label>WeekNumber: </label>
                        <input type="number" name="weekNumber" /> <br />
                        <button> Add Topic</button>
                    </form>
                </div>
                
                
            </div>
        );
    }
}

export default NewTopic;