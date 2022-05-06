import {Box, Button, TextField, ThemeProvider} from "@mui/material";
import {TabList} from "@mui/lab";
import {TabContext} from "@mui/lab";
import {Tab} from "@mui/material";
import {TabPanel} from "@mui/lab";
import {useEffect, useState} from "react";
import {createTheme} from '@mui/material/styles'
import axios from "axios";
import ViewTrending from "../../Components/viewTrending/viewTrending";
import Pagination from "../../Components/Pagination/Pagination";
import './Search.css'
const Search = () => {


    const [search, setSearch] = useState('')
    const [type, setType] = useState(0);
    const [page, setPage] = useState(1)
    const [content, setContent] = useState([])
    const [totalPages, setTotalPages] = useState(null);


    const fetchSearch = async () => {
        const {data} = await axios.get(`https://api.themoviedb.org/3/search/${type ? 'tv' : 'movie'}?api_key=801ba50f957f0f9e83c96ce7332f7941&language=en-US&query=${search}&page=${page}&include_adult=false`)
        setContent(data.results)
        setTotalPages(data.total_pages)

    };
    useEffect(() => {
        fetchSearch();

    }, [type, page,search,]);


    const theme = createTheme({
        palette: {
            type: 'dark',
            color: 'red',
            primary: {
                main: '#fff',

            },

        },
    })
    return (
        <div className='content-search d-flex flex-column mt-5'>
            <div className='input-search d-flex'>
                <ThemeProvider theme={theme}>
                    <TextField
                        style={{flex: 1}}
                        className='searchBox'
                        label="search"
                        onChange={(e) => setSearch(e.target.value)}
                    />
                    <Button onClick={fetchSearch} variant='outlined'>search</Button>
                </ThemeProvider>
            </div>
            <div className='result-search d-flex justify-content-center'>
                <Box sx={{width: '100%', typography: 'body1'}}>
                    <TabContext value={type}>
                        <Box sx={{borderBottom: 1, borderColor: 'divider'}}>
                            <TabList style={{display: 'flex', justifyContent: 'space-around'}}
                                     aria-label="lab API tabs example" onChange={(event, newValue) => {
                                setType(newValue);

                            }}>
                                <Tab style={{width: '50%'}} label="MOVIES"/>
                                <Tab style={{width: '50%'}} label="TV"/>
                            </TabList>
                        </Box>
                    </TabContext>

                </Box>
            </div>
            <div className='d-flex flex-wrap style-content'>
                {content.length? content.map(item => {
                    return (
                        <ViewTrending
                            key={item.id}
                            id={item.id}
                            img={item.poster_path}
                            title={item.original_title ? item.original_title : item.name}
                            media={type ? 'tv' : 'movie'}
                            date={item.release_date ? item.release_date : item.first_air_date}
                            vote={item.vote_average}
                        />

                    )
                }):<div className='empty-div'></div>}
            </div>
            {totalPages > 1 && (
                <Pagination page={page} setPage={setPage} totalPages={totalPages}/>

            )}
        </div>
    )
}
export default Search