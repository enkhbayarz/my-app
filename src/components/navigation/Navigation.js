import React, { Component } from 'react'

export class Navigation extends Component {

    state = {
        date: "",
        time: ""
      };
    componentDidMount(){
        // const date = { currentTime: new Date().toLocaleString() };
    
        this.setState({
          date: new Date().toLocaleDateString(),
          time: new Date().toLocaleTimeString()
        });      
        console.log(this.state.date)
    }

    render() {
        return (
            <nav className="navbar navbar-light bg-white sticky-top">
                <div className="container-fluid">
                    <a className="navbar-brand text-dark" >Navbar</a>
                    <a className="navbar-brand text-dark"> {this.state.date} {this.state.time}</a>
                </div>
            </nav>
        )
    }
}

export default Navigation
