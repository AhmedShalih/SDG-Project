import React from 'react'
import { BrowserRouter,Routes,Route,Link } from 'react-router-dom'
export default function Comp4() {
  return (
    <div>
    <div style={{backgroundImage:"url('https://saiplatform.org/wp-content/uploads/2019/02/ourvalue-banner-1920x705.jpg')",backgroundSize:"cover"}}>
     <h1 className='d-flex'><span style={{padding:"150px",color:"white"}}>SAI Platform focuses on making a difference from the ground upwards, from the smallest farm to the largest multinational.</span></h1>
     </div>
     <div>
      <div className='container'>
            <div className='row mt-5'>
                <div className='row-lg-6  '>
                    <h1 style={{}}>We connect stakeholders, catalyse change and build solutions through collaboration.</h1>
                    <p style={{fontWeight:"bolder",padding:"20px"}}>Since 2002, we have evolved from defining sustainable agriculture to identifying the principles<br/> practices that enable it to grow and creating the tools that make this happen.</p><br/><br/>
                    <p style={{fontWeight:"bolder",padding:"20px"}}>Today, we are in a new era of piloting pioneering, innovative projects<br/> At ground level that put our principles into practice.<br/>A better opportunity to help grow sustainable agriculture<br/>offer empowerment from the farm to the consumer.</p>
                   <div className='row-lg-'>
                    <img style={{height:"250px",width:"300px",marginLeft:"900px",marginTop:"-400px"}} src='https://saiplatform.org/wp-content/uploads/2019/01/ourvalue-illustration.svg'/>
                </div> 
                </div>
            </div>
        </div>
      </div>
      <div className='bg-secondary d-flex'>
        <img src='https://saiplatform.org/wp-content/uploads/2019/02/ourcommitment-illustration.svg'/>
        <h2 style={{marginTop:"50px",marginLeft:"150px",width:"80px",color:"white"}}>Commitments</h2><br/>
        <p style={{fontWeight:"bolder",marginTop:"150px",marginLeft:"-70px",color:"white"}}>SAI Platform is committed to helping to create a future where people,<br/> the planet and sustainable business solutions come together to ensure a viable and resilient agricultural sector.</p>
        <button style={{height:"50px",width:"150px",marginLeft:"-820px",marginTop:"250px",border:"green solid 2px",color:"GrayText"}}><a style={{textDecoration:"none"}} href='https://saiplatform.org/our-commitment/' target='blank'>Learn more</a></button>
      </div>
      <div className='container'>
      <div className='row mt-5'>
        <div className='d-flex'>
          <div className='col'>
            <a href='https://saiplatform.org/our-value/what-we-do/#Working_Groups_and_Committees' target='blank' className='image-link'>
              <img src='https://saiplatform.org/wp-content/uploads/2020/08/crops-home-640x455.jpg' width={"400px"} alt="Working Groups" />
            </a>
            <h3>Working Groups</h3>
          </div>
          <div className='col'>
            <a href='https://saiplatform.org/our-value/what-we-do/#Working_Groups_and_Committees' target='blank' className='image-link'>
              <img src='https://saiplatform.org/wp-content/uploads/2019/02/how-projects-640x455.jpg' width={"400px"} alt="Projects" />
            </a>
            <h3>Projects</h3>
          </div>
          <div className='col'>
            <a href='https://saiplatform.org/our-value/what-we-do/events-field-trips-training/' target='blank' className='image-link'>
              <img src='https://saiplatform.org/wp-content/uploads/2019/02/how-fieldtrips-640x455.jpg' width={"400px"} alt="Field trips" />
            </a>
            <h3>Field trips</h3>
          </div>
        </div>
      </div>
    </div>
    <div className='container'>
      <div className='row mt-5'>
        <div className='d-flex'>
          <div className='col'>
            <a href='https://saiplatform.org/our-value/what-we-do/events-field-trips-training/' target='blank' className='image-link'>
              <img src='https://saiplatform.org/wp-content/uploads/2019/02/how-training-1-640x455.jpg' width={"400px"} alt="Training" />
            </a>
            <h3>Training</h3>
          </div>
          <div className='col'>
            <a href='https://saiplatform.org/our-value/what-we-do/#Regional_Initiatives' target='blank' className='image-link'>
              <img src='https://saiplatform.org/wp-content/uploads/2019/02/how-training-1-640x455.jpg' width={"400px"} alt="Regional Initiatives" />
            </a>
            <h3>Regional Initiatives</h3>
          </div>
          <div className='col'>
            <a href='https://saiplatform.org/our-value/what-we-do/#Programmes_and_Tools' target='blank' className='image-link'>
              <img src='https://saiplatform.org/wp-content/uploads/2019/02/how-tools-1-640x455.jpg' width={"400px"} alt="Programmes & Tools" />
            </a>
            <h3>Programmes & Tools</h3>
          </div>
        </div>
      </div>
    </div>
    <div class="container-fluid bg-secondary">
        <div class="row  m-5">
            <div class="col-lg-4 col-md-6">
            <img  src="https://www.edf-feph.org/content/uploads/2019/09/SDG-logo.png"  height="100px" width="100px" />
             <p class="text-light">
              <i class="fa-brands fa-google me-4"></i>
              <i class="fa-brands fa-twitter me-4"></i>
              <i class="fa-brands fa-instagram me-4"></i>
              <i class="fa-brands fa-linkedin-in me-4"></i>
             </p>
            <h5 class="text-light">24/7 Samsudeen Colony Oddanchatram,Dindigul</h5>
          </div>
            <div class=" col-6 col-md-6 col-lg-2 col-sm-6 text-light">
              <h3 class="text-light">Contact Us</h3>
              <h6>About Us</h6>
              <h6>Career</h6>
              <h6>Press Releases</h6>
              <h6>Gift a smile</h6>
            </div>
            <div class="col-6 col-md-6 col-lg-3 col-sm-6 text-light ">
              <h3 class="text-light">Contact with Us </h3>
              <h6>Facebook</h6>
              <h6>Twitter</h6>
              <h6>Instagram</h6>
            </div>
            <div class=" col-6 col-md-6 col-lg-3 col-sm-6 text-light">
              <h3 class="text-light">Let Us Help You</h3>
              <h6>100% Purchase</h6>
              <h6>Protection</h6>
              <h6>Your Account</h6>
              <h6>Return Center</h6>
              <h6>Help</h6>
            </div>
        </div>
        </div>
        
    </div>
  )
}
