import Link from 'next/link';
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const navItems = [
  { name: 'Home', href: '/' },
  { name: 'About Us', href: '/about' },
  { name: 'Courses', href: '/courses' },
  { name: 'Results', href: '/results' },
  { name: 'Testimonials', href: '/testimonials' },
  { name: 'Programs', href: '/programs' },
  { name: 'Contact', href: '/contact' },
];

function Footer() {
  return (
    <footer className="bg-slate-900 py-16 text-slate-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="mb-12 grid grid-cols-1 gap-12 md:grid-cols-4">
          {/* Brand Section */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-white">Glorious academy</h3>
            <p className="text-sm leading-relaxed text-slate-400">
              Excellence in education. Preparing students for JEE, NEET, and board exams with proven
              methodologies and expert guidance.
            </p>
            {/* Social Links */}
            <div className="flex gap-4 pt-4">
              <a
                href="#"
                className="text-slate-400 transition-colors hover:text-blue-400"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="text-slate-400 transition-colors hover:text-blue-400"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
              <a
                href="#"
                className="text-slate-400 transition-colors hover:text-blue-400"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="#"
                className="text-slate-400 transition-colors hover:text-blue-400"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h4 className="mb-6 font-semibold text-white">Navigation</h4>
            <ul className="space-y-3">
              {navItems.map(item => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-slate-400 transition-colors hover:text-blue-400"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-6 font-semibold text-white">Resources</h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="#"
                  className="text-sm text-slate-400 transition-colors hover:text-blue-400"
                >
                  Study Materials
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-sm text-slate-400 transition-colors hover:text-blue-400"
                >
                  Mock Tests
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-sm text-slate-400 transition-colors hover:text-blue-400"
                >
                  Doubt Forum
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-sm text-slate-400 transition-colors hover:text-blue-400"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-sm text-slate-400 transition-colors hover:text-blue-400"
                >
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="mb-6 font-semibold text-white">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <Mail size={18} className="mt-0.5 flex-shrink-0 text-blue-400" />
                <a
                  href="mailto:info@Glorious academy.com"
                  className="text-sm text-slate-400 transition-colors hover:text-blue-400"
                >
                  info@Glorious academy.com
                </a>
              </li>
              <li className="flex gap-3">
                <Phone size={18} className="mt-0.5 flex-shrink-0 text-blue-400" />
                <a
                  href="tel:+919876543210"
                  className="text-sm text-slate-400 transition-colors hover:text-blue-400"
                >
                  +91 98765 43210
                </a>
              </li>
              <li className="flex gap-3">
                <MapPin size={18} className="mt-0.5 flex-shrink-0 text-blue-400" />
                <span className="text-sm text-slate-400">
                  123 Education Street
                  <br />
                  Mumbai, India 400001
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="my-8 border-t border-slate-700"></div>

        {/* Bottom Section */}
        <div className="flex flex-col items-center justify-between gap-4 text-sm text-slate-400 md:flex-row">
          <p>&copy; 2025 Glorious academy. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="#" className="transition-colors hover:text-blue-400">
              Privacy Policy
            </Link>
            <Link href="#" className="transition-colors hover:text-blue-400">
              Terms of Service
            </Link>
            <Link href="#" className="transition-colors hover:text-blue-400">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
