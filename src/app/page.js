"use client"
import axios from "axios"
import { useState, useEffect } from 'react'


const page = () => {

  const [posts, setpost] = useState([]);
  useEffect(() => {
    const getposts = async () => {
      const { data: res } = await axios.get("https://jsonplaceholder.typicode.com/comments")
      setpost(res);
    }
    getposts();
  }, [])

  const [currentPage, setCurrentPage] = useState(1)
  const totalDataPerPage = 10;
  const lastIndex = currentPage * totalDataPerPage;
  const firstIndex = lastIndex - totalDataPerPage;
  const record = posts.slice(firstIndex, lastIndex);

  const npage = Math.ceil(posts.length / totalDataPerPage)

  const number = [...Array(npage + 1).keys()].slice(1)



  return (
    <div style={{
      margin
        : 10
    }} className="container">

      <table border={1} className="table">
        <thead>
          <tr style={{
            backgroundColor: "blue", color
              : "white"
          }}>
            <th>ID</th>
            <th>Title</th>
            <th>Email</th>
            <th>Message</th>
          </tr>
        </thead>
        <tbody style={{
          color
            : "blue"
          , fontWeight: "300"
        }}>
          {posts.map((post) => (
            <tr>
              <td>{post.id}</td>
              <td>{post.name}</td>
              <td>{post.email}</td>
              <td>{post.body}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <button>
        <a href="#" onClick={prePage}>Prev</a>
      </button>
      <button>
        <a href="#"
          onClick={nextpage}>Next</a>
      </button>
    </div>
  )


  function prePage() {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1)
    }


  }

  function changecpage(id) {
    setCurrentPage(id)


  }

  function nextpage() {
    if (currentPage !== npage) {
      setCurrentPage(currentPage + 1)
    }



  }
}

export default page