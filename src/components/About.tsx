import { Building2, Users, Award, TrendingUp, Leaf, Sparkles } from 'lucide-react';

export default function About() {
  const affiliates = [
    {
      name: 'Greencon',
      description: 'Тепличные системы',
      icon: Building2
    },
    {
      name: 'Genfog',
      description: 'Системы орошения и климата',
      icon: Sparkles
    },
    {
      name: 'Genseed',
      description: 'Селекция семян',
      icon: Leaf
    }
  ];

  const milestones = [
    { year: '2022', event: 'Основание компании', detail: 'Старт в Казахстане' },
    { year: '2023', event: 'Запуск тепличного комплекса', detail: '5.3 га для бананов' },
    { year: '2024', event: 'Первые урожаи', detail: '500+ тонн бананов' },
    { year: '2025+', event: 'Расширение', detail: 'Новые культуры и масштабирование' }
  ];

  return (
    <section id="about" className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">О компании</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Дочернее подразделение турецкой группы GENGROUP, применяющее международный опыт и инновации
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div className="relative h-96 rounded-2xl overflow-hidden shadow-xl">
            <img
              src='/images/tractor.jpeg'
              alt="GENGROUP Turkey production complex"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
              <p className="text-white text-sm font-medium">
                Производственный комплекс GENGROUP в Турции
              </p>
            </div>
          </div>

          <div className="flex flex-col justify-center">
            <h3 className="text-3xl font-bold text-gray-900 mb-6">Наша миссия</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Gen Group Kazakhstan основана в 2022 году и является дочерним подразделением турецкой
              группы GENGROUP. Мы применяем технологии наших аффилированных предприятий для создания
              устойчивого и эффективного агробизнеса.
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              Под руководством генерального директора и основателя Сабыржана Утешева, наша команда
              экспертов внедряет инновации, включая акклиматизацию лимонов и фиников в новых
              климатических условиях.
            </p>

            <div className="bg-white rounded-xl p-6 shadow-md border border-green-100">
              <div className="flex items-center space-x-3 mb-3">
                <TrendingUp className="w-8 h-8 text-green-600" />
                <div>
                  <div className="text-2xl font-bold text-gray-900">0.9 → 4.4 млрд ₸</div>
                  <div className="text-sm text-gray-600">Рост выручки 2022-2024</div>
                </div>
              </div>
              <p className="text-sm text-gray-600">
                Демонстрирует динамику развития и эффективность наших проектов
              </p>
            </div>
          </div>
        </div>

        <div className="mb-16">
          <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Наши аффилированные компании
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {affiliates.map((affiliate, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-8 text-center hover:shadow-lg transition-shadow border border-gray-100"
              >
                <affiliate.icon className="w-16 h-16 text-green-600 mx-auto mb-4" />
                <h4 className="text-xl font-bold text-gray-900 mb-2">{affiliate.name}</h4>
                <p className="text-gray-600">{affiliate.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-16">
          <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">История развития</h3>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-green-200 hidden md:block" />
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div
                  key={index}
                  className={`flex flex-col md:flex-row items-center ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                    <div className="bg-white rounded-xl p-6 shadow-md border border-green-100">
                      <div className="text-3xl font-bold text-green-600 mb-2">{milestone.year}</div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-1">{milestone.event}</h4>
                      <p className="text-gray-600 text-sm">{milestone.detail}</p>
                    </div>
                  </div>
                  <div className="w-full md:w-2/12 flex justify-center my-4 md:my-0">
                    <div className="w-4 h-4 bg-green-600 rounded-full border-4 border-white shadow-md" />
                  </div>
                  <div className="w-full md:w-5/12" />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-green-600 to-yellow-600 rounded-2xl p-8 md:p-12 text-white text-center">
          <Users className="w-16 h-16 mx-auto mb-6 opacity-90" />
          <h3 className="text-3xl font-bold mb-4">Команда экспертов</h3>
          <p className="text-lg max-w-3xl mx-auto text-green-50">
            Наша команда объединяет международный опыт турецкой группы GENGROUP с глубоким пониманием
            местного рынка и климатических условий Казахстана. Мы демонстрируем способность адаптировать
            и вводить в культуру экзотические растения, открывая новые возможности для региона.
          </p>
        </div>
      </div>
    </section>
  );
}
