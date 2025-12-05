import React, { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card'
import { Button } from '../components/ui/button'
import { ShoppingCart, ArrowLeft, Filter } from 'lucide-react'

export default function Products() {
  const { id } = useParams()
  const [sortBy, setSortBy] = useState('name')

  // Sample products
  const allProducts = [
    { id: 'p1', name: 'Product 1', price: 99.99, image: '../public/images/1.webp', category: 'electronics' },
    { id: 'p2', name: 'Product 2', price: 149.99, image: '../../public/images/1.webp', category: 'fashion' },
    { id: 'p3', name: 'Product 3', price: 79.99, image: '../../public/images/1.webp', category: 'electronics' },
    { id: 'p4', name: 'Product 4', price: 199.99, image: '../../public/images/1.webp', category: 'home' },
    { id: 'p5', name: 'Product 5', price: 129.99, image: '../../public/images/1.webp', category: 'fashion' },
    { id: 'p6', name: 'Product 6', price: 89.99, image: '../../public/images/1.webp', category: 'sports' },
    { id: 'p7', name: 'Product 7', price: 159.99, image: '../../public/images/1.webp', category: 'electronics' },
    { id: 'p8', name: 'Product 8', price: 69.99, image: '../../public/images/1.webp', category: 'Outdoors' },
    { id: 'p9', name: 'Product 9', price: 88.99, image: '../../public/images/1.webp', category: 'Toys ' },
    { id: 'p10', name: 'Product 10', price: 79.99, image: '../../public/images/1.webp', category: 'Games' },
    { id: 'p11', name: 'Product 11', price: 99.99, image: '../../public/images/1.webp', category: 'Books' },
  ]

  // If viewing a specific product
  if (id) {
    const product = allProducts.find(p => p.id === id) || {
      id,
      name: `Product ${id}`,
      price: 99.99,
      image: 'https://via.placeholder.com/600',
      description: 'This is a detailed description of the product. It includes all the features and specifications you need to know.',
    }

    return (
      <div className="max-w-6xl mx-auto space-y-6">
        <Button variant="ghost" size="icon" asChild>
          <Link to="/products">
            <ArrowLeft className="h-4 w-4" />
            <span className="sr-only">Back to products</span>
          </Link>
        </Button>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          <div className="aspect-square w-full overflow-hidden rounded-lg bg-muted">
            <img
              src={product.image}
              alt={product.name}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="space-y-6">
            <div>
              <h1 className="text-4xl font-bold">{product.name}</h1>
              <p className="text-3xl font-semibold text-primary mt-2">
                ${product.price.toFixed(2)}
              </p>
            </div>
            {product.description && (
              <p className="text-muted-foreground text-lg">
                {product.description}
              </p>
            )}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="flex-1">
                <ShoppingCart className="mr-2 h-5 w-5" />
                Add to Cart
              </Button>
              <Button size="lg" variant="outline" className="flex-1">
                Buy Now
              </Button>
            </div>
            <Card>
              <CardHeader>
                <CardTitle>Product Details</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm text-muted-foreground">
                <p>• High quality materials</p>
                <p>• Fast shipping available</p>
                <p>• 30-day return policy</p>
                <p>• Customer support included</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    )
  }

  // Product listing page
  const sortedProducts = [...allProducts].sort((a, b) => {
    if (sortBy === 'price-low') return a.price - b.price
    if (sortBy === 'price-high') return b.price - a.price
    return a.name.localeCompare(b.name)
  })

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <h1 className="text-3xl font-bold">All Products</h1>
        <div className="flex items-center gap-2">
          <Filter className="h-5 w-5 text-muted-foreground" />
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="px-3 py-2 border border-input rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-ring"
          >
            <option value="name">Sort by Name</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {sortedProducts.map((product) => (
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
