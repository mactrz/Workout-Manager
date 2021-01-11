import { Link } from 'react-router-dom';

const navStyle = {
    'backgroundColor': '#333',
    'overflow': 'hidden'
}

const linkStyle = {
    float: 'left',
    color: '#f2f2f2',
    'textAlign': 'center',
    padding: '14px 16px',
    'textDecoration': 'none',
    'fontSize': '17px'
}

const Navbar = () => (
  <div style={navStyle}>
    <Link to='/' style={linkStyle}>Workouts</Link>
    <Link to='/workout' style={linkStyle}>Register a workout</Link>
    <Link to='/data' style={linkStyle}>Data</Link>
  </div> 
)

export default Navbar;