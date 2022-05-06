
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faVideo } from '@fortawesome/free-solid-svg-icons'


import './Header.css'
import {NavLink} from "react-router-dom";
const Header=()=>{
    return(
     <div className='content-header '>
      <div className='container'>
          <div className='d-flex justify-content-center pt-5'>
             <NavLink to='/'>Movies Owies hassan</NavLink>
              <FontAwesomeIcon className='icon-video' icon={faVideo} size="lg"/>
          </div>

      </div>
     </div>
    )
}
export default Header