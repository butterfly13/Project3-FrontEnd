import React, { Component } from 'react';
import axios from 'axios'

class NewTopic extends Component {
    constructor(props){
        super(props)
        this.state = {
            newLunchTopic: '',
            newEntry: '',
            weekNumber: null
        }

        if (window.location.origin === "http://localhost:3000") {
        this.origin = "http://localhost:4000";
        } else {
        this.origin = "https://murmuring-badlands-90875.herokuapp.com";
        }
        
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleNewEntry = this.handleNewEntry.bind(this)
        this.handleNewTopic = this.handleNewTopic.bind(this)
    }

    handleChange (e ) {
        this.setState({[e.target.name]: e.target.value})
        
    }

    handleNewTopic (){
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

        // to clear out the input form after the user hits submit
       this.setState({
        newLunchTopic: '',
        newEntry: '',
        weekNumber: null
       })
    }

    handleNewEntry (){
        console.log(this.state.weekNumber)
        axios.post(`${this.origin}/entry`, {weekNumber: this.state.weekNumber,
        content: this.state.newEntry})
        .then(res => {
            console.log(`in handleNewEntry`)
            console.log(res)
            console.log(res.data)
        })
        // to clear out the input form after the user hits submit
       this.setState({
        newLunchTopic: '',
        newEntry: '',
        weekNumber: null
       })
    }

    

    handleSubmit (e) {
        e.preventDefault()
       this.handleNewTopic()
       this.handleNewEntry()
       this.props.history.push('/entry')
       
    }
    render() {

        return (
            <div>
                <div className="addTopic">
                    <h3>Add New Lunch Topic</h3>
                    <form onSubmit={this.handleSubmit}>
                        <label>Suggest Lunch Topic: </label>
                        <textarea  name="newLunchTopic" value={this.state.value}  onChange={this.handleChange} /> <br />
                        <label>Share Your experience:</label>
                        <textarea name="newEntry" value={this.state.value} onChange={this.handleChange} placeholder="Your recommendation, high, or low "/> <br />
                        <label>WeekNumber: </label>
                        <input type="number" name="weekNumber" value={this.state.value} onChange={this.handleChange} /> <br />
                        <button> Add Topic</button>
                    </form>
                </div>
                
                
            </div>
        );
    }
}

export default NewTopic;