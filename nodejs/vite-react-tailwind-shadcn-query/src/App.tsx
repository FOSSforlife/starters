import { useQuery } from '@tanstack/react-query';
import './App.css';
import { Item } from './components/Item';
import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from './components/ui/table';
import { getData } from './services/getData';

function App() {
  const { data, isLoading } = useQuery({
    queryKey: ['operators'],
    queryFn: getData,
  });
  if (isLoading || data === undefined) {
    return <div>Loading...</div>;
  }
  return (
    <>
      <Table className="text-left">
        <TableHeader>
          <TableRow>
            <TableHead>Category</TableHead>
            <TableHead>Operator</TableHead>
            <TableHead>Description</TableHead>
            <TableHead>Domain</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((operator) => (
            <Item key={operator.category} operator={operator} />
          ))}
        </TableBody>
      </Table>
    </>
  );
}

export default App;
