import styled from 'styled-components';

export const MeetingChatBody = styled.div`
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


.chatContainer {
    padding: 16px 0px;
    gap: 20px;
    padding-left: 16px;
    display: flex;
    flex-direction: column;
    height: 100%;
  }
  
  
.messageBubble {
    width: 336px;
    display: flex;
    align-items: flex-end;
    gap: 12px;
    max-width: 80%; 
}

.messageBubble.sender {
    display: flex;
    justify-content: flex-end; 
    width: 336px;
    margin-left: auto; 
    gap: 12px;
    padding: 10px;
    max-width: 80%;
    
  }

.messageText.sender {
    border-radius: 10px;
    background-color: #F5935C; 
    color: white;
    padding: 10px;
    font-size: 16px;
    line-height: 1.4;
    max-width: 250px;
  }

.profileImage {
    width: 36px;
    height: 36px;
    flex-shrink: 0;
    border-radius: 50%;
}

.messageInfo {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
}

.senderName {
    color: var(--On-Light-Onlight-02, rgba(0, 0, 0, 0.50));
    font-family: Pretendard;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 22px; 
}

.messageText {
    background-color: #e7e8ee;
    padding: 10px;
    font-size: 16px;
    line-height: 1.4;
    border-radius: 10px;
    max-width: 250px; 
}
  
.senderName {
    font-size: 14px;
    color: #00000080;
    margin-right: 10px;
  }
  
.chatInputContainer {
    display: flex;
    align-items: center;
    padding: 10px;
    box-shadow: 0 -1px 0 0 #e7e8ee inset;
    border-top: 1px solid var(--gray-gray200, #E7E8EE);
    background: var(--Background-Background-50, #FFF);
    margin-top: 20%;

  }
  
.inputIcon {
    width: 32px;
    height: 32px;
    flex-shrink: 0;
    margin-right: 10px;
    
  }
  
.input {
    position: relative;
    color: var(--On-Light-Onlight-03, rgba(0, 0, 0, 0.38));
    font-family: Pretendard;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 22px;
    flex-direction: column;
    justify-content: center;
    flex: 1 0 0;
    display: flex;
    height: 30px;
    padding: 6px 16px;
    flex: 1 0 0;
    border-radius: 30px;
    background: var(--Background-Background-100, #EEE);
    outline: none; 
    overflow: hidden;
}

.input::before {
    content: attr(data-placeholder);
    position: absolute;
    pointer-events: none;
    user-select: none;
    left: 20px; 
    top: 50%;
    transform: translateY(-50%);
    color: var(--On-Light-Onlight-03, rgba(0, 0, 0, 0.38));
    font-family: Pretendard;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 22px;
    transition: opacity 0.2s ease-out;
}

.input:not(:empty)::before {
    opacity: 0;
}

.input:focus::before {
    display: none;
}

.chatday {
    display: flex;
    flex-direction: column;
    width: 130px; 
    margin: 5% auto; 
    align-items: center;
    padding: 4px 8px; 
    border-radius: 30px;
    background: var(--Overlay-Overlay-02, rgba(0, 0, 0, 0.32));
    color: var(--On-Dark-Ondark-01, rgba(255, 255, 255, 0.88));
    font-family: Pretendard;
    font-size: 12px;
    font-weight: 300;
    line-height: 20px; 
}

.alam {
    color: var(--On-Light-Onlight-02, rgba(0, 0, 0, 0.50));
    text-align: center;
    font-family: Pretendard;
    font-size: 14px;
    font-style: normal;
    line-height: 3px; 
    display: flex;
    width: 70%;
    align-items: center; 
    justify-content: center;
    margin: 0 auto; 
    margin-bottom: 5%;
}





`