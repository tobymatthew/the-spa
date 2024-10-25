"use client"

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { MessageCircle, Mail, Instagram, Facebook } from 'lucide-react'

export function BasicBookNowSectionComponent() {
  const [formData, setFormData] = useState({
    service: '',
    name: '',
    email: '',
    phone: ''
  })

  const services = [
    "Swedish Massage",
    "Hot Stone Therapy",
    "Aromatherapy",
    "Facial Treatment",
    "Body Wraps",
    "Manicure & Pedicure",
    "Hydrotherapy",
    "Couples Massage"
  ]

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleServiceChange = (value: string) => {
    setFormData({ ...formData, service: value })
  }

  const sendToWhatsApp = () => {
    const message = `New booking request:
Service: ${formData.service}
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}`

    const whatsappUrl = `https://wa.me/1234567890?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank')
  }

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8  bg-soft-cream">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-8">Book Your Spa Experience</h2>
        <Card className="mb-8">
          <CardContent className="p-6">
            <form className="space-y-4">
              <div>
                <Label htmlFor="service">Select a Service</Label>
                <Select onValueChange={handleServiceChange}>
                  <SelectTrigger>
                    <SelectValue placeholder="Choose a service" />
                  </SelectTrigger>
                  <SelectContent>
                    {services.map((service) => (
                      <SelectItem key={service} value={service}>{service}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="name">Full Name</Label>
                <Input id="name" name="name" onChange={handleInputChange} />
              </div>
              <div>
                <Label htmlFor="email">Email Address</Label>
                <Input id="email" name="email" type="email" onChange={handleInputChange} />
              </div>
              <div>
                <Label htmlFor="phone">Phone Number</Label>
                <Input id="phone" name="phone" type="tel" onChange={handleInputChange} />
              </div>
              <Button className="w-full" onClick={sendToWhatsApp}>
                Book Now via WhatsApp
              </Button>
            </form>
          </CardContent>
        </Card>

        <div className="text-center">
          <h3 className="text-xl font-semibold mb-4">Connect with Us</h3>
          <p className="text-gray-600 mb-6">Prefer to book through other channels? We're here to assist you!</p>
          <div className="flex justify-center space-x-6">
            <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center text-gray-600 hover:text-primary transition-colors">
              <MessageCircle className="h-8 w-8 mb-2" />
              <span>WhatsApp</span>
            </a>
            <a href="mailto:info@ourspa.com" className="flex flex-col items-center text-gray-600 hover:text-primary transition-colors">
              <Mail className="h-8 w-8 mb-2" />
              <span>Email</span>
            </a>
            <a href="https://instagram.com/ourspa" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center text-gray-600 hover:text-primary transition-colors">
              <Instagram className="h-8 w-8 mb-2" />
              <span>Instagram</span>
            </a>
            <a href="https://facebook.com/ourspa" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center text-gray-600 hover:text-primary transition-colors">
              <Facebook className="h-8 w-8 mb-2" />
              <span>Facebook</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}