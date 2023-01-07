import React from 'react'
import './Services.css'

const Services = () => {
  return (
    <div className='abc'>
        <div className='services'>
            <h1>Dedicated</h1>
            <h1 style={{textDecoration:"none"}}>to our mission we are</h1>
            <h2>Our services include Company Formation & Renewals, 
                Trust & Fiduciary, Tax Residency Setup With Family, Bank 
                Accounts, Remote Management, Stock Trading 
                Platforms, Ownership Solutions.
            </h2>
        </div>
        <div className='services-abox'>
            <div className='card'>
                <img src="/Assets/dungeon.png" width={50} alt="" />
                <h2>UAE Free Zone Company</h2>
                <p>Your registration agent, will answer all 
                    of your questions and help you to reach 
                    a conclusion that meets your objectives 
                    of investing in the UAE.
                </p>
                <h3>Get Started</h3>
            </div>
            <div className='card'>
                <img src="/Assets/Vector-2.png" width={50} alt="" />
                <h2>Dubai Local Companies</h2>
                <p>The Dubai LLC formation documents 
                    are actually articles of organization or a 
                    certificate of organization. You can get 
                    yours today
                </p>
                <h3>Offshore Compamies</h3>
            </div>
            <div className='card'>
                <img src="/Assets/Vector-1.png" width={50} alt="" />
                <h2>Offshore Compamies</h2>
                <p>You can register an offshore company 
                    and open its bank account in Dubai. 
                    Your agent will help you along all the 
                    process
                </p>
                <h3>Get Started</h3>
            </div>
        </div>
        <div className='cards'>
            {/* <div>
                <h2>Learn the ways in which you can benefit 
                    from a UAE/Offshore Company. Then get 
                    started on fulfilling your UAE dream.
                </h2>
                <h3>Claim a Free Quote</h3>
                <img src="/Assets/ILLUSTRATION 03 1.png" alt="logo" />
            </div>
            <div>

            </div> */}
        </div>
    </div>
  )
}

export default Services
