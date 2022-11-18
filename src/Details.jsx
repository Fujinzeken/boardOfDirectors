import React from 'react'
import { StyledDetails, Column, Close, DetailsModal, Return } from './styles/Details.styles'
import detailsPic from './images/detailsPic.svg'
import close from './images/close.svg'
import back from './images/arrow-left.svg'

const Details = ({setShowDetails}) => {

  const handleClick = ()=>{
    setShowDetails(false)
  }
  return (
    <StyledDetails>
    <DetailsModal>
    <div> 
      <Column>
        <img src={detailsPic} alt='' />
        <Column padding='0 20px'>
        <p className='p-tag'>52 Years</p>
        <p className='p-tag'>Married</p>
        <p className='p-tag'>New York</p>
        </Column>
      </Column>
      <Column border='1px solid #000000;' padding='20px'>
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
      <Close>
    <img src={close} alt='' onClick={handleClick} />
    </Close>
    </div>
    
    </DetailsModal>
   <Return src={back} alt='back-arrow'  onClick={handleClick}/>
    </StyledDetails>
  )
}

export default Details
