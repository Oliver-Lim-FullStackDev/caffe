interface Feature {
  src: string;
  text: string;
}

interface FeatureListProps {
  features: Feature[];
}

export const FeatureList = ({ features }: FeatureListProps) => {
  return (
    <div className="flex flex-col gap-2 sm:gap-[10px] pl-0 sm:pl-3">
      {features.map((feature, index) => (
        <div key={index} className="flex items-center gap-3 sm:gap-4">
          <img src={feature.src} className="w-6 h-6 sm:w-8 sm:h-8 text-black flex-shrink-0" alt="" />
          <span className="[font-family:'Switzer-Semibold',Helvetica] font-semibold text-black text-base sm:text-lg lg:text-xl tracking-[0] leading-[normal]">
            {feature.text}
          </span>
        </div>
      ))}
    </div>
  );
};
