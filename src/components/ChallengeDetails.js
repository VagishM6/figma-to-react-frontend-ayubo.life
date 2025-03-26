import { Link } from 'react-router-dom';
import './Challenges.css'
import './ChallengeDetails.css'
import { useState } from 'react';
import { MdOutlineDashboard } from "react-icons/md";
import { LuCrown } from "react-icons/lu";
import { BsPersonCheck } from "react-icons/bs";
import { LuStar } from "react-icons/lu";
import { FaTasks } from "react-icons/fa";

const ChallengeDetails = () => {
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
                        <h2 className='dash-main-title'>Challenge Details</h2>
                    </div>
                    {/* <div className='ayubo-life-icon'>
                        <PiArrowCircleDownRightFill className='arrow-icon' />
                    </div> */}
                </div>


                <div className='challenge-details-container'>
                        <div className='challenge-details'>
                            <h1>Challenge Details</h1>
                        </div>
                        <div className='duration-details'>
                            <h1>Duration & Schedule Details</h1> 
                        </div>
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
 
export default ChallengeDetails;