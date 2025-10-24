import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { ChevronRight, Menu, X, ChevronDown } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

interface HeaderProps {
  navItems: { label: string; path?: string; dropdown?: { label: string; path: string }[] }[];
}

export const Header = ({ navItems }: HeaderProps) => {
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  return (
    <header className="relative flex items-center justify-between px-4 sm:px-8 lg:px-[52px] py-4 sm:py-6 max-w-[1480px] mx-auto">
      <Link to="/">
        <img
          className="w-32 sm:w-40 lg:w-[207px] h-auto aspect-[3.21] cursor-pointer"
          alt="Menno's Koffiebar Logo"
          src="./logo.png"
        />
      </Link>

      <div className="hidden md:flex items-center gap-4">
        <nav className="flex items-center gap-4 pr-12">
          {navItems.map((item) => (
            <div key={item.path} className="relative">
              {item.dropdown ? (
                <div
                  className="relative"
                  onMouseEnter={() => setOpenDropdown(item.label)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <button className="[font-family:'Switzer-Semibold',Helvetica] font-normal text-black text-base tracking-[0] leading-[normal] hover:opacity-70 transition-opacity min-h-[44px] flex items-center gap-1">
                    {item.label}
                    <ChevronDown className="w-4 h-4" />
                  </button>
                  {openDropdown === item.label && (
                    <div className="absolute top-full left-0 bg-white shadow-lg border rounded-md py-2 min-w-[200px] z-50">
                      {item.dropdown.map((dropdownItem) => (
                        <Link
                          key={dropdownItem.path}
                          to={dropdownItem.path}
                          className="block px-4 py-2 text-black hover:bg-gray-100 [font-family:'Switzer-Semibold',Helvetica] font-normal text-base"
                        >
                          {dropdownItem.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  to={item.path ?? "#"}
                  className="[font-family:'Switzer-Semibold',Helvetica] font-normal text-black text-base tracking-[0] leading-[normal] hover:opacity-70 transition-opacity min-h-[44px] flex items-center"
                >
                  {item.label}
                </Link>
              )}
            </div>
          ))}
        </nav>

        <Button
          onClick={() => navigate('/offerte')}
          className="hidden md:flex h-[45px] sm:h-[55px] px-4 sm:px-5 bg-black text-[#fffff6] [font-family:'Switzer-Semibold',Helvetica] font-normal text-sm sm:text-base hover:bg-black/90"
        >
          <span>Direct Offerte Berekenen</span>
          <ChevronRight className="w-5 h-5 sm:w-[23px] sm:h-[23px] ml-2" />
        </Button>
      </div>

      <div className="md:hidden flex items-center gap-2">
        <Button
          onClick={() => navigate('/offerte')}
          className="h-[45px] px-3 bg-black text-[#fffff6] [font-family:'Switzer-Semibold',Helvetica] font-normal text-sm hover:bg-black/90"
        >
          <span>Offerte</span>
          <ChevronRight className="w-4 h-4 ml-1" />
        </Button>
        
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="p-2 text-black hover:bg-gray-100 rounded"
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-white shadow-lg border-t md:hidden z-50">
          <nav className="flex flex-col p-4">
            {navItems.map((item) => (
              <div key={item.path}>
                {item.dropdown ? (
                  <div>
                    <div className="[font-family:'Switzer-Semibold',Helvetica] font-normal text-black text-base py-3 border-b border-gray-100 flex items-center justify-between">
                      {item.label}
                      <ChevronDown className="w-4 h-4" />
                    </div>
                    <div className="pl-4">
                      {item.dropdown.map((dropdownItem) => (
                        <Link
                          key={dropdownItem.path}
                          to={dropdownItem.path}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className="block [font-family:'Switzer-Semibold',Helvetica] font-normal text-black text-sm py-2 border-b border-gray-50 last:border-b-0 hover:opacity-70 transition-opacity"
                        >
                          {dropdownItem.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link
                    to={item.path ?? "#"}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="[font-family:'Switzer-Semibold',Helvetica] font-normal text-black text-base py-3 border-b border-gray-100 last:border-b-0 hover:opacity-70 transition-opacity block"
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};
