import { useState, useEffect } from 'react'
import Navbar from '../../reusable/navbar/navbar.jsx'
import './dashboard.scss'
import useLocalStorageName from '../../utils/localStorage.jsx'
import AddTransaction from '../modals/addTransaction.jsx'
import UpdateTransaction from '../modals/updateTransaction.jsx'


function Dashboard() {
    const [recents, setRecents] = useState([]); 
    const [transactions, setTransactions] = useState([]);
    const [ selectedOption, setSelectedOption ] = useState('fixedExpense');  
    const values = useLocalStorageName('name');
    const [ countriesCurrency, setCountriesCurrency ] = useState('R');
    const [ showModal, setShowModal ] = useState(false);
    const [ isLoading, setIsLoading ] = useState(false);

    const handleSelectChange = (event) => {
        setSelectedOption(event.target.value)
    }

    useEffect(() => {
        setIsLoading(true)
        fetch('http://localhost:3002/0')
            .then(res => res.json())
            .then(data => {
                setRecents([...data.recent]);
                setTransactions([...data.variableExpense]);
                setIsLoading(false)
            })
            .catch(err => err)
    }, [])

    const totalIncome = 5000;
    const remainingBudget = 2000;
    const totalExpense = 3000;
  

    // * styles the percentage and the progress circles
    const getCircleColor = (totalAmount, amountSpent) => {
        const remaining = totalAmount - amountSpent;
        const percentage = ((remaining / totalAmount) * 100).toFixed(2);
        if(percentage > (80).toFixed(2)) return '#F44336'
        if(percentage > (60).toFixed(2)) return '#FF5722'
        if(percentage > (40).toFixed(2)) return '#FFEB3B'
        if(percentage > (20).toFixed(2)) return '#00BCD4'
        if(percentage > (5).toFixed(2)) return '#4CAF50'
    }

    const openModal = () => setShowModal(true)
    const closeModal = () => setShowModal(false)   
    

  return ( 
    <>  
        <div className="body">
            <Navbar className="navbar"/>
            <div className="dashboard-wrapper">
                <h1 className="heading">Welcome <span className="username" >{values ? values : 'Guest'} </span></h1>
                    {/* {showModal && <AddTransaction />} */}
                <div className="containers">
                    <div className="dashboard-containerOne">
                        {/* CARD */}
                        <div className="card">
                            <div className="firstHalf">
                                <div className="remaining-budget">
                                    <p className="card-texts">Remaining Budget</p>
                                    <p className="card-numbers"><span className="currency">{countriesCurrency}</span>{remainingBudget}</p>
                                </div>
                                <div className="amount-color"
                                 style={{backgroundColor:getCircleColor(totalIncome, totalExpense)}}
                                ></div>
                            </div>
                            <div className="secondHalf">
                                <div className="total-income">
                                    <p className="card-texts">Total Income</p>
                                    <p className="card-numbers"><span className="currency">{countriesCurrency}</span>{totalIncome}</p>
                                </div>
                                <div className="total-expense">
                                    <p className="card-texts">Total Expense</p>
                                    <p className="card-numbers"><span className="currency">{countriesCurrency}</span>{totalExpense}</p>
                                </div>
                            </div>
                        </div>

                        {/* RECENT TRANSACTIONS */}

                        <p className="recent">Recent</p>
                        <div className="recent-trans">
                            { recents.length === 0 ? 
                            <div className="recent-empty-recents">
                                <p className="recent-explanation-one">All your recents transactions will show up here</p>
                                <p className="recent-explanation-two">Start with (+) to create first one</p>
                            </div> 
                            : isLoading ?
                            <div className="recent-empty-recents">
                                <p className="recent-loading-state">Loading...</p>
                            </div>
                            : recents.map((recent, index) => 
                                <div className="recent-rows" key={index}>
                                    <div className="emoji-box" style={{backgroundColor: recent.emojiBgdColor}}>{recent.categoryEmoji}</div>
                                    <p className="example-name">{recent.exampleName}</p>
                                    <p className="amount-left"><span className="currency">{countriesCurrency}</span>{(recent.amountLeft).toFixed(2)}</p>
                                    <div className="amount-left-color" style={{backgroundColor:getCircleColor(recent.amountLimit, recent.amountSpend)}}
                                    ></div>
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
                        <div className="add-expense-btn" onClick={openModal}>+</div>
                       
                    </div>

                    <div className="dashboard-containerThree">
                        <div className="categories fixedCategory">
                            
                            <select className="categoryName" value={selectedOption} onChange={handleSelectChange}>
                                <option className="dashboard-categories-names" value="fixedExpense">Fixed Expenses</option>
                                <option className="dashboard-categories-names" value="variableExpense">Variable Expenses</option>
                                <option className="dashboard-categories-names" value="savings">Savings</option>
                                <option className="dashboard-categories-names" value="investments">Investments</option>
                                <option className="dashboard-categories-names" value="emergencies">Emergencies</option>
                                <option className="dashboard-categories-names" value="debts">Debts</option>
                                <option className="dashboard-categories-names" value="givings">Givings</option>
                            </select>
                            { transactions.length === 0 ? <div className="dashboard-empty-transactions">
                                <p className="empty-transactions-explanation-one">All your transactions will show up here</p>
                                <p className="empty-transactions-explanation-two">Start with (+) to create first one</p>
                            </div> 
                            : transactions.map((category, index) => 
                                <div className="categoryExample"  key={index}>
                                    <div className="semi-category">
                                        <div className="category-emoji" 
                                            style={{backgroundColor: category.emojiBgdColor}}>{category.categoryEmoji}</div>
                                        <p className="category-example">{category.exampleName}</p>
                                        <p className="example-limit">
                                            <span className="currency">{countriesCurrency}</span>
                                            {category.amountLimit}
                                        </p>
                                        <p className="example-amount-left">
                                            <span className="currency">R</span>
                                            {category.amountSpend}
                                        </p>
                                    </div>
                                    <p className="percentage-left" 
                                    style={{ color: getCircleColor(category.amountLimit, category.amountSpend)}}>{
                                    (((category.amountLimit - category.amountSpend) / category.amountLimit) * 100).toFixed(2)
                                    }%
                                    </p>
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