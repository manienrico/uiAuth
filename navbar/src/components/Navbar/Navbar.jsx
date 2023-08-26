const Navbar=()=> {
  return (
    <header className='app__navbar'>
        <div className="app__navbar-logo">
            <a href="#"></a>
        </div>
        <nav className="app__navbar-menu">
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Dropdown</a>
                  <ul>
                    <li><a href="#">Product 01</a></li>
                    <li><a href="#">Product 02</a></li>
                  </ul>
                </li>
                <li><a href="#">Portfolio</a></li>
                <li><a href="#">Blog</a>
                  <ul>
                    <li><a href="#">Post Link 01</a></li>
                    <li><a href="#">Post Link 02</a></li>
                    <li><a href="#">Post Link 03</a></li>
                  </ul>
                </li>
                <li><a href="#">Contact</a></li>
            </ul>
        </nav>
    </header>
  )
}

export default Navbar