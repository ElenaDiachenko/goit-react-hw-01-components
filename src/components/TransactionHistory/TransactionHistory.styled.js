import styled from "styled-components";

export const TransactionTable = styled.table`
 min-width: 600px;
  margin: 0 auto;
  color:#020202;
  font-size: 14px;
  font-weight:600;
  border: 2px solid #F7F7F7;
`;

export const TableHead = styled.thead`
 color: #fff;
  background-color: grey;
  font-size: 16px;
  font-weight:700;
`;

export const TableRow = styled.tr`
&:nth-child(even) {
  background-color: #F7F7F7;
}
`;

export const HeaderCell = styled.th`
vertical-align: middle;
  padding: 8px;
  text-align: center;
`;
    
export const TableBody = styled.tbody`
background-color: #fff;
`;

export const BodyCell = styled.td`
vertical-align: middle;
  padding: 10px;
  text-align: center;
  `;
  