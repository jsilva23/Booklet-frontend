import React from 'react';

import UserAppHeader from '@/components/autor/user-app-header';
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';
import { UserAppBook } from '@/components/autor/user-app-book';
import { BookUpload } from '@/components/autor/book-upload';

async function UserApp() {
  return (
    <>
      <UserAppHeader />
      <div className='border-t'>
        <div className='bg-background'>
          <div className='grid lg:grid-cols-5'>
            <div className='col-span-3 lg:col-span-5 lg:border-l'>
              <div className='flex items-center p-6 justify-between'>
                <div>
                  <span>Author Dashboard</span>
                </div>
                <BookUpload saveType='Adicionar' />
              </div>
              <div className='h-full px-4 py-6 lg:px-8'>
                <div className='flex items-center justify-between'>
                  <div className='space-y-1'>
                    <h2 className='text-2xl font-semibold tracking-tight'>
                      Meus Livros
                    </h2>
                  </div>
                </div>
                <Separator className='my-4' />
                <div className='flex flex-col space-y-2'>
                  <ScrollArea>
                    <div className='flex gap-4'>
                      <UserAppBook />
                      <UserAppBook />
                    </div>
                    <ScrollBar orientation='horizontal' />
                  </ScrollArea>
                </div>
                <Separator className='my-4' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default UserApp;
