import axios from "axios";
import { useEffect, useState } from "react";

import React from 'react'

const DataFetching = () => {
  const [post, setPost] = useState({})
  const [id, setId] = useState(1)
  const [idFromButtonClick, setIdFromButtonClick] = useState(1)

  const clickHandler = ()=>{
    setIdFromButtonClick(id)
  }

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${idFromButtonClick}`)
      .then(res => {
        console.log(res)
        setPost(res.data)
      })
      .catch(err => console.log(err))
  }, [idFromButtonClick])
  return (
    <div>
      <input type="text" value={id} onChange={e => setId(e.target.value)} />
      <button type="button" onClick={clickHandler}>Fetch Post</button>
      <div>
        <p>{post.title}</p>
      </div>
      {/* <ul>
        {
          posts.map(post => <li key={post.id}>{post.title}</li>)
        }
      </ul> */}
    </div>
  )
}

export default DataFetching