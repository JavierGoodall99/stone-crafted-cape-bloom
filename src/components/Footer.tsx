import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-stone-darkest text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-display font-bold mb-4">Cape Crafted Stone</h3>
            <p className="text-sm opacity-90 mb-4">
              Handcrafted natural stone products that blend nature with timeless design.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-display font-semibold mb-4">Quick Links</h4>
            <div className="flex flex-col space-y-2">
              <Link to="/" className="text-sm hover:text-accent transition-smooth">
                Home
              </Link>
              <Link to="/about" className="text-sm hover:text-accent transition-smooth">
                About
              </Link>
              <Link to="/portfolio" className="text-sm hover:text-accent transition-smooth">
                Portfolio
              </Link>
              <Link to="/blog" className="text-sm hover:text-accent transition-smooth">
                Blog
              </Link>
              <Link to="/contact" className="text-sm hover:text-accent transition-smooth">
                Contact
              </Link>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-display font-semibold mb-4">Contact Us</h4>
            <div className="flex flex-col space-y-3">
              <a
                href="mailto:info@capecraftedstone.co.za"
                className="flex items-center space-x-2 text-sm hover:text-accent transition-smooth"
              >
                <Mail className="h-4 w-4" />
                <span>info@capecraftedstone.co.za</span>
              </a>
              <a
                href="tel:+27681424440"
                className="flex items-center space-x-2 text-sm hover:text-accent transition-smooth"
              >
                <Phone className="h-4 w-4" />
                <span>+27 68 142 4440</span>
              </a>
              <div className="flex items-start space-x-2 text-sm">
                <MapPin className="h-4 w-4 mt-1" />
                <span>19147 Lesibane Street, Bloekombos 7570</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4 mt-6">
              <a
                href="#"
                className="hover:text-accent transition-smooth"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="hover:text-accent transition-smooth"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="hover:text-accent transition-smooth"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-sm opacity-80">
          <p>© 2025 Cape Crafted Stone | All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
