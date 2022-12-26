import {Link} from 'react-router-dom';

const NavbarMain = () => {
    return(
      <nav className="navbar navbar-expand-lg">
  <div className="container-fluid">
    <Link className="navbar-brand" to ="/">
      <img src="https://i.postimg.cc/7LwQSspn/maqure-high-resolution-color-logo-2.jpg" alt="" width="180" height="50"></img>
    </Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
        
          <ul class="nav justify-content-end">
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="gosomewhere" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Role
              </a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="/Investor">Investor</a></li>
                <li><a className="dropdown-item" href="/MSME">MSME</a></li>
                <li><a className="dropdown-item" href="/auditor">Auditor</a></li>
              </ul>
            </li>
            <span>
            <form class="d-flex " role="search">
              <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
              <button class="btn btn-outline-success" type="submit">Search</button>
            </form>
            </span>
              <li class="nav-item2">
                <a class="nav-link" href="/login">Login</a>
              </li>
            <span>
              <li class="nav-item2">
                <Link class="nav-link" to ="/SignUp">SignUp</Link>
              </li>
            </span>
            
          </ul>
    </div>
  </div>
</nav>
    )
}
export default NavbarMain;