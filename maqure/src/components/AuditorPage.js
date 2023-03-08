import './Auditor.css'
import { Link } from 'react-router-dom';

const Auditor = () => {
    return(
        <>
            <Link className="navbar-brand" to ="/">
      <img src="https://i.postimg.cc/7LwQSspn/maqure-high-resolution-color-logo-2.jpg" alt="" width="180" height="50"></img>
    </Link>

        <div>
                <h1 className="msme-text-2">Welcome to the</h1>
                <h2 className="msme-subtext-2"><b>Auditor club</b></h2>
        </div>
        <Link to="/SignUp">
            <button class="button-msme"><b>Register</b></button>
        </Link>
        <div  className="auditor-buttons">
                <Link to="/MSME/Profile">
                    <button class="btn btn-primary-3" type="button"><b>View Profile</b></button>
                </Link>
                <Link to="/login">
                    <button class="btn btn-primary-3" type="button"><b>Login</b></button>
                </Link>
                <Link to="/auditor/audit-history">
                    <button class="btn btn-primary-3" type="button"><b>Audit History</b></button>
                </Link>
        </div>
        <div>
            <img className="auditor-image" src="https://i.postimg.cc/SsCrPcFx/audit-process-graphic-removebg-preview.png" alt="auditor-image"></img>
        </div>
        <div className="Auditor-news">
         <div class="scroll">
            <h2 className="text-white">NEWS & EVENTS</h2>
         <div class="card-2 text-bg-primary mb-3">
  <div class="card-2-header">Header</div>
  <div class="card-2-body">
    <h5 class="card-2-title">Primary card-2 title</h5>
    <p class="card-2-text">Some quick example text to build on the card-2 title and make up the bulk of the card-2's content.</p>
  </div>
</div>
<div class="card-2 text-bg-secondary mb-3">
  <div class="card-2-header">Header</div>
  <div class="card-2-body">
    <h5 class="card-2-title">Secondary card-2 title</h5>
    <p class="card-2-text">Some quick example text to build on the card-2 title and make up the bulk of the card-2's content.</p>
  </div>
</div>
<div class="card-2 text-bg-success mb-3">
  <div class="card-2-header">Header</div>
  <div class="card-2-body">
    <h5 class="card-2-title">Success card-2 title</h5>
    <p class="card-2-text">Some quick example text to build on the card-2 title and make up the bulk of the card-2's content.</p>
  </div>
</div>
<div class="card-2 text-bg-danger mb-3">
  <div class="card-2-header">Header</div>
  <div class="card-2-body">
    <h5 class="card-2-title">Danger card-2 title</h5>
    <p class="card-2-text">Some quick example text to build on the card-2 title and make up the bulk of the card-2's content.</p>
  </div>
</div>
<div class="card-2 text-bg-warning mb-3">
  <div class="card-2-header">Header</div>
  <div class="card-2-body">
    <h5 class="card-2-title">Warning card-2 title</h5>
    <p class="card-2-text">Some quick example text to build on the card-2 title and make up the bulk of the card-2's content.</p>
  </div>
</div>
<div class="card-2 text-bg-info mb-3">
  <div class="card-2-header">Header</div>
  <div class="card-2-body">
    <h5 class="card-2-title">Info card-2 title</h5>
    <p class="card-2-text">Some quick example text to build on the card-2 title and make up the bulk of the card-2's content.</p>
  </div>
</div>
<div class="card-2 text-bg-light mb-3">
  <div class="card-2-header">Header</div>
  <div class="card-2-body">
    <h5 class="card-2-title">Light card-2 title</h5>
    <p class="card-2-text">Some quick example text to build on the card-2 title and make up the bulk of the card-2's content.</p>
  </div>
</div>
<div class="card-2 text-bg-dark mb-3">
  <div class="card-2-header">Header</div>
  <div class="card-2-body">
    <h5 class="card-2-title">Dark card-2 title</h5>
    <p class="card-2-text">Some quick example text to build on the card-2 title and make up the bulk of the card-2's content.</p>
  </div>
</div>
        </div>
        </div>
<div className="footer">
        <div className="page-foot" id="login">
                            <div className="contact-info">
                                <h1>CONTACT-INFO</h1> 
                                <h3>
                                    <ul>
                                        <li>+91 9840120486</li>
                                        <li>+91 8114790959</li>
                                        <li>+91 9327686198</li>
                                        <li>+91 8277609858</li>
                                    </ul>
                                </h3>  
                                <div>
                                    <p>
                                        <a href="https://www.whatsapp.com/" className="contact-icons">
                                            <i class="fa-brands fa-whatsapp" id="contact-icons"></i>
                                        </a>
                                        <a href="https://www.instagram.com/cfi_iitm_/" className="contact-icons">
                                            <i class="fa-brands fa-instagram" id="contact-icons"></i>
                                        </a>
                                        <a href="https://twitter.com/" className="contact-icons">
                                            <i class="fa-brands fa-twitter" id="contact-icons"></i>
                                        </a>
                                    </p>    
                                </div>                     
                            </div>
                        </div>
    </div>
     </>
    )
}
export default Auditor;