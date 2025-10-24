import { AnnouncementBanner } from "../components/AnnouncementBanner";
import { Header } from "../components/Header";
import { HeroSection } from "../components/HeroSection";
import { LogoSection } from "../components/LogoSection";
import { ImageTextSection } from "../components/ImageTextSection";
import { TestimonialsSection } from "../components/TestimonialsSection";
import { ContactSection } from "../components/ContactSection";
import { Footer } from "../components/Footer";

const logos = [
  { src: "./adidas.png", alt: "Adidas logo", type: "adidas" },
  { src: "./google.png", alt: "Google logo", type: "google" },
  { src: "./adidas.png", alt: "Adidas logo", type: "adidas" },
  { src: "./google.png", alt: "Google logo", type: "google" },
  { src: "./adidas.png", alt: "Adidas logo", type: "adidas" },
  { src: "./google.png", alt: "Google logo", type: "google" },
  { src: "./adidas.png", alt: "Adidas logo", type: "adidas" },
  { src: "./google.png", alt: "Google logo", type: "google" },
];

const testimonials = [
  {
    text: "Op de heropening van onze milieustraat in Damwâld verzorgde Menno's koffiebar de catering. Uitstekende koffie en service met een glimlach!",
    author: "Omrin",
  },
  {
    text: "Op de heropening van onze milieustraat in Damwâld verzorgde Menno's koffiebar de catering. Uitstekende koffie en service met een glimlach!",
    author: "Omrin",
  },
  {
    text: "Op de heropening van onze milieustraat in Damwâld verzorgde Menno's koffiebar de catering. Uitstekende koffie en service met een glimlach!",
    author: "Omrin",
  },
  {
    text: "Op de heropening van onze milieustraat in Damwâld verzorgde Menno's koffiebar de catering. Uitstekende koffie en service met een glimlach!",
    author: "Omrin",
  },
  {
    text: "Op de heropening van onze milieustraat in Damwâld verzorgde Menno's koffiebar de catering. Uitstekende koffie en service met een glimlach!",
    author: "Omrin",
  },
  {
    text: "Op de heropening van onze milieustraat in Damwâld verzorgde Menno's koffiebar de catering. Uitstekende koffie en service met een glimlach!",
    author: "Omrin",
  },
];

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

export const Services = (): JSX.Element => {
  return (
    <div className="bg-[#fefff6] overflow-x-hidden w-full relative">
      <AnnouncementBanner text="ONTVANG DIRECT JE OFFERTE!" />

      <Header navItems={navItems} />

      <HeroSection
        title="Koffie Catering"
        description={<>
          Van planning tot uitvoering: wij maken koffiecatering makkelijk en zorgeloos.<br /><br />
          Laat je gasten genieten van onze barista's die ter plekke de lekkerste espresso's, cappuccino's en lattes bereiden met unieke huisgemaakte smaken.
        </>}
        imageSrc="./hero-image.png"
        imageAlt="Coffee cart at event"
        reviews={{ rating: 5.0, count: 15 }}
      />

      <LogoSection logos={logos} />

      <ImageTextSection
        title="Wat is Custom Branding?"
        description={<>
          Geef jouw event een persoonlijke touch met onze custom branding. Wij passen de koffie-ervaring aan op jouw merk of thema, zodat alles perfect aansluit.<br /><br />
          Mogelijkheden:
          <ul className="list-disc ml-6">
            <li>Bar - jouw tarief wordt berekend op basis van aantal gasten, duur van de service en eventuele reisafstand.</li>
            <li>Bekers - ons formulier is binnen een klikken ingevuld en je hebt direct een duidelijke prijs.</li>
            <li>Custom drankjes - geen verborgen kosten, altijd helder wat je betaalt.</li>
          </ul><br />
          Zo wordt onze mobiele koffiebar niet alleen een smaakbeleving, maar ook een echte eyecatcher.
        </>}
        imageSrc="./barista.png"
        imageAlt="Barista preparing coffee"
        imagePosition="left"
      />

      <TestimonialsSection
        title="Wat zeggen onze klanten"
        testimonials={testimonials}
        overallRating={{ score: 5.0, count: 15 }}
      />

      <ContactSection
        title="VRAGEN?"
        description="Heb je vragen over onze koffie catering, neem gerust contact op."
      />

      <Footer socialLinks={socialLinks} copyrightText="MENNOSKOFFIEBAR ©2025" />
    </div>
  );
};
