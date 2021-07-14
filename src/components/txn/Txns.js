import React, { Component } from 'react'
import axios from 'axios'
import * as API from '../../constants/api';

export class Txns extends Component {

    state = {
        txns: []
    }

    componentDidMount(){
        axios.get(API.API+"/cashtxns").then((res) => {
            this.setState({
                txns: res.data,
            })
            console.log(res.data)
        })
    }

    render() {
        return (
            <div>
                <table className="table table-bordered border-dark table-hover table-sm sticky-top">
                    <thead key="thead" className=" sticky-top">
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Гүйлгээ хийсэн өдөр</th>
                            <th scope="col">Гүйлгээний хэмжээ</th>
                            <th scope="col">Орлого / Зарлага</th>
                            <th scope="col">Зээл / Зээл бус</th>
                            <th scope="col">Бэлэн / Бэлэн бус</th>
                            <th scope="col">Гүйлгээний утга</th>
                        </tr>
                    </thead>
                    <tbody key="tbody">
                        {this.state.txns.map((res) =>
                            <tr key={res.cash_txns_id}>

                                <td>{res.cash_txns_id}</td>
                                <td>{res.txn_date}</td>
                                <td>{res.txn_amount}</td>
                                <td>{res.isIncome === 1 ? "Орлого" : "Зарлага"}</td>
                                <td>{res.isLoan === 1 ? "Зээл" : "Зээл бус"}</td>
                                <td>{res.isCash === 1 ? "Бэлэн" : "Бэлэн бус"}</td>
                                <td>{res.txn_desc}</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default Txns
