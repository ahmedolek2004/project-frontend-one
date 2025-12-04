import React from 'react'
import { Link } from 'react-router-dom'

export default function Categories() {
  const cats = [
    { id: 'c1', name: 'Category 1' },
    { id: 'c2', name: 'Category 2' }
  ]

  return (
    <div>
      <h1>Categories</h1>
      <ul>
        {cats.map(c => (
          <li key={c.id}>
            <Link to={`/categories/${c.id}`}>{c.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
