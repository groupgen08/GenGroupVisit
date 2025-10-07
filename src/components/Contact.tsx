import { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle } from 'lucide-react';
import { supabase, type ContactSubmission } from '../lib/supabase';

export default function Contact() {
  const [formData, setFormData] = useState({
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

    try {
      const submission: ContactSubmission = {
        name: formData.name,
        email: formData.email,
        message: formData.message
      };

      const { error } = await supabase
        .from('contact_submissions')
        .insert([submission]);

      if (error) throw error;

      setStatus('success');
      setFormData({ name: '', email: '', message: '' });

      setTimeout(() => {
        setStatus('idle');
      }, 5000);
    } catch (error) {
      setStatus('error');
      setErrorMessage('Произошла ошибка при отправке. Пожалуйста, попробуйте снова или свяжитесь с нами напрямую.');
      console.error('Error submitting form:', error);
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
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Контакты</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Мы открыты для диалога с инвесторами и партнёрами
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <div className="bg-white rounded-2xl p-8 shadow-md mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Свяжитесь с нами</h3>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-green-100 rounded-lg p-3">
                    <MapPin className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 mb-1">Адрес офиса</div>
                    <div className="text-gray-600">г. Алматы, ул. Бегалина, д. 11</div>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-green-100 rounded-lg p-3">
                    <Phone className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 mb-1">Телефон</div>
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
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2906.5744739363385!2d76.9225!3d43.2567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDPCsDE1JzI0LjEiTiA3NsKwNTUnMjEuMCJF!5e0!3m2!1sen!2skz!4v1234567890"
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
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Форма обратной связи</h3>

              {status === 'success' && (
                <div className="mb-6 bg-green-50 border border-green-200 rounded-lg p-4 flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-green-900">Сообщение отправлено!</div>
                    <div className="text-sm text-green-700">Мы свяжемся с вами в ближайшее время.</div>
                  </div>
                </div>
              )}

              {status === 'error' && (
                <div className="mb-6 bg-red-50 border border-red-200 rounded-lg p-4 flex items-start space-x-3">
                  <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-red-900">Ошибка отправки</div>
                    <div className="text-sm text-red-700">{errorMessage}</div>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                    Ваше имя
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors"
                    placeholder="Иван Иванов"
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
                    placeholder="ivan@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                    Сообщение
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors resize-none"
                    placeholder="Расскажите о вашем интересе к сотрудничеству..."
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
                      <span>Отправка...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>Отправить сообщение</span>
                    </>
                  )}
                </button>
              </form>

              <p className="mt-6 text-sm text-gray-600 text-center">
                Мы гарантируем быструю реакцию на заинтересованность инвесторов
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
