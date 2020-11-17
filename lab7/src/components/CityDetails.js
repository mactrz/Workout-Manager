import {useParams} from "react-router-dom";

const CityDetails = () => {
    const cities = [ 
        { name: 'Warsaw', id: 0, population: '1,7 milion',  surface: '517,24 km' }, 
        { name: 'Tokio', id: 1, population: '9,2 milion',  surface: '2 194 km'}, 
        { name: 'New York', id: 2 , population: '8,3 milion', surface: '1 213 km'} ]
        const {id} = useParams();
        const city = cities.find(x => x.id == id)
    
    return (
        <div>
            {city !== undefined && <div>
                <h1>{city.name}</h1>
            
                <p>Population: {city.population}</p>
                <p>Surface: {city.surface}</p>
            </div>}
            {city === undefined && <h1>No such city!</h1>}
        </div>
    ) 
}

export default CityDetails;