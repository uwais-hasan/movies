import {useEffect, useState} from "react";


const Persons = ({trending}) => {

    const [trendings, setTrendings] = useState([]);

    const fetchName = async () => {
        const fetchTrending = await fetch(`https://api.themoviedb.org/3/movie/580489?api_key=801ba50f957f0f9e83c96ce7332f7941&language=en-US`);
        const response = await fetchTrending.json();
        setTrendings(response.results);
    }

    useEffect(() => {
        fetchName()
    }, []);

    console.log( trendings)
    return (
        <div>
            {trending&& trending.map(item=>{
                return(
                    <p>{item.name}</p>
                )
            })}
        </div>
    )
}
export default Persons
