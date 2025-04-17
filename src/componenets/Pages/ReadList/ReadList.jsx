import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getStoredBook } from '../../../Utility/addToDB';
import Book from '../Book/Book';

const ReadList = () => {
  const [readList,setReadList]=useState([])
  const data=useLoaderData()
  

  useEffect(()=>{
    const storedData=getStoredBook()
    const conVartedId=storedData.map(id=>parseInt(id))
    const myReadList=data.filter(book=>conVartedId.includes(book.bookId))
    setReadList(myReadList)
  },[])
  console.log(readList)
    return (
        <div>
             <Tabs>
    <TabList>
      <Tab>Book As read</Tab>
      <Tab>My wish list</Tab>
    </TabList>

    <TabPanel>
      <h2> book to red {readList.length}</h2>
      <div className='grid md:grid-cols-2 lg:grid-cols-3 '>
        {
          readList.map(b=><Book key={b.bookId} singleData={b}/>)
        }
      </div>
    </TabPanel>
    <TabPanel>
      <h2>My wish list</h2>
    </TabPanel>
  </Tabs>
        </div>
    );
};

export default ReadList;