import React from 'react';
import { useLoaderData, useParams } from 'react-router';
import { addToStoredDB } from '../../Utility/addToDB';

import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { addWaitToLocalStrogae } from '../../Utility/waitlest';

const MySwal = withReactContent(Swal)


const BookDetails = () => {
    const {id}=useParams()
    const covId=parseInt(id)
    const data=useLoaderData()
    const singleBook=data.find(book=>book.bookId ===covId)
    const {author,bookName,category,image,publisher,rating,review,tags,totalPages,yearOfPublishing}=singleBook
    // console.log(singleBook)
    //!
const hendleMarkAsRead=(id)=>{
        
MySwal.fire({
    title: "Good job!",
    text: "You clicked the button!",
    icon: "success"
           });
addToStoredDB(id)
}

const hendleWaitList=(id)=>{
    addWaitToLocalStrogae(id)
}

     


    return (
        <section className='mt-16 mb-16 flex flex-col md:flex-row'>
            <div className='bg-gray-200 p-16 rounded-3xl '>
                <img className='w-[420px] h-[h-550px]' src={image} alt="" />
            </div>
            <div className='w-[550px] px-10'> 
                <h1 className='text-3xl'>{bookName}</h1>
                <p>by: {author}</p>
                <div className='border-b border-gray-400 p-3'></div>
                <p className='p-3'>{category}</p>
                <div className='border-b border-gray-400 '></div>
                <p><span className='font-bold'>Reviwe</span> {review}
                </p>
                <div className='flex gap-16 mt-6 items-center'>
                    <p className='font-bold'>Tag:</p>
                    <div className='flex gap-16 text-green-400 my-3'>
                    {
                        tags.map(tag=><p>{tag}</p>)
                    }
                    </div>
                </div>
                <div className='border-b border-gray-400 p-3 '></div>
                <div className='space-y-6'>
                    <p>Name of pages : {totalPages}</p>
                    <p>Publisher: {publisher}</p>
                    <p>Yeat of Publishing: {yearOfPublishing}</p>
                    <p>Rating: {rating}</p>
                </div>
                
                <button onClick={()=>hendleMarkAsRead(id)} className="btn btn-outline btn-secondary mr-4 ">Mark as read</button>
                <button onClick={()=>hendleWaitList(id)} className="btn btn-outline btn-accent">Add to wishList</button>
            </div>
        </section>
    );
};

export default BookDetails;