import { AnnouncementBanner } from "../components/AnnouncementBanner";
import { Header } from "../components/Header";
import { ContactComponent } from "../components/ContactComponent";
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

export const Contact = (): JSX.Element => {
  return (
    <div className="bg-[#fefff6] overflow-x-hidden w-full relative flex flex-col min-h-screen">
      <AnnouncementBanner text="ONTVANG DIRECT JE OFFERTE!" />

      <Header navItems={navItems} />

      <main className="flex-1 flex flex-col py-12 sm:py-16">
        <ContactComponent />
      </main>

      <Footer socialLinks={socialLinks} copyrightText="MENNOSKOFFIEBAR ©2025" />
    </div>
  );
};