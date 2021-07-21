import React from 'react'
import Tilt from 'react-tilt'
import '../index.css'
import face from './img/face.png'

const Logo = () => {
  return (
    <div className="ma4 mt0">
      <Tilt
        className="Tilt br2 shadow-2"
        options={{ max: 25 }}
        style={{ height: 150, width: 150 }}
      >
        <div className="Tilt-inner" style={{ paddingTop: '30px' }}>
          {' '}
          <img alt={'Logo'} src={face}></img>
        </div>
      </Tilt>
    </div>
  )
}

export default Logo
