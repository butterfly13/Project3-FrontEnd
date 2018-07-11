import React, { Component } from 'react';

class NewTopic extends Component {
    render() {
        return (
            <div>
                <div className="addLunchTopic">
                    <h3>Add New Lunch Topic</h3>
                    <form>
                        <label>New Topic: </label>
                        <textarea  name="content"/> <br />
                        <button> Add Topic</button>
                    </form>
                </div>
                <div className="addNewEntry">
                    <h3>Add New Entry</h3>
                    <form>
                        <label>WeekNumber: </label>
                        <input type="number" name="weekNumber" /> <br />
                        <label>Content</label>
                        <textarea name="content" placeholder="Please put some recommendation, high, or low "/>
                        <button> Add Topic</button>
                    </form>
                </div>
                
                
            </div>
        );
    }
}

export default NewTopic;