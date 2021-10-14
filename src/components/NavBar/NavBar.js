import React from 'react'
import logo  from './logo.svg'
import './NavBar.css'
 
class NavBar extends React.Component {
    state = {clicked: false}

    handleClick = () => {
        this.setState({clicked:!this.state.clicked})
    }

    render() {
        return(
            <nav className='NavBarItems'>
                <div className='navbar-logo'> Chicago Climbing Connection
                    <img src={logo} className='logo' alt='logo'/>
                </div>
                
                <ul className='nav-menu'>
                    <li>
                        <a className='navbar-item' href=''>Dashboard</a>
                    </li>
                    <li>
                        <a className='navbar-item' href=''>Challenges</a>
                    </li>
                    <li>
                        <a className='navbar-item' href=''>Gallery</a>
                    </li>
                    <li>
                        <a className='navbar-item' href=''>Gear Trade</a>
                    </li>
                    
                </ul>
            </nav>

        )
    }
}

export default NavBar