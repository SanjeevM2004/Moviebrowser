import './CollectWallet.css';

const ConnectWallet =() =>{
    return(
        <>
      <h1 className="connect-wallet-header">Connect Your Wallet</h1>
      <form className="connect-wallet-form">
        <label for="wallet" className="wallet-label" >Wallet Address</label>
        <input type="text" className="wallet-input" placeholder="Enter your wallet address" required/>
        <button type="submit" className="connect-wallet-button">Connect</button>
    </form>
    </>
    )
}
export default ConnectWallet;