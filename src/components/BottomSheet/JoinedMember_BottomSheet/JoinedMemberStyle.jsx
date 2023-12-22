import styled from 'styled-components';

export const BottomSheetHeader = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid lightgray;
    p{
        font-weight: bold;
        padding: 5% 0;
        margin: 0;
        span{
            color: #f7a070;
        }
    }
`
export const JoinedMemberDiv = styled.div`
    overflow: auto;
    height: 100%;
    flex: 1;
    
`
export const JoinedMemberItemDiv = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    border-bottom: 1px solid lightgray;
`

export const JoinedMemberItem = styled.div`
    display: flex;
    align-items: center;
    padding: 5% 0;
    img{
        border-radius: 50%;
        width: 70px;
        height: 50px;

    }   
`
export const JoinedMemberItemTexts = styled.div`
     margin-left: 5%;
     width: 70%;
    overflow: hidden;
    text-overflow: ellipsis;
    // white-space: nowrap;
`
export const JoinedMemberName = styled.p`
    font-weight: bold;
    margin: 2% 0;
    
`
export const JoinedMemberOrder = styled.p`
    font-size: 12px;
    color: #f7a070;
    margin: 0;
`
export const JoinedMemberSubOrder = styled.p`
    font-size: 12px;
    color: #f7a070;
    margin: 0;
`
export const OutButton = styled.div`
    border-radius: 50px;
    background-color: #f7a070;
    color: white;
    padding: 3%;
    width: 50px;
    text-align: center;

`