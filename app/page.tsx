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


export default function Home() {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = ['HOME', 'ABOUT', 'SERVICES', 'PRICE LIST', 'CONTACT']

  const services = [
    { title: "Swedish Massage", description: "Relax and unwind with our classic Swedish massage technique.", image: "/bgimage.jpg" },
    { title: "Hot Stone Therapy", description: "Experience deep relaxation with heated stones.", image: "/bgimage.jpg" },
    { title: "Aromatherapy", description: "Indulge your senses with our custom essential oil blends.", image: "/bgimage.jpg" },
    { title: "Facial Treatment", description: "Rejuvenate your skin with our premium facial treatments.", image: "/bgimage.jpg" },
    { title: "Body Wraps", description: "Detoxify and moisturize with our luxurious body wraps.", image: "/bgimage.jpg" },
    { title: "Manicure & Pedicure", description: "Treat your hands and feet to our deluxe nail care.", image: "/bgimage.jpg" },
    { title: "Hydrotherapy", description: "Heal and soothe with our water-based treatments.", image: "/bgimage.jpg" },
    { title: "Couples Massage", description: "Share a relaxing experience with our couples massage.", image: "/bgimage.jpg" },
  ]

  const whyChooseUs = [
    {
      title: "Expert Therapists",
      description: "Our certified professionals bring years of experience to every treatment.",
      icon: "👩‍⚕️"
    },
    {
      title: "Luxurious Amenities",
      description: "Immerse yourself in our state-of-the-art facilities designed for ultimate relaxation.",
      icon: "�spa"
    },
    {
      title: "Personalized Care",
      description: "We tailor each treatment to your unique needs and preferences.",
      icon: "🤲"
    },
    {
      title: "Holistic Approach",
      description: "We focus on your overall well-being, nurturing body, mind, and spirit.",
      icon: "🧘‍♀️"
    }
  ]


  const reviews = [
    {
      id: 1,
      name: "Emma Thompson",
      avatar: "/placeholder.svg?height=100&width=100",
      review: "The Swedish massage at Bee Bella was absolutely divine. The therapist's technique was perfect, and I left feeling completely rejuvenated. Can't wait to return!",
      rating: 5,
    },
    {
      id: 2,
      name: "Michael Chen",
      avatar: "/placeholder.svg?height=100&width=100",
      review: "I tried the hot stone therapy and it was an incredible experience. The ambiance of the spa is so calming, and the staff is extremely professional. Highly recommend!",
      rating: 5,
    },
    {
      id: 3,
      name: "Sophia Rodriguez",
      avatar: "/placeholder.svg?height=100&width=100",
      review: "The facial treatment here is top-notch. My skin has never looked better. The esthetician was knowledgeable and personalized the treatment to my skin's needs.",
      rating: 4,
    },
    {
      id: 4,
      name: "David Williams",
      avatar: "/placeholder.svg?height=100&width=100",
      review: "My wife and I enjoyed a couples massage and it was the perfect way to relax and reconnect. The private suite was luxurious and the experience was unforgettable.",
      rating: 5,
    },
  ]

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
  
  
    <div>
     <header className="relative min-h-screen">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/bgimage.jpg"
          alt="Spa background"
          layout="fill"
          objectFit="cover"
          quality={100}
        />
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>

      {/* Navigation */}
      <nav className="relative z-10 flex items-center justify-between px-4 py-4 lg:px-8">
        {/* Logo */}
        <div className="text-xl font-bold text-white sm:text-2xl">
          <Link href="/">Bee Bella</Link>
        </div>

        {/* Desktop Navigation Links */}
        <ul className="hidden space-x-4 text-sm font-medium text-white lg:flex xl:space-x-6">
          {navItems.map((item) => (
            <li key={item}>
              <Link href={`/${item.toLowerCase().replace(' ', '-')}`} className="hover:text-primary">
                {item}
              </Link>
            </li>
          ))}
        </ul>

        {/* Social Icons and Book Now Button */}
        <div className="flex items-center space-x-4">
          <Link href="https://instagram.com" className="text-white hover:text-primary">
            <Instagram size={20} />
          </Link>
          <Link href="https://facebook.com" className="text-white hover:text-primary">
            <Facebook size={20} />
          </Link>
          <Button variant="outline" className="hidden text-white hover:bg-primary hover:text-white lg:inline-flex">
            BOOK NOW
          </Button>
        </div>

        {/* Mobile Menu */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="text-white lg:hidden">
              <Menu />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] sm:w-[400px]">
            <nav className="flex flex-col gap-4">
              {navItems.map((item) => (
                <Link
                  key={item}
                  href={`/${item.toLowerCase().replace(' ', '-')}`}
                  className="text-lg font-medium hover:text-primary"
                  onClick={() => setIsOpen(false)}
                >
                  {item}
                </Link>
              ))}
              <Button className="mt-4 w-full text-primary bg-transparent">BOOK NOW</Button>
            </nav>
          </SheetContent>
        </Sheet>
      </nav>

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center justify-center px-4 text-center text-white" style={{height: 'calc(100vh - 80px)'}}>
        <h2 className="mb-2 text-sm font-semibold uppercase tracking-wider">Welcome to Bee Bella Luxury Spa</h2>
        <h1 className="mb-8 text-4xl font-bold leading-tight sm:text-5xl md:text-6xl lg:text-7xl">
          YOUR BEST<br />SPA CHIC
        </h1>
        <Button size="lg" className={`${buttonPeach} text-primary hover:bg-primary/90`}>
          BOOK AN APPOINTMENT
        </Button>
      </div>
    </header> 


    <section className={`${bgCream} py-16 px-4 sm:px-6 lg:px-8`}>
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-4">Our Services</h2>

        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
          Indulge in our premium spa treatments designed to rejuvenate your body and mind. From soothing massages to revitalizing facials, our expert therapists use luxurious techniques to help you achieve ultimate relaxation and wellness. Discover your path to tranquility and book your personalized spa experience today.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div key={index} className="relative overflow-hidden rounded-lg shadow-lg group">
              <Image
                src={service.image}
                alt={service.title}
                width={400}
                height={300}
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
              <div className="absolute inset-x-0 bottom-0 p-4">
                <h3 className="text-white text-xl font-semibold mb-2">{service.title}</h3>
                <div className="overflow-hidden transition-all duration-300 max-h-0 group-hover:max-h-40">
                  <p className="text-white text-sm mb-4">{service.description}</p>
                  <Button variant="secondary" size="sm">
                    View More
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className={`py-16 px-4 sm:px-6 lg:px-8 ${bgSage}`}>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-extrabold text-gray-900 mb-6">About Bee Bella Luxury Spa</h2>
            <p className="text-lg text-gray-600 mb-6">
              Welcome to Bee Bella, where tranquility meets luxury. Nestled in the heart of [City Name], our spa is a sanctuary of peace and rejuvenation. With a commitment to holistic wellness, we offer a range of treatments designed to soothe your body, calm your mind, and uplift your spirit.
            </p>
            <p className="text-lg text-gray-600 mb-6">
              Our team of expert therapists combines ancient healing techniques with modern spa technologies to provide you with an unparalleled relaxation experience. From invigorating massages to rejuvenating facials, each treatment is tailored to meet your unique needs and preferences.
            </p>
            <p className="text-lg text-gray-600">
              At Bee Bella, we believe that true wellness encompasses more than just physical health. Our holistic approach aims to restore balance to your life, helping you achieve a state of complete well-being. Step into our oasis of calm and let us guide you on your journey to relaxation and renewal.
            </p>
          </div>
          <div className="relative h-96 rounded-lg overflow-hidden shadow-xl">
            <Image
              src="/bgimage.jpg"
              alt="Bee Bella Luxury Spa Interior"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
        </div>

        <div className="mt-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Why Choose Us</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item, index) => (
              <Card key={index} className="bg-gray-50">
                <CardContent className="p-6">
                  <div className="text-4xl mb-4">{item.icon}</div>
                  <h4 className="text-xl font-semibold mb-2">{item.title}</h4>
                  <p className="text-gray-600">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>

    <section className={`py-16 px-4 sm:px-6 lg:px-8 ${bgCream}`}>
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-12">What Our Clients Say</h2>
        <div className="relative">
          <div className="flex overflow-x-auto space-x-6 pb-8 px-4 sm:px-0 scrollbar-hide">
            {reviews.map((review) => (
              <Card key={review.id} className="flex-shrink-0 w-full sm:w-96">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Image
                      src={review.avatar}
                      alt={review.name}
                      width={50}
                      height={50}
                      className="rounded-full"
                    />
                    <div className="ml-4">
                      <h3 className="font-semibold text-lg">{review.name}</h3>
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-4 h-4 ${
                              i < review.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-600 italic">&ldquo;{review.review}&rdquo;</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="absolute top-1/2 left-0 transform -translate-y-1/2">
            <button className="p-2 rounded-full bg-white shadow-lg text-gray-800 hover:bg-gray-100 focus:outline-none">
              <ChevronLeft className="w-6 h-6" />
            </button>
          </div>
          <div className="absolute top-1/2 right-0 transform -translate-y-1/2">
            <button className="p-2 rounded-full bg-white shadow-lg text-gray-800 hover:bg-gray-100 focus:outline-none">
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </section>

    <BasicBookNowSectionComponent/>

    <section className={`py-16 px-4 sm:px-6 lg:px-8 ${bgSage} `}>
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
      
    </div>
  );
}
