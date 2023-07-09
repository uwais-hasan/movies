import {img_size, img_undefined} from "../../Config/Config";
import './viewTrending.css'
import Details from "../Details/Details";

const ViewTrending=({id,media,img,title,vote,date,keys})=>{

    const styledImg={
        width:'220px',
        // height:'320px',

    }

    return(
        <Details  id={id} media={media}  >
            <div  className='content-img'>
                <img style={styledImg} src={img ? `${img_size}${img}`:img_undefined} alt={title}/>
            </div>
            <div className='content-title text-center'>
                <p className>{title.split(' ').slice(0,3).join(' ')}</p>
            </div>
            <div className='content-info d-flex justify-content-around'>
                <p  className='text-white'>{media}</p>
                <p className='text-white'>{date}</p>
            </div>
            <p className='vote position-absolute top-0'>{vote.toString().slice(0,3)}</p>
        </Details>

    )
}
export default ViewTrending;