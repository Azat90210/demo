import { observer } from 'mobx-react-lite'
import { PageLayout } from '@/components/layout/PageLayout'
import twoScreenIcon from '@/assets/images/mainPage/BusinessCard/two-screen.png'
import aboutMore1 from '@/assets/images/mainPage/AboutMore/AboutMore1.png'
import aboutMore2 from '@/assets/images/mainPage/AboutMore/AboutMore2.png'
import aboutMore3 from '@/assets/images/mainPage/AboutMore/AboutMore3.png'
import aboutMore4 from '@/assets/images/mainPage/AboutMore/AboutMore4.png'
import aboutMore5 from '@/assets/images/mainPage/AboutMore/AboutMore5.png'
import aboutMore6 from '@/assets/images/mainPage/AboutMore/AboutMore6.png'
import { NewTechnologyCard } from './components/newTechnologyBlock/Card'
import { PersonalLogoIcon } from '@/assets/icons/PersonalLogoIcon'
import { ElectronicCollarForPetIcon } from '@/assets/icons/ElectronicCollarForPetIcon'
import { DigitalCardsIcon } from '@/assets/icons/DigitalCardsIcon'
import { ElectronicMenuForRestaurantsAndCafesIcon } from '@/assets/icons/ElectronicMenuForRestaurantsAndCafesIcon'
import { CinemaAndTheatrePostersIcon } from '@/assets/icons/CinemaAndTheatrePostersIcon'
import { ForCompaniesIcon } from '@/assets/icons/ForCompaniesIcon'
import { StickerForPaymentIcon } from '@/assets/icons/StickerForPaymentIcon'

const Home: React.FC = observer(() => {
  return (
    <PageLayout>
      <div className="flex flex-col gap-y-28">
        <div className="flex min-h-screen flex-col items-center gap-y-9">
          <h1 className="text-primary w-3/4 text-center">Цифровые визитки для ваших задач</h1>
          <h3 className="text-disable w-2/5 ">
            Digital визитки - будущее для цифрового бизнеса и ваших идей
          </h3>
          <img src={twoScreenIcon} alt="123" />
        </div>
        <div className="flex min-h-screen flex-col items-center gap-y-9">
          <h1 className="text-primary w-3/4 text-center text-6xl">
            Узнайте больше об электронных визитках
          </h1>
          <h3 className="text-disable w-1/2 text-2xl ">
            Виртуальный офис для вас и вашей компании, точная статистика, редактор для визиток
          </h3>
          <div className="mx-auto grid grid-cols-3 gap-x-6 gap-y-12 px-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="flex flex-col items-center text-center">
              <img
                src={aboutMore1}
                alt="Создавайте визитки и делитесь ими"
                className="w-full max-w-[300px] rounded-lg"
              />
              <p className="text-secondary mt-10">Создавайте визитки и делитесь ими</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <img
                src={aboutMore2}
                alt="Создавайте свои уникальные NFC метки"
                className="w-full max-w-[300px] rounded-lg"
              />
              <p className="text-secondary mt-10">Создавайте свои уникальные NFC метки</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <img
                src={aboutMore3}
                alt="Работайте в команде"
                className="w-full max-w-[300px] rounded-lg"
              />
              <p className="text-secondary mt-10">Работайте в команде</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <img
                src={aboutMore4}
                alt="Подключайте NFC метки к визиткам"
                className="w-full max-w-[300px] rounded-lg"
              />
              <p className="text-secondary mt-10">Подключайте NFC метки к визиткам</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <img
                src={aboutMore5}
                alt="Получайте достижения и приятные бонусы"
                className="w-full max-w-[300px] rounded-lg"
              />
              <p className="text-secondary mt-10">Получайте достижения и приятные бонусы</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <img
                src={aboutMore6}
                alt="Улучшайте визитку с помощью статистики"
                className="w-full max-w-[300px] rounded-lg"
              />
              <p className="text-secondary mt-10">Улучшайте визитку с помощью статистики</p>
            </div>
          </div>
          <div className="flex flex-col gap-12">
            <h1 className="text-primary mx-auto w-3/4 text-center text-6xl">
              Новые технологии для удобной и простой работы с бизнесом
            </h1>
            <h3 className="text-disable mx-auto w-2/5 text-center text-2xl">
              Виртуальный офис для вашей компании: корпоративная почта, календарь, облачное
              хранилище, редактор документов и сервисы для коммуникации
            </h3>
            <div className="mx-24 grid auto-rows-auto grid-cols-3 gap-8">
              {/* Первая строка */}
              <NewTechnologyCard
                iconSrc={PersonalLogoIcon}
                title="Личная визитка"
                description="Современное и удобное решение для обмена контактной информацией"
              />
              <NewTechnologyCard
                iconSrc={ElectronicCollarForPetIcon}
                title="Электронный ошейник для питомца"
                description="Лучшее решение для быстрой идентификации и возврата потерявшегося животного"
              />
              <NewTechnologyCard
                iconSrc={DigitalCardsIcon}
                title="Цифровые открытки"
                description="Инновационный способ отправлять поздравления, добавляя интерактивные элементы и мультимедиа."
              />

              {/* Вторая строка */}
              <NewTechnologyCard
                showBisnessBlock={true}
                className="col-span-2 row-start-2"
                iconSrc={ElectronicMenuForRestaurantsAndCafesIcon}
                title="Электронное меню для ресторанов и кафе"
                description="Удобное решение для ресторанов и кафе, позволяющее посетителям просматривать меню и делать заказы с помощью NFC и QR-кодов."
              />
              <NewTechnologyCard
                showBisnessBlock={true}
                className="col-span-1 row-start-2"
                iconSrc={CinemaAndTheatrePostersIcon}
                title="Афиши кино и театров"
                description="Интерактивное решение для представления информации о мероприятиях, обеспечивающее мгновенный доступ и удобство взаимодействия."
              />

              {/* Третья строка */}
              <NewTechnologyCard
                showBisnessBlock={true}
                iconSrc={ForCompaniesIcon}
                title="Для компаний"
                description="Эффективно передавайте данные о компании, её услугах и сотрудниках с помощью NFC и QR-кодов."
              />
              <NewTechnologyCard
                iconSrc={StickerForPaymentIcon}
                title="Стикер для оплаты"
                description="Просто приложите смартфон к стикеру или отсканируйте QR-код для моментальной оплаты."
              />
              <NewTechnologyCard
                showBisnessBlock={true}
                iconSrc={DigitalCardsIcon}
                title="Магазин-визитка"
                description="Демонстрируйте товары и услуги компании, обновляйте информацию в реальном времени."
              />
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  )
})

export default Home
