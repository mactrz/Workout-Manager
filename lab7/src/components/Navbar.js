import {Link} from 'react-router-dom';

const navStyle = {
    'background-color': '#333',
    'overflow': 'hidden'
}

const linkStyle = {
    float: 'left',
    color: '#f2f2f2',
    'text-align': 'center',
    padding: '14px 16px',
    'text-decoration': 'none',
    'font-size': '17px'
}

const Navbar = () => (
  <div style={navStyle}>
    <Link to='/' style={linkStyle}>Home</Link>
    <Link to='/cities' style={linkStyle}>Cities</Link>
    <Link to='/about' style={linkStyle}>About</Link>
    <Link to='/countries' style={linkStyle}>Countries</Link>
  </div> 
)

export default Navbar;