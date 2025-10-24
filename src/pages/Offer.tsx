import { AnnouncementBanner } from "../components/AnnouncementBanner";
import { Header } from "../components/Header";
import { QuoteSection } from "../components/QuoteSection";
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

const features = [
  { src: "./coffee-bean.png", text: "Verse specialty koffie" },
  { src: "./syrup.png", text: "Home-made siropen" },
  { src: "./infinity.png", text: "Onbeperkt service" },
];

export const Offer = (): JSX.Element => {
  return (
    <div className="bg-[#fefff6] overflow-x-hidden w-full relative flex flex-col min-h-screen">
      <AnnouncementBanner text="ONTVANG DIRECT JE OFFERTE!" />

      <Header navItems={navItems} />

      <main className="flex-1 flex flex-col py-12 sm:py-16">
        <QuoteSection
          title="Simpel en Direct je Offerte Berekenen"
          description="Omdat wij geloven dat koffie meer is dan alleen een drankje. Het is een moment van beleving, gezelligheid en kwaliteit. Met onze mobiele koffiebar brengen wij niet alleen heerlijke koffies, maar ook sfeer en persoonlijke aandacht naar jouw evenement."
          features={features}
        />
      </main>

      <Footer socialLinks={socialLinks} copyrightText="MENNOSKOFFIEBAR ©2025" />

    </div>
  );
};