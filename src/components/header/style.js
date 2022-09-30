import styled from "styled-components";

export const HeaderWrapper = styled.div`
    display: flex;
    height: 80px;  
    align-items: center;
    font-weight: 600;
    font-size: 14px;
    border-bottom: 1px solid #eee;
    background-color: ${props => props.theme.isAlpha ? "rgba(255,255,255,0)": "rgba(255,255,255,1)"};
    border-bottom-color: ${props => props.theme.isAlpha ? "rgba(233,233,233,0)": "rgba(233,233,233,1)"};  
    /* color: ${props => props.theme.text.primaryColor}; */
      &.fixed{
        position: fixed;
        z-index: 99;
        top: 0;
        left: 0;
        right: 0;
    }
`