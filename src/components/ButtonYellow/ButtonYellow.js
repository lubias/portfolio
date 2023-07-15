import React from 'react'
import "./index.scss";

function ButtonYellow({ text, link }) {
  return (
    <a href={link} target='_blank'><button className='Button'>{text}</button></a>
  )
}

export default ButtonYellow;