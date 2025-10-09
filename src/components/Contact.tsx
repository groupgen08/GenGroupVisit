import { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle } from 'lucide-react';
import { API_BASE_URL } from "../config";
import { useTranslation } from 'react-i18next';

// Если нужно менять endpoint (например, бэкенд на другом домене),
// замени значение API_ENDPOINT_SEND_MESSAGE на нужный URL, например:
// const API_ENDPOINT_SEND_MESSAGE = 'https://api.gengroup.kz/api/contact';
const API_ENDPOINT_SEND_MESSAGE = API_BASE_URL + '/api/contact';

type FormState = {
  name: string;
  email: string;
  message: string;
};

type ContactSubmissionResponse = {
  id: number;
  name: string;
  email: string;
  message: string;
  isSent: boolean;
  status: string;
  createdAt: string;
};

export default function Contact() {

  const { t, i18n } = useTranslation();
  const [lang, setLang] = useState<string>(i18n.language || 'ru');

  const [formData, setFormData] = useState<FormState>({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    // Простая клиентская валидация (имя/email/message обязательны)
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setErrorMessage(t('contact.form.fill_all_fields'));
      setStatus('error');
      return;
    }

    try {
      const payload = {
        name: formData.name.trim(),
        email: formData.email.trim(),
        message: formData.message.trim()
      };

      const res = await fetch(API_ENDPOINT_SEND_MESSAGE, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
      });

      if (res.ok) {
        // Ожидаем 201 Created с телом ответа
        const data: ContactSubmissionResponse | null = await res.json().catch(() => null);

        setStatus('success');
        setFormData({ name: '', email: '', message: '' });

        // Можно логировать или использовать данные ответа (data) при необходимости
        console.info('Contact saved:', data);

        // Через 5 секунд вернём статус в idle, чтобы убрать баннер
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        // Попытаться получить сообщение об ошибке из ответа сервера
        let serverMessage = t('contact.form.send_error');
        try {
          const errBody = await res.json();
          // если бэкенд возвращает { message: '...' } или { error: '...' }
          if (errBody) {
            serverMessage =
              (errBody.message && String(errBody.message)) ||
              (errBody.error && String(errBody.error)) ||
              serverMessage;
          }
        } catch {
          // нельзя распарсить JSON — оставляем общий текст
        }

        setErrorMessage(serverMessage);
        setStatus('error');
        console.error('Contact send failed', res.status, res.statusText);
      }
    } catch (err) {
      setStatus('error');
      setErrorMessage(t('contact.form.connection_error'));
      console.error('Error submitting contact form', err);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">{t('contact.title')}</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('contact.subtitle')}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <div className="bg-white rounded-2xl p-8 shadow-md mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">{t('contact.reach_us')}</h3>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-green-100 rounded-lg p-3">
                    <MapPin className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 mb-1">{t('contact.office_address_label')}</div>
                    <div className="text-gray-600">{t('contact.office_address')}</div>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-green-100 rounded-lg p-3">
                    <Phone className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 mb-1">{t('contact.phone_label')}</div>
                    <a
                      href="tel:+77273392102"
                      className="text-gray-600 hover:text-green-600 transition-colors"
                    >
                      +7 (727) 339-21-02
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-green-100 rounded-lg p-3">
                    <Mail className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 mb-1">Email</div>
                    <a
                      href="mailto:info@gengroup.kz"
                      className="text-gray-600 hover:text-green-600 transition-colors"
                    >
                      info@gengroup.kz
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl overflow-hidden shadow-md h-80">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d726.9284744868486!2d76.95222583865487!3d43.21548981899937!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38836f12a290ba0f%3A0x8ee9abfb87f27a25!2z0JDQt9C10YDQsdCw0LXQstCwINGD0LsuIDY3LCDQkNC70LzQsNGC0YsgMDUwMDQw!5e0!3m2!1sru!2skz!4v1759840003294!5m2!1sru!2skz"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Office location"
              />
            </div>
          </div>

          <div>
            <div className="bg-white rounded-2xl p-8 shadow-md">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">{t('contact.contact_form_title')}</h3>

              {status === 'success' && (
                <div className="mb-6 bg-green-50 border border-green-200 rounded-lg p-4 flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-green-900">{t('contact.sent_success_title')}</div>
                    <div className="text-sm text-green-700">{t('contact.sent_success_text')}</div>
                  </div>
                </div>
              )}

              {status === 'error' && (
                <div className="mb-6 bg-red-50 border border-red-200 rounded-lg p-4 flex items-start space-x-3">
                  <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-red-900">{t('contact.send_error_title')}</div>
                    <div className="text-sm text-red-700">{errorMessage}</div>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                    {t('contact.your_name')}
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors"
                    placeholder={t('contact.your_name_placeholder')}
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors"
                    placeholder={t('contact.email_placeholder')}
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                    {t('contact.message_label')}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors resize-none"
                    placeholder={t('contact.tell_us')}
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors font-semibold flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {status === 'loading' ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      <span>{t('contact.sending')}</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>{t('contact.send_button')}</span>
                    </>
                  )}
                </button>
              </form>

              <p className="mt-6 text-sm text-gray-600 text-center">
                {t('contact.guarantee')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
