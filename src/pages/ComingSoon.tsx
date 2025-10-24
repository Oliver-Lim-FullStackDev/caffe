import { useEffect, useState } from "react";
import { Coffee } from 'lucide-react';

export const ComingSoon = () => {
  const [animatedText, setAnimatedText] = useState("");
  const text = "onder constructie";
  
  useEffect(() => {
    const animateText = async () => {
      for (let i = 0; i <= text.length; i++) {
        setAnimatedText(text.slice(0, i));
        await new Promise((resolve) => setTimeout(resolve, 150));
      }
    };

    const startAnimation = () => {
      setAnimatedText("");
      animateText();
    };

    startAnimation();
    const interval = setInterval(startAnimation, (text.length * 150) + 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <div className="w-full flex justify-center pt-8 sm:pt-12">
        <img
          src="./logo.png"
          alt="Menno's Koffiebar Logo"
          className="w-32 sm:w-40 lg:w-[207px] h-auto aspect-[3.21]"
        />
      </div>
      <div className="flex-1 flex flex-col items-center justify-center p-4">
        <div className="relative mb-8">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-32 h-32 bg-orange-500 rounded-full animate-pulse-scale"></div>
          </div>
          <div className="relative z-10 w-32 h-32 flex items-center justify-center">
            <Coffee className="w-20 h-20 text-white" strokeWidth={1.5} />
          </div>
        </div>
        <h1 className="[font-family:'Switzer-Black',Helvetica] font-black text-[#FF6B00] text-4xl sm:text-5xl lg:text-6xl tracking-[0] leading-tight mb-8 min-h-[1.2em] flex items-center justify-center">
          {animatedText}
        </h1>
        
        <p className="[font-family:'Switzer-Medium',Helvetica] font-medium text-black text-base sm:text-lg tracking-[0] leading-[normal] text-center">
          voor vragen stuur me een mailtje:{" "}
          <a
            href="mailto:info@mennoskoffiebar.nl"
            className="text-[#FF6B00] hover:underline"
          >
            info@mennoskoffiebar.nl
          </a>
        </p>
      </div>
    </div>
  );
};