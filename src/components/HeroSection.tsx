import { Button } from "./ui/button";
import { ChevronRight } from "lucide-react";
import { StarRating } from "./StarRating";
import { useNavigate } from "react-router-dom";

interface HeroSectionProps {
  title: string;
  description: any;
  imageSrc: string;
  imageAlt: string;
  reviews: {
    rating: number;
    count: number;
  };
}

export const HeroSection = ({
  title,
  description,
  imageSrc,
  imageAlt,
  reviews,
}: HeroSectionProps) => {
  const navigate = useNavigate();

  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 px-4 sm:px-8 lg:px-[135px] py-8 sm:py-14 max-w-[1480px] mx-auto">
      <div className="flex flex-col justify-center order-1 lg:order-1">
        <h1 className="max-w-full lg:w-[573px] [font-family:'Switzer-Black',Helvetica] font-black text-black text-3xl sm:text-4xl lg:text-[50px] tracking-[0] leading-tight lg:leading-[58.1px] mb-6 sm:mb-8 lg:mb-[50px]">
          {title}
        </h1>

        <p className="max-w-full lg:w-[514px] [font-family:'Switzer-Medium',Helvetica] font-medium text-black text-base sm:text-lg tracking-[0] leading-[normal] mb-6 sm:mb-8 lg:mb-[43px]">
          {description}
        </p>

        <Button
          onClick={() => navigate('/offerte')}
          className="w-full sm:w-[268px] h-[55px] sm:h-[61px] bg-black text-[#fffff6] [font-family:'Switzer-Semibold',Helvetica] font-normal text-sm sm:text-base hover:bg-black/90 mb-4 sm:mb-[25px]"
        >
          <span>Direct Offerte Berekenen</span>
          <ChevronRight className="w-5 h-5 sm:w-[23px] sm:h-[23px] ml-2" />
        </Button>

        <div className="flex items-center gap-1">
          <span className="[font-family:'Switzer-Medium',Helvetica] font-medium text-black text-sm sm:text-base tracking-[0] leading-[normal]">
            {reviews.rating.toFixed(1)} ({reviews.count} reviews)
          </span>
          <StarRating />
        </div>
      </div>

      <div className="flex items-center justify-center lg:justify-end order-2 lg:order-2">
        <img
          className="w-full max-w-[492px] h-auto lg:h-[530px] object-cover"
          alt={imageAlt}
          src={imageSrc}
        />
      </div>
    </section>
  );
};
