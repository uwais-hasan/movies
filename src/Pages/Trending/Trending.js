
import './Trending.css'

import Pagination from "../../Components/Pagination/Pagination";
import ViewTrending from "../../Components/viewTrending/viewTrending";
import {useEffect} from "react";


const Trending=({trending,page,setPage,totalPages})=>{

    useEffect(()=>{
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    },[page])

    return(
       <div className='content-Trending mt-5 mb-5'>
               <div className='d-flex flex-wrap gap-1 justify-content-center align-items-center   '>
               {trending.map(item => {
                   return (
                       <ViewTrending
                           key={item.id}
                           id={item.id}
                           img={item.poster_path}
                           title={item.original_title ? item.original_title : item.original_name}
                           media={item.media_type}
                           date={item.release_date}
                           vote={item.vote_average}
                       />
                   )
               })}
               <Pagination page={page} setPage={setPage} totalPages={totalPages} />
           </div>

       </div>
    )
}
export default Trending