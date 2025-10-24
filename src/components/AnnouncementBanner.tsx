interface AnnouncementBannerProps {
  text: string;
  repeatCount?: number;
}

export const AnnouncementBanner = ({ text, repeatCount = 8 }: AnnouncementBannerProps) => {
  const bannerTexts = Array(repeatCount).fill(text);

  return (
    <div className="w-full h-[30px] sm:h-[38px] bg-[#1900ff] flex items-center justify-center overflow-hidden">
      <div 
        className="flex items-center gap-8 sm:gap-[54px] animate-marquee whitespace-nowrap"
        style={{ '--gap': '2rem' } as React.CSSProperties}
      >
        {[...bannerTexts, ...bannerTexts].map((text, index) => (
          <div
            key={index}
            className="[font-family:'Switzer-Semibold',Helvetica] font-normal text-white text-xs sm:text-sm text-center tracking-[0] leading-[normal]"
          >
            {text}
          </div>
        ))}
      </div>
    </div>
  );
};
