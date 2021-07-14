import React, { Component } from 'react'
import '../styles/sidebar.css'
import {Link} from "react-router-dom";
import * as ROUTES from "../../constants/routes";
import {withRouter} from 'react-router-dom';

export class Sidebar extends Component {
    render() {
        console.log(this.props.location.pathname);
        return (
            <div className ="sidebar">
                <ul className=" flex-column list-group list-group-flush" >
                        {/* <li className={this.props.location.pathname.includes(ROUTES.HOME) ? "list-group-item active"  : "list-group-item"}>
                            <Link to={ROUTES.HOME} style={{textDecoration:"none"}}>
                                <i>Home</i> 
                            </Link>
                        </li> */}
                        <li className={this.props.location.pathname.includes(ROUTES.CREATELOAN) ? "list-group-item " : "list-group-item"}>
                            <Link to={ROUTES.CREATELOAN} style={{textDecoration:"none"}}>
                                <i>Зээлийн мэдээлэл бүртгэх</i> 
                            </Link>
                        </li>

                        <li className={this.props.location.pathname.includes(ROUTES.CUSTOMERS) ? "list-group-item " : "list-group-item"}>
                            <Link to={ROUTES.CUSTOMERS} style={{textDecoration:"none"}}>
                                <i>Хэрэглэгчийн мэдээлэл</i> 
                            </Link>
                        </li>
                        
                        <li className={this.props.location.pathname.includes(ROUTES.LOANS) ? "list-group-item " : "list-group-item"}>
                            <Link to={ROUTES.LOANS} style={{textDecoration:"none"}}>
                                <i>Зээлийн мэдээлэл</i> 
                            </Link>
                        </li>

                        <li className={this.props.location.pathname.includes(ROUTES.COLLATERALS) ? "list-group-item " : "list-group-item"}>
                            <Link to={ROUTES.COLLATERALS} style={{textDecoration:"none"}}>
                                <i>Барьцаа хөрөнгийн мэдээлэл</i> 
                            </Link>
                        </li>

                        <li className={this.props.location.pathname.includes(ROUTES.LOANTXNS) ? "list-group-item " : "list-group-item"}>
                            <Link to={ROUTES.LOANTXNS} style={{textDecoration:"none"}}>
                                <i>Зээлийн гүйлгээ</i> 
                            </Link>
                        </li>
                        
                        <li className={this.props.location.pathname.includes(ROUTES.TXNS) ? "list-group-item " : "list-group-item"}>
                            <Link to={ROUTES.TXNS} style={{textDecoration:"none"}}>
                                <i>Кассын гүйлгээ</i> 
                            </Link>
                        </li>
                </ul>
            </div>
        )
    }
}

export default withRouter(Sidebar);
