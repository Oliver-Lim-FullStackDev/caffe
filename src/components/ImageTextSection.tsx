import { Button } from "./ui/button";
import { ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface ImageTextSectionProps {
  title: string;
  description: any;
  imageSrc: string;
  imageAlt: string;
  imagePosition?: "left" | "right";
  showButton?: boolean;
}

export const ImageTextSection = ({
  title,
  description,
  imageSrc,
  imageAlt,
  imagePosition = "left",
  showButton = true,
}: ImageTextSectionProps) => {
  const navigate = useNavigate();

  const imageElement = (
    <div className="flex items-center justify-center lg:justify-start max-w-[1440px] mx-auto">
      <img
        className="w-full max-w-[533px] h-auto lg:h-[535px] object-cover"
        alt={imageAlt}
        src={imageSrc}
      />
    </div>
  );

  const textElement = (
    <div className="flex flex-col justify-center">
      <h2 className="[font-family:'Switzer-Black',Helvetica] font-black text-black text-3xl sm:text-4xl lg:text-5xl tracking-[0] leading-[normal] mb-4 sm:mb-[25px]">
        {title}
      </h2>

      <p className="max-w-full lg:w-[628px] [font-family:'Switzer-Medium',Helvetica] font-medium text-black text-base sm:text-lg text-justify tracking-[0] leading-[normal] mb-8 sm:mb-[54px]">
        {description}
      </p>

      {showButton && (
        <Button
          onClick={() => navigate('/offerte')}
          className="w-full sm:w-[268px] h-[55px] sm:h-[61px] bg-black text-[#fffff6] [font-family:'Switzer-Semibold',Helvetica] font-normal text-sm sm:text-base hover:bg-black/90"
        >
          <span>Direct Offerte Berekenen</span>
          <ChevronRight className="w-5 h-5 sm:w-[23px] sm:h-[23px] ml-2" />
        </Button>
      )}
    </div>
  );

  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 px-4 sm:px-8 lg:px-[135px] py-12 sm:py-16 lg:py-[100px]">
      {imagePosition === "left" ? (
        <>
          {imageElement}
          {textElement}
        </>
      ) : (
        <>
          <div className="order-2 lg:order-1">{textElement}</div>
          <div className="order-1 lg:order-2">{imageElement}</div>
        </>
      )}
    </section>
  );
};
