import { AnnouncementBanner } from "../components/AnnouncementBanner";
import { Header } from "../components/Header";
import { MenuComponent } from "../components/MenuComponent";
import { ContactSection } from "../components/ContactSection";
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

const categories = [
  {
    name: "Coffee",
    items: [
      { title: "Espresso", description: "Gebalanceerd, chocolate, nutella, fruity. Iedereen vind dit lekker." },
      { title: "Americano", description: "Maple-sweet matcha meets nutty black sesame. Earthy, bold, and mysteriously smooth." },
      { title: "Cappuccino", description: "Maple-sweet matcha meets nutty black sesame. Earthy, bold, and mysteriously smooth." },
      { title: "Latte", description: "Maple-sweet matcha meets nutty black sesame. Earthy, bold, and mysteriously smooth." },
    ],
  },
  {
    name: "Not Coffee",
    items: [
      { title: "Matcha", description: "Gebalanceerd, chocolate, nutella, fruity. Iedereen vind dit lekker." },
      { title: "Chai", description: "Maple-sweet matcha meets nutty black sesame. Earthy, bold, and mysteriously smooth." },
      { title: "Losse Thee", description: "Maple-sweet matcha meets nutty black sesame. Earthy, bold, and mysteriously smooth." },
      { title: "Hot Chocolate", description: "Maple-sweet matcha meets nutty black sesame. Earthy, bold, and mysteriously smooth." },
    ],
  },
  {
    name: "Melk",
    items: [
      { title: "Koeien-melk", description: "Gebalanceerd, chocolate, nutella, fruity. Iedereen vind dit lekker." },
      { title: "Haver", description: "Maple-sweet matcha meets nutty black sesame. Earthy, bold, and mysteriously smooth." },
      { title: "Extra optie?", description: "Vraag gerust." },
    ],
  },
  {
    name: "Siropen",
    items: [
      { title: "Vanille", description: "Gebalanceerd, chocolate, nutella, fruity. Iedereen vind dit lekker." },
      { title: "Brown Sugar", description: "Maple-sweet matcha meets nutty black sesame. Earthy, bold, and mysteriously smooth." },
    ],
  },
  {
    name: "Extra Opties",
    items: [
      { title: "Fresh pastries", description: "Gebalanceerd, chocolate, nutella, fruity. Iedereen vind dit lekker." },
      { title: "Iced dranken", description: "Maple-sweet matcha meets nutty black sesame. Earthy, bold, and mysteriously smooth." },
    ],
  },
];

export const Menu = (): JSX.Element => {
  return (
    <div className="bg-[#fefff6] overflow-x-hidden w-full relative flex flex-col min-h-screen">
      <AnnouncementBanner text="ONTVANG DIRECT JE OFFERTE!" />

      <Header navItems={navItems} />

      <main className="flex-1 flex flex-col gap-12 sm:gap-16 lg:gap-24 py-12 sm:py-16">
        <MenuComponent
          description="Alle dranken van onze menukaart worden geserveerd zoals jouw gasten ze willen: warm, iced of precies naar wens."
          categories={categories}
        />

        <ContactSection
          title="VRAGEN?"
          description="Heb je vragen over onze koffie catering, neem gerust contact op."
        />
      </main>

      <Footer socialLinks={socialLinks} copyrightText="MENNOSKOFFIEBAR ©2025" />
    </div>
  );
};