import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-2xl font-bold text-blue-600" style={{ fontFamily: 'Montserrat' }}>
              СтройДекор
            </div>
            <nav className="hidden md:flex space-x-8" style={{ fontFamily: 'Open Sans' }}>
              <a href="#services" className="text-gray-700 hover:text-blue-600 transition-colors">Услуги</a>
              <a href="#portfolio" className="text-gray-700 hover:text-blue-600 transition-colors">Портфолио</a>
              <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors">Контакты</a>
            </nav>
            <Button className="bg-orange-500 hover:bg-orange-600 text-white">
              Заказать звонок
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6" style={{ fontFamily: 'Montserrat' }}>
                Творческая отделка 
                <span className="text-blue-600"> вашего </span>
                <span className="text-orange-500">пространства</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8" style={{ fontFamily: 'Open Sans' }}>
                Работаем с различными объектами: от квартир до коммерческих зданий. 
                Превращаем обычные стены в произведения искусства.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3">
                  <Icon name="Phone" className="mr-2" size={20} />
                  Получить консультацию
                </Button>
                <Button size="lg" variant="outline" className="border-orange-500 text-orange-500 hover:bg-orange-50 px-8 py-3">
                  <Icon name="Eye" className="mr-2" size={20} />
                  Посмотреть работы
                </Button>
              </div>
            </div>
            <div className="relative animate-scale-in">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-orange-500 rounded-3xl transform rotate-6 opacity-20"></div>
              <img 
                src="/img/e32e9252-ab01-4354-8591-40216f662f41.jpg" 
                alt="Отделочные работы" 
                className="relative rounded-3xl shadow-2xl object-cover w-full h-96"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Montserrat' }}>
              Наши услуги
            </h2>
            <p className="text-xl text-gray-600" style={{ fontFamily: 'Open Sans' }}>
              Полный спектр отделочных работ для любых объектов
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Interior Service */}
            <Card className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 hover:border-blue-600">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 mx-auto mb-6 bg-blue-100 rounded-full flex items-center justify-center group-hover:bg-blue-600 transition-colors">
                  <Icon name="Home" size={32} className="text-blue-600 group-hover:text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Montserrat' }}>
                  Отделка помещений
                </h3>
                <p className="text-gray-600 mb-6" style={{ fontFamily: 'Open Sans' }}>
                  Качественная внутренняя отделка квартир, домов и коммерческих помещений. 
                  Работаем с любыми материалами и стилями.
                </p>
                <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white">
                  Подробнее
                </Button>
              </CardContent>
            </Card>

            {/* Facade Service */}
            <Card className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 hover:border-orange-500">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 mx-auto mb-6 bg-orange-100 rounded-full flex items-center justify-center group-hover:bg-orange-500 transition-colors">
                  <Icon name="Building" size={32} className="text-orange-500 group-hover:text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Montserrat' }}>
                  Фасадные работы
                </h3>
                <p className="text-gray-600 mb-6" style={{ fontFamily: 'Open Sans' }}>
                  Профессиональная отделка фасадов зданий. Утепление, декоративная штукатурка, 
                  покраска и другие виды фасадных работ.
                </p>
                <Button variant="outline" className="border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white">
                  Подробнее
                </Button>
              </CardContent>
            </Card>

            {/* Koroyed Service */}
            <Card className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 hover:border-blue-600">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 mx-auto mb-6 bg-blue-100 rounded-full flex items-center justify-center group-hover:bg-blue-600 transition-colors">
                  <Icon name="Palette" size={32} className="text-blue-600 group-hover:text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Montserrat' }}>
                  Штукатурка "Короед"
                </h3>
                <p className="text-gray-600 mb-6" style={{ fontFamily: 'Open Sans' }}>
                  Специализируемся на нанесении декоративной штукатурки "Короед". 
                  Создаем уникальные текстуры и рисунки на стенах.
                </p>
                <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white">
                  Подробнее
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Montserrat' }}>
              Наши кейсы
            </h2>
            <p className="text-xl text-gray-600" style={{ fontFamily: 'Open Sans' }}>
              Примеры выполненных работ
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Case 1 */}
            <Card className="group overflow-hidden hover:shadow-xl transition-all duration-300">
              <div className="relative overflow-hidden">
                <img 
                  src="/img/b0ef2d9b-3677-496e-a57e-aa15eaac0f9f.jpg" 
                  alt="Фасадные работы" 
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2" style={{ fontFamily: 'Montserrat' }}>
                  Фасад жилого дома
                </h3>
                <p className="text-gray-600 mb-4" style={{ fontFamily: 'Open Sans' }}>
                  Полная отделка фасада с применением декоративной штукатурки "Короед"
                </p>
                <Button variant="outline" size="sm" className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white">
                  Смотреть детали
                </Button>
              </CardContent>
            </Card>

            {/* Case 2 */}
            <Card className="group overflow-hidden hover:shadow-xl transition-all duration-300">
              <div className="relative overflow-hidden">
                <img 
                  src="/img/9314962a-013c-4fd1-a085-ae82d37f8bdf.jpg" 
                  alt="Отделка интерьера" 
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2" style={{ fontFamily: 'Montserrat' }}>
                  Отделка квартиры
                </h3>
                <p className="text-gray-600 mb-4" style={{ fontFamily: 'Open Sans' }}>
                  Современная отделка квартиры с творческими элементами дизайна
                </p>
                <Button variant="outline" size="sm" className="border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white">
                  Смотреть детали
                </Button>
              </CardContent>
            </Card>

            {/* Case 3 */}
            <Card className="group overflow-hidden hover:shadow-xl transition-all duration-300">
              <div className="relative overflow-hidden">
                <img 
                  src="/img/e32e9252-ab01-4354-8591-40216f662f41.jpg" 
                  alt="Коммерческая отделка" 
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2" style={{ fontFamily: 'Montserrat' }}>
                  Офисное здание
                </h3>
                <p className="text-gray-600 mb-4" style={{ fontFamily: 'Open Sans' }}>
                  Комплексная отделка коммерческого объекта с современными решениями
                </p>
                <Button variant="outline" size="sm" className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white">
                  Смотреть детали
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-r from-blue-600 to-orange-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-4" style={{ fontFamily: 'Montserrat' }}>
            Готовы начать проект?
          </h2>
          <p className="text-xl text-white/90 mb-8" style={{ fontFamily: 'Open Sans' }}>
            Свяжитесь с нами для бесплатной консультации
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3">
              <Icon name="Phone" className="mr-2" size={20} />
              +7 (999) 123-45-67
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3">
              <Icon name="Mail" className="mr-2" size={20} />
              info@stroydecor.ru
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4" style={{ fontFamily: 'Montserrat' }}>
                СтройДекор
              </h3>
              <p className="text-gray-400" style={{ fontFamily: 'Open Sans' }}>
                Творческая отделка помещений и фасадов. Работаем с различными объектами.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4" style={{ fontFamily: 'Montserrat' }}>
                Услуги
              </h4>
              <ul className="space-y-2 text-gray-400" style={{ fontFamily: 'Open Sans' }}>
                <li>Отделка помещений</li>
                <li>Фасадные работы</li>
                <li>Штукатурка "Короед"</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4" style={{ fontFamily: 'Montserrat' }}>
                Контакты
              </h4>
              <div className="space-y-2 text-gray-400" style={{ fontFamily: 'Open Sans' }}>
                <p>+7 (999) 123-45-67</p>
                <p>info@stroydecor.ru</p>
                <p>г. Москва, ул. Строительная, д. 1</p>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 СтройДекор. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;