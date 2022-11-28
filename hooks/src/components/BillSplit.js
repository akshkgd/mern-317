import {useState, UseRef, useRef} from 'react';
function BillSplit(){
    const amountInput = useRef(0);
    const personsInput = useRef(0);
    const [splitBill, setSplitBill] = useState(0);
    function splitBillHandler(){
        const amountData = amountInput.current.value;
        const personsData = personsInput.current.value;
        let bill = (amountData / personsData).toFixed(2);
        setSplitBill(bill);
        console.log(amountData, personsData )
    }
    return(
        <div>
            <h2>Bill split application using react.js</h2>
            <p>This is a simple react application to split the bill between your friends easily.</p>
            <input placeholder="Enter the amount" ref={amountInput} />
            <input placeholder="Enter the persons" ref={personsInput} />
            <button className="btn" onClick={splitBillHandler}>Split Bill</button>
            <h3>{splitBill}</h3>
        </div>
    )
}

export default BillSplit;