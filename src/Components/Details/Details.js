import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';
import './Details.css'
import axios from "axios";
import {Fragment, useEffect, useState} from "react";
import {img_size, video_src} from "../../Config/Config";
import Carousal from "../Carousal/Carousal";
import {img_undefined} from "../../Config/Config";

const style = {
    width:'90%',
    height:'90%',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    background:'rgb(80 73 90)',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};




export default function Details({children,media,id}) {






    const [open, setOpen] = React.useState(false);

    const[content,setContent]=useState([]);
    const[video,setVideo]=useState();
    const handleOpen = () => {
        setOpen(true);

    };
    const handleClose = () => setOpen(false);
    const fetchData=async()=>{
        const {data}=await axios.get(`https://api.themoviedb.org/3/${media && media}/${id && id }?api_key=${process.env.REACT_APP_KEY}&language=en-US`)
        setContent(data)
    }

    const fetchVideo=async()=>{
        const data=await fetch(`  https://api.themoviedb.org/3/${media && media}/${id && id}/videos?api_key=${process.env.REACT_APP_KEY}&language=en-US`)
        const res=await data.json();
        setVideo(res.results[0]?.key)

    }
    useEffect(()=>{
      fetchData();
      fetchVideo()

    },[]);

    return (
        <Fragment>
            <div  className='content position-relative  ' onClick={handleOpen}>{children}</div>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade style={style} in={open}>
                    {content &&
                    <div className='content-style ' >
                        <div className='details-img'>
                            <img  src={content.poster_path ? `${img_size}/${content.poster_path}`: img_undefined} />
                        </div>
                        <div className='d-flex flex-column w-100 scrolling  ' >
                            <div className='details-info  '>
                                <span>{content.name?content.name:content.title}</span>
                                <span>{(content.first_air_date||content.release_date)}</span>
                            </div>
                            <div className='details-description'>
                                <p>{content.overview}</p>
                            </div>
                            <div className='details-trailer'>
                                <a className='btn btn-danger w-100' href={`${video_src}=${video}`} target='_self' >trailer</a>
                            </div>
                            <div className=''>
                                <Carousal i id={id} media={media} />
                            </div>
                        </div>
                    </div>
                    }
                </Fade>
            </Modal>
        </Fragment>
    );
}