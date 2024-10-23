
import { useState } from 'react'
import './App.css'
import Blogs from './commonents/Blogs/Blogs'
import Bookmarks from './commonents/Bookmarks/Bookmarks'
import Header from './commonents/Headers/Header'

function App() {
  const [bookmarks, setBookmarks] = useState([]);
  const handleBookmarksButton = blog => {
    const newBookmark = [...bookmarks, blog];
    setBookmarks(newBookmark);
  }

  return (
    <>

      <Header></Header>
      <main className='md:flex max-w-6xl mx-auto'>
        <Blogs handleBookmarksButton={handleBookmarksButton}></Blogs>
        <Bookmarks bookmarks={bookmarks}></Bookmarks>
      </main>

    </>
  )
}

export default App
