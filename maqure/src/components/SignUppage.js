import NavbarSignUp from "./NavbarSignUp";

const SignUp = () => {
    return(
        <>
            <NavbarSignUp />
            <div className="SignUp">
                <h1>Create Account</h1>
                <div className="sign-up-page">
                    <div className="left-box">
                        <form >
                            <input type="text" placeholder="Your Name" required className="input-box"></input>
                            <input type="text" placeholder="Username" required className="input-box"></input>
                            <input type="email" placeholder="Your email ID" required className="input-box"></input>
                            <input type="password" placeholder="Create password" required className="input-box"></input>
                            <input type="checkbox" id="terms"></input>
                            <label className="lbl-checkbox" for="terms">I agree to the terms & conditions</label>
                            <button className="btn-submit" type="submit">Sign Up</button>
                        </form>
                    </div>
                    <div className="right-box">
                        <a href="www.facebook.com" className="sign-up-pathway" id="facebook"><i class="fa-brands fa-facebook-f"></i> Connect with facebook</a>
                        <a href="www.twitter.com" className="sign-up-pathway" id="twitter"><i class="fa-brands fa-twitter"></i> Connect with Twitter</a>
                        <a href="www.google.com" className="sign-up-pathway" id="Google"><i class="fa-brands fa-google"></i> Connect with Google</a>

                            <p className="AlreadyAccount">Already have an Account?</p><a href="/login">Login</a>


                    </div>
                </div>
            </div>
        </>
    )
}
export default SignUp;