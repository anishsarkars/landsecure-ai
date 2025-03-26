
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const testimonials = [
  {
    quote:
      "LandSecure helped us avoid a fraudulent land deal that could have cost us millions. The AI risk assessment flagged issues that weren't visible in the documents.",
    author: "Rajesh Sharma",
    title: "Real Estate Investor",
    avatar: "RS",
  },
  {
    quote:
      "As a bank, we now require LandSecure verification before approving property loans. It has reduced our non-performing assets by 15% in just six months.",
    author: "Priya Mehta",
    title: "Loan Officer, HDFC Bank",
    avatar: "PM",
  },
  {
    quote:
      "The map visualization makes it easy to identify legal status of properties in specific areas. This has streamlined our urban planning process significantly.",
    author: "Vikram Singh",
    title: "Municipal Corporation Officer",
    avatar: "VS",
  },
];

const TestimonialSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-sm font-semibold tracking-wider text-landsecure-600 uppercase">
            Testimonials
          </span>
          <h2 className="mt-2 text-3xl font-bold text-gray-900 sm:text-4xl">
            Trusted by professionals across India
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Hear from users who have transformed their property verification
            process with our platform.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="border border-gray-200 shadow-sm hover:shadow-md transition-all overflow-hidden bg-white"
            >
              <CardContent className="p-6">
                <div className="mb-6">
                  {/* Quote icon */}
                  <svg
                    className="h-8 w-8 text-landsecure-200"
                    fill="currentColor"
                    viewBox="0 0 32 32"
                    aria-hidden="true"
                  >
                    <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                  </svg>
                </div>

                <p className="text-gray-700 mb-6">{testimonial.quote}</p>

                <div className="flex items-center">
                  <Avatar className="h-10 w-10 mr-3">
                    <AvatarFallback className="bg-landsecure-100 text-landsecure-700">
                      {testimonial.avatar}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      {testimonial.author}
                    </h4>
                    <p className="text-sm text-gray-500">{testimonial.title}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
