import React from 'react'
import FooterCSS from '../CSS/Footer.module.css'


function Footer() {
  return (
    <footer className={FooterCSS['main-div']}>
      <small className={FooterCSS.copyright}>&copy; 2030. Copyright by AronzySly.</small>
      <p>Version <b>1.0</b></p>
    </footer>
  )
}

export default Footer
