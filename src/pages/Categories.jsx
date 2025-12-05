import React from 'react'
import { Link } from 'react-router-dom'
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card'
import { Button } from '../components/ui/button'
import { Grid3x3, ArrowRight } from 'lucide-react'

export default function Categories() {
  const categories = [
    {
      id: 'c1',
      name: 'Electronics',
      description: 'Latest gadgets and tech products',
      image: 'https://via.placeholder.com/300',
      productCount: 150,
    },
    {
      id: 'c2',
      name: 'Fashion',
      description: 'Trendy clothing and accessories',
      image: 'https://via.placeholder.com/300',
      productCount: 200,
    },
    {
      id: 'c3',
      name: 'Home & Garden',
      description: 'Everything for your home',
      image: 'https://via.placeholder.com/300',
      productCount: 120,
    },
    {
      id: 'c4',
      name: 'Sports & Outdoors',
      description: 'Gear for active lifestyle',
      image: 'https://via.placeholder.com/300',
      productCount: 80,
    },
    {
      id: 'c5',
      name: 'Books',
      description: 'Books for every reader',
      image: 'https://via.placeholder.com/300',
      productCount: 300,
    },
    {
      id: 'c6',
      name: 'Toys & Games',
      description: 'Fun for all ages',
      image: 'https://via.placeholder.com/300',
      productCount: 90,
    },
  ]

  return (
    <div className="space-y-8">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Categories</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Browse our wide range of product categories
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {categories.map((category) => (
          <Card
            key={category.id}
            className="overflow-hidden hover:shadow-lg transition-shadow group"
          >
            <div className="relative aspect-video w-full overflow-hidden bg-muted">
              <img
                src={category.image}
                alt={category.name}
                className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-xl">{category.name}</CardTitle>
                <Grid3x3 className="h-5 w-5 text-muted-foreground" />
              </div>
              <p className="text-sm text-muted-foreground">{category.description}</p>
              <p className="text-xs text-muted-foreground">
                {category.productCount} products
              </p>
            </CardHeader>
            <CardContent>
              <Button className="w-full" variant="outline" asChild>
                <Link to={`/categories/${category.id}`}>
                  View Category
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
