import React, { useEffect, useState } from 'react'
import './addTransaction.scss'
import AmountInput from '../../reusable/inputs/amountInput.jsx'
import NameInput from '../../reusable/inputs/nameInput.jsx'
import DateInput from '../../reusable/inputs/dateInput.jsx'
import CommentInput from '../../reusable/inputs/commentInput.jsx'
import Cross from '../../reusable/buttons/cross.jsx'
import Create from '../../reusable/buttons/create.jsx'
import TypeOfCategory from '../../reusable/typeOfCategory.jsx'


function AddTransaction() {

    const [ quote, setQuote ] = useState();
    const [ exampleCategories, setExampleCategories ] = useState([]);
    const [ category, setCategory ] = useState()

    const randomIndex = Math.floor(Math.random() * 99)


    useEffect(() => {
        fetch(`http://localhost:3001/${randomIndex}`)
            .then(res => res.json())
            .then(data => setQuote(data.message))
            .catch(err => console.log('Error found', err))
    }, [])

    useEffect(() => {
        fetch('http://localhost:3000/fixedExpenses')
            .then(res => res.json())
            .then(data => setExampleCategories([...data]))
            .catch(err => console.log(err))
    }, [])



  return (
    <>
        <div className="add-transaction-body">
            <div className="add-transaction-wrapper">
                {/* Insert a cross icon */}
                <Cross />
                <p className="add-transaction-quote">'{quote}'</p>
                <NameInput />
                <DateInput />
                <AmountInput />
                <CommentInput />
                <div className="add-transaction-categories-wrapper">
                    <select name="categories" id="add-transaction-select">
                        <option value="fixedExpenses">Fixed Expenses</option>
                        <option value="variableExpenses">Variable Expenses</option>
                        <option value="Savings">Savings</option>
                        <option value="Investments">Investments</option>
                        <option value="Emergencies">Emergencies</option>
                        <option value="Debts">Debts</option>
                        <option value="Givings">Givings</option>
                    </select>
                </div>
                <div className="add-transaction-category-example-wrapper">
                    {
                        exampleCategories.map((category, index) => 
                            <div key={index}>
                                <div className="add-transaction-category-example" style={{backgroundColor: category.backgroundColor}}>
                                    <div className="add-transaction-emoji">{category.exampleEmoji}</div>
                                </div>
                            </div>
                        )
                    }
                </div>
                <TypeOfCategory />
                <div className="add-transaction-amount-limit">
                    <span className="add-transaction-currency">R</span>
                    <input type="number" name="amount" id="add-transaction-amount-limit-input" placeholder="200.00"/>
                </div>
                <p className="add-transaction-limit">Set Limit..</p>
                <Create />
                <p className="add-transaction-err-message">Transaction name required</p>
            </div>
        </div>
    </>
  )
}

export default AddTransaction