import React from 'react'
import { useState, useEffect } from 'react'
import './addTransaction.scss'
import Cross from '../../reusable/buttons/cross.jsx'
import AmountInput from '../../reusable/inputs/amountInput.jsx'
import NameInput from '../../reusable/inputs/nameInput.jsx'
import DateInput from '../../reusable/inputs/dateInput.jsx'
import CommentInput from '../../reusable/inputs/commentInput.jsx'
import Create from '../../reusable/buttons/create.jsx'
import TypeOfCategory from '../../reusable/typeOfCategory.jsx'


function UpdateTransaction() {

    const [ prevTrans, setPrevTrans ] = useState([])
    
    useEffect(() => {
        fetch('http://localhost:3002/0')
            .then(res => res.json())
            .then(data => console.log(data))
            .catch(err => err)
    }, [])
  return (
    <>
        <div className="update-trans-body">
            <div className="update-trans-wrapper">
                <Cross />
                <TypeOfCategory />
                <div className="update-trans-containers">
                    <div className="update-trans-container-one">
                        <NameInput />
                        <DateInput />
                        <AmountInput />
                        <CommentInput />
                        <p className="update-trans-prev-trans">Previous Transaction</p>
                        <div className="update-trans-prev-trans">
                            {
                                prevTrans.map((prevTran, index) => 
                                    <div className="update-trans-prev-rows" key={index}>
                                        <span className="update-trans-clr" style={{backgroundColor:'red'}}></span>
                                        <span className="update-trans-date-comment">
                                            <p className="update-trans-date"></p>
                                            <p className="update-trans-comment"></p>
                                        </span>
                                        <span className="update-trans-amount"></span>
                                    </div>
                                )
                            }
                        </div>
                    </div>
                    <div className="update-trans-container-two">
                        <div className="update-prev-card">
                            <h1>
                                <div className="update-prev-card-clr"></div>
                                Hospital Visits
                            </h1>
                            <p className="update-prev-statement">Was very sick so I went to see the doctor</p>
                            <p className="update-prev-card-amount">R200.00</p>
                        </div>
                    </div>
                </div>
                <Create />
            </div>
        </div>
    </>
  )
}

export default UpdateTransaction