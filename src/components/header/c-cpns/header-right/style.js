import styled from "styled-components";

export const HeaderRightWrapper = styled.div`
    flex: 1;
    display: flex;
    justify-content: flex-end;
    margin-right: 24px;
    color: ${props => props.theme.isAlpha ? "#fff": props.theme.text.primaryColor};
    .left-part{
        display: flex;
        .item{
            padding: 12px;
        }
    }
    .right-part{
        display: flex;
        align-items: center;
        position: relative;
        padding: 5px 5px 5px 12px !important;
        border-radius: 21px;
        border: 1px solid grey;
        /* width: 77px; */
        /* height: 42px; */
        .right-icon{
            margin-left: 12px;
        }
        .panel {
      position: absolute;
      top: 54px;
      right: 0;
      width: 240px;
      background-color: #fff;
      border-radius: 10px;
      box-shadow: 0 0 6px rgba(0,0,0,.2);
      color: #666;

      .top, .bottom {
        padding: 10px 0;

        .item {
          height: 40px;
          line-height: 40px;
          padding: 0 16px;

          &:hover {
            background-color: #f5f5f5;
          }
        }
      }

      .top {
        border-bottom: 1px solid #ddd;
      }
    }
    }
`