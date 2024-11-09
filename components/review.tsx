"use client"

import { useState } from 'react'
import Image from 'next/image'
import { Star } from 'lucide-react'
import { Card, CardContent } from "@/components/ui/card"
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules'

// Import Swiper styles if not already imported elsewhere
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

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
  

function Review() {
  const bgCream = 'bg-soft-cream'

  return (
    <section className={`py-16 px-4 sm:px-6 lg:px-8 ${bgCream}`} id="reviews">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-12">
          What Our Clients Say
        </h2>

        <div className="relative pb-14">
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={24}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
          >
            {reviews.map((review) => (
              <SwiperSlide key={review.id}>
                <Card className="h-full">
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
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  )
}

export default Review