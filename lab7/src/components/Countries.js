import { connect } from 'react-redux';
import { Link } from 'react-router-dom';


const Countries = ({state, location}) => {
    const countries = state;
    const params = new URLSearchParams(location.search);
    const name = params.get('countryName');
    
    if (name !== null) {
        const country = countries.find(x => x.name === name);
        if (country === undefined) return <h1>No such country!</h1>
        return (
        <div>
            <h1>{country.name}</h1>
            
            <p>Population: {country.population}</p>
            <p>Surface: {country.surface}</p>
        </div>
        );
    }
    
    return (
        <ul>
            {countries.map(country => (<li><Link to={'/countries/'+country.id}>{country.name}</Link><br/></li>))}
        </ul>
    ) 
}

const mapStateToProps = (state) => {
    return {
        state
    }
}

export default connect(mapStateToProps)(Countries);