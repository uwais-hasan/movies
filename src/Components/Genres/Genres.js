import axios from "axios";
import {useEffect, useState} from "react";
import './Genres.css'

const Genres=({ selectedGenres, setSelectedGenres, genres, setGenres,setTotalPages,type})=>{

const[selectClass,setSelectedClass]=useState('')
    const fetchGenres=async ()=>{
        const {data}=await axios.get(`https://api.themoviedb.org/3/genre/${type}/list?api_key=801ba50f957f0f9e83c96ce7332f7941&language=en-US`);
        setGenres(data.genres);

    }

    useEffect(()=>{
        fetchGenres();

        // return ()=>{
        //     setGenres({})
        // }
    },[])

    const handleClicked=(item)=>{
     setSelectedGenres( [...selectedGenres,item])
        setGenres(genres.filter(genres=>genres.id!==item.id))
        setTotalPages(1)
        // setSelectedClass(item.name);
    }
    const handleRemove=(item)=>{
    setSelectedGenres(selectedGenres.filter(genres=>genres.id!==item.id))
        setGenres([...genres,item])
    };

    const handleClass=(item)=>{
if (item===selectClass){
    return 'hello'
}else {
    return 'false'
}
    }

    return(
        <div className='d-flex flex-row justify-content-center flex-wrap'>
            {selectedGenres && selectedGenres.map(item => {
                return (
                    <span onClick={() => handleRemove(item)}
                          className={`genres-span `}
                          style={{background:'red',position:'relative'}}>{item.name}
                        <span style={{position:'absolute',top:0}}>x</span>
                    </span>
                )
            })}
            {genres && genres.map(item => {
                return (
                    <span onClick={() => handleClicked(item)}
                          className={`genres-span ${selectClass && handleClass(item.name)}`}>{item.name}</span>
                )
            })}
        </div>
    )
}
export default Genres;