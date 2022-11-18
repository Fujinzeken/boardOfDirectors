import styled from 'styled-components'


export const StyledHeader = styled.header`
    background: #fff;
    padding: 20px 60px;
    width: 100%;
    margin-bottom:20px;
`

export const Nav = styled.nav`
    display:flex;
    justify-content: space-between;
    align-items:center;
    padding: 0px 60px;

   
    @media(max-width:${({theme})=> theme.mobile}){
       padding:0 20px;
    }
`

export const Span = styled.span`
        font-family: 'Inter';
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 24px;
        color:#94A3B8;

        @media(max-width:${({theme})=> theme.mobile}){
        display:none;
      
    }
    
`

export const Logo = styled.p`
    color:#00296B;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-size: 36px;
    line-height: 44px;

     
    @media(max-width:${({theme})=> theme.mobile}){
      font-size:23px;
    }
`

export const Flex = styled.div`
    display:flex;
    gap:25px;
    cursor:pointer;
    align-items:center;
    position:relative;

    div{
        display:flex;
        align-items:center;
       
    }

    & >img{
        display:none;
    }

    @media(max-width:${({theme})=> theme.mobile}){
        &>img{
            display:flex;
        }

    }
`


export const CountryImg = styled.img`
    width:24px;
    height:17px;
    object-fit:contain;
    margin-right:10px;
    @media(max-width:${({theme})=> theme.mobile}){
       display:none
    }
`



export const DropDown = styled.img`
    width:15px;
    height:7px;
    object-fit:contain;
    @media(max-width:${({theme})=> theme.mobile}){
       display:none
    }
`

export const NavMobile = styled.div`
    display:flex;
    flex-direction:column;
    background-color:#102DB5;
    position:absolute;
    top:30px;
    left:-35px;
    gap:30px;
    padding:20px 50px;
    align-items:center;
    text-align:center;
    border-radius:5px;
    z-index:2;


    span{
        font-family: 'Inter';
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 24px;
        color:#94A3B8;
        margin-bottom:20px;
    }
`