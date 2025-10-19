import { Thermometer, Droplets, BarChart3, Target, Globe } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';

type Stat = { value: string; unit: string; label: string };

type Feature = { title: string; description: string; };
const featureIcons = [Thermometer, Droplets, BarChart3, Target]; // иконки в коде


type ScalingStage = {
  id?: string;           // опциональный идентификатор, если понадобиться маппить meta
  hectares: string;      // например "5"
  title?: string;        // например "Пилот — 5 га"
  production: string;    // например "≈485 тонн/год"
  description?: string;
};



export default function HomeContent() {

  const { t, i18n } = useTranslation();
  const [lang, setLang] = useState<string>(i18n.language || 'ru');

  // Получаем массив объектов из переводов
  const stats = t('homeContent.stats', { returnObjects: true }) as Stat[];
  const features = t('homeContent.features', { returnObjects: true }) as Feature[];
  const scalingStages = t('homeContent.scalingStages', { returnObjects: true }) as ScalingStage[];

  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            {t('homeContent.section_title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('homeContent.lead')}
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
                {t('homeContent.banana_headline')}
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                {t('homeContent.banana_description')}
              </p>
              <p className="text-gray-700 leading-relaxed">
                {t('homeContent.banana_notes')}
              </p>
            </div>
            {/* <div className="relative h-64 md:h-full min-h-[300px] rounded-xl overflow-hidden"> */}
            <div className="relative h-64 md:h-full min-h-[300px] rounded-xl overflow-hidden bg-gray-100">
              <img
                src="/images/with_president.jpg"
                alt="Banana greenhouse"
                // className="absolute inset-0 w-full h-full object-cover"
                className="absolute inset-0 w-full h-full object-contain"
                // loading="lazy"
              />
            </div>
          </div>
        </div>

        <div className="mb-20">
          <h3 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            {t('homeContent.our_technologies')}
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => {
                const Icon = featureIcons[index]; // сопоставляем иконку по порядку
                return (
                    <div
                        key={index}
                        className="bg-white border border-gray-200 p-6 rounded-xl hover:shadow-lg transition-shadow"
                    >
                    <Icon className="w-12 h-12 text-green-600 mb-4" />
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">
                        {feature.title}
                    </h4>
                    <p className="text-gray-600 text-sm leading-relaxed">
                        {feature.description}
                    </p>
                    </div>
                )
            }
            )}
          </div>

          {/* ---- Новый блок: Масштабирование (этапы) ---- */}
            <div className="mb-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-8">
                <h3 className="text-3xl font-bold text-gray-900 mt-7 mb-2">
                    {t('homeContent.scaling_title')}
                    {/* или отдельный ключ: t('homeContent.scaling_title') */}
                </h3>
                {/* <p className="text-gray-600 max-w-3xl mx-auto">{t('homeContent.scaling_lead') ?? ''}</p> */}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {scalingStages.map((stage, idx) => (
                    <div
                    key={stage.id ?? idx}
                    className="bg-white border border-gray-200 p-6 rounded-xl hover:shadow-lg transition-shadow flex flex-col items-start"
                    >
                    <div className="flex items-center justify-between w-full mb-4">
                        <div>
                        <div className="text-sm text-green-600 font-semibold">{stage.title}</div>
                        <div className="text-3xl font-extrabold text-gray-900 mt-2">
                            {stage.hectares} <span className="text-base font-medium text-gray-500">{t('homeContent.scalingStagesHectares')}</span>
                        </div>
                        </div>
                        <div className="ml-4">
                        {/* иконка: можно использовать BarChart3, или свою */}
                        {/* <BarChart3 className="w-10 h-10 text-green-600" /> */}
                        </div>
                    </div>

                    <div className="text-lg font-semibold text-gray-800 mb-2">{stage.production}</div>

                    {stage.description && (
                        <p className="text-sm text-gray-600">{stage.description}</p>
                    )}

                    {/* необязательная кнопка / CTA */}
                    {/* <div className="mt-4 w-full">
                        <button
                        className="w-full inline-flex items-center justify-center px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors text-sm"
                        onClick={() => {
                            // например скролл к контактам
                            document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                        }}
                        >
                        {t('contact.send_button')}
                        </button>
                    </div> */}
                    </div>
                ))}
                </div>
            </div>
            </div>
            {/* ---- конец секции масштабирования ---- */}

        </div>

        <div className="bg-gradient-to-r from-green-600 to-green-700 rounded-2xl p-8 md:p-12 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <Globe className="w-16 h-16 mx-auto mb-6 opacity-90" />
            <h3 className="text-3xl font-bold mb-4">
              {t('homeContent.growth_potential')}
            </h3>
            <p className="text-lg mb-6 text-green-50">
              {t('homeContent.revenue_growth')}
            </p>
            <div className="grid md:grid-cols-3 gap-6 mt-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <div className="text-2xl font-bold mb-1">1%</div>
                <div className="text-sm text-green-100">{t('homeContent.current_market_share')}</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <div className="text-2xl font-bold mb-1">20-25%</div>
                <div className="text-sm text-green-100">{t('homeContent.post_expansion_potential')}</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <div className="text-2xl font-bold mb-1">100k</div>
                <div className="text-sm text-green-100">{t('homeContent.annual_import_tons')}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
