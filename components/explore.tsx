"use client"

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Instagram, Facebook, Menu, X } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Card, CardContent } from "@/components/ui/card"
import { Star, ChevronLeft, ChevronRight } from 'lucide-react'
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { BasicBookNowSectionComponent } from '@/components/basic-book-now-section'
type Props = {}

function Explore({}: Props) {
    const galleryImages = [
        { src: "/bgimage.jpg", alt: "Spa reception area" },
        { src: "/bgimage.jpg", alt: "Massage room" },
        { src: "/bgimage.jpg", alt: "Facial treatment" },
        { src: "/bgimage.jpg", alt: "Hydrotherapy pool" },
        { src: "/bgimage.jpg", alt: "Relaxation lounge" },
        { src: "/bgimage.jpg", alt: "Yoga studio" },
        { src: "/bgimage.jpg", alt: "Sauna" },
        { src: "bgimage.jpg", alt: "Couples massage room" },
      ]
    
      const [currentImageIndex, setCurrentImageIndex] = useState(0)
    
      const nextImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % galleryImages.length)
      }
    
      const prevImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex - 1 + galleryImages.length) % galleryImages.length)
      }
    
      const bgCream='bg-soft-cream';
    
      const buttonPeach='bg-light-peach';
      
      const bgSage='bg-sage-green';
    
    
    
  return (
    <section className={`py-16 px-4 sm:px-6 lg:px-8 ${bgSage} `} id="explore">
    <div className="max-w-7xl mx-auto">
      <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-12">Experience Our Spa</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {galleryImages.map((image, index) => (
          <Dialog key={index}>
            <DialogTrigger asChild>
              <div className="relative aspect-square overflow-hidden rounded-lg cursor-pointer group">
                <Image
                  src={image.src}
                  alt={image.alt}
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-opacity duration-300 flex items-center justify-center">
                  <Button variant="secondary" className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    View
                  </Button>
                </div>
              </div>
            </DialogTrigger>
            <DialogContent className="max-w-4xl w-full bg-white p-0 rounded-lg overflow-hidden">
              <div className="relative aspect-video">
                <Image
                  src={galleryImages[currentImageIndex].src}
                  alt={galleryImages[currentImageIndex].alt}
                  layout="fill"
                  objectFit="cover"
                />
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 p-2 rounded-full hover:bg-opacity-75 transition-all duration-200"
                >
                  <ChevronLeft className="w-6 h-6 text-gray-800" />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 p-2 rounded-full hover:bg-opacity-75 transition-all duration-200"
                >
                  <ChevronRight className="w-6 h-6 text-gray-800" />
                </button>
              </div>
              <div className="p-4 bg-white">
                <p className="text-lg font-semibold text-gray-900">{galleryImages[currentImageIndex].alt}</p>
              </div>
            </DialogContent>
          </Dialog>
        ))}
      </div>
    </div>
  </section>
  )
}

export default Explore