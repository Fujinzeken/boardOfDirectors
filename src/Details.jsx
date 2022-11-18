import React from 'react'
import { StyledDetails, Column, Close } from './styles/Details.styles'
import detailsPic from './images/detailsPic.svg'
import close from './images/close.svg'
import {Link} from 'react-router-dom'

const Details = () => {
  return (
    <StyledDetails>
    <div>
      <Column>
        <img src={detailsPic} alt='' />
        <Column padding='0 20px'>
        <p>52 Years</p>
        <p>Married</p>
        <p>New York</p>
        </Column>
      </Column>
      <Column border='1px solid #000000;' padding='50px'>
        <h2>Mark Zina</h2>
        <span>Chief Creative Officer</span>
        <p>Mark Zina is a professional creative director with 20+ years of experience, 
        skilled in relationship-building and team concept development. 
        He oversees streetRate's creative and technology teams. 
        Previously, Mark was Executive creative director at InnerVista, 
        created in-house graphic design department, saving clients $450K per year and growing 
        client base by 27% in 14 months. Landed accounts with 
        Comcast, Amazon, and Ford Motor Company worth a combined $5.3M annually.
        </p>
      </Column>
    </div>
    <Close>
    <Link to='/'><img src={close} alt='' /></Link>
    </Close>
    </StyledDetails>
  )
}

export default Details
