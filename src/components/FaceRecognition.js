import React from 'react'

const FaceRecognition = ({ imageURL, box }) => {
  return (
    <div className="center ma">
      <div className="absolute mt2">
        <img
          id="inputimage"
          alt="Pic"
          src={imageURL}
          width="500px"
          height="auto"
        />
        <div
          className="bounding-box"
          style={{
            top: box.topRow,
            right: box.rightCol,
            left: box.leftCol,
            bottom: box.bottomRow,
          }}
        ></div>
      </div>
    </div>
  )
}

export default FaceRecognition
