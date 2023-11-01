import React from 'react'

function About(props) {
  return (
    <>
    
    <section className="content">
      <div className="container">
        <h2 className='con-head'>{props.title}</h2><br/><br/>
        <div className="row">
          <div className="col-md-6">
          <p style={{color:'black'}}>
           The Jaats took up arms against the Mughal Empire during the late 17th and early 18th centuries. Gokula, a Hindu Jaat landlord was among the earliest rebel leaders against the Mughal rule during Aurangzeb's era.The Hindu Jaat kingdom reached its zenith under Maharaja Suraj Mal (1707–1763).The community played an important role in the development of the martial Khalsa panth of Sikhism.By the 20th century, the landowning Jaats became an influential group in several parts of North India, including Punjab,Western Uttar Pradesh,Rajasthan,Haryana and Delhi.Over the years, several Jaats abandoned agriculture in favour of urban jobs, and used their dominant economic and political status to claim higher social status.
            </p>
           
          </div>
          <div className="col-md-6">
            {/* Paragraph goes here */}
            <p style={{color:'black'}}>
            The Jaats are a paradigmatic example of community- and identity-formation in early modern Indian subcontinent. "Jaat" is an elastic label applied to a wide-ranging community from simple landowning peasants to wealthy and influential Zamindars<br/></p>
          </div>
          <div style={{height:'100px'}}></div>
          <div className="col-md-6">
            {/* Paragraph goes here */}
            {/* Image goes here */}
            <img
              src="https://investorsaura.com/images/ms.jpg"
              alt="Mountain"
              style={{ maxWidth: '100%', height: 'auto' }}
            />
          </div>
          <div className="col-md-6">
            {/* Image goes here */}
            <img
              src="https://investorsaura.com/images/cr.jpg"
              alt="Mountain"
              style={{ maxWidth: '100%', height: 'auto' }}
            />
          </div>
         
        </div>
      </div>
      <div style={{"height":"100px"}}></div>
    </section>

    </>
  )
}

export default About