import styled from 'styled-components';

export const MeetingItemsBody = styled.div`
    .head {
  width: 100%;
  height: 56px;
  padding: 18px 80px;
  box-sizing: border-box;
  text-align: center;
  font-size: 18px;
  font-weight: 600;
  line-height: 20px;
  box-shadow: 0 0 0 1px #e7e8ee inset;
  position: relative;
}

.leftArrow {
  width: 24px;
  height: 24px;
  top: 16px;
  left: 16px;
  position: absolute;
}

.titleBox {
  display: flex;
  padding: 2px 10px 0px 10px;
  box-sizing: border-box;
  justify-content: space-between;
  a{
    color: inherit;
    text-decoration: none;
    :hover{
        color: inherit;
        text-decoration: none;
    }
  }

}

.title {
  padding: 12px;
  color: var(--Gray-Cgray400, #c4c7d4);
  font-size: 1rem;
  font-weight: 600;
  line-height: 24px;
  box-sizing: border-box;
}

.selTitle {
  padding: 12px;
  color: var(--primary-secondary-secondary, #f5935c);
  font-size: 18px;
  font-weight: 600;
  line-height: 24px;
  box-sizing: border-box;
  border-bottom: 2px solid var(--primary-secondary-secondary, #f5935c);
}

.search-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 80%;
    padding: 3%; 
    border: 1px solid #ccc;
    border-radius: 3px;
    margin-left: 16px; 
    margin-bottom: 4px; 
}


.search-area {
    // color: var(--On-Light-Onlight-03, rgba(0, 0, 0, 0.38));
    font-family: Pretendard;
    font-size: 16px;
    font-style: normal;
    line-height: 28px;
    width: 100%;
    height: 30px;
    outline: none;
    overflow: hidden;
    border: none;
}
.search-area:focus{
    outline: none;
}

.notice {
    padding-top: 180px;
    text-align: center;
    color: var(--link-color, #C4C7D4);
}

.meetingShopping{
    text-align: left;
    padding: 18px; 
    color: var(--Gray-Cgray800, #31343F);
    font-family: Pretendard;
    font-size: 20px; 
    font-style: normal;
    font-weight: 600;
    line-height: 32px; 
    margin-top: 15px; 
}


`