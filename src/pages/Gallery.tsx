import { AnnouncementBanner } from "../components/AnnouncementBanner";
import { Header } from "../components/Header";
import { GallerySection } from "../components/GallerySection";
import { Footer } from "../components/Footer";

const navItems = [
  { label: "Tarief", path: "/tarief" },
  { label: "Menu", path: "/menu" },
  { label: "Galerij", path: "/galerij" },
  { 
    label: "Diensten",
    dropdown: [
      { label: "Coffee catering", path: "/diensten?coffee" },
      { label: "Espresso catering", path: "/diensten?espresso" },
      { label: "Filter catering", path: "/diensten?filter" }
    ]
  },
  { label: "Contact", path: "/contact" },
];


const socialLinks = [
  { href: "https://www.instagram.com", icon: "./instagram.png", alt: "Instagram" },
  { href: "https://www.facebook.com", icon: "./facebook.png", alt: "Facebook" },
  { href: "https://www.tiktok.com", icon: "./tiktok.png", alt: "TikTok" },
];

const galleryImages = [
    "/images/1.png",
    "/images/2.png",
    "/images/3.png",
    
    "/images/2.png",
    "/images/3.png",
    "/images/1.png",
    
    "/images/3.png",
    "/images/1.png",
    "/images/2.png",
  ]

export const Gallery = (): JSX.Element => {
  return (
    <div className="bg-[#fefff6] overflow-x-hidden w-full relative">
      <AnnouncementBanner text="ONTVANG DIRECT JE OFFERTE!" />

      <Header navItems={navItems} />

      <GallerySection
        title="Galerij"
        subtitle="Neem een kijkje in onze atmosfeer."
        images={galleryImages}
      />

      <Footer socialLinks={socialLinks} copyrightText="MENNOSKOFFIEBAR ©2025" />
    </div>
  );
}