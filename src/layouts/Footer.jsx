import React from 'react'
import { Link } from 'react-router-dom'
import { Facebook, Instagram, Twitter, Mail } from 'lucide-react'

export default function Footer() {
  const quickLinks = [
    { to: '/about', label: 'About' },
    { to: '/contact', label: 'Contact' },
    { to: '/deals', label: 'Deals' },
    { to: '/categories', label: 'Categories' },
    { to: '/products', label: 'Products' },
  ]

  const socials = [
    { href: '#', label: 'Facebook', Icon: Facebook },
    { href: '#', label: 'Instagram', Icon: Instagram },
    { href: '#', label: 'Twitter', Icon: Twitter },
    { href: 'mailto:contact@example.com', label: 'Email', Icon: Mail },
  ]

  return (
    <footer className="border-t bg-background/80 backdrop-blur">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-3">
            <Link to="/" className="text-2xl font-bold text-primary">
              Shop
            </Link>
            <p className="text-sm text-muted-foreground max-w-sm">
              Discover quality products at great prices. We keep things simple, fast, and reliable for your everyday shopping.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold mb-3">Quick Links</h3>
            <div className="grid grid-cols-2 gap-2">
              {quickLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="space-y-3">
            <h3 className="text-sm font-semibold">Stay Connected</h3>
            <div className="flex items-center gap-3">
              {socials.map(({ href, label, Icon }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border text-muted-foreground hover:text-primary hover:border-primary transition-colors"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Shop. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}


