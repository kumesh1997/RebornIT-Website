export const Services = (props) => {
  return (
    <div id='services' className='text-center'>
      <div className=''>
        <div className='section-title'>
          <h2>A reputation for delivering
          <div className="blueText">fast-turnaround, high-end</div>
          content</h2>
          
        </div>
        <div className='row'>
        <div className='col-md-3'>
        </div>
                <div className='col-md-6 accordion' id="accordionExample">
                 {/* <div className="serviceDiv">
                   <div className="serviceContent">
                     <div className="serviceContentInnerText">
                        <h3><div className="IntermediateColor">01</div> Web Development <img className="downArrow" src="img/downArrow .png"></img> </h3>  
                        
                     </div>
                     <div className="serviceContentInnerImg">
                     
                     </div>
                    
                   </div>

                   <div className="serviceContent1">
                    <h3><div className="IntermediateColor">02</div> Mobile Apps Development <img className="downArrow" src="img/downArrow .png"></img></h3>
                   </div>

                   <div className="serviceContent">
                    <h3><div className="IntermediateColor">03</div> UI Design <img className="downArrow" src="img/downArrow .png"></img></h3>
                   </div>
                 </div> */}
                 <div class="accordion-item">
                  <h2 class="accordion-header serviceContent" id="headingOne">
                  <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                  <div className="IntermediateColor">01</div> Web Development <img className="downArrow" src="img/downArrow .png"></img>
                   </button>
                   </h2>
                  <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                   <div class="accordion-body">
                  We create your unique branding with a stylish design and authentic values for a unique, digital brand presence. We use innovative and breakthrough technologies in web design and development to bring degital solutions to life.
                  We produce outstanding content for you and transform your budget into qualified new customers with the performance marketing nerds.
                </div>
              </div>
             </div>


            
             <div class="accordion-item">
               <h2 class="accordion-header serviceContent1" id="headingTwo">
                  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                  <div className="IntermediateColor">02</div> Mobile Apps Development <img className="downArrow" src="img/downArrow .png"></img>
                 </button>
               </h2>
               <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                 <div class="accordion-body">
                   <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                 </div>
                </div>
             </div>


             <div class="accordion-item">
              <h2 class="accordion-header serviceContent" id="headingThree">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                <div className="IntermediateColor">03</div> UI Design <img className="downArrow" src="img/downArrow .png"></img>
                </button>
              </h2>
             <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
               <div class="accordion-body">
                      <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
               </div>
             </div>
            </div>
                       <div>
                            <button type='submit' className='' id="expolreBtn">
                            EXPLORE YOUR IDEAS  <img src="img/moveright.png"></img> 
                            </button>
                         </div>
                  
                </div>

                <div className='col-md-3'>
              </div>
              
        </div>



      



      </div>
    </div>
  )
}
