import { useState, useEffect } from "react";
import { TestimonialCard } from "./TestimonialCard";
import { StarRating } from "./StarRating";

interface Testimonial {
  text: string;
  author: string;
}

interface TestimonialsSectionProps {
  title: string;
  testimonials: Testimonial[];
  overallRating: {
    score: number;
    count: number;
  };
}

export const TestimonialsSection = ({
  title,
  testimonials,
  overallRating,
}: TestimonialsSectionProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerSlide, setItemsPerSlide] = useState(3.5);

  useEffect(() => {
    const updateItemsPerSlide = () => {
      if (window.innerWidth < 640) setItemsPerSlide(1);
      else if (window.innerWidth < 768) setItemsPerSlide(2);
      else if (window.innerWidth < 1180) setItemsPerSlide(3);
      else setItemsPerSlide(3.5);
    };
    
    updateItemsPerSlide();
    window.addEventListener('resize', updateItemsPerSlide);
    return () => window.removeEventListener('resize', updateItemsPerSlide);
  }, []);

  const maxIndex = Math.max(0, testimonials.length - itemsPerSlide);

  const goToPrevious = () => {
    setCurrentIndex(prev => Math.max(0, prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex(prev => Math.min(maxIndex, prev + 1));
  };

  return (
    <section className="py-12 sm:py-16 lg:py-[100px] mx-auto px-4 sm:px-8 w-full sm:mb-[80px]">
      <h2 className="text-center [font-family:'Switzer-Black',Helvetica] font-black text-black text-3xl sm:text-4xl lg:text-5xl tracking-[0] leading-[normal] mb-6 sm:mb-[30px]">
        {title}
      </h2>

      <div className="flex items-center justify-center gap-1 mb-8 sm:mb-12 lg:mb-[60px]">
        <span className="[font-family:'Switzer-Medium',Helvetica] font-medium text-black text-base sm:text-lg tracking-[0] leading-[normal]">
          {overallRating.score.toFixed(1)} ({overallRating.count} reviews)
        </span>
        <StarRating />
      </div>

      <div className="relative max-w-[1440px] mx-auto">
        {testimonials.length > itemsPerSlide && (
          <>
            <button
              onClick={goToPrevious}
              disabled={currentIndex === 0}
              className="absolute left-0 sm:-left-4 top-1/2 -translate-y-1/2 z-10 w-8 h-8 sm:w-10 sm:h-10 bg-white rounded-full shadow-lg flex items-center justify-center disabled:opacity-30 hover:bg-gray-50 transition-colors"
            >
              <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            <button
              onClick={goToNext}
              disabled={currentIndex >= maxIndex}
              className="absolute right-0 sm:-right-4 top-1/2 -translate-y-1/2 z-10 w-8 h-8 sm:w-10 sm:h-10 bg-white rounded-full shadow-lg flex items-center justify-center disabled:opacity-30 hover:bg-gray-50 transition-colors"
            >
              <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </>
        )}

        <div className="overflow-hidden w-full px-4">
          <div 
            className={`flex transition-transform duration-300 ease-in-out ${itemsPerSlide === 1 ? 'justify-center items-center' : 'gap-3'}`}
            style={{ 
              transform: itemsPerSlide === 1 ? 'none' : `translateX(-${currentIndex * (100 / itemsPerSlide)}%)`
            }}
          >
            {itemsPerSlide === 1 ? (
              <div className="w-80 max-w-full mx-auto">
                <TestimonialCard
                  text={testimonials[currentIndex].text}
                  author={testimonials[currentIndex].author}
                />
              </div>
            ) : (
              testimonials.map((testimonial, index) => (
                <div 
                  key={index} 
                  className="flex-shrink-0"
                  style={{ width: `calc(${100 / itemsPerSlide}% - 1rem)` }}
                >
                  <TestimonialCard
                    text={testimonial.text}
                    author={testimonial.author}
                  />
                </div>
              ))
            )}
          </div>
        </div>

        {testimonials.length > itemsPerSlide && (
          <div className="flex justify-center mt-6 gap-2">
            {Array.from({ length: maxIndex + 1 }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === currentIndex ? 'bg-black' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
