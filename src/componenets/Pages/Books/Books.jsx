// import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import Book from '../Book/Book';
import { Suspense } from 'react';

const Books = () => {
const data=useLoaderData()
// console.log(data)

    return (
        <div>
            <h1 className='text-4xl text-center py-10'>Books</h1>
           
           <Suspense fallback={<h1 className='text-5xl text-center'>Lodding.........</h1>}>
           <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-10'>
           {
              data.map(singleData=><Book key={singleData.bookId} singleData={singleData}/>)
            }
           </div>
           </Suspense>
          
        </div>
    );
};

export default Books;