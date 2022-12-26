import NavbarLogin from "./NavbarLogin";
import { useState } from "react";

const LoginMain = () => {

    var data1 = require("./maquredata.json")

    const [data, setData] = useState({
        username: '',
        password: ''
      });
      const changeHandler = (e) => {
        setData({...data, [e.target.name]: e.target.value})
      }
    
      const checkUser = () => {
        const usercheck = data1.find(user => (user.username === data1.username && user.password === data1.password));
        if(usercheck) {
          console.log("Login successful");
        }else {
          console.log("Wrong password or username");
        }
        console.log(usercheck);
      }
      const handleSubmit = (e) => {
        e.preventDefault();
        checkUser();
        console.log(checkUser());
      }

    return(
        <>
        <div className="loginpage">
            <NavbarLogin />
                        <h1 id="login-header">
                            <b>
                            LOGIN
                            </b>
                        </h1>
                    </div>
                    <div className="login-wrapper"  id="login-wrapper">
                        <form action="" class="form" id="form">
                            <h2>Login</h2>
                            <div class="input-group">
                                <input 
                                    type="text"
                                    name="loginUser" 
                                    id="loginUser"
                                    value={data1.password} 
                                    onChange={changeHandler}
                                    required />
                                <label for="loginUser">User Name</label>
                            </div>
                            <div class="input-group">
                            <input
                                type="password"
                                name="loginPassword"
                                id="loginPassword"
                                value={data1.password}
                                onChange={changeHandler}
                                required
                            />
                            <label for="loginPassword">Password</label>
                            </div>
                            <input type="submit" value="Submit" class="submit-btn" onSubmit={handleSubmit} />
                            <p className="Login-page-sign-up">Don't have an account?<a href="/SignUp">Create Account</a></p>
                        </form>
                    </div>
                </>
    )
}
export default LoginMain;