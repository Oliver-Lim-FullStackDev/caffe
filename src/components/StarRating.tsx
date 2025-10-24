import { Star } from "lucide-react";

interface StarRatingProps {
  rating?: number;
  size?: number;
}

export const StarRating = ({ rating = 5, size = 14.23 }: StarRatingProps) => {
  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: rating }).map((_, i) => (
        <Star
          key={i}
          className="fill-current text-[#EBB031]"
          style={{ width: size, height: size }}
        />
      ))}
    </div>
  );
};
