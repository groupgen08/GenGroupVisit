import { Sprout, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
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
              Лидер в тепличных технологиях Южного Казахстана. Выращиваем будущее с инновационными решениями.
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Контактная информация</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-sm">г. Алматы, ул. Азербаева, д. 67</span>
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
            <h3 className="text-white font-semibold mb-4">Наши технологии</h3>
            <ul className="space-y-2 text-sm">
              <li>Greencon - тепличные системы</li>
              <li>Genfog - системы орошения и климата</li>
              <li>Genseed - селекция семян</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm">
          <p>&copy; {currentYear} Gen Group Kazakhstan. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
}
