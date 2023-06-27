import React from 'react';
import './layout.css'

function Unlimitedmov(props) {
    return (
        <>
        <div className="">
            <div className="row p-3  d-flex aligns-items-center justify-content-center">
                <div className="col-8 text-center  ">
                <h1> Unlimited movies, TV shows and more. </h1>
                <br />
                    <h5>Watch anywhere. Cancel anytime.</h5>
                    <br />
                    <p>Ready to watch? Enter your email to create or restart your membership.</p>
                    <input type="text" placeholder='Email Address' />
                    <button className='btn bg-danger'>Get Started</button>
                </div>
                {/* <div className="col-7"><img src={'D:\Documents\TOPS\netflix\src\Layout\image\IN-en-20230417-popsignuptwoweeks-perspective_alpha_website_large.jpg"'} alt="header" /></div> */}

            </div>
            
        </div>
        
       
        </>
    );
}

export default Unlimitedmov;