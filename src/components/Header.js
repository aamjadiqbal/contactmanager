import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'



const Header = (props) => {
    return (
        <nav className="navbar navbar-expand-sm
        navbar-dark bg-danger mb-3 py-0" >
            <div className='container'>
                <a className='navbar-brand'>
                    {props.banner}
                </a>
                <div>
                    <ul className='navbar-nav mr-auto'>
                        <li className='nav-item'>
                            <Link to='/' className='nav-link'>
                               <i className='icon-home'/> Home</Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/addcontact' className='nav-link'>
                            <i className='icon-plus'/>ADD</Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/about' className='nav-link'>
                            <i className='icon-question'/>About</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

Header.defaultProps = {
    banner: 'Props not coming' 
}
Header.propTypes = {
    banner: PropTypes.string.isRequired
}

export default Header
