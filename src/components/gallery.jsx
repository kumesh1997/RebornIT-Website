import { Image } from "./image";

export const Gallery = (props) => {
  return (
    <div id='portfolio' className='text-center'>
      <div className=''>
        <div className='section-title'>
          <h2 id="capableMainText">What we are <div className="capableText">Capable</div> of?</h2>
          
        </div>
        <div className=''>
          <div className='portfolio-items'>
           <video controls width="90%" height="440" loop>
              <source src="img/demoVideo.mp4" type="video/mp4" id="video"></source>
           </video> 
          </div>
        </div>
      </div>
    </div>
  )
}
