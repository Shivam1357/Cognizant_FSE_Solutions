import React, { Component } from 'react'

export default class CountPeople extends Component {
    constructor(){
        super();
        this.state = {
            entryCount : 0,
            exitCount : 0,
            c : 0
        };
        this.updateEntry = this.updateEntry.bind(this);
        this.updateExit = this.updateExit.bind(this);
    }
    updateEntry(){
        this.setState((prevState, props) =>{
            return {entryCount : prevState.entryCount + 1};
        } )
    }

    updateExit(){
        this.setState((prevState, props) => {
            return {exitCount : prevState.exitCount + 1};
        })
    }

    render() {

        return (
            <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: "space-evenly",
                height: '100vh'
            }}>
                <div>
                    <button style={{backgroundColor:"greenyellow"}} onClick={this.updateEntry}>Login</button>
                    {this.state.entryCount} People Entered!!!
                </div>
                <div>
                    <button style={{backgroundColor:"greenyellow"}} onClick={this.updateExit}>Exit</button>
                    {this.state.exitCount} People Left!!!
                </div>
            </div>
        )
    }
}
