import React, { useState } from "react";
import VidAPI from "./API/Api2";
import './layout.css'


function Video2(props) {
    const[vid2,setvid]=useState(VidAPI)
    console.log(vid2)
    return (
        <>
         

        <div className="tv-back">
        
            <div className="row py-5 d-flex align-items-center">
                <div className='col-6'><img className='tv2-img' src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg" alt="" /></div>
                <div className="px-5 col-6">
                {vid2.map((res)=>{
                    console.log(res.quote);
                    
                    return(
                        <div>
                            
                            <div className="text-light" >
                                 <h1 className='v2h1'>{res.title}</h1>
                                    <p className='quot2'>"{res.quote}"</p>
                            </div>
                        </div>

                    )
                })}
                </div>
                <hr />
            </div>
        </div>
        </>
        
    );
}

export default Video2;