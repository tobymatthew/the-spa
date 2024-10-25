'use client'

import Link from 'next/link'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Facebook, Instagram, Twitter, Mail, MapPin, Phone } from 'lucide-react'

export function FooterComponent() {
  return (
    <footer className="bg-gray-50 border-t bg-soft-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">About Bee Bella</h3>
            <p className="text-gray-600 mb-4">
              Bee Bella is a luxury spa dedicated to providing rejuvenating experiences and promoting holistic wellness. Our expert therapists and state-of-the-art facilities ensure a tranquil escape from the everyday.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-400 hover:text-primary">
                <Facebook size={20} />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-primary">
                <Instagram size={20} />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-primary">
                <Twitter size={20} />
              </Link>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {['Home', 'About', 'Services', 'Book Now', 'Contact'].map((item) => (
                <li key={item}>
                  <Link href={`/${item.toLowerCase().replace(' ', '-')}`} className="text-gray-600 hover:text-primary">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 text-primary mr-2 mt-1" />
                <span className="text-gray-600">123 Serenity Lane, Relaxville, RX 12345</span>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 text-primary mr-2" />
                <span className="text-gray-600">(555) 123-4567</span>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 text-primary mr-2" />
                <span className="text-gray-600">info@beebella.com</span>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Newsletter</h3>
            <p className="text-gray-600 mb-4">Subscribe to our newsletter for special offers and wellness tips.</p>
            <form className="space-y-2">
              <Input type="email" placeholder="Your email address" />
              <Button type="submit" className="w-full">Subscribe</Button>
            </form>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-200 text-center">
          <p className="text-gray-500">&copy; {new Date().getFullYear()} Bee Bella Luxury Spa. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}