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
                <h3 style={{cursor:"pointer"}}>Get Started</h3>
            </div>
            <div className='card'>
                <img src="/Assets/Vector-2.png" width={50} alt="" />
                <h2>Dubai Local Companies</h2>
                <p>The Dubai LLC formation documents 
                    are actually articles of organization or a 
                    certificate of organization. You can get 
                    yours today
                </p>
                <h3 style={{cursor:"pointer"}}>Offshore Compamies</h3>
            </div>
            <div className='card'>
                <img src="/Assets/Vector-1.png" width={50} alt="" />
                <h2>Offshore Compamies</h2>
                <p>You can register an offshore company 
                    and open its bank account in Dubai. 
                    Your agent will help you along all the 
                    process
                </p>
                <h3 style={{cursor:"pointer"}}>Get Started</h3>
            </div>
        </div>
        <div className='cards'>
            <div className='cards-box'>
                <h2>Learn the ways in which you can benefit 
                    from a UAE/Offshore Company. Then get 
                    started on fulfilling your UAE dream.
                </h2>
                <h3>Claim a Free Quote</h3>
                <div className='cards-card'>
                    <img src="/Assets/ILLUSTRATION 03  1.png" alt="logo" />
                    <h1>Bank Account Setup</h1>
                    <h3>There are many banks in the United 
                        Arab Emirates [UAE]. Both locally 
                        owned and branches of 
                        multinational ones. Foreign banks 
                        adjust according to their parent s 
                        strategies and have changed local 
                        requirements overnight in the past. 
                        But we are here to help you.
                    </h3>
                    <h2 style={{cursor:"pointer"}}>Learn More </h2>
                    <img src="/Assets/Vector.png" alt="logo" />
                </div>
                <div className='cards-card'>
                    <img src="/Assets/Group-2.png" alt="logo" />
                    <h1>UAE Company Visas</h1>
                    <h3>Your application for visas is critical 
                        especially if you intend to move to 
                        Dubai. This becomes even more 
                        urgent if your family will also move 
                        with you. All the paperwork is done 
                        on your behalf smoothly so that you 
                        may only focus on doing what 
                        matters most to you.
                    </h3>
                    <h2 style={{cursor:"pointer"}}>Learn More </h2>
                    <img src="/Assets/Vector.png" alt="logo" />
                </div>                
            </div>
            <div className='cards-box'>
                <div className='cards-card'>
                    <img src="/Assets/Group.png" alt="logo" />
                    <h1>Advice & Guidance</h1>
                    <h3>All activities in the UAE are licensed. 
                        Whether manufacturing, finance, 
                        trading, marketing, consultancy or 
                        restaurants. In some countries only 
                        manufacturing is licensed. In others 
                        there is a threshold below which 
                        business are encouraged. Get our 
                        insightfull guidance today
                    </h3>
                    <h2 style={{cursor:"pointer"}}>Learn More </h2>
                    <img src="/Assets/Vector.png" alt="logo" />
                </div>
                <div className='cards-card' style={{marginBottom:"10px", paddingBottom:"10px"}}>
                    <img src="/Assets/Group-1.png" alt="logo" />
                    <h1>Registration Document Perparation</h1>
                    <h3>Several documents must be 
                        prepared to start the process of 
                        registering a new company in the 
                        United Arab Emirates. Be it a Dubai 
                        local company, a free zone one or an 
                        offshore entity. Your registered 
                        agent is dedicated to get this done 
                        for you for a seamless process.
                    </h3>
                    <h2 style={{cursor:"pointer"}}>Learn More </h2>
                    <img src="/Assets/Vector.png" alt="logo" />
                </div>
                <h2>We have gathered a team of 
                    professionals to craft adequate 
                    services you can rely on for a friction 
                    free setup in UAE.
                </h2>
                <span style={{ position:"relative", fontWeight:"bolder", fontSize:"1.2rem", color:"blue" }}>More about our services</span>
                {/* <img style={{ position:"absolute"}} src="/Assets/Vector.png" alt="logo" /> */}
            </div>
        </div>
    </div>
  )
}

export default Services
