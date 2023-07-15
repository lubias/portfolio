import React from 'react';
import './index.scss';
import { FaUnity, FaJs, FaHtml5, FaCss3, FaReact, FaNodeJs, FaPhp } from 'react-icons/fa';

function Skils() {
  return (
    <div id="Skills" className='Skills'>
      <h1 className='Skills__h1'>Habilidades</h1>
      <p className='Skills__p'>Conheça minhas principais habilidades</p>
      <div className='Skills__div-icons'>
        <FaJs size={70} color='#F7DF1E' className='Skills__icones'/>
        <FaHtml5 size={70} color='#E44D25' className='Skills__icones'/>
        <FaCss3 size={70} color='#379AD6' className='Skills__icones'/>
        <FaReact size={70} color='#00D8FF' className='Skills__icones'/>
        <FaNodeJs size={70} color='#539e43' className='Skills__icones'/>
        <FaPhp size={70} color='#8993be' className='Skills__icones'/>
        <FaUnity size={70} color='#000000' className='Skills__icones'/>
      </div>
    </div>
  )
}

export default Skils