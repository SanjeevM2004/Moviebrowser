import { Link } from "react-router-dom";


const MSME = () => {
          
    return(
        <>
        <html className="msme-main-page" style={{backgroundImage : `url("https://i.postimg.cc/LscmGmck/494664.jpg")`}}>
        <Link className="navbar-brand" to ="/">
      <img src="https://i.postimg.cc/7LwQSspn/maqure-high-resolution-color-logo-2.jpg" alt="" width="180" height="50"></img>
    </Link>
        <Link to="/MSME/ConnectWallet">
            <button class="btn-address-msme"><b>Connect Wallet</b></button>
        </Link>
            <div>
                <h1 className="msme-text">Welcome to the</h1>
                <h2 className="msme-subtext"><b>MSME club</b></h2>
            </div>
            <div class="d-grid gap-2 col-6 mx-auto">
                <Link to="/SignUp">
                    <button class="btn btn-primary-2" type="button"><b>Register</b></button>
                </Link>
                <Link to="/MSME/Profile">
                    <button class="btn btn-primary-2" type="button"><b>View Profile</b></button>
                </Link>
                <Link to="/MSME/Loan">
                <button class="btn btn-primary-2" type="button"><b>Apply for Loan</b></button>
                </Link>
                <Link to="/MSME/TransactionHistory">
                <button class="btn btn-primary-2" type="button"><b>Loan & Transaction History</b></button>
                </Link>
            </div>
        </html>
        </>
    )
}
export default MSME;