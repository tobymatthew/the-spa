import Image from "next/image";

import { Card, CardContent } from "@/components/ui/card";

export default function About() {
  const whyChooseUs = [
    {
      title: "Expert Therapists",
      description:
        "Our certified professionals bring years of experience to every treatment.",
      icon: "👩‍⚕️",
    },
    {
      title: "Luxurious Amenities",
      description:
        "Immerse yourself in our state-of-the-art facilities designed for ultimate relaxation.",
      icon: "�spa",
    },
    {
      title: "Personalized Care",
      description:
        "We tailor each treatment to your unique needs and preferences.",
      icon: "🤲",
    },
    {
      title: "Holistic Approach",
      description:
        "We focus on your overall well-being, nurturing body, mind, and spirit.",
      icon: "🧘‍♀️",
    },
  ];

  const bgCream = "bg-soft-cream";

  const buttonPeach = "bg-light-peach";

  const bgSage = "bg-sage-green";

  return (
    <div>
      {" "}
      <section className={`py-16 px-4 sm:px-6 lg:px-8 ${bgSage}`} id="about">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-extrabold text-gray-900 mb-6">
                About Bee Bella Luxury Spa
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Welcome to Bee Bella, where tranquility meets luxury. Nestled in
                the heart of [City Name], our spa is a sanctuary of peace and
                rejuvenation. With a commitment to holistic wellness, we offer a
                range of treatments designed to soothe your body, calm your
                mind, and uplift your spirit.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Our team of expert therapists combines ancient healing
                techniques with modern spa technologies to provide you with an
                unparalleled relaxation experience. From invigorating massages
                to rejuvenating facials, each treatment is tailored to meet your
                unique needs and preferences.
              </p>
              <p className="text-lg text-gray-600">
                At Bee Bella, we believe that true wellness encompasses more
                than just physical health. Our holistic approach aims to restore
                balance to your life, helping you achieve a state of complete
                well-being. Step into our oasis of calm and let us guide you on
                your journey to relaxation and renewal.
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
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              Why Choose Us
            </h3>
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
    </div>
  );
}
