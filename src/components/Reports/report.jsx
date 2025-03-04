import React from 'react'
import Navbar from '../../reusable/navbar/navbar.jsx'
import { useState, useEffect } from 'react'

function Report() {

  const [ monthlyTransactions, setMonthlyTransactions ] = useState([]);


  // TODO in the JSON file put another array of object that is for for monthly transactions for different months 
  useEffect(() => {
    fetch('../../data/expenses.json')
    .then(res => res.json())
    .then(data => {
      console.log(data)
      setMonthlyTransactions(data.recent)
    })
    .catch(err => console.log(err))
  }, [])

  return (
    <>
        <div className="report-body">
          <Navbar />
          <div className="report-wrapper">
            <div className="report-mini-wrapper-one">
              <div className="report-graph-wrapper">
                <div className="report-graph-btns">
                  <div className="report-months-btn">
                    <select name="months">
                      <option value="January">January</option>
                      <option value="February">February</option>
                      <option value="March">March</option>
                      <option value="April">April</option>
                      <option value="May">May</option>
                      <option value="June">June</option>
                      <option value="July">July</option>
                      <option value="August">August</option>
                      <option value="September">September</option>
                      <option value="October">October</option>
                      <option value="November">November</option>
                      <option value="December">December</option>
                    </select>
                  </div>
                  <div className="report-graphs-btn">Pie</div>
                </div>
                {/* TODO place a graph here */}
                <div className="report-graph"></div>
                <p className="report-results">You spent 
                  <span className="report-amount-">R4000.00</span>
                  on all expenses
                </p>
              </div>
              <p className="report-months-view">January 2022</p>
              <div className="report-monthly-statements">
                {monthlyTransactions.map((transaction, index) => 
                  <div key={index}>
                    <div className="report-statement">
                      <div className="report-amount-spent-percentage" style={{backgroundColor: 'red'}}></div>
                      <div className="report-category-name-date">
                        <p className="report-monthly-date">{ transaction.date }</p>
                        <p className="report-monthly-category-name">{ transaction.exampleName }</p>
                      </div>
                      <div className="report-amount-spent"><span className="report-currency">R</span>{ transaction.amountSpent }</div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            
            <div className="report-mini-wrapper-two">
              <p className="report-recents">Recent</p>
              <div className="report-recents-statement">
                {monthlyTransactions.map((transaction, index) => 
                  <div key={index}>
                    <div className="report-statement">
                      <div className="report-amount-spent-percentage" style={{backgroundColor: 'red'}}></div>
                      <div className="report-category-name-date">
                        <p className="report-monthly-date">{ transaction.date }</p>
                        <p className="report-monthly-category-name">{ transaction.exampleName }</p>
                      </div>
                      <div className="report-amount-spent"><span className="report-currency">R</span>{ transaction.amountSpent }</div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
    </>
  )
}

export default Report   