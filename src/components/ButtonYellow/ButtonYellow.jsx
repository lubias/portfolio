import React from 'react'
import "./index.scss";

function ButtonYellow({ text, link, target="_blank" }) {
  return (
    <a href={link} target={target}><button className='Button'>{text}</button></a>
  )
}

export default ButtonYellow;