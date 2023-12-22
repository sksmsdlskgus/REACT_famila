import React,{useState} from 'react';
import * as styles from './JoinedMemberStyle';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCrown, faX } from "@fortawesome/free-solid-svg-icons";


const JoinedMember = ({ joinedMember, toggleBottomSheet }) => {
    
    const [isOrder, setIsOrder] = useState(true);
    
  return (
      <>
          <styles.BottomSheetHeader>
              <p>모임원 <span>{joinedMember.length}</span></p>
              <FontAwesomeIcon icon={faX}
                  style={{
                      color: "lightgray",
                      cursor: "pointer"
                  }}
                onClick={toggleBottomSheet}
              />
          </styles.BottomSheetHeader>
          <styles.JoinedMemberDiv>
              {joinedMember.map((member, index) => (
                    <styles.JoinedMemberItemDiv key={index}>
                        <styles.JoinedMemberItem >
                            <img src={member.profileImg} alt="img" style={{border:`${member.isOrder ? "3px solid orange" : "none"}`}}></img>
                          <styles.JoinedMemberItemTexts>
                              {member.isOrder ? 
                                  //아이콘
                                  <styles.JoinedMemberOrder>
                                      <FontAwesomeIcon icon={faCrown} />{" "}내가 모임장
                                  </styles.JoinedMemberOrder> : 
                                    member.isSubOrder ?
                                  <styles.JoinedMemberSubOrder>
                                      <FontAwesomeIcon icon={faCrown} />{" "}부회장
                                  </styles.JoinedMemberSubOrder> : 
                                  <div></div>
                              }
                              <styles.JoinedMemberName>{member.name}</styles.JoinedMemberName>
                          </styles.JoinedMemberItemTexts>
                      </styles.JoinedMemberItem>
                      {isOrder ?
                          <styles.OutButton>퇴출</styles.OutButton> :
                          <></>
                      }
                    </styles.JoinedMemberItemDiv>
              ))}
              <div style={{paddingTop:"5%"}}></div>
          </styles.JoinedMemberDiv>
      </>
  )
}

export default JoinedMember