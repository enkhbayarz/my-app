import axios from 'axios'
import React, { Component } from 'react'
import * as API from '../../constants/api';

export class Customers extends Component {

    state = {
        customers: []
    }

    componentDidMount(){
        axios.get(API.API+"/customers").then((res) => {
            this.setState({
                customers: res.data,
            })
            console.log(res.data)
        })
    }

    render() {
        return (
            <div>
                <table className="table table-bordered border-light table-hover table-sm ">
                    <thead key="thead" >
                        <tr>
                        <th scope="col">#</th>
                        <th scope="col">Нэр</th>
                        <th scope="col">Овог</th>
                        <th scope="col">Регистр</th>
                        <th scope="col">Гэрийн Хаяг</th>
                        <th scope="col">Утасны дугаар</th>
                        <th scope="col">Төлөв</th>

                        </tr>
                    </thead>
                    <tbody key="tbody">
                        {this.state.customers.map((res) =>
                            <tr key={res.customers_id}>

                                <td>{res.customers_id}</td>
                                <td>{res.first_name}</td>
                                <td>{res.last_name}</td>
                                <td>{res.register}</td>
                                <td>{res.address}</td>
                                <td>{res.phoneNumber}</td>
                                <td>{res.status}</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default Customers
