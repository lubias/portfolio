import React from 'react'
import "./index.scss";

function ButtonRed({ text, link }) {
  return (
    <a href={link} target='_blank'><button className='Button'>{text}</button></a>
  )
}

export default ButtonRed;