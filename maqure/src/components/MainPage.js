import React from 'react';
import NavbarMain from './NavbarMain';

class Main extends React.Component{
    render(){
        return(
            <>
            <div className="Main-page" style={{backgroundImage: `url("https://i.postimg.cc/LscmGmck/494664.jpg")`}}>
                <NavbarMain />
                <div className="main-page-header">
                    <h2><b>What do we do?</b></h2>
                </div>
                 <div class="row">
                    <div class="col-sm-3">
                      <div class="card" id="card1">
                        <div class="card-body">
                          <h3 class="card-title"><i class="fa-solid fa-cart-shopping" id="cardicons"></i><b>Buying</b></h3>
                          <p class="card-text"><b>Through Maqure, Save Time & Money, by procuring raw material from 
                            any among many of suppliers at a guaranteed lowest price in the market.
                            Maqure is here to serve you!</b></p>
                          <a href="/Buying" class="btn btn-primary">Show Details</a>
                        </div>
                      </div>
                    </div>
                    <div class="col-sm-3">
                      <div class="card" id="card2">
                        <div class="card-body">
                          <h3 class="card-title"><i class="fa-solid fa-bag-shopping" id="cardicons"></i><b>Selling</b></h3>
                          <p class="card-text"><b>Increase your business multifold by selling to National & International clients 
                          without worrying about payment problems, GST settlements and timely-safe delivery of the 
                          material. Maqure helps you with all this!</b></p>
                          <a href="/Selling" class="btn btn-primary">Show Details</a>
                        </div>
                      </div>
                    </div>
                    <div class="col-sm-3" id="card3">
                      <div class="card">
                        <div class="card-body">
                          <h3 class="card-title"><i class="fa-solid fa-coins" id="cardicons"></i><b>Financing</b></h3>
                          <p class="card-text"><b>Do you not have money to procure? Don't worry, Maqure helps 
                            you with this as well! We facilitate instant financing cum credit facilities from 
                            our associate lending partners.</b></p>
                          <a href="/Financing" class="btn btn-primary">Show Details</a>
                        </div>
                      </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-sm-3">
                      <div class="card" id="card4">
                        <div class="card-body">
                          <h3 class="card-title"><i class="fa-solid fa-truck" id="cardicons"></i><b>Logistics</b></h3>
                          <p class="card-text"><b>Handling logistics is troublesome for sellers as well as buyers. 
                            Maqure helps in quick delivery as well. Maqure provides transparent, real time optimized freight service 
                            including live order tracking facility.</b></p>
                          <a href="/Logistics" class="btn btn-primary">Show Details</a>
                        </div>
                      </div>
                    </div>
                    <div class="col-sm-3">
                      <div class="card" id="card5">
                        <div class="card-body">
                          <h3 class="card-title"><i class="fa-solid fa-thumbs-up" id="cardicons"></i><b>Quality</b></h3>
                          <p class="card-text"><b>In chemical industry, quality has always been an issue. 
                            If you're a buyer, it is your utmost priority. Maqure understands your concerns. 
                            Thereby, we ensure the quality of material 'agreed' while finalizing the deal.</b></p>
                          <a href="/Quality" class="btn btn-primary">Show Details</a>
                        </div>
                      </div>
                    </div>
                    <div class="col-sm-3" id="card6">
                      <div class="card">
                        <div class="card-body">
                          <h3 class="card-title"><i class="fa-solid fa-file" id="cardicons"></i><b>Transparency & Traceability</b></h3>
                          <p class="card-text"><b>Maqure has integrated the entire system with safe & secure blockchain technology. 
                            This integration will help in making supply chain more robust by increased transparency and traceability.</b></p>
                          <a href="/T&T" class="btn btn-primary">Show Details</a>
                        </div>
                      </div>
                    </div>
                </div>
                <div className="page-foot" id="login">
            <div className="contact-info-main">
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
                        <a href="https://www.whatsapp.com/" className="contact-icons-main">
                            <i class="fa-brands fa-whatsapp" id="contact-icons-main"></i>
                        </a>
                        <a href="https://www.instagram.com/cfi_iitm_/" className="contact-icons-main">
                            <i class="fa-brands fa-instagram" id="contact-icons-main"></i>
                        </a>
                        <a href="https://twitter.com/" className="contact-icons-main">
                            <i class="fa-brands fa-twitter" id="contact-icons-main"></i>
                        </a>
                    </p>    
                </div>                     
            </div>
        </div>
        </div>
     
        </>
        )
    }
}
export default Main;

/*                <h1 className='header-main-page-1'>Welcome to</h1>
                <h1 className='header-main-page'><b>Maqure</b></h1>
*/