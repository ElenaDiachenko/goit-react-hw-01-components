import styled from "styled-components";

export const FriendItem = styled.li`
display: flex;
    align-items: center;
    justify-content: start;
    gap: 20px;
    margin-bottom: 16px;
    padding: 12px;
    background-color: #f3f3f3;
 box-shadow: 2px 8px 8px -1px rgba(0, 0, 0, 0.5);
    `;

export const Status = styled.span`
   width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${p => (p.isOnline ? "green" : "red")};
`;

export const Avatar = styled.img`
    padding: 8px;
    background-color: #d2d9ff;
    border-radius: 50%;
`;

export const Name = styled.p`
    font-size: 20px;
    font-weight: 600;
    color:black;
`;