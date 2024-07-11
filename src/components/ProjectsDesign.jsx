import React from 'react'
import design01 from '../assets/design01.jpg';
import design02 from '../assets/design02.jpg';
import design03 from '../assets/design03.jpg';
import design04 from '../assets/design04.jpg';

function ProjectsDesign() {
  return (
    <div className="links links-design">
      <img src={design01} alt="design01" />
      <img src={design02} alt="design02" />
      <img src={design03} alt="design03" />
      <img src={design04} alt="design04" />
      <br/><br/>
      <a href="">See more</a>
    </div>
  )
}

export default ProjectsDesign
