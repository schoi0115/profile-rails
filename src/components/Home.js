import "../App.css";
import React from "react";
import Barbie from './Image/shawn3.png'



function Home() {


    return (
        
        <div className="home">
            <h1>Shawn Choi</h1>
           <br />
           <img className="Img" src={Barbie} />
           <p >
            Bilingual in Korean and English; Bachelor of Fine Arts; Proficient in Quickbooks, Adobe Photoshop, Microsoft/Google platforms, Zoom; Seeking full-time Office Administrator/Operator positions. Worked 5+ years in managerial positions; Worked with patients one-on-one from diverse backgrounds and effectively lead and trained new staff, while being a team player. I am a quick learner and enjoy a face-paced environment. As a strong patient advocate, excellent patient care, safety and education are my top priorities.
            </p>

        </div>
      

    );
 
}

export default Home;




