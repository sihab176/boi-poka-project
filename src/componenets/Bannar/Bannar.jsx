import React from 'react';
import BannerImg  from"../../assets/books.jpg"

const Bannar = () => {
    return (
       <section className='flex justify-around items-center p-24 bg-gray-200 rounded-3xl mt-8'>
        <div>
            <h1 className='text-4xl font-bold '>Books to freshen up <br /> your bookshelf</h1>
            <button className='btn mt-6 bg-green-400'>View The List</button>
        </div>
        <div>
            <img className='w-80' src={BannerImg} alt="" />
        </div>
       </section>
    );
};

export default Bannar;