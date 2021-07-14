import React, { Component } from 'react'
import axios from 'axios'
import * as API from '../../constants/api';

export class Collaterals extends Component {

    state = {
        collaterals: []
    }

    componentDidMount(){
        axios.get(API.API+"/collaterals").then((res) => {
            this.setState({
                collaterals: res.data,
            })
            console.log(res.data)
        })
    }

    render() {
        return (
            <div>
                <table className="table table-bordered border-light table-hover table-sm">
                    <thead key="thead" >
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Зээлийн дугаар</th>
                            <th scope="col">Төрөл</th>
                            <th scope="col">Төрөл</th>
                            <th scope="col">Дэлгэрэнгүй</th>
                            <th scope="col">Жин</th>
                            <th scope="col">Тоо ширхэг</th>
                            <th scope="col">Сорьц</th>
                            <th scope="col">Үнэлгээ</th>
                        </tr>
                    </thead>
                    <tbody key="tbody">
                        {this.state.collaterals.map((res) =>
                            <tr key={res.collaterals_id}>
                                <td>{res.collaterals_id}</td>
                                <td>{res.loans_id}</td>
                                <td>{res.type1}</td>
                                <td>{res.type2}</td>
                                <td>{res.description}</td>
                                <td>{res.weigth}</td>
                                <td>{res.amount}</td>
                                <td>{res.sorits}</td>
                                <td>{res.value}</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default Collaterals
