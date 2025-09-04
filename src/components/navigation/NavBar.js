"use client";

import { Menu, Send, X } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();
  const handleRedirect = (url) => {
    router.push(url);
  };

  return (
    <nav className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">

              
              <div className="flex-shrink-0 flex items-center">
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                  <Send className="w-5 h-5 text-white" />
                </div>
                <span className="ml-2 text-xl font-bold text-gray-900">MoneyFlow</span>
              </div>
            </div>
            
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link href="/send-money" className="text-gray-900 hover:text-blue-600 px-3 py-2 text-sm font-medium">Send Money</Link>
                <Link href="/rates" className="text-gray-500 hover:text-blue-600 px-3 py-2 text-sm font-medium">Rates</Link>
                <Link href="/locations" className="text-gray-500 hover:text-blue-600 px-3 py-2 text-sm font-medium">Locations</Link>
                <Link href="/about" className="text-gray-500 hover:text-blue-600 px-3 py-2 text-sm font-medium">About Us</Link>
                <Link href="/help" className="text-gray-500 hover:text-blue-600 px-3 py-2 text-sm font-medium">Help</Link>
              </div>
            </div>
            
            <div className="hidden md:block">
              <div className="ml-4 flex items-center md:ml-6 space-x-3">
                <button onClick={() => handleRedirect('/login')} className="text-gray-500 hover:text-blue-600 px-3 py-2 text-sm font-medium">Sign In</button>
                <button onClick={() => handleRedirect('/signup')} className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium">Get Started</button>
              </div>
            </div>
            
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-400 hover:text-gray-500 focus:outline-none"
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
        
        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-50">
              <Link href="/send-money" className="text-gray-900 block px-3 py-2 text-base font-medium">Send Money</Link>
              <Link href="/rates" className="text-gray-500 block px-3 py-2 text-base font-medium">Rates</Link>
              <Link href="/locations" className="text-gray-500 block px-3 py-2 text-base font-medium">Locations</Link>
              <Link href="/about" className="text-gray-500 block px-3 py-2 text-base font-medium">About Us</Link>
              <Link href="/help" className="text-gray-500 block px-3 py-2 text-base font-medium">Help</Link>
              <div className="pt-4 pb-3 border-t border-gray-200">
                <div className="space-y-1">
                  <button onClick={() => handleRedirect('/login')} className="text-gray-500 block px-3 py-2 text-base font-medium w-full text-left">Sign In</button>
                  <button onClick={() => handleRedirect('/signup')} className="bg-blue-600 text-white block px-3 py-2 text-base font-medium w-full text-left rounded-lg">Get Started</button>
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>
    );
};

export default NavBar;