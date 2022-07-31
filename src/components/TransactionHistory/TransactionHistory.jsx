import PropTypes from 'prop-types';
import { TransactionTable, TableHead,TableBody,TableRow,HeaderCell,BodyCell } from "./TransactionHistory.styled"
 
export const TransactionHistory = ({items}) => {
    return <TransactionTable>
        <TableHead>
            <TableRow>
                <HeaderCell>Type</HeaderCell>
                <HeaderCell>Amount</HeaderCell>
                <HeaderCell>Currency</HeaderCell>
            </TableRow>
        </TableHead>
        <TableBody>
        {items.map(({id,type,amount,currency}) => (
          <TableRow key={id}>
            <BodyCell>{type.charAt(0).toUpperCase()+ type.slice(1)}</BodyCell>
            <BodyCell>{amount}</BodyCell>
            <BodyCell>{currency}</BodyCell>
           </TableRow> 
            ))}
        </TableBody>
    </TransactionTable>
}


TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};