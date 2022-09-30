import styled from "styled-components";

export const HeaderWrapper = styled.div`
    display: flex;
    flex-direction: row;
    padding: 16px;
    .item{
        padding: 6px 12px;
        border: 1px solid rgb(220, 224, 224);
        border-radius: 4px;
        margin: 0px 4px 0px 8px;
        color: rgb(72, 72, 72);
        &.active{
            border: solid 0.5px #00848A;
            background: #00848A;
            color: #ffffff
        }
    }
`