import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card'
import { Users, Target, Award, Heart } from 'lucide-react'

export default function About() {
  const values = [
    {
      icon: Target,
      title: 'Our Mission',
      description: 'To provide high-quality products at affordable prices while maintaining excellent customer service.',
    },
    {
      icon: Users,
      title: 'Our Team',
      description: 'A dedicated team of professionals committed to bringing you the best shopping experience.',
    },
    {
      icon: Award,
      title: 'Quality First',
      description: 'We carefully select every product to ensure it meets our high standards of quality.',
    },
    {
      icon: Heart,
      title: 'Customer Focus',
      description: 'Your satisfaction is our top priority. We go above and beyond to serve you better.',
    },
  ]

  return (
    <div className="max-w-6xl mx-auto space-y-12">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">About Us</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          We are a trusted online store dedicated to providing you with the best products and shopping experience.
        </p>
      </div>

      <section className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {values.map((value, index) => {
          const Icon = value.icon
          return (
            <Card key={index} className="h-full">
              <CardHeader>
                <Icon className="h-10 w-10 text-primary mb-4" />
                <CardTitle>{value.title}</CardTitle>
                <CardDescription className="text-base">
                  {value.description}
                </CardDescription>
              </CardHeader>
            </Card>
          )
        })}
      </section>

      <Card>
        <CardHeader>
          <CardTitle>Our Story</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-muted-foreground">
          <p>
            Founded with a vision to make quality products accessible to everyone, we have grown from a small startup
            to a trusted online marketplace. Our journey has been driven by our commitment to customer satisfaction
            and product excellence.
          </p>
          <p>
            Today, we offer a wide range of products across multiple categories, all carefully curated to meet your
            needs. We believe in building long-term relationships with our customers and providing exceptional service
            at every step of your shopping journey.
          </p>
        </CardContent>
      </Card>
    </div>
  )
}
