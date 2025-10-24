import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";


export function ContactComponent() {
  return (
    <section className="relative w-full bg-[#FFFFF6] py-16 px-6 md:px-20 lg:px-32 grid grid-cols-1 md:grid-cols-2 gap-12">
      {/* Left Side */}
      <div className="flex flex-col justify-center">
        <h2 className="text-4xl md:text-5xl font-extrabold text-black mb-6">
          Heb je Vragen?
        </h2>
        <p className="text-lg text-black mb-6 leading-relaxed">
          Heb je vragen of wil je een boeking doen? Neem gerust contact met ons op.
        </p>
        <p className="text-lg text-black mb-2">
          E-mail: <a href="mailto:info@mennoskoffiebar.nl" className="underline">info@mennoskoffiebar.nl</a>
        </p>
        <p className="text-lg text-black mb-2">
          Telefoon/WhatsApp: <a href="tel:+31683013586" className="underline">+31 6 83013586</a>
        </p>
        <p className="text-lg text-black mb-2">Locatie: Dokkum</p>
        <div className="mt-6">
          <p className="text-lg text-black font-semibold">Bedrijfsgegevens</p>
          <p className="text-black">KvK: [jouw KvK-nummer]</p>
          <p className="text-black">BTW: [jouw BTW-nummer]</p>
        </div>
      </div>


      {/* Right Side Form */}
      <div className="bg-black p-8 rounded-none flex flex-col justify-center">
        <form className="space-y-6">
          <div>
            <label className="block text-white font-semibold mb-2">Naam</label>
            <Input placeholder="Naam" className="bg-transparent border border-white text-white placeholder:text-white/60" />
          </div>
          <div>
            <label className="block text-white font-semibold mb-2">E-mail</label>
            <Input placeholder="E-mail" className="bg-transparent border border-white text-white placeholder:text-white/60" />
          </div>
          <div>
            <label className="block text-white font-semibold mb-2">Bericht</label>
            <Textarea placeholder="Typ hier..." className="bg-transparent border border-white text-white placeholder:text-white/60 h-32" />
          </div>
          <Button type="submit" className="w-full bg-[#FFFFF6] text-black font-semibold hover:bg-gray-200">
            Versturen
          </Button>
        </form>
      </div>
    </section>
  );
}