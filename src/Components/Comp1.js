import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Comp1 = () => {
  const settings = {
    dots: true,
    autoplay:true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (

    
    <div>
      
      <Slider {...settings}>
        
        <div>
          <img src="https://naturesbox.in/cdn/shop/articles/how_to_start_organic_farming_7453dba3-345c-47d5-9112-3b2ecacae826.jpg?v=1632813867" style={{width:"1515px",height:"1000px"}} alt="Slide 1"/>
        </div>
        <div>
          <img src="https://okcredit-blog-images-prod.storage.googleapis.com/2020/10/farming.jpg" style={{width:"1515px",height:"1000px"}} alt="Slide 2" />
        </div>
        <div>
          <img src="https://www.pmfias.com/wp-content/uploads/2023/01/Natural-Farming.png"  style={{width:"1515px",height:"1000px"}} alt="Slide 3" />
        </div>
      </Slider>
      <div style={{backgroundImage:"url('https://freepngimg.com/convert-png/155784-grass-natural-free-hq-image')",backgroundSize:"contain"}}>
      <div className='container'>
            <div className='row mt-5'>
                <div className='col'>
                    <h1 style={{}}>WHO WE ARE</h1>
                    <p style={{fontWeight:"bolder",padding:"55px"}}>SAI Platform brings together over 170 member companies and organisations leading the way in sustainable agriculture worldwide,
                    Join these global leaders committed to helping grow sustainable agriculture now and for the future.</p><br/><br/>
                </div>
            </div>
        </div>
      </div>
      <div className='container'>
      <div className='row mt-5'>
        <div className='d-flex'>
          <div className='col'>
            <a href='https://saiplatform.org/our-commitment/' target='blank' className='image-link'>
              <img src='https://saiplatform.org/wp-content/uploads/2021/09/ourcommitment-640x461.jpg' width={"350px"} alt="Our Commitment" />
            </a>
            <h1>Our Commitment</h1>
          </div>
          <div className='col'>
            <a href='https://saiplatform.org/our-value/' target='blank' className='image-link'>
              <img src='https://saiplatform.org/wp-content/uploads/2019/03/story-bottom-value-1.jpg' width={"400px"} alt="Our Value" />
            </a>
            <h1>Our Value</h1>
          </div>
          <div className='col'>
            <a href='https://saiplatform.org/our-work/projects/' target='blank' className='image-link'>
              <img src='https://saiplatform.org/wp-content/uploads/2019/03/story-bottom-wwd-1.jpg' width={"400px"} alt="What We Do" />
            </a>
            <h1>What We Do</h1>
          </div>
        </div>
      </div>
    </div>
    <div className='container'>
            <div className='row mt-5'>
                <div className='row-lg-6  '>
                    <h1 style={{}}>We connect stakeholders, catalyse change and build solutions through collaboration.</h1>
                    <p style={{fontWeight:"bolder",padding:"20px"}}>Since 2002, we have evolved from defining sustainable agriculture to identifying the principles<br/> practices that enable it to grow and creating the tools that make this happen.</p><br/><br/>
                    <p style={{fontWeight:"bolder",padding:"20px"}}>Today, we are in a new era of piloting pioneering, innovative projects<br/> At ground level that put our principles into practice.<br/>A better opportunity to help grow sustainable agriculture<br/>offer empowerment from the farm to the consumer.</p>
                   <div className='row-lg-'>
                    <img style={{height:"300px",width:"500px",marginLeft:"800px",marginTop:"-370px"}} src='https://saiplatform.org/wp-content/uploads/2019/02/project02-905x554.jpg'/>
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
        
  );
};

export default Comp1;
