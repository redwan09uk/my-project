import './App.css'
import Header from './Components/Header/Header'
import Blogs from './Components/Blogs/Blogs'
import Bookmarks from './Components/Bookmarks/Bookmarks'
import { useState } from 'react'

function App() {

  //state declaration for bookmarks
  const [bookmarks, setBookmarks] =useState([]);

  //state declaraion for reading time
  const [readingTime, setReadingTime] = useState(0)  //default value add 0 here

  //EventHandler for bookmarks

  const handleAddToBookmark = blog =>{
    const newBookmarks = [...bookmarks, blog];
    setBookmarks(newBookmarks);
    
  }

   //EventHandler for reading time

   const handleMarkAsRead = time =>{
    const newReadingTime = readingTime+time;
    setReadingTime(newReadingTime);
   }

  return (
    <>

      <Header></Header>
      <div className='md:flex max-w-7xl mx-auto'>
         <Blogs handleAddToBookmark={handleAddToBookmark} handleMarkAsRead={handleMarkAsRead}></Blogs>
         <Bookmarks bookmarks={bookmarks} readingTime={readingTime}></Bookmarks>
      </div>

    </>
  )
}

export default App
