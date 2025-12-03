import React from 'react'
import { useParams } from 'react-router-dom'

const SingleBook = () => {
const {id}=useParams()

  return (
    <div style={{padding:"20px"}}>
<h2>Book Details ID:{id}</h2>
<p>This page will show complete deatils of the book</p>

</div>
  )
}

export default SingleBook