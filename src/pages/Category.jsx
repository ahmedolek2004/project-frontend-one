import React from 'react'
import { useParams } from 'react-router-dom'

export default function Category() {
  const { id } = useParams()
  return (
    <div>
      <h1>Category: {id}</h1>
      <p>Products for category {id} would be listed here.</p>
    </div>
  )
}
