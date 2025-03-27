
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Search, MapPin, FileText, ShieldCheck, User } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "py-3 bg-white shadow-md"
          : "py-4 bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-gray-900">
              Land<span className="text-landsecure-600">Secure</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            <Link
              to="/"
              className="px-3 py-2 text-sm font-medium text-gray-600 hover:text-landsecure-600 hover:bg-gray-50 rounded-md transition-colors"
            >
              Home
            </Link>
            <Link
              to="/about-us"
              className="px-3 py-2 text-sm font-medium text-gray-600 hover:text-landsecure-600 hover:bg-gray-50 rounded-md transition-colors"
            >
              About Us
            </Link>
            <Link
              to="/properties"
              className="px-3 py-2 text-sm font-medium text-gray-600 hover:text-landsecure-600 hover:bg-gray-50 rounded-md transition-colors"
            >
              Properties
            </Link>
            <Link
              to="/faqs"
              className="px-3 py-2 text-sm font-medium text-gray-600 hover:text-landsecure-600 hover:bg-gray-50 rounded-md transition-colors"
            >
              FAQs
            </Link>
            <Link
              to="/contact-us"
              className="px-3 py-2 text-sm font-medium text-gray-600 hover:text-landsecure-600 hover:bg-gray-50 rounded-md transition-colors"
            >
              Contact Us
            </Link>
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-3">
            <Button
              variant="outline"
              size="sm"
              className="border-gray-200 text-gray-700 hover:bg-gray-50 hover:text-landsecure-600 hover:border-landsecure-200 transition-all rounded-md"
              asChild
            >
              <Link to="/login">Log in</Link>
            </Button>
            <Button
              size="sm"
              className="bg-gray-900 hover:bg-gray-800 text-white transition-all rounded-md"
              asChild
            >
              <Link to="/signup">Get Started</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              className="h-10 w-10 p-0 text-gray-700"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 p-4 bg-white rounded-lg shadow-lg animate-fade-in">
            <nav className="flex flex-col space-y-2">
              <Link
                to="/"
                className="flex items-center px-3 py-2 text-sm font-medium text-gray-700 hover:text-landsecure-600 hover:bg-gray-50 rounded-md transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/about-us"
                className="flex items-center px-3 py-2 text-sm font-medium text-gray-700 hover:text-landsecure-600 hover:bg-gray-50 rounded-md transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About Us
              </Link>
              <Link
                to="/properties"
                className="flex items-center px-3 py-2 text-sm font-medium text-gray-700 hover:text-landsecure-600 hover:bg-gray-50 rounded-md transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Properties
              </Link>
              <Link
                to="/faqs"
                className="flex items-center px-3 py-2 text-sm font-medium text-gray-700 hover:text-landsecure-600 hover:bg-gray-50 rounded-md transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                FAQs
              </Link>
              <Link
                to="/contact-us"
                className="flex items-center px-3 py-2 text-sm font-medium text-gray-700 hover:text-landsecure-600 hover:bg-gray-50 rounded-md transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact Us
              </Link>
              <div className="flex flex-col space-y-2 pt-3 border-t border-gray-100">
                <Button
                  variant="outline"
                  className="w-full justify-start border-gray-200 text-gray-700"
                  asChild
                >
                  <Link to="/login" onClick={() => setIsMobileMenuOpen(false)}>
                    Log in
                  </Link>
                </Button>
                <Button
                  className="w-full justify-start bg-gray-900 hover:bg-gray-800 text-white"
                  asChild
                >
                  <Link to="/signup" onClick={() => setIsMobileMenuOpen(false)}>
                    Get Started
                  </Link>
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
