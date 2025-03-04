import React from 'react'
import { useState, UseEffect } from 'react'
import Navbar from '../../reusable/navbar/navbar.jsx'
import './dashboard.scss'


function Dashboard() {
    const [recents, setRecents] = useState([
        {
            categoryName:'Fixed Expense',
            categoryEmoji:'🏠',
            emojiBgdColor:'#E3F2FD',
            exampleName:'Rent',
            amountLeft:2000,
            amountLimit:2300
        },
        {
            categoryName:'Fixed Expense',
            categoryEmoji:'🚗',
            emojiBgdColor:'#80DEEA',
            exampleName:'Transportation',
            amountLeft:1200,
            amountLimit:1000
        },
        {
            categoryName:' Variable Expense',
            categoryEmoji:'🛒',
            emojiBgdColor:'#FF8A65',
            exampleName:'Groceries',
            amountLeft:1500,
            amountLimit:2000
        },
        {
            categoryName:'Variable Expense',
            categoryEmoji:'🎬',
            emojiBgdColor:'#F8BBD0',
            exampleName:'Entertainment',
            amountLeft:500,
            amountLimit:1000
        },
    ]); 

    const [fixedExpenses, setFixedExpenses] = useState([
        {
            categoryName:'Fixed Expenses',
            categoryEmoji:'🏠',
            emojiBgdColor:'#E3F2FD',
            exampleName:'Rent',
            amountSpend:2000,
            amountLimit:2300
        },
        {
            categoryName:'Fixed Expenses',
            categoryEmoji:'🚗',
            emojiBgdColor:'#80DEEA',
            exampleName:'Transportation',
            amountSpend:1200,
            amountLimit:1000
        },
        {
            categoryName:'Fixed Expenses',
            categoryEmoji:'💡',
            emojiBgdColor:'#81D4FA',
            exampleName:'Utilities',
            amountSpend:1000,
            amountLimit:1000
        }
    ]);

    const [variableExpenses, setVariableExpense] = useState([
        {
            categoryName:'Variable Expenses',
            categoryEmoji:'🛒',
            emojiBgdColor:'#FF8A65',
            exampleName:'Groceries',
            amountSpend:1500,
            amountLimit:2000
        },
        {
            categoryName:'Variable Expenses',
            categoryEmoji:'🎬',
            emojiBgdColor:'#F8BBD0',
            exampleName:'Entertainment',
            amountSpend:500,
            amountLimit:1000
        }
    ])

    const [savings, setSavings] = useState([
        {
            categoryName:'Savings',
            categoryEmoji:'🚨',
            emojiBgdColor:'#FFCDD2',
            exampleName:'Emergency Fund',
            amountSpend:1000,
            amountLimit:1000,
            goal:3000
        },
        {
            categoryName:'Savings',
            categoryEmoji:'🎓',
            emojiBgdColor:'#81DAFA',
            exampleName:'Education Fund',
            amountSpend:1000,
            amountLimit:1000,
            goal:10000
        }
    ])

    const [debts, setDebts] = useState([
        {
            categoryName:'Debts',
            categoryEmoji:'💳',
            emojiBgdColor:'#FFCDD2',
            exampleName:'Credit Card Debit',
            amountSpend:500,
            amountLimit:1000
        }
    ])
 

    const amountLeftBgd = ['red', 'yellow', 'green'];
    const randomIndex = Math.floor(Math.random() * amountLeftBgd.length);
    const randomColor = amountLeftBgd[randomIndex]


  return (
    <>  
        <div className="body">
            <Navbar className="navbar"/>
            <div className="dashboard-wrapper">
                <h1 className="heading">Welcome <span className="username">User</span></h1>
                <div className="containers">
                    <div className="dashboard-containerOne">
                        {/* CARD */}
                        <div className="card">
                            <div className="firstHalf">
                                <div className="remaining-budget">
                                    <p className="card-texts">Remaining Budget</p>
                                    <p className="card-numbers">R2000.45</p>
                                </div>
                                <div className="amount-color" style={{backgroundColor:'green'}}></div>
                            </div>
                            <div className="secondHalf">
                                <div className="total-income">
                                    <p className="card-texts">Total Income</p>
                                    <p className="card-numbers">R5000.95</p>
                                </div>
                                <div className="total-expense">
                                    <p className="card-texts">Total Expense</p>
                                    <p className="card-numbers">R3000.20</p>
                                </div>
                            </div>
                        </div>

                        {/* RECENT TRANSACTIONS */}

                        <p className="recent">Recent</p>
                        <div className="recent-trans">
                            {recents.map((recent, index) => 
                                <div className="recent-rows" key={index}>
                                    <div className="emoji-box" style={{backgroundColor: recent.emojiBgdColor}}>{recent.categoryEmoji}</div>
                                    <p className="example-name">{recent.exampleName}</p>
                                    <p className="amount-left"><span className="currency">R</span>{(recent.amountLeft).toFixed(2)}</p>
                                    <div className="amount-left-color" style={{backgroundColor:randomColor}}></div>
                                </div>
                            )}
                        </div>
                    </div>

                    <div className="dashboard-containerTwo">
                        <div className="graphs-wrapper">
                            <div className="types">
                                <span className="months">January</span>
                                {/* FIND ICON FOR PIE AND BAR GRAPHS */}
                                <span className="type-of-graph">bar</span>
                            </div>
                            {/* Must insert graphs */}
                            <div className="graphs"></div>
                        </div>
                        {/* FIND ICON FOR THE BTN */}
                        <div className="add-expense-btn">+</div>
                    </div>

                    <div className="dashboard-containerThree">
                        <div className="categories fixedCategory">
                            <div className="categoryName">Fixed Expenses</div>
                            {fixedExpenses.map((category, index) => 
                                <div className="categoryExample"  key={index}>
                                    <div className="semi-category">
                                        <div className="category-emoji" 
                                            style={{backgroundColor: category.emojiBgdColor}}>{category.categoryEmoji}</div>
                                        <p className="category-example">{category.exampleName}</p>
                                        <p className="example-limit">
                                            <span className="currency">R</span>
                                            {category.amountLimit}
                                        </p>
                                        <p className="example-amount-left">
                                            <span className="currency">R</span>
                                            {category.amountSpend}
                                        </p>
                                    </div>
                                    <p className="percentage-left">{((category.amountLimit - category.amountSpend) / 100).toFixed(2)}%</p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Dashboard