import { TrendingUp, Thermometer, Droplets, BarChart3, Target, Globe } from 'lucide-react';

export default function HomeContent() {
  const stats = [
    { value: '5.3', unit: 'гектара', label: 'Крупнейший банановый комплекс' },
    { value: '500+', unit: 'тонн', label: 'Второй урожай бананов' },
    { value: '4.4', unit: 'млрд ₸', label: 'Выручка в 2024 году' },
    { value: '$4', unit: 'млн', label: 'Инвестиции в проект' }
  ];

  const features = [
    {
      icon: Thermometer,
      title: 'Климат-контроль',
      description: 'Современная система управления микроклиматом обеспечивает идеальные условия круглый год'
    },
    {
      icon: Droplets,
      title: 'Капельное орошение',
      description: 'Автоматизированная система адаптивного питания и полива для максимальной эффективности'
    },
    {
      icon: BarChart3,
      title: 'Масштабирование',
      description: 'Расширение теплицы до 10.3 га позволит производить 1000 тонн бананов ежегодно'
    },
    {
      icon: Target,
      title: 'Рыночный потенциал',
      description: 'Возможность покрыть 20-25% внутреннего рынка Казахстана при полном масштабировании'
    }
  ];

  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Инновации в тепличном производстве
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Gen Group Kazakhstan реализует современные тепличные проекты по выращиванию фруктов и ягод,
            применяя передовые технологии и международный опыт
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-green-50 to-yellow-50 p-6 rounded-xl text-center transform hover:scale-105 transition-transform"
            >
              <div className="text-4xl font-bold text-green-700 mb-1">
                {stat.value}
              </div>
              <div className="text-sm font-semibold text-green-600 mb-2">
                {stat.unit}
              </div>
              <div className="text-sm text-gray-700">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-br from-gray-50 to-green-50 rounded-2xl p-8 md:p-12 mb-20">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                Первый в Казахстане банановый комплекс промышленного масштаба
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Наша теплица площадью 5.3 гектара в Туркестанской области не имеет аналогов в стране.
                Через 6-9 месяцев после посадки мы получили сотни тонн урожая: первый сбор составил
                около 385 тонн бананов, а второй урожай превысил 500 тонн.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Теплица оснащена системой климат-контроля и адаптивного питания, что обеспечивает
                высокое качество и круглогодичное производство продукции.
              </p>
            </div>
            <div className="relative h-64 md:h-full min-h-[300px] rounded-xl overflow-hidden">
              <img
                src="./src/assets/images/team.jpg"
                //src="https://images.pexels.com/photos/5966431/pexels-photo-5966431.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Banana greenhouse"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        <div className="mb-20">
          <h3 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Наши технологии
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 p-6 rounded-xl hover:shadow-lg transition-shadow"
              >
                <feature.icon className="w-12 h-12 text-green-600 mb-4" />
                <h4 className="text-lg font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-r from-green-600 to-green-700 rounded-2xl p-8 md:p-12 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <Globe className="w-16 h-16 mx-auto mb-6 opacity-90" />
            <h3 className="text-3xl font-bold mb-4">
              Рост и потенциал компании
            </h3>
            <p className="text-lg mb-6 text-green-50">
              Выручка компании выросла с 0,9 млрд тенге в 2022 году до 4,4 млрд в 2024.
              Это подтверждает динамику развития и эффективность наших проектов.
            </p>
            <div className="grid md:grid-cols-3 gap-6 mt-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <div className="text-2xl font-bold mb-1">1%</div>
                <div className="text-sm text-green-100">Текущая доля рынка</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <div className="text-2xl font-bold mb-1">20-25%</div>
                <div className="text-sm text-green-100">Потенциал после расширения</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <div className="text-2xl font-bold mb-1">100k</div>
                <div className="text-sm text-green-100">Тонн импорта ежегодно</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
