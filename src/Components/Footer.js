import React from 'react';
import {FaGithub, FaLinkedin} from "react-icons/fa";
import {GrMail} from "react-icons/gr";
import {SiKaggle} from "react-icons/si"

const Footer = () => {
  return (
    <footer>
      <h4>Developed by Archie Aligsao</h4>
      <h4>Copyright &copy; 2025 archalig</h4>
      <div className='footerLinks'>
        <a href="https://github.com/archalig" target='_blank' rel='noreferrer'><FaGithub/></a>
        <a href="https://www.linkedin.com/in/archiealigsao/" target='_blank' rel='noreferrer'><FaLinkedin/></a>
        <a href='mailTo:archie.a.aligsao@gmail.com' target='_blank' rel='noreferrer'><GrMail/></a>
        <a href="https://www.kaggle.com/aaachiii" target="_blank" rel='noreferrer'><SiKaggle/></a>
      </div>
    </footer>
  )
}

export default Footer