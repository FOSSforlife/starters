import { TableCell, TableRow } from './ui/table';

interface ItemProps {
  operator: Operator;
}

export function Item({ operator }: ItemProps) {
  return (
    <TableRow>
      <TableCell>{operator.category}</TableCell>
      <TableCell>{operator.aliases.join(', ')}</TableCell>
      <TableCell>{operator.description}</TableCell>
      <TableCell>{operator.domain}</TableCell>
    </TableRow>
  );
}
