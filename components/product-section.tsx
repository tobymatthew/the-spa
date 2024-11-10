"use client";

import Image from "next/image";
import { useState } from "react";
import { Star, StarHalf, Plus, Minus } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Input } from "@/components/ui/input";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const products = [
  {
    name: "Bee Facial Cleanser",
    description: "Gentle yet effective cleanser for all skin types.",
    image: "/product1.avif",
    price: "6,990",
    rating: 4.5,
    reviews: [
      {
        author: "Emily R.",
        rating: 5,
        comment: "Leaves my skin feeling so fresh and clean!",
      },
      {
        author: "Alex M.",
        rating: 4,
        comment: "Great for sensitive skin, no irritation at all.",
      },
    ],
  },
  {
    name: "Luxury Beard Grooming Kit",
    description:
      "Complete set for the perfect beard, including oil, balm, and comb.",
    image: "/beard.webp",
    price: "7390.99",
    rating: 5,
    reviews: [
      {
        author: "James B.",
        rating: 5,
        comment: "Best beard kit I've ever used. Highly recommend!",
      },
      {
        author: "Michael S.",
        rating: 5,
        comment: "The oil smells amazing and keeps my beard soft all day.",
      },
    ],
  },
  {
    name: "Exfoliating Face Scrub",
    description: "Gentle exfoliation for smooth, radiant skin.",
    image: "/scrub.avif",
    price: "19000",
    rating: 4.5,
    reviews: [
      {
        author: "Sarah L.",
        rating: 4,
        comment: "Love how smooth my skin feels after using this!",
      },
      {
        author: "Chris P.",
        rating: 5,
        comment: "Great for getting rid of dry, flaky skin.",
      },
    ],
  },
  {
    name: "Hydrating Body Lotion",
    description: "Rich, nourishing lotion for all-day moisture.",
    image: "/lotion.avif",
    price: "29000.99",
    rating: 4.5,
    reviews: [
      {
        author: "Laura K.",
        rating: 5,
        comment: "My skin has never felt so soft and hydrated!",
      },
      {
        author: "David W.",
        rating: 4,
        comment: "A little goes a long way, great value for money.",
      },
    ],
  },
];

const bgCream = "bg-soft-cream";
const buttonPeach = "bg-light-peach";
const bgSage = "bg-sage-green";
export function ProductSectionComponent() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(products[0]);
  const [quantity, setQuantity] = useState(1);

  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <Star
          key={`full-${i}`}
          className="w-4 h-4 fill-yellow-400 text-yellow-400"
        />
      );
    }
    if (hasHalfStar) {
      stars.push(
        <StarHalf
          key="half"
          className="w-4 h-4 fill-yellow-400 text-yellow-400"
        />
      );
    }
    return stars;
  };

  return (
    <section className="py-8 px-4 sm:py-16 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 text-center mb-8 sm:mb-12">
          Our Products
        </h2>

        {/* Replace the grid with Swiper for mobile and keep grid for larger screens */}
        <div className="lg:hidden">
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={20}
            slidesPerView={1.2}
            centeredSlides={true}
            navigation
            pagination={{ clickable: true }}
            breakpoints={{
              640: {
                slidesPerView: 2.2,
              },
            }}
            className="pb-10" // Add padding for pagination dots
          >
            {products.map((product, index) => (
              <SwiperSlide key={index}>
                <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={300}
                    height={300}
                    className="w-full h-48 sm:h-64 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="text-lg font-semibold mb-2">
                      {product.name}
                    </h3>
                    <p className="text-sm text-gray-600 mb-2">
                      {product.description}
                    </p>
                    <div className="flex justify-between items-center">
                      <span className="text-lg font-bold">{product.price}</span>
                      <div className="flex items-center">
                        {renderStars(product.rating)}
                      </div>
                    </div>
                    <Button
                      className={`w-full mt-4 ${buttonPeach} hover:${buttonPeach} text-black`}
                      onClick={() => {
                        setSelectedProduct(product);
                        setIsOpen(true);
                        setQuantity(1);
                      }}
                    >
                      View Details
                    </Button>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Keep the original grid for larger screens */}
        <div className="hidden lg:grid lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <Image
                src={product.image}
                alt={product.name}
                width={300}
                height={300}
                className="w-full h-48 sm:h-64 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
                <p className="text-sm text-gray-600 mb-2">
                  {product.description}
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-lg font-bold">₦{product.price}</span>
                  <div className={`flex items-center `}>
                    {renderStars(product.rating)}
                  </div>
                </div>
                <Button
                  className={`w-full mt-4 ${buttonPeach} hover:${buttonPeach} text-black`}
                  onClick={() => {
                    setSelectedProduct(product);
                    setIsOpen(true);
                    setQuantity(1);
                  }}
                >
                  View Details
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="w-[90vw] max-w-[600px] p-4 lg:p-8 lg:max-w-[700px] lg:max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>{selectedProduct.name}</DialogTitle>
          </DialogHeader>
          <ScrollArea className="max-h-[70vh] lg:max-h-none overflow-y-auto">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="w-full max-w-[400px] mx-auto mb-4">
                <Image
                  src={selectedProduct.image}
                  alt={selectedProduct.name}
                  width={400}
                  height={400}
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="space-y-4">
                <p className="text-muted-foreground text-lg md:text-base p-2">
                  {selectedProduct.description}
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-lg font-semibold p-2 ">
                    {selectedProduct.price}
                  </span>
                  <div className="flex items-center">
                    {renderStars(selectedProduct.rating)}
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  >
                    <Minus className="h-4 w-4" />
                  </Button>
                  <Input
                    type="number"
                    min="1"
                    value={quantity}
                    onChange={(e) =>
                      setQuantity(Math.max(1, parseInt(e.target.value) || 1))
                    }
                    className="w-20 text-center"
                  />
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => setQuantity(quantity + 1)}
                  >
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
                <Button className="w-full bg-light-peach text-primary">
                  Add to Cart
                </Button>
                <div className="space-y-4">
                  <h4 className="text-xl font-semibold">Reviews</h4>
                  {selectedProduct.reviews.map((review, index) => (
                    <div key={index} className="border rounded-lg p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="flex">{renderStars(review.rating)}</div>
                        <span className="font-semibold">{review.author}</span>
                      </div>
                      <p className="text-muted-foreground">{review.comment}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </ScrollArea>
        </DialogContent>
      </Dialog>
    </section>
  );
}
