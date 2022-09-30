import styled from "styled-components";

export const SectionTabsWrapper = styled.div`
    display: flex;
    flex-direction: row;
    .item{
        display: flex;
        align-items: center;
        /* padding: 0 16px; */
        justify-content: center;
        font-size: 17px;
        font-weight: bold;
        /* padding: 0 16px; */
        /* border: solid 0.5px #00848A; */
        min-width: 120px;
        border: solid 0.5px #D8D8D8;
        border-radius: 3px ;
        
        box-shadow: 0px 1px 2px rgb(0 0 0 / 15%);
        text-align: center;
        height: 48px;
        line-height: 20px;
        margin-right: 16px;
        &.active{
            border: solid 0.5px #00848A;
            background: #00848A;
            color: #ffffff
        }
    }
    
`