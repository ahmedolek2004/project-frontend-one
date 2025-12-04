import React from 'react'
import { Link } from 'react-router-dom'

export default function Deals() {
  const sampleDeals = [
    { id: 'd1', title: 'Deal 1' },
    { id: 'd2', title: 'Deal 2' }
  ]

  return (
    <div>
      <h1>Deals</h1>
      <ul>
        {sampleDeals.map(d => (
          <li key={d.id}>
            <Link to={`/products/${d.id}`}>{d.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
