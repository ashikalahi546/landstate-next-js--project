import Link from 'next/link';
import React from 'react';

const NotFound = () => {
      return (
            <div className='flex flex-col h-screen justify-center items-center gap-1'>
                <p className='text-2xl'>Not Found  </p>
                <Link className='px-6 py-2.5  bg-primary text-white rounded-md font-medium leading-[22px] ' href="/">Go back</Link>
            </div>
      );
};

export default NotFound;