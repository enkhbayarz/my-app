import React, { Component } from 'react'
import axios from 'axios'
import {withRouter} from 'react-router-dom';
import * as ROUTES from "../../constants/routes";
import * as API from "../../constants/api";
export class CreateCustomer extends Component {

    nextPath(path) {
        this.props.history.push(path);
      }
    
    state={
        firstName: "",
        lastName: "",
        register: "",
        address: "",
        phoneNumber: 0,
        status: ""
    }

    onChangeFirstName = (e) => {
        console.log(e.target.name);
        this.setState({
            [e.target.name]: e.target.value
        })
        console.log(e.target.value);
    };
    onChangeLastName = (e) => {
        console.log(e.target.name);
        this.setState({
            [e.target.name]: e.target.value
        })
        console.log(e.target.value);
    };
    onChangeRegister = (e) => {
        console.log(e.target.name);
        this.setState({
            [e.target.name]: e.target.value
        })
        console.log(e.target.value);
    };
    onChangeAddress = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
        console.log(e.target.value);
    };
    onChangePhoneNumber = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
        console.log(e.target.value);
    };
    onChangeStatus  = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
        console.log(e.target.value);
    };


    onClickSubmit = () => {
        const data ={
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            register: this.state.register,
            address: this.state.address,
            phoneNumber: this.state.phoneNumber,
            status: this.state.status
        }
        axios.post(API.API+"/customers", data, ).then(res => {
            console.log(res);
        })
        this.nextPath('/customers');

    }

    render() {
        return (
            <div className="col-2">
                
                    <div className="mb-3">
                        <div className="form-group">
                            <label>First Name:</label>
                            <input type="text" name="firstName" value={this.state.firstName} className="form-control" onChange={this.onChangeFirstName} />
                        </div>
                    </div>

                    <div className="mb-3">
                        <div className="form-group">
                            <label>Last Name:</label>
                            <input type="text" name="lastName" value={this.state.lastName} className="form-control" onChange={this.onChangeLastName} />
                        </div>
                    </div>
                    
                    <div className="mb-3">
                        <div className="form-group">
                            <label>Register:</label>
                            <input type="text" name="register" value={this.state.register} className="form-control" onChange={this.onChangeRegister}/>
                        </div>
                    </div>
                    <div className="mb-3">
                        <div className="form-group">
                            <label>Address:</label>
                            <input type="text" name="address" value={this.state.address} className="form-control" onChange={this.onChangeAddress}/>
                        </div>
                    </div>
                    <div className="mb-3">
                        <div className="form-group">    
                            <label>Phone Number:</label>
                            <input type="number" name="phoneNumber" value={this.state.phoneNumber} className="form-control" onChange={this.onChangePhoneNumber}/>
                        </div>
                    </div>
                    <div className="mb-3">
                        <div className="form-group">
                            <label>Status:</label>
                            <input type="text" name="status" value={this.state.status} className="form-control" onChange={this.onChangeStatus} />
                        </div>
                    </div>
                    
                    
                    <button className="btn btn-primary mb-3" onClick = {this.onClickSubmit}>Confirm</button>
                    
               
            </div>
        )
    }
}

export default withRouter(CreateCustomer);
