import { Link } from 'react-router-dom';

const Home = () => (
    <div>
        <h1>Hello Cities!</h1>

        <ul>
            <Link to='/cities'>Cities</Link><br></br>
            <Link to='/about'>About</Link>
      </ul>
    </div>
)

export default Home;