import React from 'react'

import './Box.css';

function Box() {
    return (
        <div>
             
              <div className='big-container'>
              
              <div className='container'>
                 <div className='div-message'>
                   <h1>$167 steel needed for this project</h1>
                </div>
                 <div className='small-container '>
                   <div className='div-1'></div>
                   <div className='div-2'></div>
                 </div>
                 <div className='container-1'>
                     <div className='container-text'>
                       <p className='text1'>Only 3 days left </p>
                       <p className='text2'>  to fund this project.</p>
                     </div>
                     <p className='text3'>Join  the 42 other donors who have already supported this project. Every dollar helps.</p>
                    <div className='form'>
                      <input className='input' placeholder="$50"/>
                       <button className='submit'type='submit'>Give now</button>
                   </div>
                   <div className='container-text4'>
                      <p className='text4'>Why give $50?</p>
                   </div>
                
                 </div>
                 
             </div>  
             <div  className='container-2'>
                      <button className='btn1'type='submit'>Save for later</button>
                      <button className='btn2'type='submit'>Tell your friends</button>
             </div> 

             </div> 
        </div>
    )
}

export default Box
