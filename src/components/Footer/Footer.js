import React from 'react'

import './Footer.css'

export default class Footer extends React.Component {
  render(){
    return (
      <footer className="footer">
        <div className="divider1"></div>      
        <p className="footer__copy">&copy; 2018 Ilham Wahabi. All Rights Reserved</p>
        <div className="divider3"></div>
        <div className="footer__link">
          <a href="https://github.com/IlhamWahabiGX"><p>Github</p></a>
          <a href="https://www.linkedin.com/in/ilham-wahabi-aa1479131/"><p>LinkedIn</p></a>
          <a href="https://drive.google.com/open?id=1m0MwAYj3GLWRCuFUzzAHQqXabSB6cNul"><p>My CV</p></a>
        </div>
        <div className="divider1"></div>        
      </footer>
    )
  }
}