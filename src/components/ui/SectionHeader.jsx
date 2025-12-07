import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { RevealOnScroll } from '../animations';

export function SectionHeader({
  label,
  title,
  description,
  link,
  linkText = 'View all',
  dark = false,
  centered = false,
  className = ''
}) {
  return (
    <RevealOnScroll className={className}>
      <div className={`flex flex-col ${centered ? 'items-center text-center' : 'lg:flex-row lg:items-end lg:justify-between'} gap-6 mb-12 lg:mb-16`}>
        <div className={centered ? 'max-w-2xl' : ''}>
          {label && (
            <span className={`inline-block text-xs font-semibold uppercase tracking-widest mb-4 ${
              dark ? 'text-amber-500' : 'text-amber-600'
            }`}>
              {label}
            </span>
          )}
          <h2 className={`text-3xl lg:text-4xl xl:text-5xl font-light tracking-tight ${
            dark ? 'text-white' : 'text-neutral-900'
          }`}>
            {title}
          </h2>
          {description && (
            <p className={`mt-4 text-lg ${dark ? 'text-neutral-400' : 'text-neutral-600'} max-w-2xl`}>
              {description}
            </p>
          )}
        </div>
        {link && (
          <Link
            to={link}
            className={`group inline-flex items-center gap-2 text-sm font-medium ${
              dark ? 'text-white hover:text-amber-500' : 'text-neutral-900 hover:text-amber-600'
            } transition-colors`}
          >
            {linkText}
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        )}
      </div>
    </RevealOnScroll>
  );
}
