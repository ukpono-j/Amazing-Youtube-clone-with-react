import React from 'react';
import "./Videos.css";
import {AiFillEye} from 'react-icons/ai'


const Videos = () => {
    return (
        <div className="videos"> 
           <div className="video__top">
               {/* <img src="" alt=""/> */}
               <img alt="" src="https://i.ytimg.com/vi/X3Ai6osw3Mk/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&amp;rs=AOn4CLCb5gXFdQglRyXj8ap7WeFMDZUU7g"></img>
               <span>05:45</span>
           </div>
           <div className="video__title">
               Create an amazing app in five minutes
           </div>
           <div className="video__details">
               <span> 
                   <AiFillEye/> 5m views.
               </span>
           </div>
           <div className="video__channels">
               {/* <img scr="" alt=""/> */}
               <img alt="" src="https://yt3.ggpht.com/ytc/AKedOLRNn6Pxk5RhZLqZIr3mOH4YNVJBUz4Vvutfg_Ff9w=s88-c-k-c0x00ffffff-no-rj"></img>
               <p>Ukpono Akpan</p>
           </div>
        </div>
    )
}

export default Videos
