import React from 'react';
import DropDown from './Dropdown/DropDown';
import './RigntColumn.css';
import { useState } from 'react';
import DropDown1 from './Dropdown/DropDown1';
import DropDown2 from './Dropdown/DropDown2';
import DropDown3 from './Dropdown/DropDown3';
import DropDown4 from './Dropdown/DropDown4';
const RightColumn = () => {
    const [selected, setSelected] = useState("");
    const [selected1, setSelected1] = useState("");
    const [selected2, setSelected2] = useState("");
    const [selected3, setSelected3] = useState("");
    const [selected4, setSelected4] = useState("");
    const [price, setPrice] = useState('0000.00');
    const [price1, setPrice1] = useState('0000.00');
    const [price2, setPrice2] = useState('0000.00');
    const [price3, setPrice3] = useState('0000.00');
    const [price4, setPrice4] = useState('0000.00');
    const [orderQuantity, setOrderQuantity] = useState('0000');
    const [orderQuantity1, setOrderQuantity1] = useState('0000');
    const [orderQuantity2, setOrderQuantity2] = useState('0000');
    const [orderQuantity3, setOrderQuantity3] = useState('0000');
    const [orderQuantity4, setOrderQuantity4] = useState('0000');
    const [TotalPrice, setTotalPrice] = useState('0000')
    const [TotalPrice1, setTotalPrice1] = useState('0000')
    const [TotalPrice2, setTotalPrice2] = useState('0000')
    const [TotalPrice3, setTotalPrice3] = useState('0000')
    const [TotalPrice4, setTotalPrice4] = useState('0000')
    const [active, setActive] = useState(false);
    const [active1, setActive1] = useState(false);
    const [active2, setActive2] = useState(false);
    const [active3, setActive3] = useState(false);
    const [active4, setActive4] = useState(false);
    const kg = [1, 2, 3, 4, 5];
    const tableNumber = [1, 2, 3, 4, 5]


    // console.log(tableData[2])

    const [unit, setUnit] = useState()
    const [unit1, setUnit1] = useState()
    const [unit2, setUnit2] = useState()
    const [unit3, setUnit3] = useState()
    const [unit4, setUnit4] = useState()
    const handleDelete = (tableNumber) => {
        if (tableNumber === 1) {
            setPrice('0000.00');
            setOrderQuantity('0000');
            setUnit();
            setTotalPrice('0000');
        }

        if (tableNumber === 2) {
            setPrice1('0000.00');
            setOrderQuantity1('0000');
            setUnit1();
            setTotalPrice1('0000')
        }

        if (tableNumber === 3) {
            setPrice2('0000.00');
            setOrderQuantity2('0000');
            setUnit2();
            setTotalPrice2('0000')
        }

        if (tableNumber === 4) {
            setPrice3('0000.00');
            setOrderQuantity3('0000');
            setUnit3();
            setTotalPrice3('0000');
        }

        if (tableNumber === 5) {
            setPrice4('0000.00');
            setOrderQuantity4('0000');
            setUnit4();
            setTotalPrice4('0000')
        }

    }

    const productPricing = (selected, tableNumber) => {
        //Chicken
        if (selected === 'Country Chicken' && tableNumber === 1) {
            setPrice(130);
            setOrderQuantity(1)

        }
        if (selected === 'Country Chicken' && tableNumber === 2) {
            setPrice1(130);
            setOrderQuantity1(1)
        }
        if (selected === 'Country Chicken' && tableNumber === 3) {
            setPrice2(130);
            setOrderQuantity2(1)

        }
        if (selected === 'Country Chicken' && tableNumber === 4) {
            setPrice3(130);
            setOrderQuantity3(1)

        }
        if (selected === 'Country Chicken' && tableNumber === 5) {
            setPrice4(130);
            setOrderQuantity4(1)

        }

        //Fish
        if (selected === 'Fish' && tableNumber === 1) {
            setPrice(230);
            setOrderQuantity(1)
        }
        if (selected === 'Fish' && tableNumber === 2) {
            setPrice1(230);
            setOrderQuantity1(1)

        }
        if (selected === 'Fish' && tableNumber === 3) {
            setPrice2(230);
            setOrderQuantity2(1)


        }
        if (selected === 'Fish' && tableNumber === 4) {
            setPrice3(230);
            setOrderQuantity3(1)


        }
        if (selected === 'Fish' && tableNumber === 5) {
            setPrice4(230);
            setOrderQuantity4(1)


        }


        //Goat
        if (selected === 'Goat Meat' && tableNumber === 1) {
            setPrice(440)
            setOrderQuantity(1)
        }
        if (selected === 'Goat Meat' && tableNumber === 2) {

            setPrice1(440)
            setOrderQuantity1(1)
        }

        if (selected === 'Goat Meat' && tableNumber === 3) {
            setPrice2(440)
            setOrderQuantity2(1)

        }

        if (selected === 'Goat Meat' && tableNumber === 4) {
            setPrice3(440)
            setOrderQuantity3(1)

        }
        if (selected === 'Goat Meat' && tableNumber === 5) {
            setPrice4(440)
            setOrderQuantity4(1)

        }

    }

    const totalPrice = (price, unit, tableNumber) => {
        console.log("price is:", price, "unit is", unit, "table number is", tableNumber)
        if (tableNumber === 1) {
            const FinalPrice = (price * unit);
            setTotalPrice(FinalPrice)
        }
        if (tableNumber === 2) {
            const FinalPrice = (price * unit);
            setTotalPrice1(FinalPrice)
        }
        if (tableNumber === 3) {
            const FinalPrice = (price * unit);
            setTotalPrice2(FinalPrice)
        }
        if (tableNumber === 4) {
            const FinalPrice = (price * unit);
            setTotalPrice3(FinalPrice)
        }
        if (tableNumber === 5) {
            const FinalPrice = (price * unit);
            setTotalPrice4(FinalPrice)
        }
    }

    // const discount = (type) => {

    // }
    return (
        <div className='container'>
            <div className='shadow-sm p-3 mb-5 bg-body rounded mt-2 text-start'>
                <div className='border-bottom border-dark'>
                    <div className='d-flex align-items-center'>
                        <h4 className='text-primary fw-bold'>Farmer</h4> <i class="fas fa-arrow-right mx-2 mb-2"></i> <span className='text-primary fs-5 mb-2'>Place Order</span>
                    </div>
                    <p>Lorem Ipsum is simply dummy</p>
                </div>
                <h5 className='text-center mt-2'>Add Products of Customer Choice</h5>
                <section className='mt-2 border-bottom border-dark'>

                    <table class="table ">
                        <thead>
                            <tr style={{ backgroundColor: "indigo", color: "white", fontWeight: "300" }}>
                                <th scope="col" className="border" style={{ fontWeight: "400" }}>Product Name*</th>
                                <th scope="col" className="border-end" style={{ fontWeight: "400" }}>Product pricing</th>
                                <th scope="col" className="border-end" style={{ fontWeight: "400" }}>Order quantity*</th>
                                <th scope="col" className="border-end" style={{ fontWeight: "400" }}>Order unit*</th>
                                <th scope="col" className="border-end" style={{ fontWeight: "400" }}>Discount price*</th>
                                <th scope="col" className="border-end" style={{ fontWeight: "400" }}>Discount type*</th>
                                <th scope="col" className="border-end" style={{ fontWeight: "400" }}>Final price</th>
                                <th scope="col" className="border-end"></th>
                            </tr>
                        </thead>
                        <div className='mt-2'></div>
                        <tbody className='mt-2  '>

                            <tr className='shadow-sm p-3  bg-light rounded ' >

                                <td>  <DropDown selected={selected} setSelected={setSelected} productPricing={productPricing} tableNumber={tableNumber[0]}></DropDown></td>
                                <td>     <div>
                                    <div className="dropdown" style={{ width: "130px" }}>
                                        <div className="dropdonw-btn py-3" style={{ height: '24px' }}> <span>{price}</span>
                                            <div className='d-flex flex-column'>
                                                <span className='fas fa-chevron-up'></span>
                                                <span className='fas fa-chevron-down'></span>
                                            </div>
                                        </div>

                                    </div>
                                </div></td>
                                <td> <div>
                                    <div className="dropdown" style={{ width: "110px" }}>
                                        <div className="dropdonw-btn py-3" style={{ height: '24px' }}> <span>{orderQuantity}</span>
                                            <div className='d-flex flex-column'>
                                                <span className='fas fa-chevron-up'></span>
                                                <span className='fas fa-chevron-down'></span>
                                            </div>
                                        </div>

                                    </div>
                                </div></td>
                                <td><div>
                                    <div className="dropdown" style={{ width: "100px" }}>
                                        <div className="dropdonw-btn py-3" onClick={e => setActive(!active)} style={{ height: '24px' }}> <span>{unit} KG</span>
                                            <span className='fas fa-chevron-down'></span>
                                            {active && (<div className="dropdonw-content">
                                                {kg.map(option => (
                                                    <div onClick={e => {
                                                        setUnit(option)
                                                        setActive(false)
                                                        totalPrice(price, option, tableNumber[0])
                                                    }}
                                                        className="dropdonw-item">
                                                        {option}
                                                    </div>
                                                ))}
                                            </div>)}
                                        </div>

                                    </div>
                                </div></td>

                                <td><div className="dropdown" style={{ width: "110px" }}>
                                    <div className="dropdonw-btn py-3" style={{ height: '24px' }}> <span>0000</span>
                                        <div className='d-flex flex-column'>
                                            <span className='fas fa-chevron-up'></span>
                                            <span className='fas fa-chevron-down'></span>
                                        </div>
                                    </div>

                                </div></td>
                                <td> <div>
                                    <div className="dropdown" style={{ width: "110px" }}>
                                        <div className="dropdonw-btn py-3" style={{ height: '24px' }}> <span className='ps-3'>Flat</span>
                                            <span className='fas fa-chevron-down'></span>
                                        </div>
                                    </div>
                                </div></td>
                                <td>
                                    <div className="dropdown" style={{ width: "90px" }}>
                                        <div className="dropdonw-btn py-3" style={{ height: '24px' }}> <span>{TotalPrice}</span>
                                            <div className='d-flex flex-column'>
                                                <span className='fas fa-chevron-up'></span>
                                                <span className='fas fa-chevron-down'></span>
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td> <div className="dropdown" style={{ width: "99px" }}>
                                    <button onClick={() => handleDelete(tableNumber[0])} className="dropdonw-btn py-3" style={{ height: '24px', border: "1px solid red" }}> <span> <i style={{ color: "red" }} class="fas fa-trash-alt me-2"></i>Delete</span>
                                    </button>
                                </div></td>
                            </tr>
                            <div className='mt-2'></div>
                            <tr className='shadow-sm p-3  bg-light rounded '>
                                <td>  <DropDown1 selected1={selected1} setSelected1={setSelected1} productPricing={productPricing} tableNumber={tableNumber[1]} ></DropDown1></td>
                                <td>     <div>
                                    <div className="dropdown" style={{ width: "130px" }}>
                                        <div className="dropdonw-btn py-3" style={{ height: '24px' }}> <span>{price1}</span>
                                            <div className='d-flex flex-column'>
                                                <span className='fas fa-chevron-up'></span>
                                                <span className='fas fa-chevron-down'></span>
                                            </div>
                                        </div>
                                    </div>
                                </div></td>
                                <td> <div>
                                    <div className="dropdown" style={{ width: "110px" }}>
                                        <div className="dropdonw-btn py-3" style={{ height: '24px' }}> <span>{orderQuantity1}</span>
                                            <div className='d-flex flex-column'>
                                                <span className='fas fa-chevron-up'></span>
                                                <span className='fas fa-chevron-down'></span>
                                            </div>
                                        </div>

                                    </div>
                                </div></td>
                                <td><div>
                                    <div className="dropdown" style={{ width: "100px" }}>
                                        <div className="dropdonw-btn py-3" onClick={e => setActive1(!active1)} style={{ height: '24px' }}> <span>{unit1} KG</span>
                                            <span className='fas fa-chevron-down'></span>
                                            {active1 && (<div className="dropdonw-content">
                                                {kg.map(option => (
                                                    <div onClick={e => {
                                                        setUnit1(option)
                                                        setActive(false)
                                                        totalPrice(price1, option, tableNumber[1])
                                                    }}
                                                        className="dropdonw-item">
                                                        {option}
                                                    </div>
                                                ))}
                                            </div>)}
                                        </div>

                                    </div>
                                </div></td>
                                <td><div className="dropdown" style={{ width: "110px" }}>
                                    <div className="dropdonw-btn py-3" style={{ height: '24px' }}> <span>0000</span>
                                        <div className='d-flex flex-column'>
                                            <span className='fas fa-chevron-up'></span>
                                            <span className='fas fa-chevron-down'></span>
                                        </div>
                                    </div>

                                </div></td>
                                <td> <div>
                                    <div className="dropdown" style={{ width: "110px" }}>
                                        <div className="dropdonw-btn py-3" style={{ height: '24px' }}> <span className='ps-3'>Flat</span>
                                            <span className='fas fa-chevron-down'></span>
                                        </div>
                                    </div>
                                </div></td>

                                <td>
                                    <div className="dropdown" style={{ width: "90px" }}>
                                        <div className="dropdonw-btn py-3" style={{ height: '24px' }}> <span>{TotalPrice1}</span>
                                            <div className='d-flex flex-column'>
                                                <span className='fas fa-chevron-up'></span>
                                                <span className='fas fa-chevron-down'></span>
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td> <div className="dropdown" style={{ width: "99px" }}>
                                    <button onClick={() => handleDelete(tableNumber[1])} className="dropdonw-btn py-3" style={{ height: '24px', border: "1px solid red" }}> <span> <i style={{ color: "red" }} class="fas fa-trash-alt me-2"></i>Delete</span>
                                    </button>
                                </div></td>
                            </tr>
                            {/* table data 3 start*/}
                            <div className='mt-2'></div>
                            <tr className='shadow-sm p-3  bg-light rounded'>
                                <td>  <DropDown2 selected2={selected2} setSelected2={setSelected2} productPricing={productPricing} tableNumber={tableNumber[2]}></DropDown2></td>
                                <td>     <div>
                                    <div className="dropdown" style={{ width: "130px" }}>
                                        <div className="dropdonw-btn py-3" style={{ height: '24px' }}> <span>{price2}</span>
                                            <div className='d-flex flex-column'>
                                                <span className='fas fa-chevron-up'></span>
                                                <span className='fas fa-chevron-down'></span>
                                            </div>
                                        </div>

                                    </div>
                                </div></td>
                                <td> <div>
                                    <div className="dropdown" style={{ width: "110px" }}>
                                        <div className="dropdonw-btn py-3" style={{ height: '24px' }}> <span>{orderQuantity2}</span>
                                            <div className='d-flex flex-column'>
                                                <span className='fas fa-chevron-up'></span>
                                                <span className='fas fa-chevron-down'></span>
                                            </div>
                                        </div>

                                    </div>
                                </div></td>
                                <td><div>
                                    <div className="dropdown" style={{ width: "100px" }}>
                                        <div className="dropdonw-btn py-3" onClick={e => setActive2(!active2)} style={{ height: '24px' }}> <span>{unit2} KG</span>
                                            <span className='fas fa-chevron-down'></span>
                                            {active2 && (<div className="dropdonw-content">
                                                {kg.map(option => (
                                                    <div onClick={e => {
                                                        setUnit2(option)
                                                        setActive(false)
                                                        totalPrice(price2, option, tableNumber[2])
                                                    }}
                                                        className="dropdonw-item">
                                                        {option}
                                                    </div>
                                                ))}
                                            </div>)}
                                        </div>

                                    </div>
                                </div></td>
                                <td><div className="dropdown" style={{ width: "110px" }}>
                                    <div className="dropdonw-btn py-3" style={{ height: '24px' }}> <span>0000</span>
                                        <div className='d-flex flex-column'>
                                            <span className='fas fa-chevron-up'></span>
                                            <span className='fas fa-chevron-down'></span>
                                        </div>
                                    </div>

                                </div></td>
                                <td> <div>
                                    <div className="dropdown" style={{ width: "110px" }}>
                                        <div className="dropdonw-btn py-3" style={{ height: '24px' }}> <span className='ps-3'>Flat</span>
                                            <span className='fas fa-chevron-down'></span>
                                        </div>
                                    </div>
                                </div></td>
                                <td>
                                    <div className="dropdown" style={{ width: "90px" }}>
                                        <div className="dropdonw-btn py-3" style={{ height: '24px' }}> <span>{TotalPrice2}</span>
                                            <div className='d-flex flex-column'>
                                                <span className='fas fa-chevron-up'></span>
                                                <span className='fas fa-chevron-down'></span>
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td> <div className="dropdown" style={{ width: "99px" }}>
                                    <button onClick={() => handleDelete(tableNumber[2])} className="dropdonw-btn py-3" style={{ height: '24px', border: "1px solid red" }}> <span> <i style={{ color: "red" }} class="fas fa-trash-alt me-2"></i>Delete</span>
                                    </button>
                                </div></td>
                            </tr>
                            {/* table data 3 end*/}

                            <div className='mt-2'></div>
                            {/* table data 4 start*/}
                            <tr className='shadow-sm p-3  bg-light rounded'>
                                <td>  <DropDown3 selected3={selected3} setSelected3={setSelected3} productPricing={productPricing} tableNumber={tableNumber[3]}></DropDown3></td>
                                <td>     <div>
                                    <div className="dropdown" style={{ width: "130px" }}>
                                        <div className="dropdonw-btn py-3" style={{ height: '24px' }}> <span>{price3}</span>
                                            <div className='d-flex flex-column'>
                                                <span className='fas fa-chevron-up'></span>
                                                <span className='fas fa-chevron-down'></span>
                                            </div>
                                        </div>

                                    </div>
                                </div></td>
                                <td> <div>
                                    <div className="dropdown" style={{ width: "110px" }}>
                                        <div className="dropdonw-btn py-3" style={{ height: '24px' }}> <span>{orderQuantity3}</span>
                                            <div className='d-flex flex-column'>
                                                <span className='fas fa-chevron-up'></span>
                                                <span className='fas fa-chevron-down'></span>
                                            </div>
                                        </div>

                                    </div>
                                </div></td>
                                <td><div>
                                    <div className="dropdown" style={{ width: "100px" }}>
                                        <div className="dropdonw-btn py-3" onClick={e => setActive3(!active3)} style={{ height: '24px' }}> <span>{unit3} KG</span>
                                            <span className='fas fa-chevron-down'></span>
                                            {active3 && (<div className="dropdonw-content">
                                                {kg.map(option => (
                                                    <div onClick={e => {
                                                        setUnit3(option)
                                                        setActive(false)
                                                        totalPrice(price3, option, tableNumber[3])
                                                    }}
                                                        className="dropdonw-item">
                                                        {option}
                                                    </div>
                                                ))}
                                            </div>)}
                                        </div>

                                    </div>
                                </div></td>
                                <td><div className="dropdown" style={{ width: "110px" }}>
                                    <div className="dropdonw-btn py-3" style={{ height: '24px' }}> <span>0000</span>
                                        <div className='d-flex flex-column'>
                                            <span className='fas fa-chevron-up'></span>
                                            <span className='fas fa-chevron-down'></span>
                                        </div>
                                    </div>

                                </div></td>
                                <td> <div>
                                    <div className="dropdown" style={{ width: "110px" }}>
                                        <div className="dropdonw-btn py-3" style={{ height: '24px' }}> <span className='ps-3'>Flat</span>
                                            <span className='fas fa-chevron-down'></span>
                                        </div>
                                    </div>
                                </div></td>
                                <td>
                                    <div className="dropdown" style={{ width: "90px" }}>
                                        <div className="dropdonw-btn py-3" style={{ height: '24px' }}> <span>{TotalPrice3}</span>
                                            <div className='d-flex flex-column'>
                                                <span className='fas fa-chevron-up'></span>
                                                <span className='fas fa-chevron-down'></span>
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td> <div className="dropdown" style={{ width: "99px" }}>
                                    <button onClick={() => handleDelete(tableNumber[3])} className="dropdonw-btn py-3" style={{ height: '24px', border: "1px solid red" }}> <span> <i style={{ color: "red" }} class="fas fa-trash-alt me-2"></i>Delete</span>
                                    </button>
                                </div></td>
                            </tr>
                            {/* table data 4 end*/}
                            <div className='mt-2'></div>
                            {/* table data 5 start*/}
                            <tr className='shadow-sm p-3  bg-light rounded'>
                                <td>  <DropDown4 selected4={selected4} setSelected4={setSelected4} productPricing={productPricing} tableNumber={tableNumber[4]}></DropDown4></td>
                                <td>     <div>
                                    <div className="dropdown" style={{ width: "130px" }}>
                                        <div className="dropdonw-btn py-3" style={{ height: '24px' }}> <span>{price4}</span>
                                            <div className='d-flex flex-column'>
                                                <span className='fas fa-chevron-up'></span>
                                                <span className='fas fa-chevron-down'></span>
                                            </div>
                                        </div>

                                    </div>
                                </div></td>
                                <td> <div>
                                    <div className="dropdown" style={{ width: "110px" }}>
                                        <div className="dropdonw-btn py-3" style={{ height: '24px' }}> <span>{orderQuantity4}</span>
                                            <div className='d-flex flex-column'>
                                                <span className='fas fa-chevron-up'></span>
                                                <span className='fas fa-chevron-down'></span>
                                            </div>
                                        </div>

                                    </div>
                                </div></td>
                                <td><div>
                                    <div className="dropdown" style={{ width: "100px" }}>
                                        <div className="dropdonw-btn py-3" onClick={e => setActive4(!active4)} style={{ height: '24px' }}> <span>{unit4} KG</span>
                                            <span className='fas fa-chevron-down'></span>
                                            {active4 && (<div className="dropdonw-content">
                                                {kg.map(option => (
                                                    <div onClick={e => {
                                                        setUnit4(option)
                                                        setActive(false)
                                                        totalPrice(price4, option, tableNumber[4])
                                                    }}
                                                        className="dropdonw-item">
                                                        {option}
                                                    </div>
                                                ))}
                                            </div>)}
                                        </div>

                                    </div>
                                </div></td>
                                <td><div className="dropdown" style={{ width: "110px" }}>
                                    <div className="dropdonw-btn py-3" style={{ height: '24px' }}> <span>0000</span>
                                        <div className='d-flex flex-column'>
                                            <span className='fas fa-chevron-up'></span>
                                            <span className='fas fa-chevron-down'></span>
                                        </div>
                                    </div>

                                </div></td>
                                <td> <div>
                                    <div className="dropdown" style={{ width: "110px" }}>
                                        <div className="dropdonw-btn py-3" style={{ height: '24px' }}> <span className='ps-3'>Flat</span>
                                            <span className='fas fa-chevron-down'></span>
                                        </div>
                                    </div>
                                </div></td>
                                <td>
                                    <div className="dropdown" style={{ width: "90px" }}>
                                        <div className="dropdonw-btn py-3" style={{ height: '24px' }}> <span>{TotalPrice4}</span>
                                            <div className='d-flex flex-column'>
                                                <span className='fas fa-chevron-up'></span>
                                                <span className='fas fa-chevron-down'></span>
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td> <div className="dropdown" style={{ width: "99px" }}>
                                    <button onClick={() => handleDelete(tableNumber[4])} className="dropdonw-btn py-3" style={{ height: '24px', border: "1px solid red" }}> <span> <i style={{ color: "red" }} class="fas fa-trash-alt me-2"></i>Delete</span>
                                    </button>
                                </div></td>
                            </tr>
                            {/* table data 5 end*/}
                            <button type="button" class="btn btn-outline-secondary mt-2 rounded-pill px-5 py-0 "> <i class="fas fa-plus-circle"></i>Add</button>
                        </tbody>
                    </table>
                </section>
                <div className='text-center border-bottom border-dark  '>
                    <button type="button" class="btn btn-warning text-light fw-bold my-2 rounded-pill me-5">Process to confirm</button> <span style={{ fontWeight: "bolder", fontSize: "20px" }}>Total<i class="fas fa-rupee-sign text-primary ms-4"></i></span> <span className='text-primary' style={{ fontWeight: "bolder", fontSize: "20px" }}>0000.00</span>

                </div>
                <footer className='text-center '>
                    <p style={{ color: 'gray' }}>Aqgromalin Farmtech Services Private Limited &copy; 2022. All right reserved</p>
                </footer>

            </div>
        </div>
    );
};

export default RightColumn;