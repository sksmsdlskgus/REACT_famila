import styled from 'styled-components';

export const MeetingPostBody = styled.div`
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

.backBtn {
    width: 24px;
    height: 24px;
    position: absolute;
  }
  
  img {
    width: 100%;
    height: 100%;
  }
  
.titleText {
    overflow: hidden;
    color: var(--Gray-Cgray900, #1F2128);
    text-align: center;
    text-overflow: ellipsis;
    font-family: Pretendard;
    font-size: 18px;
    font-style: normal;
    font-weight: 600;
    line-height: 20px; 
    flex: 1;
  }

.badge {
    color: var(--primary-secondary-secondary, #F5935C);
    font-family: Pretendard;
    font-size: 18px;
    font-weight: 600;
    margin-left: 10px; 
  }


.menu{
    display: flex;
    padding: 2px 10px 0px 10px;
    align-items: flex-start;
    text-align: center;
    justify-content: space-around;
    
}
  
.menuLink {
    display: flex;
    padding: 12px;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    color: var(--link-color, #C4C7D4);
    font-weight: bold;
    
  }

.menuLink2{
    display: flex;
    padding: 12px;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    color: var(--link-color, #F5935C);
    font-weight: bold;
    border-bottom: 2px solid var(--primary-secondary-secondary, #F5935C);
    
  }
  
.menuLink:hover {
    text-decoration: underline;
  }

.category{
    display: flex;
    padding: 12px 16px;
    align-items: center;
    gap: 8px;
    align-self: stretch;


}
.cateLink{
    display: flex;
    padding: 8px 12px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 20px;
    background: var(--Gray-Cgray100, #F2F3F7);
    color: var(--Gray-Cgray600, #8A8D9E);
    font-family: Pretendard;
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: 14px; 
    text-decoration: none;
    transition: color 0.1s; 
}

.cateLink:active {
    background: black;
    color: white; 
}


.postbutton {
    position: fixed;
    bottom: 20px;
    width: 260px;
    left: 50%;
    transform: translateX(-50%);
    padding: 10px 28px;
    display: flex;
    gap: 10px;
    align-items: center;
    justify-content: center;
    border-radius: 100px;
    border: 1px solid var(--primary-secondary-secondary, #F5935C);
    background: var(--primary-secondary-secondary, #F5935C);
    box-shadow: 0px -10px 30px 0px rgba(255, 255, 255, 0.50), 0px 10px 30px 0px rgba(255, 255, 255, 0.50);
    color: var(--gray-Pure, #FFF);
    font-family: Pretendard;
    font-size: 18px;
    font-style: normal;
    font-weight: 600;
    line-height: 24px;
    cursor: pointer; 
}

.notice {
    padding-top: 200px;
    text-align: center;
    color: var(--link-color, #C4C7D4);
}


`