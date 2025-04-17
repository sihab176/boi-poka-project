import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getStoredBook } from '../../../Utility/addToDB';
import Book from '../Book/Book';
import { getWaitToLocalStroage } from '../../../Utility/waitlest';




const ReadList = () => {
  const [readList,setReadList]=useState([])
  const [short,setShort]=useState("")
  const data=useLoaderData()
  // console.log(data)
  

  useEffect(()=>{
    const storedData=getStoredBook()
    const conVartedId=storedData.map(id=>parseInt(id))
    const myReadList=data.filter(book=>conVartedId.includes(book.bookId))
    setReadList(myReadList)
  },[])

  const hendleShort=(type)=>{
    setShort(type)
    if(type==="Pages"){
      const shortByPages=[...readList].sort((a,b)=>a.yearOfPublishing - b.yearOfPublishing)
      setReadList(shortByPages)
    }
    if(type==="Ratings"){
      const sortByRatings=[...readList].sort((a,b)=>a.rating - b.rating)
      setReadList(sortByRatings)
    }
  }
 const [wait,setWaitList]=useState([])
  useEffect(()=>{
    const witeListData=getWaitToLocalStroage()
    const convetedData=witeListData.map(ele=>parseInt(ele))
    const waitLest=data.filter(book=>convetedData.includes(book.bookId))
    setWaitList(waitLest)

    // console.log(waitLest)


  },[])
// console.log(wait)






  
    return (
        <div>
          <div>
          <details className="dropdown">
         <summary className="btn m-1">short :{short?short :""}</summary>
         <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
         <li onClick={()=>hendleShort('Pages')}><a>Pages</a></li>
         <li onClick={()=>hendleShort('Ratings')}><a>Ratings</a></li>
         </ul>
         </details>
          </div>



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
      <div  className='grid md:grid-cols-2 lg:grid-cols-3 '>
        {
          wait.map(element=><Book singleData={element}/>)
        }
      </div>
    </TabPanel>
  </Tabs>
        </div>
    );
};

export default ReadList;