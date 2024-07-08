import '../css/LandingPage.css';
import { useNavigate } from 'react-router-dom';
import {BgVid} from  '../componenets/bgVideo.js'

export function LandingPage() {

  const nav = useNavigate();

  function handleClick(e) {
    nav("/home")
  }
  

  return (
    <div className="LandinPage" onClick={handleClick}>
      <h1 className='Name'>Charlie Mcgowan: Videotographer </h1>
      <text className='Prompt'>Click Anywhere To Continue</text>
    <BgVid></BgVid>
    </div>
  );
}

