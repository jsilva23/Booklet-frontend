/* eslint-disable @next/next/no-img-element */
import { PlusCircleIcon } from 'lucide-react';

import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

type BookTeype = {
  saveType: string;
};

export function BookUpload({ saveType }: BookTeype) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant={saveType === 'Editar' ? 'outline' : 'default'}>
          {saveType === 'Adicionar' && (
            <PlusCircleIcon className='mr-2 h-4 w-4' />
          )}
          {saveType} Livro
        </Button>
      </DialogTrigger>
      <DialogContent className='sm:max-w-[425px]'>
        <DialogHeader>
          <DialogTitle>{saveType} Livro</DialogTitle>
          <DialogDescription>
            Adicione o título do seu livro e Click em salvar.
          </DialogDescription>
        </DialogHeader>

        <div className='grid grid-cols-4 items-center gap-4'>
          <Label htmlFor='name' className='text-right'>
            Título
          </Label>
          <Input id='bookTitle' defaultValue='' className='col-span-3' />
        </div>

        <DialogFooter>
          <Button type='submit'>Salvar</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
