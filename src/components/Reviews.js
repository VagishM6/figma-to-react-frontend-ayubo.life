import { Link } from 'react-router-dom';
import { MdOutlineDashboard } from "react-icons/md";
import { LuCrown } from "react-icons/lu";
import { BsPersonCheck } from "react-icons/bs";
import { LuStar } from "react-icons/lu";
import { FaTasks } from "react-icons/fa";

import { useState } from 'react';

const Reviews = () => {

    const [state, setState] = useState(false)

    function showPopup(){
        setState(true)
    }

    function closePopup(){
        setState(false)
    }

    return ( 
        <div className='dash-container'>
            <header className='dash-header'>
                <input className='dash-search' placeholder='search'></input>

                <div className='dash-header-info'>
                    <h1>notifications</h1>
                    <h1>settings</h1>
                    <h1>profile</h1>
                </div>
            </header>


            <aside className='dash-aside'>
                <h2>
                    <Link className='dash-link logo' to="/">ayubo.life</Link>
                </h2>    
                <Link className='dash-link' to="/"><MdOutlineDashboard />DashBoard</Link>
                <Link className='dash-link' to="/organizations"><BsPersonCheck />Organizations</Link>
                <Link className='dash-link' to="/challenges"><LuCrown />Challenges</Link>
                <Link className='dash-link' to="/reviews"><LuStar />Reviews</Link>
                <Link className='dash-link' to="/challengedetails"><FaTasks />Challenge Details</Link>
            </aside>
            
            <main className='dash-main'>
                <div className='dash-main-title'>
                    <div className='ayubo-life'>
                        <h2 className='dash-main-title'>Reviews</h2>

                        {/* <h1 style={{fontSize:"2rem"}}>Review Page</h1> */}

                        <button onClick={showPopup}>popup</button>

                        <p>
                            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
                        </p>


                        {state && 
                        <div className='pop-up-card-1'>
                            <h1 className='card-element'>Card Details</h1>
                            <p className='card-element'>Card Details</p>
                            <p className='card-element'>Card Details</p>
                            <p className='card-element'>Card Details</p>
                            <button onClick={closePopup}>close</button>
                        </div>}

                    </div>
                    {/* <div className='ayubo-life-icon'>
                        <PiArrowCircleDownRightFill className='arrow-icon' />
                    </div> */}
                </div>

                {/* <div className='card-container'>
                    <div className='card card-1'>card 1</div>
                    <div className='card card-2'>card 2</div>
                    <div className='card card-3'> card 3</div>
                    <div className='card card-4'>card 4</div>
                </div> */}
            </main>

            {/* <footer className='dash-footer'>
                footer
            </footer> */}
        </div>
     );
}
 
export default Reviews;