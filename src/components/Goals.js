import React from 'react'
import myImage from './surajmal.jpg';

function Goals(props) {
  return (
    <>
    <br/><br/> 
    <section className="content">
    
    <h2 className='con-head'>{props.title}</h2><br/>
    <img src={myImage} alt='surajmal' style={{width:'50%', marginLeft:'25%', border:'2px solid black'}} /><br/><br/>
    <p style={{color:'black'}}>Our primary goal is to foster unity and togetherness among the marriageable young girls and boys of the Jaat community.
       We understand the importance of preserving and celebrating our rich tradition and culture, which is spread across various parts of the Jaat Samaj throughout India. 
       To achieve this goal, we have set our sights on organizing introductory functions and family get-together events that allow our community members to come together, 
       bond, and revel in the beauty of our heritage.</p><br/><br/>
       <h3>Introductory Functions</h3><br/>
       <p style={{color:'black'}}>One of the key objectives of our website is to arrange introductory functions that bring together Jaat community youth who are ready to embark on the journey of marriage. 
        These functions serve as a platform for individuals to meet and interact with potential life partners in a relaxed and welcoming environment. 
        We aim to facilitate meaningful connections that are deeply rooted in our culture, values, and traditions.</p><br/><br/>
        <h3>Family Get-Together Functions</h3><br/>
        <p style={{color:'black'}}>We believe that understanding the diversity within our community is vital for maintaining the richness of our culture. To accomplish this, we organize family get-together functions. 
          These events serve as a wonderful opportunity for families from different parts of the Jaat Samaj to come together, share their unique traditions, and strengthen the bonds that tie us together as a community.</p><br/><br/>
          <h3>Promoting Cultural Exchange</h3><br/>
          <p style={{color:'black'}}>Through our family get-together functions, we encourage dialogue and the exchange of cultural insights. 
            It's a chance for Jaat families hailing from various regions in India to learn about each other's customs, rituals, and ways of life.
             By promoting this cultural exchange, we aim to ensure that our traditions are passed down to future generations, 
             fostering a sense of pride and unity within our community.</p><br/><br/>
             <h3>Preserving Heritage</h3><br/>
             <p style={{color:'black'}}>We are committed to preserving and celebrating the rich heritage of the Jaat community. Our events are designed 
              to showcase the diverse and vibrant tapestry of our culture, whether it's the colorful attire, the delectable cuisine, the music and dance, 
              or the age-old traditions that make us who we are.
              It is our mission to pass down these traditions and ensure that they continue to thrive for generations to come.<br/>
              In summary, our website is dedicated to bringing together the young Jaat community members in the spirit of unity,
               love, and tradition. By arranging introductory functions and family get-together events, 
              we hope to strengthen the ties within our community and promote a deeper understanding of our culture's beauty across different regions of India.<br/>
              Join us in our mission to celebrate, unite, and cherish the incredible tapestry of the Jaat Samaj! Together,
               we can create a brighter future rooted in our rich traditions and values.
              </p>
    
       </section> 
       <br/><br/><br/><br/><br/><br/>
    </>
  )
}

export default Goals