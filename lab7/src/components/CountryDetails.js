import {useParams, Link} from "react-router-dom";
import {connect} from "react-redux";

const CountryDetails = ({state}) => {
        console.log(state);
        const countries = state;
        const {id} = useParams();
        const country = countries.find(x => {
            return x.id === Number(id);
        });
    return (
        <div>
            {country !== undefined && <div>
                <h1>{country.name}</h1>
            
                <p>Population: {country.population}</p>
                <p>Surface: {country.surface}</p>
                <Link to={'/countries/'+id+'/edit'}>Edit</Link>
            </div>}
            {country === undefined && <h1>No such country!</h1>}
        </div>
    ) 
}

const mapStateToProps = (state) => {
    return {
      state
    }
  }
  

export default connect(mapStateToProps)(CountryDetails);