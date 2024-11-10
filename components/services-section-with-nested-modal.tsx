'use client'

import Image from 'next/image'
import { useState } from 'react'
import { Star, StarHalf, Clock } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const services = [
  {
    title: "Swedish Massage",
    description: "Relax and unwind with our classic Swedish massage technique.",
    image: "/placeholder.svg?height=300&width=400",
    subServices: [
      {
        name: "30-Minute Swedish Massage",
        description: "A quick relaxation session focusing on major tension areas.",
        duration: "30 min",
        price: "$45",
        image: "/placeholder.svg?height=200&width=300"
      },
      {
        name: "60-Minute Swedish Massage",
        description: "Our most popular option for full-body relaxation.",
        duration: "60 min",
        price: "$85",
        image: "/placeholder.svg?height=200&width=300"
      },
      {
        name: "90-Minute Swedish Massage",
        description: "Extended relaxation session for deep tension relief.",
        duration: "90 min",
        price: "$120",
        image: "/placeholder.svg?height=200&width=300"
      }
    ]
  },
  {
    title: "Hot Stone Therapy",
    description: "Experience deep relaxation with heated stones.",
    image: "/placeholder.svg?height=300&width=400",
    subServices: [
      {
        name: "Hot Stone Back Treatment",
        description: "Focused heat therapy for back tension relief.",
        duration: "45 min",
        price: "$70",
        image: "/placeholder.svg?height=200&width=300"
      },
      {
        name: "Full Body Hot Stone Massage",
        description: "Complete relaxation with full-body heated stone therapy.",
        duration: "90 min",
        price: "$130",
        image: "/placeholder.svg?height=200&width=300"
      }
    ]
  },
  {
    title: "Aromatherapy",
    description: "Indulge your senses with our custom essential oil blends.",
    image: "/placeholder.svg?height=300&width=400",
    subServices: [
      {
        name: "Relaxation Aromatherapy",
        description: "Calming blend to reduce stress and promote relaxation.",
        duration: "60 min",
        price: "$95",
        image: "/placeholder.svg?height=200&width=300"
      },
      {
        name: "Energizing Aromatherapy",
        description: "Invigorating blend to boost energy and mental clarity.",
        duration: "60 min",
        price: "$95",
        image: "/placeholder.svg?height=200&width=300"
      }
    ]
  },
  {
    title: "Facial Treatment",
    description: "Rejuvenate your skin with our premium facial treatments.",
    image: "/placeholder.svg?height=300&width=400",
    subServices: [
      {
        name: "Express Facial",
        description: "Quick refresh for your skin.",
        duration: "30 min",
        price: "$50",
        image: "/placeholder.svg?height=200&width=300"
      },
      {
        name: "Deluxe Facial",
        description: "Comprehensive facial treatment for radiant skin.",
        duration: "75 min",
        price: "$110",
        image: "/placeholder.svg?height=200&width=300"
      }
    ]
  },
]

const buttonPeach = "bg-light-peach";

export function ServicesSectionWithNestedModal() {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedService, setSelectedService] = useState(services[0].title)
  const [selectedSubService, setSelectedSubService] = useState<{
    name: string;
    description: string;
    duration: string;
    price: string;
    image: string;
  } | null>(null)

  const renderStars = (rating: number) => {
    const stars = []
    const fullStars = Math.floor(rating)
    const hasHalfStar = rating % 1 !== 0

    for (let i = 0; i < fullStars; i++) {
      stars.push(<Star key={`full-${i}`} className="w-4 h-4 fill-primary text-primary" />)
    }
    if (hasHalfStar) {
      stars.push(<StarHalf key="half" className="w-4 h-4 fill-primary text-primary" />)
    }
    return stars
  }

  return (
    <section className="bg-gray-50 py-8 px-4 sm:py-16 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 text-center mb-8 sm:mb-12">Our Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div key={index} className="relative overflow-hidden rounded-lg shadow-lg group">
              <Image
                src={service.image}
                alt={service.title}
                width={400}
                height={300}
                className="w-full h-48 sm:h-64 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
              <div className="absolute inset-x-0 bottom-0 p-4">
                <h3 className="text-white text-lg sm:text-xl font-semibold mb-2">{service.title}</h3>
                <div className="overflow-hidden transition-all duration-300 max-h-0 group-hover:max-h-40">
                  <p className="text-white text-sm mb-4">{service.description}</p>
                  <Button 
                    variant="secondary" 
                    size="sm"
                    onClick={() => {
                      setSelectedService(service.title)
                      setIsOpen(true)
                    }}
                  >
                    View More
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="sm:max-w-[425px] md:max-w-[700px] lg:max-w-[900px] p-0">
          <DialogHeader className="p-6 pb-0">
            <DialogTitle>Our Services</DialogTitle>
          </DialogHeader>
          <Tabs value={selectedService} onValueChange={setSelectedService} className="w-full">
            <ScrollArea className="w-full whitespace-nowrap">
              <TabsList className="w-full justify-start px-6">
                {services.map((service) => (
                  <TabsTrigger key={service.title} value={service.title} className="text-xs sm:text-sm">
                    {service.title}
                  </TabsTrigger>
                ))}
              </TabsList>
            </ScrollArea>
            <ScrollArea className="h-[60vh] md:h-[70vh]">
              {services.map((service) => (
                <TabsContent key={service.title} value={service.title} className="p-6 m-0">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {service.subServices.map((subService, index) => (
                      <Card key={index} className="cursor-pointer hover:bg-accent transition-colors" onClick={() => setSelectedSubService(subService)}>
                        <CardHeader>
                          <CardTitle>{subService.name}</CardTitle>
                          <CardDescription>{subService.description}</CardDescription>
                        </CardHeader>
                        <CardContent>
                          <div className="flex justify-between items-center">
                            <div className="flex items-center">
                              <Clock className="w-4 h-4 mr-2" />
                              <span>{subService.duration}</span>
                            </div>
                            <span className="font-semibold">{subService.price}</span>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </TabsContent>
              ))}
            </ScrollArea>
          </Tabs>
        </DialogContent>
      </Dialog>

      {selectedSubService && (
        <Dialog open={!!selectedSubService} onOpenChange={() => setSelectedSubService(null)}>
          <DialogContent className="sm:max-w-[425px] md:max-w-[700px]">
            <DialogHeader>
              <DialogTitle>{selectedSubService.name}</DialogTitle>
            </DialogHeader>
            <div className="grid gap-4">
              <div className="aspect-video relative rounded-lg overflow-hidden">
                <Image
                  src={selectedSubService.image}
                  alt={selectedSubService.name}
                  fill
                  className="object-cover"
                />
              </div>
              <p>{selectedSubService.description}</p>
              <div className="flex justify-between items-center">
                <div className="flex items-center">
                  <Clock className="w-4 h-4 mr-2" />
                  <span>{selectedSubService.duration}</span>
                </div>
                <span className="font-semibold">{selectedSubService.price}</span>
              </div>
              <Button className={`w-full ${buttonPeach} hover:${buttonPeach} text-black`}>Book Now</Button>
            </div>
          </DialogContent>
        </Dialog>
      )}
    </section>
  )
}