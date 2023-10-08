import { UserNav } from '../common/user-nav';

import React from 'react';

const UserAppHeader = () => {
  return (
    <header>
      <nav className='flex justify-between items-center m-4'>
        <span className='font-extrabold'>
          Book<span className='font-extralight'>Let</span>
        </span>
        <UserNav />
      </nav>
    </header>
  );
};

export default UserAppHeader;
