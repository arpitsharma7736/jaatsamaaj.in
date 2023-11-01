import React from 'react'
import { Link } from 'react-router-dom';
import myImage from './Jaat-Samaj.png';

function Header(props) {
    const linkStyle = {
        textDecoration: 'none', // Remove underlines
        position: 'relative', // Add position relative for the underline
      };
      const underlineAnimation = {
        content: '""',
        position: 'absolute',
        width: '0%',
        height: '2px', // Set the desired height of the underline
        bottom: '0',
        left: '0',
        backgroundColor: 'goldenrod', // Change the color as needed
        transition: 'width 0.3s', // Add a transition for smooth animation
      };
    
      const handleMouseEnter = (e) => {
        const underlineElement = e.target.querySelector('.underline');
        if (underlineElement) {
          underlineElement.style.width = '100%';
        }
      };
    
      const handleMouseLeave = (e) => {
        const underlineElement = e.target.querySelector('.underline');
        if (underlineElement) {
          underlineElement.style.width = '0%';
        }
      };
  return (
    <>
    
     {/* <div style={{'height':'30px'}}></div> */}
     <header>
        <h1>{props.title}</h1>
        <nav>
            <ul>
              <img src={myImage} alt='jaat-samaaj-logo' />
                <li><Link to="/" className='nav1' style={linkStyle}  onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}>Home
                <div className="underline" style={underlineAnimation}></div>
                </Link></li>
                <li><Link to="/about" className='nav1' style={linkStyle}  onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}>About Us
                <div className="underline" style={underlineAnimation}></div>
                </Link></li>
                <li><Link to="/history" className='nav1' style={linkStyle}  onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}>History
                <div className="underline" style={underlineAnimation}></div>
                </Link></li>
                <li><Link to="/contact" className='nav1' style={linkStyle}  onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}>Contact Us
                <div className="underline" style={underlineAnimation}></div>
                </Link></li>
                <li><Link to="/gallery" className='nav1' style={linkStyle}  onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}>Photo Gallery
                <div className="underline" style={underlineAnimation}></div>
                </Link></li>
                <li><Link to="/members" className='nav1' style={linkStyle}  onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}>Our Members
                <div className="underline" style={underlineAnimation}></div>
                </Link></li>
                <li><Link to="/goals" className='nav1' style={linkStyle}  onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}>Our Goals
                <div className="underline" style={underlineAnimation}></div>
                </Link></li>
                <li><Link to="/adminform" className='nav1' style={linkStyle}  onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}>Admin Form
                <div className="underline" style={underlineAnimation}></div>
                </Link></li>
                
                {/* <li><Link to="/list" className='nav1' style={linkStyle}  onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}>List
                <div className="underline" style={underlineAnimation}></div>
                </Link></li> */}
            </ul>
        </nav>
    </header>
    
    </>
    )
}

export default Header