import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import myImage from './Jaat-bann.jpg';


function Home() {

  return (
    <>
    
        <img src={myImage} class="img-fluid" alt="ResponsiveImage" style={{width:'100%'}}></img>
     <section className="hero" style={{marginLeft: '50px', marginRight: '50px', textAlign:'center'}}>
     <h2 className='con-head'>Welcome to Jaat Samaj Greater Noida.</h2><br/>
        <p style={{color:'black'}}>The Jaat people are a traditionally agricultural community in Northern India and Pakistan.
         Originally pastoralists in the lower Indus river-valley of Sindh, Jaats migrated north into the Punjab region in late medieval times, 
         and subsequently into the Delhi Territory, northeastern Rajputana, and the western Gangetic Plain in the 17th and 18th centuries. Of Hindu, Muslim and Sikh faiths, 
         they are now found mostly in the Indian states of Punjab, Haryana, Uttar Pradesh and Rajasthan and the Pakistani provinces of Sindh and Punjab.</p><br/>

        
         {/* <div className="row">
          
          <div className="col-md-6">
         <img class="rounded img-fluid"   src="https://hindi.cdn.zeenews.com/hindi/sites/default/files/styles/zm_700x400/public/2023/09/06/2148016-jat.gif?itok=V7YcpL2C&im=FitAndFill=(280,160)" alt="RoundedcornorImage"/>
          </div>
          <div className="col-md-6">
            
            <p style={{color:'black'}}>
            The Jaats are a paradigmatic example of community- and identity-formation in early modern Indian subcontinent. "Jaat" is an elastic label applied to a wide-ranging community from simple landowning peasants to wealthy and influential Zamindars<br/></p>
          </div>
          <div style={{height:'50px'}}></div>
          <div className="col-md-6">
            
            <img class="rounded img-fluid"   src="https://hindi.cdn.zeenews.com/hindi/sites/default/files/styles/zm_700x400/public/2023/05/26/1830085-zeer-2023-05-26t172619.600.jpg?itok=Pm_8ZiCF&im=FitAndFill=(280,160)" alt="RoundedcornorImage"/>
          </div>
          <div className="col-md-6">
            
            
            <p style={{color:'black'}}>
           The Jaats took up arms against the Mughal Empire during the late 17th and early 18th centuries. Gokula, a Hindu Jaat landlord was among the earliest rebel leaders against the Mughal rule during Aurangzeb's era.The Hindu Jaat kingdom reached its zenith under Maharaja Suraj Mal (1707–1763).The community played an important role in the development of the martial Khalsa panth of Sikhism.By the 20th century, the landowning Jaats became an influential group in several parts of North India, including Punjab,Western Uttar Pradesh,Rajasthan,Haryana and Delhi.Over the years, several Jaats abandoned agriculture in favour of urban jobs, and used their dominant economic and political status to claim higher social status.
            </p>
          </div>
         
        </div> */}
     </section>
     <br/><br/>
    </>
  )
}

export default Home