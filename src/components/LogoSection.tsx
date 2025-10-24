interface Logo {
  src: string;
  alt: string;
  type: string;
}

interface LogoSectionProps {
  logos: Logo[];
}

export const LogoSection = ({ logos }: LogoSectionProps) => {
  const duplicatedLogos = [...logos, ...logos, ...logos];
  
  return (
    <section className="overflow-hidden min-h-[80px] sm:min-h-[100px] lg:h-[130px] mb-4 sm:mb-[20px] mix-blend-luminosity opacity-[0.58] py-4">
      <div className="flex animate-marquee items-center">
        {duplicatedLogos.map((logo, index) => (
          <img
            key={index}
            className={`${
              logo.type === "adidas"
                ? "w-16 sm:w-20 lg:w-[93px] h-auto"
                : "w-20 sm:w-24 lg:w-[126px] h-auto"
            } object-cover mx-4 sm:mx-6 lg:mx-[53px] flex-shrink-0`}
            alt={logo.alt}
            src={logo.src}
          />
        ))}
      </div>
    </section>
  );
};
