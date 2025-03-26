import { Link } from 'react-router-dom';
import './Challenges.css'
import { useState } from 'react';
import { MdOutlineDashboard } from "react-icons/md";
import { LuCrown } from "react-icons/lu";
import { BsPersonCheck } from "react-icons/bs";
import { LuStar } from "react-icons/lu";
import { FaTasks } from "react-icons/fa";

const Challenges = () => {

    const [data, setData] = useState([{
        challengeName: "Taj Samudra Colo",
        chglId: "Ch-001",
        participants: 150,
        distance: "100 km",
        stepsTarget: 980000,
        startDate: "2023-06-15",
        startTime: "08:00 am",
        endDate: "2023-06-15",
        status: "Active"
      },

      {
        challengeName: "FitLife Gym Week",
        chglId: "Ch-002",
        participants: 85,
        distance: "50 km",
        stepsTarget: 650500,
        startDate: "2023-08-20",
        startTime: "08:00 am",
        endDate: "2023-08-20",
        status: "Active"
      },

      {
        challengeName: "Wellness Club 10K",
        chglId: "Ch-003",
        participants: 200,
        distance: "100 km",
        stepsTarget: 1200000,
        startDate: "2022-11-10",
        startTime: "08:30 am",
        endDate: "2022-11-10",
        status: "Inactive"
      },

      {
        challengeName: "StridePro Monthly",
        chglId: "Ch-004",
        participants: 320,
        distance: "50 km",
        stepsTarget: 600400,
        startDate: "2024-01-05",
        startTime: "09:00 am",
        endDate: "2024-01-05",
        status: "Active"
      },

      {
        challengeName: "ActiveCorp Daily Ch",
        chglId: "Ch-005",
        participants: 120,
        distance: "30 km",
        stepsTarget: 1450300,
        startDate: "2021-12-12",
        startTime: "10:00 am",
        endDate: "2021-12-12",
        status: "Active"
      },

      {
        challengeName: "MoveWell Foundation",
        chglId: "Ch-006",
        participants: 95,
        distance: "80 km",
        stepsTarget: 775000,
        startDate: "2023-05-22",
        startTime: "08:30 am",
        endDate: "2023-05-22",
        status: "Active"
      },

      {
        challengeName: "UrbanFit Arena Mo",
        chglId: "Ch-003",
        participants: 180,
        distance: "40 km",
        stepsTarget: 1200000,
        startDate: "2022-11-10",
        startTime: "09:00 am",
        endDate: "2022-11-10",
        status: "Inactive"
      },

      {
        challengeName: "StepMasters Club",
        chglId: "Ch-004",
        participants: 60,
        distance: "60 km",
        stepsTarget: 600400,
        startDate: "2024-01-05",
        startTime: "10:00 am",
        endDate: "2024-01-05",
        status: "Active"
      },

      {
        challengeName: "Peak Performance",
        chglId: "Ch-005",
        participants: 110,
        distance: "150 km",
        stepsTarget: 1450300,
        startDate: "2021-12-12",
        startTime: "08:30 am",
        endDate: "2021-12-12",
        status: "Active"
      },

      {
        challengeName: "City Runners Week",
        chglId: "Ch-006",
        participants: 180,
        distance: "50 km",
        stepsTarget: 775000,
        startDate: "2023-05-22",
        startTime: "08:00 am",
        endDate: "2023-05-22",
        status: "Active"
      },

      {
        challengeName: "Ever Sports Club",
        chglId: "Ch-003",
        participants: 75,
        distance: "60 km",
        stepsTarget: 1200000,
        startDate: "2022-11-10",
        startTime: "10:00 am",
        endDate: "2022-11-10",
        status: "Inactive"
      },

      {
        challengeName: "GreenStride Eco W",
        chglId: "Ch-004",
        participants: 250,
        distance: "70 km",
        stepsTarget: 600400,
        startDate: "2024-01-05",
        startTime: "09:00 am",
        endDate: "2024-01-05",
        status: "Active"
      }])

      const [screen, setScreen] = useState(false)

      const [challengeName, setChallengeName] =  useState('')
      const [challengeID, setChallengeID] =  useState('')
      const [partcipants, setPartcipants] =  useState('')

      function addChallenge(){
        setScreen(true)
      }

      function updateChallenges(){
        if(challengeName==="" && challengeID ==="" && partcipants=="") {
          setScreen(false)
          return
        }
        setData([...data, {
          "challengeName": challengeName,
          "chglId": challengeID,
          "participants": partcipants
        }])
        setChallengeName("")
        setChallengeID("")
        setPartcipants("")
        setScreen(false)
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
                        <h2 className='dash-main-title'>Challenges</h2>
                    </div>
                    {/* <div className='ayubo-life-icon'>
                        <PiArrowCircleDownRightFill className='arrow-icon' />
                    </div> */}
                </div>


                {screen && <div className='add-challenge-window'>
                  {/* <h1 className='challenge-window-element'>Window Popup</h1> */}

                  <div className='challenge-window-element'>
                    <label>Challenge name:</label>
                    <input onChange={(e)=>setChallengeName(e.target.value)} style={{marginTop:".6rem"}} placeholder='challenge name'></input>
                  </div>
                  <div className='challenge-window-element'>
                    <label>Challenge ID:</label>
                    <input onChange={(e)=>setChallengeID(e.target.value)} style={{marginTop:".6rem"}} placeholder='challenge ID'></input>
                  </div>
                  <div className='challenge-window-element'>
                    <label>Participants:</label>
                    <input onChange={(e)=>setPartcipants(e.target.value)} style={{marginTop:".6rem"}} placeholder='Participants'></input>
                  </div>

                  {/* <h1 className='challenge-window-element'>Window Popup</h1> */}
                  <button onClick={updateChallenges}>submit</button>
                </div>}

                <div className='challenges-container'>
                    <div className='challenges-header'>
                        <button className='add-new-challenge-btn' onClick={addChallenge}>Add new challenge</button>
                        <h1 className='export-cv'>Export CSV</h1>
                        <input className='dash-search push-search' placeholder='search'></input>
                    </div>
                    <div className='challenges-content'>
                        <table>
                            <thead>
                                <tr>
                                    <th>Challenge name</th>
                                    <th>chgID</th>
                                    <th>Participants</th>
                                    <th>Distance</th>
                                    <th>Steps Target</th>
                                    <th>Start Date</th>
                                    <th>Start Time</th>
                                    <th>End Date</th>
                                    <th>Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data.map((challenge, index) => 
                                <tr key={index}>
                                    <td>{challenge.challengeName}</td>
                                    <td>{challenge.chglId}</td>
                                    <td>{challenge.participants}</td>
                                    <td>{challenge.distance}</td>
                                    <td>{challenge.stepsTarget}</td>
                                    <td>{challenge.startDate}</td>
                                    <td>{challenge.startTime}</td>
                                    <td>{challenge.endDate}</td>
                                    <td>{challenge.status}</td>
                                </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </main>

            {/* <footer className='dash-footer'>
                footer
            </footer> */}
        </div>
     );
}
 
export default Challenges;