import React, { Component } from 'react'
import axios from 'axios'
import * as API from '../../constants/api';

export class Loantxns extends Component {

    state = {
        loantxns: []
    }

    componentDidMount(){
        axios.get(API.API+"/loantxns").then((res) => {
            this.setState({
                loantxns: res.data,
            })
            console.log(res.data)
        })
    }

    render() {
        return (
            <div>
                <table className="table table-bordered border-light table-hover table-sm">
                    <thead key="thead" className=" sticky-top">
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Зээлийн дугаар</th>
                            <th scope="col">Кассын гүйлгээний дугаар</th>
                            <th scope="col">Гүйлгээ хийсэн өдөр</th>
                            <th scope="col">Орлого / Зарлага</th>
                            <th scope="col">Нийт Дүн</th>
                            <th scope="col">Гүйлгээний утга</th>
                            <th scope="col">Зээлийн хэмжээ</th>
                            <th scope="col">Хүүгийн хэмжээ</th>
                        </tr>
                    </thead>
                    <tbody key="tbody">
                        {this.state.loantxns.map((res) =>
                            <tr key={res.loan_txns_id}>

                                <td>{res.loan_txns_id}</td>
                                <td>{res.loans_id}</td>
                                <td>{res.cash_txns_id}</td>
                                <td>{res.txn_date}</td>
                                <td>{res.isIncome === 0 ? "Зарлага" : "Орлого"}</td>
                                <td>{res.total_amount}</td>
                                <td>{res.txn_desc}</td>
                                <td>{res.loan_amount}</td>
                                <td>{res.interest_amount}</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default Loantxns
