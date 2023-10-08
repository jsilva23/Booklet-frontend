import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '../ui/button';
import { BookUpload } from './book-upload';

export function UserAppBook() {
  

  return (
    <Card>
      <CardHeader>
        <CardTitle>Book title</CardTitle>
        <CardDescription>Author: John Doe</CardDescription>
      </CardHeader>
      <CardFooter className='flex justify-between gap-5'>
        <BookUpload saveType='Editar' />
        <Button>Deletar</Button>
      </CardFooter>
    </Card>
  );
}
