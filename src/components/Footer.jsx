import React from 'react'
import { FoooterCopyright, FoooterLogo, FooterBottom, FooterTop, StyledFooter } from '../styles/Footer.styles'

const Footer = () => {
  return (
    <StyledFooter>
        <FooterTop>
            <div>
                <h3>Company</h3>
                <span>About Us</span>
                <span>Career</span>
                <span>Partnerships</span>
                <span>Meet the Team</span>
                <span>Press</span>
                <span>Board of Directors</span>
            </div>
            <div>
                <h3>Links</h3>
                <span>Convert</span>
                <span>News</span>
                <span>Contact Us</span>
                
            </div>
            <div>
                <h3>Resources</h3>
                <span>Currency Encyclopedia</span>
                <span>Historical Currency exchange</span>
                
            </div>
            <div>
                <h3>Product</h3>
                <span>Api</span>
                <span>Integration Matrix</span>
                
            </div>
            <div>
                <h3>Support</h3>
                <span>Help Center</span>
                <span>FAQ</span>
                <span>File a complaint</span>
                <span>Fraud Report</span>
                
            </div>
            <div>
                <h3>Legal</h3>
                <span>Privacy Policy</span>
                <span>Terms and Conditions</span>
                <span>Cookie Policy</span>
            </div>
           
        </FooterTop>
        <hr/>
        <FooterBottom>
            <FoooterLogo>Street Rate</FoooterLogo>
            <FoooterCopyright>&copy;2022 Bevel All rights reserved</FoooterCopyright>
        </FooterBottom>

    </StyledFooter>
  )
}

export default Footer
