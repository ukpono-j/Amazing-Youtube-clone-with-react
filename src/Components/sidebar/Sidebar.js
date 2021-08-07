import React from 'react'
import "./Sidebar.css"

import { MdSubscriptions, MdExplore, MdExitToApp, MdThumbUp, MdHistory, MdLibraryBooks, MdHome} from 'react-icons/md'

const Sidebar = ({sidebar, handleToggleSidebar }) => {
    return (
        <nav className={sidebar?"sidebar, open": "sidebar"}
         onClick={()=> handleToggleSidebar(false)}
        >
          <li>
              <MdHome size={23}/>
              <span>Home</span>

          </li>
          <li>
              <MdExplore size={23}/>
              <span>Explore</span>
          </li>
          <li>
              <MdSubscriptions size={23}/>
              <span>Subscriptions</span>
          </li>
          <hr />
          <li>
              <MdLibraryBooks size={23}/>
              <span>Library</span>
          </li>
          <li>
              <MdHistory size={23}/>
              <span>History</span>
          </li>
          {/* <li>
              <AiFillPlaySquare size={23} />
              <span>Your Videos</span>
          </li> */}
          {/* <li>
              <MdSentimentDissatisfied size={23}/>
              <span>Dissatisfied </span>
          </li> */}
          <li>
             <MdThumbUp size={23}/>
             <span>Liked Videos</span>
          </li>
          <hr />
          <li>
              <MdExitToApp size={23}/>
              <span>Log Out</span>
          </li>

        </nav>  
    )
}


export default Sidebar
