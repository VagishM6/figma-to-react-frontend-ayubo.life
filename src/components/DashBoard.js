import { Link } from 'react-router-dom';
import './DashBoard.css'
import { PiArrowCircleDownRightFill } from "react-icons/pi";
import { GoBell } from "react-icons/go";
import { MdOutlineDashboard } from "react-icons/md";
import { LuCrown } from "react-icons/lu";
import { BsPersonCheck } from "react-icons/bs";
import { LuStar } from "react-icons/lu";
import { FaTasks } from "react-icons/fa";
import { RiExpandDiagonalLine } from "react-icons/ri";

const DashBoard = () => {
    return ( 
        <div className='dash-container'>
            <header className='dash-header'>
                <input className='dash-search' placeholder='search'></input>

                <div className='dash-header-info'>
                    <button>
                        {/* <span className='bell-icon'>
                            <GoBell />
                        </span> */}
                        Tue, 16 Jul
                    </button>   
                    {/* <h1>notifications</h1>
                    <h1>settings</h1>
                    <h1>profile</h1> */}
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
                        <h2 className='dash-main-title'>ayubo.life</h2>
                        <h2 className='dash-main-title'>Dashboard</h2>
                    </div>
                    <div className='ayubo-life-icon'>
                        <PiArrowCircleDownRightFill className='arrow-icon' />
                    </div>
                </div>

                <div className='card-container dash-table'>
                    <div className='card card-1'>

                        <div className='dash-card-1-header'>
                            <div>
                                <h3>Latest</h3>
                                <h3 style={{fontSize:"1rem"}}>Organizations</h3>
                            </div>
                            <div className='dash-card-1-expand-btn'>
                                <button className='expand-btn'>
                                    <span><RiExpandDiagonalLine className='expand'/></span>
                                </button>
                            </div>
                        </div>


                        <div className='dash-table-container'>
                        <table className='dash-table'>
                            <thead>
                                <tr>
                                <th>Organization Name</th>
                                <th>Members</th>
                                <th>Challenges Joined</th>
                                <th>Steps Completed</th>
                                <th>Start Date</th>
                                <th>Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>FitPro Club</td>
                                    <td>150</td>
                                    <td>5</td>
                                    <td>1,500,000</td>
                                    <td>15/03/2025</td>
                                    <td>Active</td>
                                </tr>
                                <tr>
                                    <td>Wellness Warriors</td>
                                    <td>80</td>
                                    <td>3</td>
                                    <td>900,000</td>
                                    <td>09/03/2025</td>
                                    <td>Active</td>
                                </tr>
                                <tr>
                                    <td>Healthy Hustlers</td>
                                    <td>45</td>
                                    <td>7</td>
                                    <td>450,000</td>
                                    <td>26/02/2025</td>
                                    <td>Inactive</td>
                                </tr>
                                <tr>
                                    <td>Step Titans</td>
                                    <td>120</td>
                                    <td>2</td>
                                    <td>1,200,000</td>
                                    <td>20/02/2025</td>
                                    <td>Active</td>
                                </tr>
                                <tr>
                                    <td>Corporate Climbers</td>
                                    <td>110</td>
                                    <td>4</td>
                                    <td>600,000</td>
                                    <td>14/02/2025</td>
                                    <td>Active</td>
                                </tr>
                                {/* <tr>
                                    <td>Energetic Striders</td>
                                    <td>70</td>
                                    <td>9</td>
                                    <td>1,400,000</td>
                                    <td>10/02/2025</td>
                                    <td>Inactive</td>
                                </tr> */}
                            </tbody>
                            </table>
                        </div>
                         
                    </div>

                    <div className='card card-2'>
                        <h3>This Week</h3>
                        <h3 style={{fontSize:"1rem"}}>Notification</h3>
                            <div className='notification-text'>
                                <span className='notification-label-blue'></span>
                                <p>
                                    It is a long established fact that a 
                                    reader will be distracted by the readable 
                                </p>
                            </div>
                            <div className='notification-text'>
                                <span className='notification-label-blue'></span>
                                <p>
                                    It is a long established fact that a 
                                    reader will be distracted by the readable 
                                </p>
                            </div>
                            <div className='notification-text'>
                                <span className='notification-label-gray'></span>
                                <p>
                                    It is a long established fact that a 
                                    reader will be distracted by the readable 
                                </p>
                            </div>
                            <div className='notification-text'>
                                <span className='notification-label-gray'></span>
                                <p>
                                    It is a long established fact that a 
                                    reader will be distracted by the readable 
                                </p>
                            </div>
                    </div>

                    <div className='card card-3'>
                        <div className='map-text'>
                            <h3 style={{paddingBottom:"1rem", paddingTop:"1rem", fontSize:"1rem"}}>Challenges</h3>
                            <h3 style={{paddingBottom:"1rem"}}>logo</h3>
                            <h3 style={{fontSize:"1rem"}}>Weekend Running</h3>
                            <p >
                                It is a long established fact that a 
                                reader will be distracted by the readable 
                                content of a page when looking at its layout. 
                                The point of using Lorem Ipsum is that it has a more-or-less normal distribution 
                                of letters, as opposed to using 'Content here, content here', making it look like readable English.
                            </p>
                            <p style={{paddingBottom:"1rem"}}>
                                It is a long established fact that a 
                                reader will be distracted by the readable 
                                content of a page when looking at its layout. 
                                The point of using Lorem Ipsum is that it has a more-or-less normal distribution 
                                of letters, as opposed to using 'Content here, content here', making it look like readable English.
                            </p>

                            <div className='challenges-info'>
                                <div className='distance'>
                                    <h3>100km</h3>
                                    <h3>Distance</h3>
                                </div>
                                <div className='time'>
                                    <h3>08:00 a.m</h3>
                                    <h3>Starting Time</h3>
                                </div>
                            </div>
                        </div>
                        {/* <iframe  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.8556756234693!2d79.94249817736639!3d6.907855525278569!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae257312c93b3dd%3A0xd677b9d288426f86!2sMalabe%2010115!5e0!3m2!1sen!2slk!4v1742917933074!5m2!1sen!2slk" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}
                        <div className='map-container'>
                            <iframe className='map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.8556756234693!2d79.94249817736639!3d6.907855525278569!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae257312c93b3dd%3A0xd677b9d288426f86!2sMalabe%2010115!5e0!3m2!1sen!2slk!4v1742917933074!5m2!1sen!2slk" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                     </div>

                    <div className='card card-4'>
                        <div className='overview-text'>
                            <h3>This Week</h3>
                            <h3 style={{fontSize:".6rem"}}>Downloads Overview</h3>
                        </div>

                        <div className='overview-panels'>
                            <div className='overview overview-1'>Total Downloads 80%</div>
                            <div className='overview overview-2'>Google Play 50%</div>
                            <div className='overview overview-3'>Apple Store 30%</div>
                        </div>
                    </div>

                </div>
            </main>

            {/* <footer className='dash-footer'>
                footer
            </footer> */}
        </div>
     );
}
 
export default DashBoard;