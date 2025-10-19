import { Sprout, TrendingUp, DollarSign, Calendar } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';

type MainProject = {
    title: string;
    location: string;
    area: string;
    investment: string;
    status: string;
    harvest: string;
    image: string;
    details: string[];
};

type CurrentCrop = {
    name: string;
    color: string;
}

type FuturePlan = {
    name: string;
    description: string;
}

const mainProjectsMeta = [
  { icon: '/images/crops/banana.svg', color: 'yellow' },
  { icon: '/images/crops/blueberry.svg', color: 'blue' }
];

const currentCropsMeta = [
  { icon: '/images/crops/tomato.svg', color: 'red' },
  { icon: '/images/crops/strawberry.svg', color: 'red' },
  { icon: '/images/crops/banana.svg', color: 'yellow' },
  { icon: '/images/crops/blueberry.svg', color: 'blue' },
];

export default function Projects() {

  const { t, i18n } = useTranslation();
  const [lang, setLang] = useState<string>(i18n.language || 'ru');

  const mainProjects = t('projects.mainProjects', { returnObjects: true }) as MainProject[];

  const currentCrops = t('projects.currentCrops', { returnObjects: true }) as CurrentCrop[];

  const futurePlans = t('projects.futurePlans', { returnObjects: true }) as FuturePlan[];

  const getColorClasses = (color: string) => {
    const colors: Record<string, { bg: string; text: string; border: string }> = {
      yellow: { bg: 'bg-yellow-50', text: 'text-yellow-600', border: 'border-yellow-200' },
      blue: { bg: 'bg-blue-50', text: 'text-blue-600', border: 'border-blue-200' },
      red: { bg: 'bg-red-50', text: 'text-red-600', border: 'border-red-200' },
      green: { bg: 'bg-green-50', text: 'text-green-600', border: 'border-green-200' }
    };
    return colors[color] || colors.green;
  };

  return (
    <section id="projects" className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">{t('projects.title')}</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">   
            {t('projects.lead')}
          </p>
        </div>

        <div className="space-y-12 mb-20">
          {mainProjects.map((project, index) => {

            const iconSrc = mainProjectsMeta[index].icon;

            return (
                <div
                    key={index}
                    className={`bg-gradient-to-br ${getColorClasses(mainProjectsMeta[index].color).bg} rounded-2xl overflow-hidden border ${getColorClasses(mainProjectsMeta[index].color).border}`}
                >
                    <div className="grid lg:grid-cols-2 gap-8">
                    <div className={`${index % 2 === 0 ? 'order-1' : 'order-2'} relative h-80 lg:h-auto`}>
                        <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute top-4 left-4">
                        <span className="bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold text-gray-900">
                            {project.status}
                        </span>
                        </div>
                    </div>

                    <div className={`${index % 2 === 0 ? 'order-2' : 'order-1'} p-8 lg:p-12 flex flex-col justify-center`}>
                        <div className="flex items-center space-x-3 mb-4">
                            <img
                                src={iconSrc}
                                // alt={crop.name}
                                className={`w-10 h-10 ${getColorClasses(mainProjectsMeta[index].color).text}`}
                            />
                            <h3 className="text-3xl font-bold text-gray-900">{project.title}</h3>
                        </div>

                        <div className="grid grid-cols-2 gap-4 mb-6">
                        <div className="bg-white/70 rounded-lg p-3">
                            <div className="text-xs text-gray-600 mb-1">{t('projects.labels.area')}</div>
                            <div className="font-semibold text-gray-900">{project.area}</div>
                        </div>
                        <div className="bg-white/70 rounded-lg p-3">
                            <div className="text-xs text-gray-600 mb-1">{t('projects.labels.harvest')}</div>
                            <div className="font-semibold text-gray-900">{project.harvest}</div>
                        </div>
                        <div className="bg-white/70 rounded-lg p-3">
                            <div className="text-xs text-gray-600 mb-1">{t('projects.labels.investment')}</div>
                            <div className="font-semibold text-gray-900">{project.investment}</div>
                        </div>
                        <div className="bg-white/70 rounded-lg p-3">
                            <div className="text-xs text-gray-600 mb-1">{t('projects.labels.location')}</div>
                            <div className="font-semibold text-gray-900 text-sm">{project.location}</div>
                        </div>
                        </div>

                        <ul className="space-y-2">
                        {project.details.map((detail, idx) => (
                            <li key={idx} className="flex items-start space-x-2">
                            <div className={`w-1.5 h-1.5 ${getColorClasses(mainProjectsMeta[index].color).text} rounded-full mt-2 flex-shrink-0`} />
                            <span className="text-gray-700 text-sm">{detail}</span>
                            </li>
                        ))}
                        </ul>
                    </div>
                    </div>
                </div>
            )
          })}
        </div>

        <div className="mb-20">
            <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            {t('projects.labels.current_crops')}
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {currentCrops.map((crop, index) => {

                const iconSrc = currentCropsMeta[index].icon;

                return (
                    <div
                        key={index}
                        className={`${getColorClasses(currentCropsMeta[index].color).bg} border ${getColorClasses(currentCropsMeta[index].color).border} rounded-xl p-6 text-center hover:shadow-md transition-shadow`}
                    >
                        <img
                            src={iconSrc}
                            alt={crop.name}
                            className={`w-12 h-12 ${getColorClasses(currentCropsMeta[index].color).text} mx-auto mb-3`}
                        />
                        <div className="font-semibold text-gray-900">{crop.name}</div>
                    </div>
                )
            })}
            </div>
        </div>

        <div className="bg-gradient-to-br from-green-600 to-green-700 rounded-2xl p-8 md:p-12">
          <h3 className="text-3xl font-bold text-white mb-8 text-center">
            {t('projects.labels.future_projects')}
          </h3>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {futurePlans.map((plan, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <Sprout className="w-10 h-10 text-green-200 mb-3" />
                <h4 className="text-xl font-bold text-white mb-2">{plan.name}</h4>
                <p className="text-green-100 text-sm">{plan.description}</p>
              </div>
            ))}
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
            <h4 className="text-2xl font-bold text-white mb-4 flex items-center space-x-2">
              <TrendingUp className="w-8 h-8" />
              <span>{t('projects.labels.tech_advantage')}</span>
            </h4>
            <p className="text-green-100 leading-relaxed mb-4">
              {t('projects.labels.modern_systems')}
            </p>
            <div className="grid md:grid-cols-2 gap-4 mt-6">
              <div className="flex items-start space-x-3">
                <DollarSign className="w-6 h-6 text-green-300 flex-shrink-0" />
                <div>
                  <div className="font-semibold text-white">{t('projects.labels.roi')}</div>
                  <div className="text-sm text-green-100">{t('projects.labels.payback')}</div>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Calendar className="w-6 h-6 text-green-300 flex-shrink-0" />
                <div>
                  <div className="font-semibold text-white">{t('projects.labels.year_round')}</div>
                  <div className="text-sm text-green-100">{t('projects.labels.season_independence')}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
