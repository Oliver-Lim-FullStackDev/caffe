import { Button } from "./ui/button";
import { ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface ContactSectionProps {
  title: string;
  description: string;
}

export const ContactSection = ({
  title,
  description,
}: ContactSectionProps) => {
  const navigate = useNavigate();

  const onQuoteClick = () => {
    navigate('/offerte');
  }

  const onContactClick = () => {
    navigate('/contact');
  }
  
  return (
    <section className="relative px-4 sm:px-8 lg:px-[135px] py-16 sm:py-24 lg:py-[178px] mb-12 sm:mb-16 lg:mb-[100px] max-w-[1440px] mx-auto">
      <div className="absolute inset-0 mx-4 sm:mx-8 lg:mx-[135px] bg-black rounded-none" />

      <div className="relative z-10 flex flex-col items-center text-center px-4">
        <h2 className="[font-family:'Switzer-Black',Helvetica] font-black text-[#fffff5] text-3xl sm:text-4xl lg:text-5xl tracking-[0] leading-[normal] mb-8 sm:mb-12 lg:mb-[63px]">
          {title}
        </h2>

        <p className="[font-family:'Switzer-Medium',Helvetica] font-medium text-[#fffff5] text-base sm:text-lg lg:text-xl text-justify tracking-[0] leading-[normal] mb-8 sm:mb-10 lg:mb-[57px] max-w-2xl">
          {description}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 sm:gap-[25px] w-full sm:w-auto">
          <Button
            onClick={onQuoteClick}
            className="w-full sm:w-[268px] h-[55px] sm:h-[61px] bg-white text-black [font-family:'Switzer-Semibold',Helvetica] font-normal text-sm sm:text-base hover:bg-white/90 rounded-none"
          >
            <span>Direct Offerte Berekenen</span>
            <ChevronRight className="w-5 h-5 sm:w-[23px] sm:h-[23px] ml-2" />
          </Button>

          <Button
            onClick={onContactClick}
            className="w-full sm:w-[268px] h-[55px] sm:h-[61px] bg-transparent text-[#fffff6] border-[3px] border-solid border-white [font-family:'Switzer-Semibold',Helvetica] font-normal text-sm sm:text-base hover:bg-white/10 rounded-none"
          >
            <span>Neem contact op</span>
            <ChevronRight className="w-5 h-5 sm:w-[23px] sm:h-[23px] ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};
