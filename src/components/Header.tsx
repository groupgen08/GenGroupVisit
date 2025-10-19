import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Menu, X, Sprout } from 'lucide-react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const { t, i18n } = useTranslation();
  const [lang, setLang] = useState<string>(i18n.language || 'ru');

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handle = () => setLang(i18n.language || 'ru');
    i18n.on('languageChanged', handle);
    return () => i18n.off('languageChanged', handle);
  }, [i18n]);

  const switchLang = (lng: 'ru' | 'en') => {
    i18n.changeLanguage(lng);
    try {
      // i18next detector уже может сохранять, но сохраняем явно
      localStorage.setItem('i18nextLng', lng);
    } catch {}
    setLang(lng);
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    const offset = 80;
    const elementPosition = el.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - offset;
    window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  const navItems = [
    { id: 'home', label: t('header.home') },
    { id: 'about', label: t('header.about') },
    { id: 'projects', label: t('header.projects') },
    { id: 'contact', label: t('header.contact') }
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md' : 'bg-white/95 backdrop-blur-sm'
      }`}
      role="banner"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div
            className="flex items-center space-x-2 cursor-pointer"
            onClick={() => scrollToSection('home')}
            role="button"
            aria-label={t('header.brand')}
          >
            <Sprout className="w-8 h-8 text-green-600" />
            <span className="text-xl font-bold text-gray-900">{t('header.brand')}</span>
          </div>

          <nav className="hidden md:flex items-center space-x-8" aria-label="Main navigation">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-gray-700 hover:text-green-600 font-medium transition-colors"
              >
                {item.label}
              </button>
            ))}
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <button
              onClick={() => scrollToSection('contact')}
              className="bg-green-600 text-white px-6 py-2.5 rounded-lg hover:bg-green-700 transition-colors font-medium"
            >
              {t('header.connect')}
            </button>

            {/* language buttons */}
            <div className="flex items-center space-x-2 ml-2">
              <button
                aria-label="Switch to Russian"
                onClick={() => switchLang('ru')}
                className={`px-2 py-1 rounded-md text-sm font-medium ${
                  lang === 'ru' ? 'bg-gray-100 text-gray-900' : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                {t('header.lang_ru')}
              </button>
              <button
                aria-label="Switch to English"
                onClick={() => switchLang('en')}
                className={`px-2 py-1 rounded-md text-sm font-medium ${
                  lang === 'en' ? 'bg-gray-100 text-gray-900' : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                {t('header.lang_en')}
              </button>
            </div>
          </div>

          {/* mobile menu / hamburger */}
          <div className="md:hidden flex items-center space-x-2">
            {/* language buttons on mobile */}
            <div className="flex items-center space-x-1 mr-2">
              <button
                aria-label="RU"
                onClick={() => switchLang('ru')}
                className={`px-2 py-1 rounded text-xs ${lang === 'ru' ? 'bg-gray-100' : ''}`}
              >
                {t('header.lang_ru')}
              </button>
              <button
                aria-label="EN"
                onClick={() => switchLang('en')}
                className={`px-2 py-1 rounded text-xs ${lang === 'en' ? 'bg-gray-100' : ''}`}
              >
                {t('header.lang_en')}
              </button>
            </div>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-700 hover:text-green-600"
              aria-expanded={isMobileMenuOpen}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100">
          <nav className="px-4 py-4 space-y-3">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="block w-full text-left text-gray-700 hover:text-green-600 font-medium py-2 transition-colors"
              >
                {item.label}
              </button>
            ))}

            <button
              onClick={() => scrollToSection('contact')}
              className="w-full bg-green-600 text-white px-6 py-2.5 rounded-lg hover:bg-green-700 transition-colors font-medium"
            >
              {t('header.connect')}
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}
