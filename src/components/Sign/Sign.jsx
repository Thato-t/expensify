import finance_theme_three from '../../assets/images/finance_theme_three.png'
import wave from '../../assets/images/wave.png'
import './Sign.scss'

function Sign(){
    return(
        <>
            <div className="body">
                <p className="logo">Expensify</p>
                <div className="wrapper">
                    <div className="left-mini-wrapper">
                        <p className="title">Enjoy Making Your <span className="budgeting">Budgeting</span></p>
                        <p className="description">Personal budgeting is the secret to financial freedom. Start your journey today.</p>
                        <img src={finance_theme_three} alt="undraw-finance" className="illustration" />
                    </div>
                    <div className="right-mini-wrapper">
                        <div className="input-wrapper">
                            <input type="text" id="input" className="input" placeholder="What is your name?"/><br></br>
                        </div>
                        {/* Must put an icon of a head or person inside the btn */}
                        <button id="btn" className="btn">Create Account</button>
                    </div>
                </div>
                <img src={wave} alt="wave" className="wave" />
            </div>
        </>
    )
}
export default Sign