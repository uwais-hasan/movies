
import './App.css';
import {useEffect, useState} from "react";
import {HashRouter, Route, Routes} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css'
import Movies from "./Pages/Movies/Movies";
import Trending from "./Pages/Trending/Trending";
import Search from "./Pages/Search/Search";
import Series from "./Pages/Series/Series";
import NotFound from "./Components/NotFound/NotFound";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
function App() {

    const[trending,setTrending]=useState([]);
    const[page,setPage]=useState(1)
    const[totalPages,setTotalPages]=useState(null)

    const fetchTrending=async ()=>{
        const fetchTrending=await fetch(`https://api.themoviedb.org/3/trending/all/week?api_key=801ba50f957f0f9e83c96ce7332f7941&page=${page}`);
        const response=await fetchTrending.json();
        setTrending(response.results);
       setTotalPages(response.total_pages)
        console.log(response)
    }

    useEffect(() => {
        fetchTrending();


    }, [page]);
    const env=process.env.REACT_APP_APP_URL;

  return (
      <HashRouter>
          <div className='content-App'>

              <Header/>

              <div className='container'>

                  <Routes>
                      <Route exact path='/' element={<Trending trending={trending} page={page} setPage={setPage} totalPages={totalPages}/>}/>
                      <Route exact path='/series' element={<Series/>}/>
                      <Route exact path='/movies' element={<Movies/>}/>
                      <Route exact path='/search' element={<Search/>}/>
                      <Route exact path='/:any_thing' element={<NotFound/>}/>
                  </Routes>
              </div>
              <Footer/>
          </div>
      </HashRouter>
  );
}

export default App;
