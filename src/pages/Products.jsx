import React from 'react'
import { useParams } from 'react-router-dom'

export default function Products() {
  const { id } = useParams()

  if (id) {
    return (
      <div>
        <h1>Product: {id}</h1>
        <p>Details for product {id}.</p>
      </div>
    )
  }

  const products = [
    { id: 'p1', name: 'Product 1' },
    { id: 'p2', name: 'Product 2' }
  ]

  return (
    <div>
      <h1>Products</h1>
      <ul>
        {products.map(p => (
          <li key={p.id}>{p.name}</li>
        ))}
      </ul>
    </div>
  )
}
