import styled from "styled-components";

export const RoomWrapper = styled.div`
    width:${props=>props.itemWidth};
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    padding: 8px 6px 12px;
    flex-shrink: 0;
    .room-img{
        width: 100%;
        position: relative;
        box-sizing: border-box;
        padding: 66.66% 8px 0;
        border-radius: 3px;
        overflow: hidden;
        img{
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
        /* width: 100%; */
    }
    .room-text{
        padding-top: 8px;
    }
    .room-name{
        margin-top: 4px;
    }
    .review{
        display: flex;
        flex-direction: row;
        align-items: center;
        font-size: 14px;
    }
    
    .slider {
    position: relative;
    cursor: pointer;

    &:hover {
      .control {
        display: flex;
      }
    }

    .control {
      position: absolute;
      z-index: 1;
      left: 0;
      right: 0;
      top: 0;
      display: none;
      justify-content: space-between;
      bottom: 0;
      color: #fff;

      .btn {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 83px;
        height: 100%;
        background: linear-gradient(to left, transparent 0%, rgba(0, 0, 0, 0.25) 100%);

        &.right {
          background: linear-gradient(to right, transparent 0%, rgba(0, 0, 0, 0.25) 100%);
        }
      }
    }

    .indicator {
      position: absolute;
      z-index: 9;
      bottom: 10px;
      left: 0;
      right: 0;
      width: 30%;
      margin: 0 auto;

      .item {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 14.29%;

        .dot {
          width: 6px;
          height: 6px;
          background-color: #fff;
          border-radius: 50%;

          &.active {
            width: 8px;
            height: 8px;
          }
        }
      }
    }
  }
`