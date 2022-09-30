import styled from "styled-components"

export const HeaderLeftWrapper = styled.div`
    flex:1;
    .logo{
        color: ${props => props.theme.isAlpha ? "#fff": props.theme.color.primaryColor};
        margin-left: 24px;
        cursor: pointer;
    }
`