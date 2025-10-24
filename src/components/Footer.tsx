interface SocialLink {
  href: string;
  icon: string;
  alt: string;
}

interface FooterProps {
  socialLinks: SocialLink[];
  copyrightText: string;
}

export const Footer = ({ socialLinks, copyrightText }: FooterProps) => {
  return (
    <footer className="flex flex-col items-center gap-[65px] pb-[100px]">
      <div className="flex items-center gap-3.5">
        {socialLinks.map((link, index) => (
          <a
            key={index}
            href={link.href}
            className="hover:opacity-70 transition-opacity flex items-center justify-center min-w-[44px] min-h-[44px]"
          >
            <img
              src={link.icon}
              alt={link.alt}
              className="w-[34px] h-[34px] object-cover"
            />
          </a>
        ))}
      </div>

      <p className="[font-family:'Switzer-Medium',Helvetica] font-medium text-black text-base text-justify tracking-[0] leading-[normal]">
        {copyrightText}
      </p>
    </footer>
  );
};
