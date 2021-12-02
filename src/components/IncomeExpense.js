import React from 'react'

const IncomeExpense = () => {
    return (
        <div className="incomeexpensecontainer">
            <div>
                <h4>Income</h4>
                <p id="money-plus" className="money plus">+$0.00</p>
            </div>
            <div>
                <h4>Expenses</h4>
                <p id="money-minus" className="money minus">-$0.00</p>
            </div>
        </div>
    )
}

export default IncomeExpense
