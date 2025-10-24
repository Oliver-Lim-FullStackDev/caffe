import { QuoteCalculator } from "./QuoteCalculator";
import { FeatureList } from "./FeatureList";

interface Feature {
  src: string;
  text: string;
}

interface QuoteSectionProps {
  title: string;
  description: string;
  features: Feature[];
  onCalculate?: (duration: number, guests: number) => void;
}

export const QuoteSection = ({
  title,
  description,
  features,
  onCalculate,
}: QuoteSectionProps) => {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 px-4 sm:px-8 lg:px-[135px] py-12 sm:py-16 lg:py-[100px] max-w-[1480px] mx-auto w-full">
      <div className="flex flex-col justify-center w-full">
        <h2 className="[font-family:'Switzer-Black',Helvetica] font-black text-black text-3xl sm:text-4xl lg:text-5xl tracking-[0] leading-[normal] mb-6 sm:mb-[36px]">
          {title}
        </h2>

        <p className="[font-family:'Switzer-Regular',Helvetica] font-normal text-black text-base sm:text-lg tracking-[0] leading-[normal] mb-4 sm:mb-[26px]">
          {description}
        </p>

        <FeatureList features={features} />
      </div>

      <div className="flex items-center justify-center lg:justify-end">
        <QuoteCalculator onCalculate={onCalculate} />
      </div>
    </section>
  );
};
