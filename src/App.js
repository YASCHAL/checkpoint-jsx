import React from 'react';
import './App.css';
import './style/Style.css'
import imageInSrc from './assets/imageInSrc.jpg'

const image = 
     
     <div>

        <h1 class="title red">Your name here</h1>

         <br/>
         <div className='img'>

           <img src={imageInSrc} />

             <br/>

               <img src="/imageInPublic.jpg" />

         </div>

           
     </div>

const video = 
  <div id='video'>
     <video  width="320" height="240" controls>

        <source src="myVideo.mp4" type="video/mp4"  />

    </video>
  </div>
   


function App() {



  return (
  <div className="App"> 

     {image}

     {video}
  
  </div>
  


   
   
     
  );
}

export default App;
