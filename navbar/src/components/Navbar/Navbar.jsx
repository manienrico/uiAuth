import './navbar.css'
//import {} from './react-icons/md'

const Navbar=()=> {
  return (
    <header className='app__navbar'>
        <a href="#" className="logo">LOGO</a>
        <div className="menuToggle"></div>
        <nav className="app__navbar-menu">
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Dropdown</a>
                  <ul>
                    <li><a href="#">Product 01</a></li>
                    <li><a href="#">Product 02<b>+</b></a>
                      <ul>
                        <li><a href='#'>Submenu 01</a></li>
                        <li><a href='#'>Submenu 02</a></li>
                        <li><a href='#'>Submenu 03</a></li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li><a href="#">Portfolio</a></li>
                <li><a href="#">Blog</a>
                  <ul>
                    <li><a href="#">Post Link 01</a></li>
                    <li><a href="#">Post Link 02</a></li>
                    <li><a href="#">Post Link 03<b>+</b></a></li>
                  </ul>
                </li>
                <li><a href="#">Contact</a></li>
            </ul>
        </nav>
    </header>
  )
}

export default Navbar