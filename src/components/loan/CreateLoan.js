import React, { Component } from 'react'
import axios from 'axios';
import * as API from "../../constants/api";
import DatePicker from 'react-date-picker';
import '../styles/createLoan.css'
import moment from 'moment';
import {number2Currency} from '../../utils/function';

export class CreateLoan extends Component {

    state = {
        firstName: "",
        lastName: "",
        register: "",
        address: "",
        phoneNumber: 0,
        status: "зээлтэй",
        letters: [
            'А', 'Б', 'В', 'Г', 'Д', 'Е', 'Ё', 'Ж', 'З', 'И', 'Й', 'К', 'Л', 'М', 'Н', 'О', 'Ө', 'П',
            'Р', 'С', 'Т', 'У', 'Ү', 'Ф', 'Х', 'Ц', 'Ч', 'Ш', 'Ъ', 'Ь', 'Ы', 'Э', 'Ю', 'Я', 

        ],

        isIncome: 0,
        isLoan: 1,
        isCash: 1,

        loanCashTypes:[
            "бэлэн",
            "бэлэн бус"
        ],

        type1Items: [
            "",
            "мөнгөн",
            "алтан",
            "монетэн",
            "бусад..."
        ],
        type2Items: [
            "",
            "ээмэг",
            "бөгж",
            "зүүлт",
            "бугуйвч",
            "аяга",
            "бусад..."
        ],

        
        collateralItems: [
            {
                loansId: 1,
                type1: "",
                type2: "",
                description: "",
                weigth: 0.0,
                amount: 0,
                sorits: 0.0,
                value: 0.0
            }
        ],

        totalValue: "0",

        contractNumber: 0,
        day: 30,
        interestRate: 4.0,
        issuedLoan: 0,
        datePickerValueStart: "",
        datePickerValueEnd: "",

        interestMonth: 0,
        interestDay: 0,

        fee: 100,

        minDateYear: 0,
        minDateMonth: 0,
        minDateDay: 0,

        customers: [],

    }

    componentDidMount(){
        this.setState({
            minDateYear: new Date().getFullYear(),
            minDateMonth: new Date().getMonth(),
            minDateDay: new Date().getDate(),
        });      
    }
    addDay = (e) => {
        const d = new Date();
        d.setDate  (d.getDate()+e)
        return d;
    }

    addCollateralItem = () => {
        const collateralItems = this.state.collateralItems;
        collateralItems.push(
            {
                loansId: 1,
                type1: "",
                type2: "",
                description: "",
                weigth: 0.0,
                amount: 0,
                sorits: 0.0,
                value: 0.0
            }
        )
        this.setState({
            collateralItems
        })
    }

    deleteCollateralItem = () => {
        const collateralItems = this.state.collateralItems;
        collateralItems.length > 1 && collateralItems.pop();
        this.setState({
            collateralItems
        })
    }
    
    onChangeDatePickerStart (e) {
        console.log(e);
        this.setState({
            datePickerValueStart: e
        })
    }
    onChangeDatePickerEnd (e) {
        console.log(e);
        this.setState({
            datePickerValueEnd: e
        })
    }

    onChange = (e) => {
        console.log(e.target.name);
        this.setState({
            [e.target.name]: e.target.value
        })
        console.log(e.target.value);
    };

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
    onChangeInterestRate  = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
        console.log(e.target.value);
    };
    onChangeIssuedLoan  = (e) => {
        this.CalculateInterestMonth(e.target.value);
        this.CalculateInterestDay(e.target.value);
        this.setState({
            [e.target.name]: e.target.value
        })
        console.log(e.target.value);
    };
    onChangeDay  = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
        console.log(e.target.value);
    };

    // onChangeTotalValue =(e) => {
    //     const collateralItems = this.state.collateralItems;
    //     const s=0;
    //     collateralItems.forEach((res) =>{
    //         s=s+res.value;
    //     })
    //     this.state({
    //         [e.target.name]: s
    //     })
    // }

    onChangeItemType1  = (e, i) => {
        const collateralItems = this.state.collateralItems;
        collateralItems[i].type1 = e.target.value;
        this.setState({collateralItems});
        console.log(e.target.value);
    };
    onChangeItemType2  = (e, i) => {
        const collateralItems = this.state.collateralItems;
        collateralItems[i].type2 = e.target.value;
        this.setState({collateralItems});
        console.log(e.target.value);
    };
    onChangeItemDescription  = (e, i) => {
        const collateralItems = this.state.collateralItems;
        collateralItems[i].description = e.target.value;
        this.setState({collateralItems});
        console.log(e.target.value);
    };
    onChangeItemWeigth  = (e, i) => {
        const collateralItems = this.state.collateralItems;
        collateralItems[i].weigth = e.target.value;
        this.setState({collateralItems});
        console.log(e.target.value);
    };
    onChangeItemAmount  = (e, i) => {
        const collateralItems = this.state.collateralItems;
        collateralItems[i].amount = e.target.value;
        this.setState({collateralItems});
        console.log(e.target.value);
    };
    onChangeItemSorits  = (e, i) => {
        const collateralItems = this.state.collateralItems;
        collateralItems[i].sorits = e.target.value;
        this.setState({collateralItems});
        console.log(e.target.value);
    };
    onChangeItemValue  = (e, i) => {
        const collateralItems = this.state.collateralItems;
        collateralItems[i].value = e.target.value;
         this.CalculateTotalValue();
         
        this.setState ({
            collateralItems,
        });
        console.log(e.target.value);
    };

    onChangeloanCashTypes = (e)=>{
        console.log(e.target.value)
        if(e.target.value === "бэлэн") {
            this.setState({
                isCash: 1
            })
        }
        else {
            this.setState({
                isCash: 0
            })
        }
    }

    onChangeCheckbox = (e) => {
        console.log(e.target.value);
        if(e.target.value === "0"){
            this.setState({
                fee: 100
            })
        } else {
            this.setState({
                fee: 0
            })
        }
        console.log(this.state.fee);
    }

    CalculateTotalValue = () => {
        const collateralItems = this.state.collateralItems;
        let s = 0;
        collateralItems.forEach((e) => {
            s = s + parseFloat(e.value);
        })
        console.log(s);
        this.setState({
            totalValue: s
        })
    }
    CalculateInterestMonth = (e) => {
        const interestRate = this.state.interestRate;
        let s = 0;
        s = parseFloat(e)*(parseFloat(interestRate)/100);
        console.log(e+" "+parseFloat(interestRate)/100)
        this.setState({
            interestMonth: s
        })
    }
    CalculateInterestDay = (e) => {
        const interestRate = this.state.interestRate;
        let s = 0.0;
        s = (parseFloat(e)*(parseFloat(interestRate)/100))/30;
        console.log(e+" "+parseFloat(interestRate)/100)
        this.setState({
            interestDay: s
        })
    }

    validateInputs = () => {
        const data = this.state;
        console.log("asdasdasdas"+data);

        if(data.issuedLoan > data.totalValue) {alert("Олгох зээл хэтэрсэн байна."); return false;}

        if(data.contractNumber === 0) {alert("Гэрээний дугаар хоосон байна."); return false;}

        if(data.lastName.length === 0) {alert("Овог хоосон байна."); return false;}

        if(data.firstName.length === 0) {alert("Нэр хоосон байна."); return false;}


        if(data.register.length === 0) {alert("Регистр хоосон байна."); return false;}
        if(data.register.length < 10) {alert("Регистр дутуу байна."); return false;}
        if(data.register.length > 10) {alert("Регистр илүү байна."); return false;}


        for(let i=0; i<2; i++){
            console.log(data.register[i]);
            const result = data.letters.find((e) => e.includes(data.register[i].toUpperCase()));
            console.log(result) ;
            if(result){
                console.log("taarch bn");
            }
            else {
                alert("Регистр таарахгүй байна");
                return false;
            }        
        }

        for(let i=2; i<10; i++){
            console.log(data.register[i]);

            if(!data.register[i].match(/^[0-9\b]+$/)) {
                console.log("Регистр алдаатай байна");
                return false;
            }
            console.log("taarch bn");
        }

        if(data.phoneNumber === 0) {alert("Утасны дугаар хоосон байна."); return false;}
        if(data.phoneNumber.length < 8) {alert("Утасны дугаар дутуу байна."); return false;}
        if(data.phoneNumber.length > 8) {alert("Утасны дугаар илүү байна."); return false;}


        for(let i=0; i<8; i++){
            console.log(data.phoneNumber[i]);

            if(!data.phoneNumber[i].match(/^[0-9\b]+$/)) {
                alert("taarahgui bn");
                return false;
            }
            console.log("taarch bn");
        }

        if(data.address.length === 0) {alert("Хаяг хоосон байна."); return false;}

        if(data.status.length === 0) {alert("Төлөв is empty"); return false;}

        if(data.datePickerValueStart.length === 0) {alert("Эхлэх өдөр хоосон байна."); return false;}

        if(data.datePickerValueEnd.length === 0) {alert("Дуусах өдөр хоосон байна."); return false;}

        if(data.interestRate === 0 || data.interestRate.length === 0) {alert("Хүү хоосон байна."); return false;}

        if(data.day === 0) {alert("Хоног хоосон байна."); return false;}

        if(data.issuedLoan === 0 || data.issuedLoan.length === 0) {alert("Олгох зээл хоосон байна."); return false;}


        data.collateralItems.forEach((e) => {
            if(e.type1 === '') 
                {alert("Төрөл 1 хоосон байна."); return false;}
            if(e.type2 === '' ) 
                {alert("Төрөл 2 хоосон байна."); return false;}
            if(e.description.length === 0) 
                {alert("Тайлбар хоосон байна."); return false;}
            if(e.weigth === 0) 
                {alert("Жин хоосон байна."); return false;}
            if(e.amount === 0) 
                {alert("Тоо ширхэг хоосон байна."); return false;}
            if(e.sorits === 0) 
                {alert("Сорьц хоосон байна."); return false;}
            if(e.value === 0)
                {alert("Үнэлгээ хоосон байна."); return false;}    
        })
        return true;
    }

    onClickSubmit = () => {
        // console.log( this.state.customers[this.state.customers.length].customers_id);
        if(this.validateInputs()) console.log("taarch bn")
        else console.log("taarahgui bn")

            const customersData = {
                firstName: this.state.firstName,
                lastName: this.state.lastName,
                register: this.state.register,
                address: this.state.address,
                phoneNumber: this.state.phoneNumber,
                status: this.state.status
            };
            const cashtxnsData = {
                txnDate: moment(this.state.datePickerValueStart).format("YYYY-MM-DD hh:mm:ss"),
                txnAmount: this.state.issuedLoan,
                isIncome: this.state.isIncome,
                isLoan: this.state.isLoan,
                isCash: this.state.isCash,
                txnDesc: "guilgee",
            };
            const loansData = {
                customersId: 21,
                contractNumber: this.state.contractNumber,
                createdAt: moment(new Date()).format("YYYY-MM-DD hh:mm:ss"),
                issuedDate: moment(this.state.datePickerValueStart).format("YYYY-MM-DD hh:mm:ss"),
                dueDate: moment(this.state.datePickerValueEnd).format("YYYY-MM-DD hh:mm:ss"),
                lastTxnDate:moment(this.state.datePickerValueStart).format("YYYY-MM-DD hh:mm:ss"),
                issuedLoan: this.state.issuedLoan,
                interestRate: this.state.interestRate,
                interest: this.state.issuedLoan*this.state.interestRate/100,
                totalPayment: 0,
                status: "open",
                fine: 0
            };
            const collateralsData = this.state.collateralItems;
            const loantxnsData = {
                loansId: 2,
                cashTxnsId: 1,
                txnDate: moment(this.state.datePickerValueStart).format("YYYY-MM-DD hh:mm:ss"),
                isIncome: this.state.isIncome,
                totalAmount: 0,
                txnDesc: "guilgee",
                loanAmount: this.state.issuedLoan,
                interestAmount: this.state.issuedLoan*this.state.interestRate/100,
                issuedLoan: this.state.issuedLoan,
            };
  
             console.log("loantxnData    "+loantxnsData);
             console.log("collateralData    "+collateralsData);
             console.log("customers     " + customersData);
             console.log("txnData     "+ cashtxnsData);
             console.log("loan     "+loansData);

            //  axios.post(API.API+"/customers", customersData).then(res => {
            //     console.log(res);
            //     if(res.data.id[0].customers_id) console.log("customers success"+res.data.id[0].customers_id);
            //  }) 
            //  axios.post(API.API+"/loans", loansData).then(res => {
            //     console.log(res);
            //     if(res.data) console.log("loans success")
            //  }) 
            //  axios.post(API.API+"/collaterals", collateralsData).then(res => {
            //     console.log(res);
            //     if(res.data) console.log("collaterals success")
            //  }) 
            //  axios.post(API.API+"/cashtxns", cashtxnsData).then(res => {
            //     console.log(res);
            //     if(res.data) console.log("cashtxns success")
            //  }) 
            //  axios.post(API.API+"/loantxns", loantxnsData).then(res => {
            //     console.log(res);
            //     if(res.data) console.log("loantxns success")
            
            //  }) 
             
        // }
    }

    render() {
        return (
            <div>
                <div className="row">

                    <div className="col-4">
                        <div className="form-group">
                            <label>Регистр дугаар:</label>
                            <input type="text" name="register" value={this.state.register.toUpperCase()} className="form-control" onChange={this.onChangeRegister}/>
                        </div>
                    </div>

                    <div className="col-3">
                        <div className="form-group">
                            <label>Овог:</label>
                            <input type="text" name="lastName" value={this.state.lastName} className="form-control" onChange={this.onChange} />
                        </div>
                    </div>

                    <div className="col-3">
                        <div className="form-group">
                            <label>Нэр:</label>
                            <input type="text" name="firstName" value={this.state.firstName} className="form-control" onChange={this.onChange} />
                        </div>
                    </div>    
                </div>   

                <div className="row">

                    <div className="col-2 mb-4">
                        <div className="form-group">    
                            <label>Утасны дугаар:</label>
                            <input type="number" name="phoneNumber" value={this.state.phoneNumber} className="form-control" onChange={this.onChangePhoneNumber}/>
                        </div>
                    </div>

                    <div className="col-6 mb-4" >
                        <div className="form-group">
                            <label>Хаяг:</label>
                            <input type="text" name="address" value={this.state.address} className="form-control" onChange={this.onChangeAddress}/>
                        </div>
                    </div>
                    
                    <div className="col-2">
                        <div className="form-group">
                            <label>Төлөв:</label>
                            <input type="text" name="status" value={this.state.status} className="form-control" onChange={this.onChangeStatus} disabled={true} />
                        </div>
                    </div>
                </div>  

                <div className="row">
                    <div className="col-2 mb-3">
                        <div className="form-group">
                            <label>Гэрээний дугаар:</label>
                            <input type="number" name="contractNumber" value={this.state.contractNumber} className="form-control" onChange={this.onChange} />
                        </div>
                    </div>
                </div>


                {this.state.collateralItems.map((item, i) => 
                    <div className = "row" key={i}>
                    <div className="col-2 mb-4" >
                        <div className="form-group">
                            <label>&nbsp;&nbsp;Төрөл 1:</label>
                            <select className="form-select" aria-label="Default select example" onChange={(e) => this.onChangeItemType1(e, i)}>
                                {this.state.type1Items.map((item, i) =>
                                        <option key={i} value={item}>{item}</option>
                                    )}
                            </select>
                            {/* <input  type="text" name="type1" value={item.type1} className="form-control" onChange={(e) => this.onChangeItemType1(e, i)}/> */}
                        </div>
                    </div>

                    <div className="col-2">
                        <div className="form-group">
                            <label>&nbsp;&nbsp;Төрөл 2:</label>
                            <select className="form-select" aria-label="Default select example" onChange={(e) => this.onChangeItemType2(e, i)}>
                                {this.state.type2Items.map((item, i) =>
                                        <option key={i} value={item}>{item}</option>
                                    )}
                            </select>
                            {/* <input type="text" name="type2" value={item.type2} className="form-control" onChange={(e) => this.onChangeItemType2(e, i)} /> */}
                        </div>
                    </div>
                    <div className="col-2   ">
                        <div className="form-group">
                            <label>&nbsp;&nbsp;Дэлгэрэнгүй:</label>
                            <input type="text" name="description" value={item.description} className="form-control" onChange={(e) => this.onChangeItemDescription(e, i)} placeholder="Дэлгэрэнгүй мэдээлэл" />
                        </div>
                    </div>
                    <div className="col-1">
                        <div className="form-group">
                            <label>&nbsp;&nbsp;Жин:</label>
                            <input type="number" name="weigth" value={item.weigth} className="form-control" onChange={(e) => this.onChangeItemWeigth(e, i)} placeholder="Жин" />
                        </div>
                    </div>
                    <div className="col-1">
                        <div className="form-group">
                            <label>&nbsp;&nbsp;Тоо ширхэг:</label>
                            <input type="number" name="amount" value={item.amount} className="form-control" onChange={(e) => this.onChangeItemAmount(e, i)} placeholder="Тоо ширхэг"/>
                        </div>
                    </div>
                    <div className="col-1">
                        <div className="form-group">
                            <label>&nbsp;&nbsp;Сорьц:</label>
                            <input type="number" name="sorits" value={item.sorits} className="form-control" onChange={(e) => this.onChangeItemSorits(e, i)} placeholder="Сорьц"/>
                        </div>
                    </div>
                    <div className="col-1">
                        <div className="form-group">
                            <label>&nbsp;&nbsp;Үнэлгээ:</label>
                            <input type="number"  name="value"  value={item.value} className="form-control" onChange={(e) => this.onChangeItemValue(e, i)} placeholder="үнэлгээ"/>
                        </div>
                    </div>
                    </div>
                )}
                
                <button className="btn btn-success mb-3"  onClick={this.addCollateralItem}>Барьцаа хөрөнгө нэмэх <b>+</b></button>
                <button className="btn btn-danger mb-3"  onClick={this.deleteCollateralItem}>Барьцаа хөрөнгө хасах <b>-</b></button>
                <div className="col-4 mb-3 ">                            
                        <b>Нийт үнэлгээ:</b>
                        <b className="ms-3 text-info">{number2Currency( this.state.totalValue)}</b>
                </div>


                <div className="row">
                    <div className="col-2 mb-3 d-flex flex-column ">                            
                        <b>Эхлэх өдөр:</b>
                        <DatePicker 
                            onChange={date => this.onChangeDatePickerStart(date)} 
                            value={this.state.datePickerValueStart} 
                            minDate={new Date()}
                            maxDate={new Date()}
                            clearIcon={null}/>
                    </div>
                    <div className="col-2 mb-3 ">                            
                        <b>Хоног:</b>
                        <input disabled={true} type="number" name="day" value={this.state.day} className="form-control" onChange={this.onChangeDay}/>
                    </div>
                    <div className="col-2 mb-3 d-flex flex-column ">                            
                        <b>Дуусах өдөр:</b>
                        <DatePicker 
                            onChange={date => this.onChangeDatePickerEnd(date)} 
                            value={this.state.datePickerValueEnd}  
                            maxDate={this.addDay(this.state.day)}
                            minDate={this.addDay(this.state.day)}
                            clearIcon={null}/>
                    </div>
                    <div className="col-2 mb-3">                            
                        <b>Хүүний хувь:</b>
                        <input type="number" name="interestRate" value={this.state.interestRate} className="form-control" onChange={this.onChangeInterestRate} />
                    </div>
                    <div className="col-2 mb-3">                            
                        <b>Олгох зээл:</b>
                        <input type="number" name="issuedLoan" value={this.state.issuedLoan} className="form-control" onChange={this.onChangeIssuedLoan}/>
                    </div>                    
                </div>
                <div className="row">
                    <div className="col-2 mb-3">
                        <div className="form-group">
                            <label>&nbsp;&nbsp;<b>Бэлэн/Бэлэн бус:</b></label>
                            <select className="form-select" aria-label="Default select example" onChange={(e) => this.onChangeloanCashTypes(e)}>
                                {this.state.loanCashTypes.map((item, i) =>
                                        <option key={i} value={item}>{item}</option>
                                    )}
                            </select>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-3 mb-3 ">                            
                        <b>Сарын хүүний хэмжээ:</b>
                        <b className="ms-3 text-info">{number2Currency(this.state.interestMonth) }</b>
                    </div>

                    <div className="col-3 mb-3 ">                            
                        <b>Өдөрийн хүүний хэмжээ:</b>
                        <b className="ms-3 text-info">{number2Currency(this.state.interestDay) }</b>
                    </div>
                </div>
                   
                <div>
                    <div className="col-2 mb-3">
                        <input className="form-check-input" type="checkbox" value={this.state.fee} onChange={(e) => this.onChangeCheckbox(e)}/> 
                        <b>&nbsp;&nbsp;Маягт</b>
                    </div>
                    <button className="btn btn-primary mb-3" onClick = {this.onClickSubmit}>Үүсгэх</button>
                </div>
            </div>
        )
    }
}

export default CreateLoan
