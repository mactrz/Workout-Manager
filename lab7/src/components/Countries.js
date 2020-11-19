import { connect } from 'react-redux';

const Countries = ({state}) => {
    const countries = state;
    
    return (
        <ul>
            {countries.map(country => (<li>{country.name}</li>))}
        </ul>
    ) 
}

const mapStateToProps = (state) => {
    return {
        state
    }
}

export default connect(mapStateToProps)(Countries);