import React from 'react'
import { Link } from 'react-router-dom'
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card'
import { Button } from '../components/ui/button'
import { Tag, ArrowRight } from 'lucide-react'

export default function Deals() {
  const deals = [
    {
      id: 'd1',
      title: 'Summer Sale',
      description: 'Get up to 50% off on selected items',
      discount: '50% OFF',
      image: '../../public/images/1.webp',
      validUntil: '2024-12-31',
    },
    {
      id: 'd2',
      title: 'Flash Deal',
      description: 'Limited time offer - ends soon!',
      discount: '30% OFF',
      image: '../../public/images/1.webp',
      validUntil: '2024-12-25',
    },
    {
      id: 'd3',
      title: 'New Arrivals',
      description: 'Check out our latest products',
      discount: '20% OFF',
      image: '../../public/images/1.webp',
      validUntil: '2024-12-30',
    },
    {
      id: 'd4',
      title: 'Bundle Deal',
      description: 'Buy more, save more',
      discount: '40% OFF',
      image: '../../public/images/1.webp',
      validUntil: '2024-12-28',
    },
  ]

  return (
    <div className="space-y-8">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Special Deals</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Don't miss out on these amazing deals! Limited time offers on selected products.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {deals.map((deal) => (
          <Card key={deal.id} className="overflow-hidden hover:shadow-lg transition-shadow group">
            <div className="relative aspect-video w-full overflow-hidden bg-muted">
              <img
                src={deal.image}
                alt={deal.title}
                className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute top-4 right-4">
                <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-full font-medium">
                  {deal.discount}
                </span>
              </div>
            </div>
            <CardHeader>
              <CardTitle className="text-xl">{deal.title}</CardTitle>
              <p className="text-sm text-muted-foreground">{deal.description}</p>
              <p className="text-xs text-muted-foreground mt-2">
                Valid until: {new Date(deal.validUntil).toLocaleDateString()}
              </p>
            </CardHeader>
            <CardContent>
              <Button className="w-full" asChild>
                <Link to={`/products/${deal.id}`}>
                  Shop Now
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
