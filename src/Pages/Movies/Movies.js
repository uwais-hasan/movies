import {useEffect, useState} from "react";
import ViewTrending from "../../Components/viewTrending/viewTrending";
import Pagination from "../../Components/Pagination/Pagination";
import Genres from "../../Components/Genres/Genres";
import ControllerWithGenres from "../../Components/ControllerWithGenres/ControllerWithGenres";


const Movies=()=>{

    const[movies,setMoives]=useState([]);
    const[pageMovies,setPageMovies]=useState(2);
    const[totalPages,setTotalPages]=useState(null);
    const [genres, setGenres] = useState([]);
    const [selectedGenres, setSelectedGenres] = useState([]);
    const urlGenres=ControllerWithGenres(selectedGenres);

    const FetchMovies=async ()=>{
      const fetchMovies=await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=801ba50f957f0f9e83c96ce7332f7941&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${pageMovies}&with_genres=${urlGenres}`)
        const res=await fetchMovies.json()
        setMoives(res.results)
        setTotalPages(res.total_pages)
    };

    useEffect(()=>{

        FetchMovies()
    },[pageMovies,urlGenres])
    useEffect(()=>{
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    },[pageMovies])


    return(
       <div>
       <Genres
           selectedGenres={selectedGenres}
           setSelectedGenres={setSelectedGenres}
           genres={genres}
           setGenres={setGenres}
           setTotalPages={setTotalPages}
           type='movie'
       />
           <div className='d-flex flex-wrap gap-1 '>

               {movies&& movies.map(item => {
                   return (
                       <ViewTrending
                           key={item.id}
                           id={item.id}
                           img={item.poster_path}
                           title={item.original_title}
                           media='movie'
                           date={item.release_date}
                           vote={item.vote_average}
                       />
                   )
               })}
               <Pagination  page={pageMovies} setPage={setPageMovies} totalPages={totalPages} />
           </div>
       </div>
    )
}
export default Movies;