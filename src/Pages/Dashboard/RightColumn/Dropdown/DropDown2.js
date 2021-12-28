import { useState } from 'react';
import './DropDown.css'
const DropDown2 = ({ selected2, setSelected2, productPricing, tableNumber }) => {
    const [isActive, setIsActive] = useState(false);
    const options = ['Country Chicken', 'Fish', 'Goat Meat'];
    console.log(tableNumber)


    return (
        <div className="dropdown">
            <div className="dropdonw-btn" onClick={e => setIsActive(!isActive)}> <span>{selected2}</span>
                <span className='fas fa-chevron-down'></span>
            </div>
            {isActive && (<div className="dropdonw-content">
                {options.map(option => (
                    <div onClick={e => {
                        setSelected2(option)
                        productPricing(option, tableNumber)
                        setIsActive(false)


                    }}
                        className="dropdonw-item">
                        {option}
                    </div>
                ))}


            </div>)}

        </div>

    )
}

export default DropDown2;