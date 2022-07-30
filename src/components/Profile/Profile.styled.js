import styled from "styled-components";

export const ProfileContainer = styled.div`
width: 280px;
  border-radius:4px;
  font-size: 16px;
  color: #2c2c2c;
  background-color: #f3f3f3;
`;

export const DescriptionWrap = styled.div`
display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Avatar = styled.img`
width:150px;
  margin: 0 auto;
  padding-top: 10px;
  margin-bottom: 30px;
  border-radius: 50%;   
`;
export const UserName = styled.p`
margin-bottom: 10px;
  font-size: 30px;
  font-weight: 500;
  color: black;
  `;

  export const Tag = styled.p`
  margin-bottom: 10px;
  `;

    export const Location = styled.p`
  margin-bottom: 10px;
  font-weight:500;
  `;

   export const StatsList = styled.ul`
  width: 100%;
  display: flex;
  background-color: grey;
  `;

   export const StatsItem = styled.li`
    width: calc(100% / 3);
  padding: 20px 10px;
  display: flex;
  flex-direction: column;
  align-items: center;

  &:not(:last-child){
    border-right: 1px solid black;
  }
  `;

   export const ItemLabel = styled.span`
margin-bottom: 5px;
  font-size: 12px;
`;

export const ItemAmount = styled.span`
font-weight: 500;
  color: black;
`;