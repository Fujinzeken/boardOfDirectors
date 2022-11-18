import styled from 'styled-components'

export const StyledFooter = styled.div`
    display:flex;
    flex-direction:column;
    background-color:#00296B;
    width:100%;
    padding:20px 60px;
    color: #F8FAFC;
    margin-left:60px;
    position:relative;

    
`

export const FooterTop = styled.div`
    display:flex;
    gap:100px;
    flex-wrap:wrap;
    padding:10px;
    margin-bottom:20px;
    
    &>div{
        display:flex;
        flex-direction:column;
        gap:20px;
        cursor:pointer;
   
    }

    h3{
        font-weight: 700;
font-size: 19px;
line-height: 23px;
    }

    span{
       
    font-family: 'Plus Jakarta Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    
    }

    
@media(max-width:${({theme})=> theme.mobile}){
      margin-top:40px;

    }
`

export const FooterBottom = styled.div`
    display:flex;
    justify-content:space-between;
    padding:10px;
    font-family: 'Plus Jakarta Sans';
    font-style: normal;
   
`

export const FoooterLogo = styled.span`
 
font-weight: 800;
font-size: 19px;
line-height: 23px;

@media(max-width:${({theme})=> theme.mobile}){
      position:absolute;
      top:0;
      left:30px;
      margin:20px 30px;
      
    }

`


export const FoooterCopyright = styled.span`
font-weight: 800;
font-size: 14px;
line-height: 23px;
margin-right:50px;

`