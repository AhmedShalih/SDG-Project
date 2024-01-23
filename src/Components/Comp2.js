
import React, { useState } from 'react';
export default function Comp2() {
    const[count,setCount]=useState(0)
  return (
    <div>
        <div className='container bg-success'>
            <div className='row mt-5'>
                <div className='col'>
                    <h1 style={{textAlign:"center"}}>Rice</h1>
                    <p style={{marginLeft:"90px",color:"yellow"}}><b>Cultivated on Today (22/01/2024), Can Load Upto a 5 Ton</b></p>
                   <h2 style={{marginLeft:"190px",marginTop:"50px"}}><b>Price -</b><button style={{backgroundColor:"green",marginLeft:"10px",color:"white"}}>110</button></h2>
                   <h3 style={{marginTop:"100px"}}>Location:</h3>
                   <p>East street cheran nagar mettupalayam</p>
                </div><div>
        <button onClick={()=>(setCount(count+1))} style={{backgroundColor:"blue",color:"white",marginLeft:"90px",marginTop:"50px"}}>Add</button>
        <button onClick={()=>(setCount(count-1))} style={{backgroundColor:"red",color:"white",marginLeft:"5px"}}>Remove</button>
        <button onClick={()=>(setCount(0))} style={{backgroundColor:"green",color:"white",marginLeft:"5px"}}>Reset</button><br/>
        <h1 style={{marginLeft:"160px",marginTop:"100"}}>{count}</h1>
        </div>
        </div>
                <div className='col'>
                  <img style={{width:"700px",marginLeft:"600px",marginTop:"-450px"}} src='https://img.freepik.com/free-photo/sack-rice-with-rice-wooden-spoon-rice-plant_1150-34315.jpg'/>
                </div>
                <div>
        
            </div>

        </div>
        <div className='container bg-success'>
            <div className='row mt-5'>
                <div className='col'>
                    <h1 style={{textAlign:"center"}}>Wheat</h1>
                    <p style={{marginLeft:"90px",color:"yellow"}}><b>Cultivated on Today (22/01/2024), Can Load Upto a 5 Ton</b></p>
                   <h2 style={{marginLeft:"190px",marginTop:"50px"}}><b>Price -</b><button style={{backgroundColor:"green",marginLeft:"10px",color:"white"}}>110</button></h2>
                   <h3 style={{marginTop:"100px"}}>Location:</h3>
                   <p>North street cheran nagar mettupalayam</p>
                </div>
                <div>
        <button onClick={()=>(setCount(count+1))} style={{backgroundColor:"blue",color:"white",marginLeft:"90px",marginTop:"50px"}}>Add</button>
        <button onClick={()=>(setCount(count-1))} style={{backgroundColor:"red",color:"white",marginLeft:"5px"}}>Remove</button>
        <button onClick={()=>(setCount(0))} style={{backgroundColor:"green",color:"white",marginLeft:"5px"}}>Reset</button><br/>
        <h1 style={{marginLeft:"160px",marginTop:"100"}}>{count}</h1>
        </div>
                <div className='col'>
                  <img style={{width:"700px",marginLeft:"600px",marginTop:"-450px"}} src='https://kjcdn.gumlet.io/media/81142/wheat.jpg'/>
                </div>
            </div>

        </div>
        <div className='container bg-success'>
            <div className='row mt-5'>
                <div className='col'>
                    <h1 style={{textAlign:"center"}}>Onions</h1>
                    <p style={{marginLeft:"90px",color:"yellow"}}><b>Cultivated on Today (22/01/2024), Can Load Upto a 5 Ton</b></p>
                   <h2 style={{marginLeft:"190px",marginTop:"50px"}}><b>Price -</b><button style={{backgroundColor:"green",marginLeft:"10px",color:"white"}}>110</button></h2>
                   <h3 style={{marginTop:"100px"}}>Location:</h3>
                   <p>South street cheran nagar mettupalayam</p>
                </div>
                <div>
        <button onClick={()=>(setCount(count+1))} style={{backgroundColor:"blue",color:"white",marginLeft:"90px",marginTop:"50px"}}>Add</button>
        <button onClick={()=>(setCount(count-1))} style={{backgroundColor:"red",color:"white",marginLeft:"5px"}}>Remove</button>
        <button onClick={()=>(setCount(0))} style={{backgroundColor:"green",color:"white",marginLeft:"5px"}}>Reset</button><br/>
        <h1 style={{marginLeft:"160px",marginTop:"100"}}>{count}</h1>
        </div>
                <div className='col'>
                  <img style={{width:"700px",marginLeft:"600px",marginTop:"-450px"}} src='https://cdn.britannica.com/08/187208-050-E4233521/onions.jpg'/>
                </div>
            </div>
        </div>
    </div>
  )
}
