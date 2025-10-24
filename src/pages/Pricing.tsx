import { AnnouncementBanner } from "../components/AnnouncementBanner";
import { Header } from "../components/Header";
import { HeroSection } from "../components/HeroSection";
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

export const Pricing = (): JSX.Element => {
  return (
    <div className="bg-[#fefff6] overflow-x-hidden w-full relative">
      <AnnouncementBanner text="ONTVANG DIRECT JE OFFERTE!" />

      <Header navItems={navItems} />

      <HeroSection
        title="Tarieven"
        description={<>
          Iedere gelegenheid is uniek. Daarom berekenen wij ons tarief op basis van jouw wensen: het menu, het aantal gasten en eventuele extra’s. Met onze rekentool zie je direct een prijsindicatie op maat.
          <br /><br />

          Zo werkt het:
          <ul className="list-disc ml-6">
            <li><b>Directe prijsindicatie:</b> jouw tarief wordt berekend op basis van aantal gasten, duur van de service en eventuele reisafstand.</li>
            <li><b>Snel & eenvoudig:</b> ons formulier is binnen een klikken ingevuld en je hebt direct een duidelijke prijs.</li>
            <li><b>Altijd inzicht:</b> check meteen onze beschikbaarheid voor jouw gewenste datum.</li>
            <li><b>Transparant & eerlijk:</b> geen verborgen kosten, altijd helder wat je betaalt.</li>
            <li><b>Flexibel:</b> geschikt voor uiteenlopende budgetten en evenementen.</li>
            <li><b>Makkelijk boeken:</b> ben je tevreden met de offerte, dan is boeken binnen enkele minuten geregeld.</li>
          </ul>
        </>}
        imageSrc="./hero-image.png"
        imageAlt="Coffee cart at event"
        reviews={{ rating: 5.0, count: 15 }}
      />

      <ContactSection
        title="VRAGEN?"
        description="Heb je vragen over onze koffie catering, neem gerust contact op."
      />

      <Footer socialLinks={socialLinks} copyrightText="MENNOSKOFFIEBAR ©2025" />
    </div>
  );
};