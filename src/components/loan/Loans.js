import React, { Component } from 'react'
import axios from 'axios'
import * as API from '../../constants/api';
import StickyTable from "react-sticky-table-thead"

export class Loans extends Component {

    state = {
        loans: []
    }

    componentDidMount(){
        axios.get(API.API+"/loans").then((res) => {
            this.setState({
                loans: res.data,
            })
            console.log(res.data)
        })
    }

    render() {
        return (
            <div>
                <StickyTable height={900} hiddenVerticalScrollbar={true}>
                    <table style={{width:"100%", borderCollapse:"collapse"}} className="table table-bordered border-dark table-hover table-sm table-fixed">
                        <thead key="thead" style={{backgroundColor:"#cccccc"}} >
                            <tr>
                            <th scope="col">#</th>
                            <th scope="col">Хэрэглэгчийн дугаар</th>
                            <th scope="col">Гэрээний дугаар</th>
                            <th scope="col">Үүссэн огноо</th>
                            <th scope="col">Олгосон огноо</th>
                            <th scope="col">Дуусах огноо</th>
                            <th scope="col">Сүүлд гүйлгээ хийсэн огноо</th>
                            <th scope="col">Олгосон зээл</th>
                            <th scope="col">Хүү</th>
                            <th scope="col">Хүүгийн орлого</th>
                            <th scope="col">Нийт төлөх дүн</th>
                            <th scope="col">Төлөв</th>
                            <th scope="col">Торгууль</th>


                            </tr>
                        </thead>
                        <tbody key="tbody">
                            {this.state.loans.map((res) =>
                                <tr key={res.loans_id}>

                                    <td>{res.loans_id}</td>
                                    <td>{res.customers_id}</td>
                                    <td>{res.contract_number}</td>
                                    <td>{res.created_at}</td>
                                    <td>{res.issued_date}</td>
                                    <td>{res.due_date}</td>
                                    <td>{res.last_txn_date}</td>
                                    <td>{res.issued_loan}</td>
                                    <td>{res.interest_rate}</td>
                                    <td>{res.interest}</td>
                                    <td>{res.total_payment}</td>
                                    <td>{res.status}</td>
                                    <td>{res.fine}</td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </StickyTable>
            </div>
        )
    }
}

export default Loans
