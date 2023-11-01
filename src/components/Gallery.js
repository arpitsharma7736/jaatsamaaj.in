import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

function Gallery(props) {
  return (
    <>
    
    <div style={{'margin':'30px'}} className='photo-gal'>
      <h2 className='con-head'>{props.title}</h2><br/>
    <div className="row">
      <div className="col-lg-4 col-md-12 mb-4 mb-lg-0">
        <img
          src="https://investorsaura.com/images/ccs.jpg"
          className="w-100 shadow-1-strong rounded mb-4"
          alt="Boat on Calm Water"
        />

        <img
          src="https://investorsaura.com/images/mst.jpg"
          className="w-100 shadow-1-strong rounded mb-4"
          alt="Wintry Mountain Landscape"
        />
      </div>

      <div className="col-lg-4 mb-4 mb-lg-0">
        <img
          src="https://investorsaura.com/images/ms.jpg"
          className="w-100 shadow-1-strong rounded mb-4"
          alt="Mountains in the Clouds"
        />

        <img
          src="https://investorsaura.com/images/devilal.jpg"
          className="w-100 shadow-1-strong rounded mb-4"
          alt="Boat on Calm Water"
        />
      </div>

      <div className="col-lg-4 mb-4 mb-lg-0">
        <img
          src="https://investorsaura.com/images/rmp.jpg"
          className="w-100 shadow-1-strong rounded mb-4"
          alt="Waves at Sea"
        />

        <img
          src="https://investorsaura.com/images/cr.jpg"
          className="w-100 shadow-1-strong rounded mb-4"
          alt="Yosemite National Park"
        />
      </div>
    </div>
    </div>
    <div style={{'width':'100%', 'height':'30px' }}></div>

    </>
  )
}

export default Gallery