import React, { useState } from 'react';
import { useCOAPageSetting } from '../hooks/useCOAPageSetting';
import { ShoppingCart, Menu, X, Calculator, FileText, HelpCircle, Truck } from 'lucide-react';

interface HeaderProps {
  cartItemsCount: number;
  onCartClick: () => void;
  onMenuClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ cartItemsCount, onCartClick, onMenuClick }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { coaPageEnabled } = useCOAPageSetting();

  return (
    <>
      <header className="bg-white/95 backdrop-blur-xl sticky top-0 z-50 border-b border-gray-100 shadow-soft">
        <div className="container mx-auto px-4 md:px-6 py-3">
          <div className="flex items-center justify-between gap-4">
            {/* Logo Only - Rectangular Display */}
            <button
              onClick={() => { onMenuClick(); setMobileMenuOpen(false); }}
              className="flex items-center hover:opacity-80 transition-all"
            >
              <div className="h-10 sm:h-12 md:h-14">
                <img
                  src="/assets/logo.jpg"
                  alt="SLIMMETRY"
                  className="h-full w-auto object-contain"
                />
              </div>
            </button>

            {/* Right Side Navigation */}
            <div className="flex items-center gap-2 md:gap-4 ml-auto">
              {/* Desktop Navigation */}
              <nav className="hidden md:flex items-center gap-1 lg:gap-2">
                <button
                  onClick={onMenuClick}
                  className="text-sm font-medium text-charcoal-500 hover:text-teal-500 px-3 py-2 rounded-lg hover:bg-teal-50 transition-all"
                >
                  Products
                </button>
                <a
                  href="/track-order"
                  className="text-sm font-medium text-charcoal-500 hover:text-teal-500 px-3 py-2 rounded-lg hover:bg-teal-50 transition-all flex items-center gap-1.5"
                >
                  <Truck className="w-4 h-4" />
                  Track
                </a>
                <a
                  href="/calculator"
                  className="text-sm font-medium text-charcoal-500 hover:text-teal-500 px-3 py-2 rounded-lg hover:bg-teal-50 transition-all flex items-center gap-1.5"
                >
                  <Calculator className="w-4 h-4" />
                  Calculator
                </a>
                {coaPageEnabled && (
                  <a
                    href="/coa"
                    className="text-sm font-medium text-charcoal-500 hover:text-teal-500 px-3 py-2 rounded-lg hover:bg-teal-50 transition-all flex items-center gap-1.5"
                  >
                    <FileText className="w-4 h-4" />
                    Lab Tests
                  </a>
                )}
                <a
                  href="/faq"
                  className="text-sm font-medium text-charcoal-500 hover:text-teal-500 px-3 py-2 rounded-lg hover:bg-teal-50 transition-all flex items-center gap-1.5"
                >
                  <HelpCircle className="w-4 h-4" />
                  FAQ
                </a>

              </nav>

              {/* Cart Button */}
              <button
                onClick={onCartClick}
                className="relative p-2.5 text-deep-blue-500 hover:bg-teal-50 rounded-lg transition-all"
              >
                <ShoppingCart className="w-5 h-5" />
                {cartItemsCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-teal-500 text-white text-[10px] font-bold rounded-full min-w-[18px] h-[18px] flex items-center justify-center px-1">
                    {cartItemsCount > 99 ? '99+' : cartItemsCount}
                  </span>
                )}
              </button>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-2.5 text-deep-blue-500 hover:bg-teal-50 rounded-lg transition-all"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? (
                  <X className="w-5 h-5" />
                ) : (
                  <Menu className="w-5 h-5" />
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 z-[60]">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-deep-blue-500/20 backdrop-blur-sm"
            onClick={() => setMobileMenuOpen(false)}
          />

          {/* Sidebar Drawer */}
          <div
            className="absolute top-0 right-0 bottom-0 w-[300px] bg-white shadow-2xl border-l border-gray-100 flex flex-col animate-in slide-in-from-right duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Drawer Header */}
            <div className="flex items-center justify-between p-5 border-b border-gray-100">
              <span className="font-bold text-lg text-deep-blue-500">Menu</span>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 text-charcoal-500 hover:text-teal-500 transition-colors rounded-lg hover:bg-teal-50"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Navigation Items */}
            <nav className="flex-1 overflow-y-auto p-4">
              <div className="flex flex-col space-y-1">
                <button
                  onClick={() => {
                    onMenuClick();
                    setMobileMenuOpen(false);
                  }}
                  className="flex items-center gap-3 p-4 rounded-xl text-left font-medium text-deep-blue-500 hover:bg-teal-50 transition-all"
                >
                  <div className="p-2 rounded-lg bg-teal-50">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-teal-500"><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg>
                  </div>
                  Products
                </button>
                <a
                  href="/track-order"
                  className="flex items-center gap-3 p-4 rounded-xl text-left font-medium text-deep-blue-500 hover:bg-teal-50 transition-all"
                >
                  <div className="p-2 rounded-lg bg-teal-50">
                    <Truck className="w-[18px] h-[18px] text-teal-500" />
                  </div>
                  Track Order
                </a>
                <a
                  href="/calculator"
                  className="flex items-center gap-3 p-4 rounded-xl text-left font-medium text-deep-blue-500 hover:bg-teal-50 transition-all"
                >
                  <div className="p-2 rounded-lg bg-teal-50">
                    <Calculator className="w-[18px] h-[18px] text-teal-500" />
                  </div>
                  Peptide Calculator
                </a>
                <a
                  href="/coa"
                  className="flex items-center gap-3 p-4 rounded-xl text-left font-medium text-deep-blue-500 hover:bg-teal-50 transition-all"
                >
                  <div className="p-2 rounded-lg bg-teal-50">
                    <FileText className="w-[18px] h-[18px] text-teal-500" />
                  </div>
                  Lab Tests
                </a>
                <a
                  href="/faq"
                  className="flex items-center gap-3 p-4 rounded-xl text-left font-medium text-deep-blue-500 hover:bg-teal-50 transition-all"
                >
                  <div className="p-2 rounded-lg bg-teal-50">
                    <HelpCircle className="w-[18px] h-[18px] text-teal-500" />
                  </div>
                  FAQ
                </a>

              </div>
            </nav>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
