import React from 'react'
import './Home.css'

const Home = () => {
  return (
    <div>
      <div className='home-input'>
        <div></div>
        <div>
          <input className='input' placeholder='Search a team | Topic' />
          <img src="./Assets/Vector-3.png" alt="logo" />
        </div>
      </div>
      <div className='home-sec'>
        <div className='home-a'>
          <p>Claim a Free Quote</p>
          <h1>Get started on fulfilling 
            your Dubai or UAE 
            dream.</h1>
            <h3>UAE & Offshore Company</h3>
            <h2>e provide you with information about UAE or 
            Offshore Company Registration & help you 
            setup your company with a bank account and 
            visas.
            </h2>
            <div>
              <button style={{backgroundColor: "blue", color: "white"}}>Start a Compnay</button>
              <button style={{color:"blue"}}>Renew a Company</button>
            </div>
        </div>
        <div>
          <img src="/Assets/ILLUSTRATION.png" height={500} alt="" />
        </div>
      </div>
      <div className='home-video'>
        <h3>Watch the video about UAE or Offshore Company Registration</h3>
        <img src="/Assets/Group 117.png" alt="" />
      </div>
    </div>
  )
}

export default Home
