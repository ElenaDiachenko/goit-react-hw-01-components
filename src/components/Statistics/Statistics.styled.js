import styled from "styled-components";


function randomHexColor(){
   return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

export const StatsContainer = styled.section`
  display: flex;
  align-items: center;
  flex-direction: column;
  min-width:100%;
  padding: 24px;
`;

export const StatsTitle = styled.h2`
 font-size: 20px;
  font-weight: 700;
  padding: 24px;
  background-color: white;
`;

export const StatList = styled.ul`
    display:flex;
    flex-wrap:wrap;
`;

export const StatItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding:16px;
 min-width:80px;
 text-align: center;
  gap:8px;
  font-size:12px;
  color:white;
   background-color: ${p => randomHexColor()};
`;

export const StatItemLabel = styled.span`
    margin-bottom:8px;
    font-size:16px;
`;
export const StatItemPercent = styled.span`
font-size:16px;
`;