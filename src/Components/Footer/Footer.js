
import './Footer.css'
import {Link} from "react-router-dom";
import {faSearch,faFilm,faTv,faFireAlt} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {NavLink} from "react-router-dom";

const Footer=()=>{
    return(
        <div color='content-footer'>
            <div className='footer-link d-flex justify-content-center  '>
              <Link to='/'>
                  <div className='d-flex flex-column align-items-center pointer gap-3'>
                      <FontAwesomeIcon icon={faFireAlt} size='lg' />

                      Trending
                  </div>
              </Link>
               <Link to='/movies'>
                   <div className='d-flex flex-column align-items-center pointer gap-3'>
                       <FontAwesomeIcon icon={faFilm}  size='lg'/>
                      Movies

                   </div>
               </Link>
                <Link to='/series'>
                    <div className='d-flex flex-column align-items-center pointer gap-3'>
                        <FontAwesomeIcon icon={faTv}  size='lg'/>
                       Series

                    </div>
                </Link>

                <Link to='/search'>
                    <div className='d-flex flex-column align-items-center pointer gap-3'>
                        <FontAwesomeIcon icon={faSearch}  size='lg' />
                       Search


                    </div>
                </Link>


            </div>
        </div>
    )
}
export default Footer