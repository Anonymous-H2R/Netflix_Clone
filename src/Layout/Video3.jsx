import React, { useState } from 'react';
import VidAPI from './API/Api3';
import './layout.css'

function Video(props) {
    const[vid,setvid]=useState(VidAPI);
    console.log(vid);
    return (
        <>

       <div className="tv-back">
       
    <div className="row py-5 d-flex align-items-center">
    
        <div className=' px-5 col-6 '>
            
     {vid.map((res)=>{
                 console.log(res.quote);

            return(
                
                <div className='' > 
                
                    {/* <i className={`${res[1].icon}`}></i> */}
                    <div className="text-light">
                        <h1 className='v3h1'>{res.title}</h1>
                        
                        <blockquote>
                            <p className='quot3'>"{res.quote}"</p>
                        </blockquote>
                    </div>
                </div>
            )
        })}
    </div>
    <div className='col-6 V3p'><img className='tv3-img' src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile-in.png" alt="" />
   <div className='V3' > <video controls autoPlay > <source src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices-in.m4v" type="video/ogg"></source></video></div>
    </div>
    <hr />
</div>
</div>
               
        </>

    );
}

export default Video;

// OTHER METHOD TO CALL API

// <div className="container mt-5">
// <div className="row">
// {Object.entries(vid).map((res,i)=>{
        
//         console.log(res[1].quote);
        
//         return(
//             <div className='col-4 news ms-auto' > 
//                 <i className={`${res[1].icon}`}></i>
//                 <div className="newsinner">
//                     <h3>{res[1].title}</h3>
//                     <hr />
//                     <blockquote>
//                         <p>"{res[1].quote}"</p>
//                     </blockquote>
//                 </div>
               
//             </div>
//         )
//     })}
// </div>
// </div>