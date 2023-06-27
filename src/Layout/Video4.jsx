import React, { useState } from "react";
import VidAPI from "./API/Api4";
import './layout.css'


function Video4(props) {
    const[vid2,setvid]=useState(VidAPI)
    console.log(vid2)
    return (
        <>
         

        <div className="tv-back">
        
            <div className="row py-5 d-flex align-items-center">
                <div className='col-6'><img className='tv2-img' src="https://occ-0-3061-2186.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABVr8nYuAg0xDpXDv0VI9HUoH7r2aGp4TKRCsKNQrMwxzTtr-NlwOHeS8bCI2oeZddmu3nMYr3j9MjYhHyjBASb1FaOGYZNYvPBCL.png?r=54d" alt="" /></div>
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

export default Video4;