import React from 'react'
import { Link } from 'react-router-dom'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card'
import { Button } from '../components/ui/button'
import { ShoppingBag, TrendingUp, Star, ArrowRight } from 'lucide-react'

export default function Home() {
  const featuredProducts = [
    { id: 'p1', name: 'Product 1', price: '$99.99', image: 'https://via.placeholder.com/300' },
    { id: 'p2', name: 'Product 2', price: '$149.99', image: 'https://via.placeholder.com/300' },
    { id: 'p3', name: 'Product 3', price: '$79.99', image: 'https://via.placeholder.com/300' },
    { id: 'p4', name: 'Product 4', price: '$199.99', image: 'https://via.placeholder.com/300' },
  ]

  return (
    
    <div className="space-y-12">
      {/* Hero Section */}
      <section className="relative overflow-hidden rounded-lg bg-gradient-to-r from-primary/10 via-primary/5 to-background p-8 md:p-12 lg:p-16">
        <div className="container mx-auto">
          <div className="flex flex-col items-center text-center space-y-6">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
              Welcome to Our Store
            </h1>
            
            <p className="max-w-2xl text-lg text-muted-foreground sm:text-xl">
              Discover amazing products at unbeatable prices. Shop the latest trends and find everything you need.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" asChild>
                <Link to="/products">
                  Shop Now
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/deals">
                  View Deals
                </Link>
              </Button>
              
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader>
            <ShoppingBag className="h-8 w-8 text-primary mb-2" />
            <CardTitle>Wide Selection</CardTitle>
            <CardDescription>
              Browse through thousands of products across multiple categories
            </CardDescription>
          </CardHeader>
        </Card>
        <Card>
          <CardHeader>
            <TrendingUp className="h-8 w-8 text-primary mb-2" />
            <CardTitle>Best Prices</CardTitle>
            <CardDescription>
              Get the best deals and competitive prices on all products
            </CardDescription>
          </CardHeader>
        </Card>
        <Card>
          <CardHeader>
            <Star className="h-8 w-8 text-primary mb-2" />
            <CardTitle>Quality Guaranteed</CardTitle>
            <CardDescription>
              All products are carefully selected and quality assured
            </CardDescription>
          </CardHeader>
        </Card>
      </section>

      {/* Featured Products */}
      <section>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-3xl font-bold tracking-tight">Featured Products</h2>
          <Button variant="ghost" asChild>
            <Link to="/products">
              View All
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {featuredProducts.map((product) => (
            <Card key={product.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-square w-full overflow-hidden bg-muted">
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-full w-full object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-lg">{product.name}</CardTitle>
                <CardDescription className="text-lg font-semibold text-foreground">
                  {product.price}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="w-full" asChild>
                  <Link to={`/products/${product.id}`}>
                    View Details
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  )
}
