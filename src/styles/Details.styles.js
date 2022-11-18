import styled from 'styled-components'

export const StyledDetails = styled.div`
    background:#B0CEFF;
    width:70%;
    height:450px;
    display:flex;
    justify-content:center;
    padding:50px;
    position:relative;
    
    div{
        display:flex;
        background:#fff;
       
    }

   

`

export const Column = styled.div`
    display:flex;
    gap:20px;
    align-items:flex-start;
    flex-direction:column;
    border: ${(props)=> props.border};
    padding: ${(props)=> props.padding};
    

    &>p, &>h2 &>span{
        font-family: 'Plus Jakarta Sans';
        font-style: normal;
       
    }

    &h2{
        font-weight: 600;
        font-size: 28px;
        line-height: 34px;
    }

    &span{
        font-weight: 400;
        font-size: 20px;
        line-height: 28px;
    }
    &>p{
        ${'' /* width:70%; */}
        font-weight: 400;
        font-size: 16px;
        line-height: 24px;

    }
    
`

export const Close = styled.div`
        position:absolute;
        top:-10px;
        right:-10px;
        cursor:pointer;
        border-radius:50%;
        height:0;

`