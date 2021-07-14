import React from 'react'
import Customers from './customers/Customers'
import CreateCustomer from './customers/CreateCustomer'
import Loans from './loan/Loans'
import Collaterals from './collateral/Collaterals'
import Loantxns from './loantxn/Loantxns'
import Txns from './txn/Txns'
import Navigation from './navigation/Navigation'
import Sidebar from './sidebar/Sidebar'
import 'bootstrap/dist/css/bootstrap.css'
import '../components/styles/main.css'
import * as ROUTES from '../constants/routes';
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom"
import CreateLoan from './loan/CreateLoan'

class App extends React.Component {

    render() {
        return (
            <Router>
                <div>
                <Navigation/>
                <Sidebar/>
                    <main>
                        <Switch>
                            {/* <Route exact path={ROUTES.HOME}>
                                <CreateCustomer />
                            </Route> */}
                            <Route exact path={ROUTES.CUSTOMERS}>
                                < Customers/>
                            </Route>
                            <Route exact path={ROUTES.LOANS}>
                                < Loans/>
                            </Route>
                            <Route exact path={ROUTES.CREATELOAN}>
                                < CreateLoan/>
                            </Route>
                            <Route exact path={ROUTES.COLLATERALS}>
                                < Collaterals/>
                            </Route>
                            <Route exact path={ROUTES.LOANTXNS}>
                                < Loantxns/>
                            </Route>
                            <Route exact path={ROUTES.TXNS}>
                                < Txns/>
                            </Route>
                        </Switch>
                    </main>
                </div>
            </Router>
   
        )
    }
}

export default App