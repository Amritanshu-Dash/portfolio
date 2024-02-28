
import SocialProfiles from "./myComponents/socialProfiles";
import { RiStackFill } from "react-icons/ri";
import { IoLogoPython } from "react-icons/io5";
import { PiProjectorScreenChartDuotone } from "react-icons/pi";

import './App.css'
function App() {
  return (


    <div className="arrange">
        <h1>Amritanshu Dash</h1>
        <SocialProfiles/>
        <p> 
            Hey hey, I'm Amritanshu Dash, a fresh face in the software scene, rocking my final year of college! 
            <br/>
            Don't let the 'newbie' title fool you—I've got the passion and drive to rival the pros!
        </p>

        <p>
          <h2>My Tech Stack <RiStackFill /></h2>
          DSA and C/C++
          <br/>
          iOS Development and Swift.
          <br/>
          Web Technologies (HTML, CSS, JavaScript, React)
          <br/>
          Python <IoLogoPython />
        </p>  
    </div>
  );
}

export default App; 