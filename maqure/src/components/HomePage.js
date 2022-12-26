import React from 'react';
import NavbarHome from './NavbarHome';

class Home extends React.Component{
    render(){
        return(
            <>
                <div className="App">
                    <div className="App-header">
                        <NavbarHome />
                        <div id="image2position">                  
                            <img src="https://i.postimg.cc/L8QqR4r1/money-bag.png"  alt="" ></img>
                            <div id="imagetext">
                                <h2 >Dear Investors!!!</h2>
                                <h4>Be fearful when others are greedy &</h4>
                                <h4>Be greedy when others are fearful!</h4>
                            </div>
                        </div>
                        <div id="imageposition">
                            <img src="https://i.postimg.cc/grbzqDgV/favicontrain.png" alt="" width = "1400" height= "600" ></img>
                        </div>
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
                </div>
                                 
            </>
            
        )
    }
}
export default Home;