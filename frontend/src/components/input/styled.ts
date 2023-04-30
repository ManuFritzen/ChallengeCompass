import styled from 'styled-components';





export const Icone = styled.div`
    display: flex;
    
    
    img{
        margin-left: -40px;
        
        
    }

    .errorInput{
        border: 2px solid ${({theme}) => theme.textError};
    }

    .sucessInput{
        border: 2px solid ${({theme}) => theme.textTitle};
    }

    
    
    input[type="date"]::-webkit-inner-spin-button,
    input[type="date"]::-webkit-calendar-picker-indicator {
        display: none;
        -webkit-appearance: none;
    }
    
    

    input{
        display: flex;
        justify-content: space-between;
        align-items: center;

        width: 100%;
        height:62px;
        padding: 24px;

        
        border-radius: 46px;
        background: none;

        color: white;  
    }
    

`