import { useState } from "react";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Input } from "./ui/input";
import { GooglePlacesInput } from "./ui/google-places-input";
import { GOOGLE_PLACES_API_KEY } from "../config/google";

type QuoteData = {
  eventDuration: number;
  guestCount: number;
  address: string;
  date: string;
  startTime: string;
  endTime: string;
  occasion: string;
  extras: string[];
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  message: string;
  foundVia: string;
};

type StepProps = {
  data: QuoteData;
  setData: (updater: (prev: QuoteData) => QuoteData) => void;
  onNext: () => void;
  onBack: () => void;
};

// 🔘 Shared Step Indicator
const StepIndicator = ({ active }: { active: number }) => (
  <div className="absolute top-[35px] left-1/2 -translate-x-1/2 flex gap-2">
    {[...Array(6)].map((_, i) => (
      <div
        key={i}
        className={`w-[10px] h-[10px] rounded-full border border-[#FFFFF6] ${
          i === active ? "bg-[#FFFFF6]" : "bg-transparent"
        }`}
      />
    ))}
  </div>
);

// 1️⃣ QuoteTool — Event & Guest count
const QuoteTool = ({ data, setData, onNext }: StepProps) => (
  <div className="relative w-[400px] h-[500px] bg-black text-white font-[Switzer,Helvetica]">

    {/* Duur van Evenement */}
    <label className="absolute top-[60px] left-[39px] text-[16px] font-semibold">
      Duur van Evenement
    </label>
    <div className="absolute top-[90px] left-[39px] w-[328px] h-[51px] border border-white flex items-center justify-between px-5">
      <button
        onClick={() =>
          setData((p) => ({
            ...p,
            eventDuration: Math.max(1, p.eventDuration - 1),
          }))
        }
      >
        -
      </button>
      <span>{data.eventDuration} uur</span>
      <button
        onClick={() => setData((p) => ({ ...p, eventDuration: p.eventDuration + 1 }))}
      >
        +
      </button>
    </div>

    {/* Aantal Gasten */}
    <label className="absolute top-[160px] left-[39px] text-[16px] font-semibold">
      Aantal Gasten
    </label>
    <div className="absolute top-[190px] left-[39px] w-[328px] h-[51px] border border-white flex items-center justify-between px-5">
      <button
        onClick={() =>
          setData((p) => ({
            ...p,
            guestCount: Math.max(1, p.guestCount - 10),
          }))
        }
      >
        -
      </button>
      <span>{data.guestCount} Gasten</span>
      <button
        onClick={() =>
          setData((p) => ({ ...p, guestCount: p.guestCount + 10 }))
        }
      >
        +
      </button>
    </div>

    <p className="absolute top-[364px] left-[39px] w-[328px] text-[14px] leading-[18px] text-white/60">
      ⓘ per 100 gasten nemen wij een extra barista mee voor de beste doorloop.
    </p>

    <button
      onClick={onNext}
      className="absolute top-[418px] left-[39px] w-[328px] h-[51px] bg-[#FFFFF6] text-black text-[16px] font-semibold hover:bg-[#FFFFF6]/90 transition"
    >
      Berekenen
    </button>
  </div>
);

// 2️⃣ AddressStep
const AddressStep = ({ data, setData, onNext, onBack }: StepProps) => (
  <Card className="w-[400px] h-[500px] bg-black border-0 rounded-none text-white">
    <CardContent className="relative flex flex-col items-center p-[39px] w-full h-full">
      <StepIndicator active={1} />

      <div className="w-full max-w-[328px] mt-[80px]">
        <label className="block text-[16px] font-semibold mb-[10px]">ADRES</label>
        <GooglePlacesInput
          value={data.address}
          onChange={(value) =>
            setData((prev) => ({ ...prev, address: value }))
          }
          placeholder="zoek adres..."
          className="w-full h-[51px] bg-transparent border border-white text-white placeholder:text-white/40 rounded-none"
          apiKey={GOOGLE_PLACES_API_KEY}
        />
      </div>

      <div className="flex justify-between w-full max-w-[328px] mt-auto mb-[10px]">
        <Button
          onClick={onBack}
          className="w-[156px] h-[51px] border-2 border-[#FFFFF6] text-[#FFFFF6] bg-transparent hover:bg-[#FFFFF6]/10 rounded-none"
        >
          Terug
        </Button>
        <Button
          onClick={onNext}
          className="w-[156px] h-[51px] bg-[#FFFFF6] text-black border-[3px] border-[#FFFFF6] hover:bg-[#FFFFF6]/90 rounded-none"
        >
          Volgende
        </Button>
      </div>
    </CardContent>
  </Card>
);

// 3️⃣ DateTimeStep
const DateTimeStep = ({ data, setData, onNext, onBack }: StepProps) => (
  <Card className="relative w-[400px] h-[500px] bg-black border-0 rounded-none text-white">
    <CardContent className="absolute inset-0 p-[39px] flex flex-col items-center">
      <StepIndicator active={2} />

      <div className="absolute left-[39px] top-[90px] w-[328px]">
        <label className="font-semibold text-[16px] uppercase mb-[9px] block">
          DATUM
        </label>
        <Input
          type="date"
          value={data.date}
          onChange={(e) => setData((p) => ({ ...p, date: e.target.value }))}
          className="w-[328px] h-[51px] bg-transparent border border-white text-white [color-scheme:dark] rounded-none px-[21px]"
        />
      </div>

      <div className="absolute left-[39px] top-[190px] w-[328px]">
        <label className="font-semibold text-[16px] uppercase mb-[9px] block">
          TIJD
        </label>
        <div className="flex items-center gap-[16px]">
          <input
            type="time"
            value={data.startTime}
            onChange={(e) => setData((p) => ({ ...p, startTime: e.target.value }))}
            className="w-[130px] h-[51px] bg-transparent border border-white text-white [color-scheme:dark] text-center rounded-none px-2"
          />
          <span>-</span>
          <input
            type="time"
            value={data.endTime}
            onChange={(e) => setData((p) => ({ ...p, endTime: e.target.value }))}
            className="w-[130px] h-[51px] bg-transparent border border-white text-white [color-scheme:dark] text-center rounded-none px-2"
          />
        </div>
      </div>

      <div className="absolute bottom-[30px] left-[39px] flex gap-[16px]">
        <Button
          onClick={onBack}
          className="w-[156px] h-[51px] border-[2px] border-[#FFFFF6] text-[#FFFFF6] bg-transparent hover:bg-[#FFFFF6]/10 rounded-none"
        >
          Terug
        </Button>
        <Button
          onClick={onNext}
          className="w-[156px] h-[51px] bg-[#FFFFF6] text-black border-[3px] border-[#FFFFF6] hover:bg-[#FFFFF6]/90 rounded-none"
        >
          Volgende
        </Button>
      </div>
    </CardContent>
  </Card>
);

// 4️⃣ OccasionExtrasStep (simplified + styled same way)
const OccasionExtrasStep = ({ data, setData, onNext, onBack }: StepProps) => {
  const toggleExtra = (extra: string) =>
    setData((p) => ({
      ...p,
      extras: p.extras.includes(extra)
        ? p.extras.filter((e) => e !== extra)
        : [...p.extras, extra],
    }));

  const occasions = ["Bruiloft", "Opendag", "Bedrijfsfeest", "Opening", "Anders"];

  return (
    <div className="relative w-[400px] h-[500px] bg-black text-white font-[Switzer,Helvetica]">
      {/* Step indicator */}
      <StepIndicator active={3} />

      {/* GELEGENHEID */}
      <label className="absolute left-[39px] top-[72px] text-[16px] leading-[21px] font-semibold uppercase">
        GELEGENHEID
      </label>

      {/* Occasions list */}
      <div className="absolute left-[39px] top-[100px] flex gap-[16px]">
        {/* Dots column */}
        <div className="flex flex-col justify-between h-[100px]">
          {occasions.map((opt) => (
            <div
              key={opt}
              className={`w-[10px] h-[10px] my-[5px] rounded-full border border-[#FFFFF6] cursor-pointer ${
                data.occasion === opt ? "bg-[#FFFFF6]" : "bg-transparent"
              }`}
              onClick={() => setData((p) => ({ ...p, occasion: opt }))}
            />
          ))}
        </div>

        {/* Labels column */}
        <div className="flex flex-col justify-between h-[90px] text-[14px] leading-[20px]">
          {occasions.map((opt) => (
            <span
              key={opt}
              className={`cursor-pointer select-none ${
                data.occasion === opt ? "text-[#FFFFF6]" : "text-white"
              }`}
              onClick={() => setData((p) => ({ ...p, occasion: opt }))}
            >
              {opt}
            </span>
          ))}
        </div>
      </div>

      {/* EXTRA’S */}
      <label className="absolute left-[39px] top-[230px] text-[16px] leading-[21px] font-semibold uppercase">
        EXTRA’S
      </label>

      {/* Extra: Vers gebak */}
      <div
        className="absolute left-[39px] top-[260px] flex items-start gap-[10px] cursor-pointer"
        onClick={() => toggleExtra("Vers gebak")}
      >
        <div
          className={`w-[16px] h-[16px] border border-white mt-[3px] ${
            data.extras.includes("Vers gebak") ? "bg-[#FFFFF6]" : ""
          }`}
        />
        <div className="max-w-[243px]">
          <p className="text-[16px] leading-[21px] font-medium">Vers gebak</p>
          <p className="text-[14px] leading-[18px] text-white/60 mt-[2px]">
            Maak je geen zorgen over iets lekkers bij de koffie.
          </p>
        </div>
      </div>

      {/* Extra: Branding */}
      <div
        className="absolute left-[39px] top-[325px] flex items-start gap-[10px] cursor-pointer"
        onClick={() => toggleExtra("Branding")}
      >
        <div
          className={`w-[16px] h-[16px] border border-white mt-[3px] ${
            data.extras.includes("Branding") ? "bg-[#FFFFF6]" : ""
          }`}
        />
        <div className="max-w-[243px]">
          <p className="text-[16px] leading-[21px] font-medium">Branding</p>
          <p className="text-[14px] leading-[18px] text-white/60 mt-[2px]">
            Van bedrukte bekers tot custom koffie bar.
          </p>
        </div>
      </div>

      {/* Buttons */}
      <div className="absolute bottom-[30px] left-[39px] flex gap-[16px]">
        <Button
          onClick={onBack}
          className="w-[156px] h-[51px] border-[2px] border-[#FFFFF6] text-[#FFFFF6] bg-transparent hover:bg-[#FFFFF6]/10 rounded-none"
        >
          Terug
        </Button>
        <Button
          onClick={onNext}
          className="w-[156px] h-[51px] bg-[#FFFFF6] text-black border-[3px] border-[#FFFFF6] hover:bg-[#FFFFF6]/90 rounded-none"
        >
          Volgende
        </Button>
      </div>
    </div>
  );
};

// 5️⃣ PersonalInfoStep
export const PersonalInfoStep = ({ data, setData, onNext, onBack }: StepProps) => {
  const fields = [
    { key: "firstName", label: "NAAM" },
    { key: "lastName", label: "ACHTERNAAM" },
    { key: "phone", label: "TELEFOONNUMMER" },
    { key: "email", label: "E-MAIL" },
  ] as const;

  return (
    <div className="relative w-[400px] h-[530px] mx-auto bg-black text-white font-[Switzer,Helvetica] flex flex-col px-8 pt-10 pb-8 rounded-2xl shadow-lg">
      {/* Step indicator */}
      <div className="absolute top-6 left-1/2 -translate-x-1/2">
        <StepIndicator active={4} />
      </div>

      {/* Form */}
      <form className="flex flex-col gap-4 w-full mt-14">
        {fields.map(({ key, label }) => (
          <div key={key} className="flex flex-col gap-1">
            <label className="text-sm font-medium tracking-wide uppercase text-white/80">
              {label}
            </label>
            <input
              type="text"
              value={data[key]}
              onChange={(e) => setData((prev) => ({ ...prev, [key]: e.target.value }))}
              placeholder={label}
              className="w-full h-[42px] border border-white bg-transparent text-white placeholder:text-white/40 text-[15px] font-medium tracking-wide px-[16px] focus:outline-none focus:border-[#FFFFF6] transition"
            />
          </div>
        ))}
      </form>

      <div className="absolute bottom-[30px] left-[39px] flex gap-[16px]">
        <Button
          onClick={onBack}
          className="w-[156px] h-[51px] border-[2px] border-[#FFFFF6] text-[#FFFFF6] bg-transparent hover:bg-[#FFFFF6]/10 rounded-none"
        >
          Terug
        </Button>
        <Button
          onClick={onNext}
          className="w-[156px] h-[51px] bg-[#FFFFF6] text-black border-[3px] border-[#FFFFF6] hover:bg-[#FFFFF6]/90 rounded-none"
        >
          Volgende
        </Button>
      </div>
    </div>
  );
};

// 6️⃣ SummaryStep
const SummaryStep = ({ data, onBack }: StepProps) => (
  <div className="relative w-[400px] h-[530px] bg-black text-white font-[Switzer,Helvetica]">
    <StepIndicator active={5} />

    <label className="absolute left-[39px] top-[70px] font-semibold text-[16px] uppercase">
      KOSTEN
    </label>
    <div className="absolute left-[39px] top-[100px] w-[328px] h-[127px] border border-white"></div>
    <p className="absolute left-[55px] top-[115px] text-[16px] font-semibold leading-[21px] uppercase">
      1 barista<br />onbeperkt consumpties<br />{data.eventDuration} uur actief
    </p>
    <p className="absolute left-[39px] top-[236px] text-[16px] font-semibold uppercase">
      460,-
    </p>
    <p className="absolute left-[39px] top-[399px] w-full text-[14px] leading-[18px] text-white/60">
      ⓘ Stuur voor meer info gerust een mailtje
    </p>

    <div className="absolute bottom-[30px] left-[39px] flex gap-[16px]">
      <Button
        onClick={onBack}
        className="w-[156px] h-[51px] border-[2px] border-[#FFFFF6] text-[#FFFFF6] bg-transparent hover:bg-[#FFFFF6]/10 rounded-none"
      >
        Contact
      </Button>
      <Button
        onClick={() =>
          window.open(
            "https://calendar.google.com/calendar/u/0?cid=NzlmYWZhYzkwYjY3N2JiN2Q0NWQ1ZTQzNDFkYmMxMDVmMzcwMzU4ZGQ2MWMxOGM1OWJkNDAwYzBmNWZkNTY0MUBncm91cC5jYWxlbmRhci5nb29nbGUuY29t",
            "_blank",
            "noopener,noreferrer"
          )
        }
        className="w-[156px] h-[51px] bg-[#FFFFF6] text-black border-[3px] border-[#FFFFF6] hover:bg-[#FFFFF6]/90 rounded-none"
      >
        Boeken
      </Button>
    </div>
  </div>
);

// 🧩 Main Component
export const QuoteCalculator = () => {
  const [step, setStep] = useState(0);
  const [data, setData] = useState<QuoteData>({
    eventDuration: 4,
    guestCount: 100,
    address: "",
    date: "",
    startTime: "",
    endTime: "",
    occasion: "",
    extras: [],
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    message: "",
    foundVia: "",
  });

  const steps = [
    QuoteTool,
    AddressStep,
    DateTimeStep,
    OccasionExtrasStep,
    PersonalInfoStep,
    SummaryStep,
  ];

  const StepComponent = steps[step];

  return (
    <div className="flex justify-center items-center min-h-[550px] bg-black">
      <StepComponent
        data={data}
        setData={(u) => setData((prev) => u(prev))}
        onNext={() => setStep((s) => Math.min(s + 1, steps.length - 1))}
        onBack={() => setStep((s) => Math.max(s - 1, 0))}
      />
    </div>
  );
};
