import styled from "styled-components";

export const ShowLocationSearchBody = styled.div``;

export const BottomSheetHeader = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid lightgray;
  p {
    font-weight: bold;
    padding: 5% 0;
    margin: 0;
    span {
      color: #f7a070;
    }
  }
`;
export const MapComponent = styled.div`
  height: 100%;
  overflow: hidden;
`;
export const SearchLocationInput = styled.input`
  width: 100%;
  height: 25px;
  margin-top: 5%;
  border: none;
  border-bottom: 1px solid lightgray;
  outline: none;
  padding-bottom: 5px;
  transition: border-bottom 0.3s;
  font-size: 16px;
  :focus {
    border-bottom: 1px solid #f7a070;
  }
`;

export const SetCurrentLocationButton = styled.div`
  border-radius: 50px;
  border: 1px solid #f7a070;
  width: 100%;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #f7a070;
  margin-top: 5%;
  cursor: pointer;
`;

export const SelectThisLocationButton = styled.div`
  position: absolute;
  bottom: 42%;
  z-index: 10;
  border-radius: 50px;
  width: 90%;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  background-color: #f7a070;
  margin-top: 5%;
  cursor: pointer;
`;
