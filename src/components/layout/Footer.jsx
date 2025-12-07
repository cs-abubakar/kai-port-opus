import { Link } from 'react-router-dom';
import { Linkedin, Twitter, Mail, MapPin } from 'lucide-react';

const navigationLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Services', path: '/services' },
  { name: 'Case Studies', path: '/case-studies' },
  { name: 'Research', path: '/research' },
  { name: 'Blog', path: '/blog' },
  { name: 'Resume', path: '/resume' },
  { name: 'Contact', path: '/contact' },
];

const socialLinks = [
  { name: 'LinkedIn', icon: Linkedin, href: 'https://linkedin.com' },
  { name: 'Twitter', icon: Twitter, href: 'https://twitter.com' },
  { name: 'Email', icon: Mail, href: 'mailto:hello@abubakar.com' },
];

export function Footer() {
  return (
    <footer className="bg-neutral-950">
      {/* CTA Section */}
      <div className="border-t border-neutral-800">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-20">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <h2 className="text-3xl lg:text-4xl font-light text-white text-center lg:text-left">
              Let's create something <span className="font-medium">great.</span>
            </h2>
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-white text-neutral-900 font-medium rounded-full hover:bg-amber-500 hover:text-white transition-colors"
            >
              Get in touch
            </Link>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="border-t border-neutral-800">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 lg:gap-8">
            {/* Brand Column */}
            <div className="lg:col-span-2">
              <Link to="/" className="inline-block mb-6">
                <span className="text-2xl font-semibold text-white">
                  Abu Bakar<span className="text-amber-500">.</span>
                </span>
              </Link>
              <p className="text-neutral-400 max-w-md mb-8 leading-relaxed">
                Marketing Strategist & Performance Marketer helping digital brands turn
                ad spend into predictable growth through strategy, data, and creative excellence.
              </p>
              <div className="flex items-center gap-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 flex items-center justify-center rounded-full bg-neutral-800 text-neutral-400 hover:bg-neutral-700 hover:text-white hover:-translate-y-1 transition-all duration-300"
                    aria-label={social.name}
                  >
                    <social.icon size={18} />
                  </a>
                ))}
              </div>
            </div>

            {/* Navigation Column */}
            <div>
              <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-6">
                Navigation
              </h3>
              <ul className="space-y-4">
                {navigationLinks.map((link) => (
                  <li key={link.path}>
                    <Link
                      to={link.path}
                      className="text-neutral-400 hover:text-white transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Column */}
            <div>
              <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-6">
                Get in touch
              </h3>
              <p className="text-neutral-400 mb-6 leading-relaxed">
                Available for freelance projects & consulting engagements.
              </p>
              <a
                href="mailto:hello@abubakar.com"
                className="text-amber-500 hover:text-amber-400 transition-colors"
              >
                hello@abubakar.com
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-neutral-800">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-neutral-500 text-sm">
              © {new Date().getFullYear()} Abu Bakar. All rights reserved.
            </p>
            <div className="flex items-center gap-2 text-neutral-500 text-sm">
              <MapPin size={14} />
              <span>Based in China · Working globally</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
