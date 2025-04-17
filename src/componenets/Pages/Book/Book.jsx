import React from 'react';
import { FaStarHalfAlt } from "react-icons/fa";
import { Link } from 'react-router';

const Book = ({singleData}) => {
    // console.log(singleData)
   const {bookName,image,category,rating,tags,yearOfPublishing,publisher,bookId}=singleData


    return (
        <Link to={`/bookdetails/${bookId}`}>
        <section>
            <div className="card bg-base-100 w-80 shadow-sm">
  <figure className='bg-gray-200 py-9 w-11/12 mx-auto mt-4'>
    <img className='w-[130px] h-[166px] overflow-hidden object-cover'
      src={image}
      alt="Shoes" />
  </figure>
   
   <div className='flex gap-16 mx-auto mt-4 text-green-500'>
          {
            tags.map(tag=><p>{tag}</p>)
          }
   </div>
  <div className="card-body">
    <h2 className="card-title">
      {bookName}
      <div className="badge badge-secondary">{yearOfPublishing}</div>
    </h2>
    <p>{publisher}</p>
    <div className='border-t border-dashed py-3'></div>
    <div className="card-actions justify-between">
      <div className="badge badge-outline">{category}</div>
      <div className="badge badge-outline">{rating}<FaStarHalfAlt /></div>
    </div>
  </div>
</div>
        </section>
        </Link>
    );
};

export default Book;