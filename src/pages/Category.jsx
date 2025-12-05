import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card'
import { Button } from '../components/ui/button'
import { ArrowLeft, ShoppingCart } from 'lucide-react'

export default function Category() {
  const { id } = useParams()

  // Sample products for the category
  const products = [
    { id: 'p1', name: 'Product 1', price: 99.99, image: 'https://via.placeholder.com/300' },
    { id: 'p2', name: 'Product 2', price: 149.99, image: 'https://via.placeholder.com/300' },
    { id: 'p3', name: 'Product 3', price: 79.99, image: 'https://via.placeholder.com/300' },
    { id: 'p4', name: 'Product 4', price: 199.99, image: 'https://via.placeholder.com/300' },
    { id: 'p5', name: 'Product 5', price: 129.99, image: 'https://via.placeholder.com/300' },
    { id: 'p6', name: 'Product 6', price: 89.99, image: 'https://via.placeholder.com/300' },
  ]

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <Button variant="ghost" size="icon" asChild>
          <Link to="/categories">
            <ArrowLeft className="h-4 w-4" />
            <span className="sr-only">Back to categories</span>
          </Link>
        </Button>
        <div>
          <h1 className="text-3xl font-bold">Category: {id}</h1>
          <p className="text-muted-foreground">
            {products.length} products found
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {products.map((product) => (
          <Card key={product.id} className="overflow-hidden hover:shadow-lg transition-shadow">
            <div className="aspect-square w-full overflow-hidden bg-muted">
              <img
                src={product.image}
                alt={product.name}
                className="h-full w-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <CardHeader>
              <CardTitle className="text-lg">{product.name}</CardTitle>
              <p className="text-lg font-semibold text-primary">
                ${product.price.toFixed(2)}
              </p>
            </CardHeader>
            <CardContent className="space-y-2">
              <Button className="w-full" asChild>
                <Link to={`/products/${product.id}`}>
                  View Details
                </Link>
              </Button>
              <Button variant="outline" className="w-full" size="sm">
                <ShoppingCart className="mr-2 h-4 w-4" />
                Add to Cart
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
