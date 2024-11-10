"use client"

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Instagram, Facebook, Menu, X } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"



type Props = {}

function Header({}: Props) {
    const [isOpen, setIsOpen] =useState<boolean>(false)

    const buttonPeach='bg-light-peach';

  const navItems = ['HOME','SERVICES', 'ABOUT', 'REVIEWS', 'CONTACT','EXPLORE']

  return (
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
          <Link href="/">Bee Bells</Link>
        </div>

        {/* Desktop Navigation Links */}
        <ul className="hidden space-x-4 text-sm font-medium text-white lg:flex xl:space-x-6">
          {navItems.map((item) => (
            <li key={item}>
              <Link href={`#${item.toLowerCase().replace(' ', '-')}`} className="hover:text-gray-200">
                {item}
              </Link>
            </li>
          ))}
        </ul>

        {/* Social Icons and Book Now Button */}
        <div className="flex items-center space-x-4">
          <Link href="https://instagram.com" className="text-white hover:text-gray-200">
            <Instagram size={20} />
          </Link>
          <Link href="https://facebook.com" className="text-white hover:text-gray-100">
            <Facebook size={20} />
          </Link>
          <Button variant="outline" className={`${buttonPeach} text-primary hover:${buttonPeach}`}>
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
        <Button size="lg" variant="outline" className={`${buttonPeach} text-primary hover:${buttonPeach}`}>
          BOOK AN APPOINTMENT
        </Button>
      </div>
    </header> 

  )
}

export default Header