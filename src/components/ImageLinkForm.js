import React from 'react'
import '../App.css'

const ImageLinkForm = ({ onInputChange, onButtonSubmit }) => {
  return (
    <div>
      <p className="f3">
        {'Please put the link the here to detect the face in the picture'}
      </p>
      <div className="center">
        <div className="pa4 br3 shadow-5">
          <input
            type="text"
            className="f4 pa2 w-70 centre"
            onChange={onInputChange}
          />
          <button
            className="w-30 grow f4 link ph3 pv2 dib white bg-light-purple"
            onClick={onButtonSubmit}
          >
            Detect
          </button>
        </div>
      </div>
    </div>
  )
}

export default ImageLinkForm