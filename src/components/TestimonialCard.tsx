import { Star } from "lucide-react";
import { Card, CardContent } from "./ui/card";

interface TestimonialCardProps {
  text: string;
  author: string;
  rating?: number;
}

export const TestimonialCard = ({
  text,
  author,
  rating = 5,
}: TestimonialCardProps) => {
  return (
    <Card className="w-full max-w-[365px] min-h-[188px] bg-[#fffff5] border-[3px] border-solid border-black rounded-none">
      <CardContent className="p-6 sm:p-[33px] flex flex-col justify-between h-full">
        <p className="w-full [font-family:'Switzer-Medium',Helvetica] font-medium text-black text-sm sm:text-base text-justify tracking-[0] leading-[normal]">
          {text}
        </p>

        <div className="flex items-center gap-2 sm:gap-[9px] mt-4">
          <span className="[font-family:'Switzer-Semibold',Helvetica] font-normal text-black text-lg sm:text-xl tracking-[0] leading-[normal]">
            {author}
          </span>
          <div className="flex items-center gap-0.5">
            {Array.from({ length: rating }).map((_, i) => (
              <Star
                key={i}
                className="w-[14.23px] h-[14.23px] fill-current text-[#EBB031]"
              />
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
