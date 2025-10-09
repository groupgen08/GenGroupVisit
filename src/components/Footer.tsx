import { Sprout, Mail, Phone, MapPin } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';

export default function Footer() {

  const { t, i18n } = useTranslation();
  const [lang, setLang] = useState<string>(i18n.language || 'ru');
  
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Sprout className="w-8 h-8 text-green-500" />
              <span className="text-xl font-bold text-white">Gen Group Kazakhstan</span>
            </div>
            <p className="text-sm leading-relaxed">
              {t('footer.lead')}
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">{t('footer.contacts_title')}</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-sm">{t('footer.address')}</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-green-500 flex-shrink-0" />
                <a href="tel:+77273392102" className="text-sm hover:text-green-500 transition-colors">
                  +7 (727) 339-21-02
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-green-500 flex-shrink-0" />
                <a href="mailto:info@gengroup.kz" className="text-sm hover:text-green-500 transition-colors">
                  info@gengroup.kz
                </a>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">{t('footer.our_technologies')}</h3>
            <ul className="space-y-2 text-sm">
              <li>{t('footer.greencon')}</li>
              <li>{t('footer.genfog')}</li>
              <li>{t('footer.genseed')}</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm">
          <p>&copy; {currentYear} Gen Group Kazakhstan. {t('footer.copyright')}</p>
        </div>
      </div>
    </footer>
  );
}
