import Cards from '@/assets/images/mainPage/BonusWithPlus/cards.png'
import StarIcon from '@/assets/images/mainPage/BonusWithPlus/cardIcon.png'

export const BonusWithPlusBlock: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-between rounded-[3.75rem] bg-[#F6F7F9] p-24 lg:flex-row lg:p-16">
      <div className="relative -mt-40 flex flex-col items-center justify-center">
        <div>
          <img src={Cards} alt="Карточка" />
          <div className="absolute right-10 top-0">
            <img src={StarIcon} alt="Звезда" className="size-24" />
          </div>
        </div>
        <div>
          <h1 className="text-center text-4xl font-bold text-gray-900 lg:text-left">
            С Плюсом вы будете <br /> всегда в плюсе
          </h1>
          <p className="mt-4 text-center text-lg text-gray-500 lg:text-left">
            Приобретайте подписку Плюс и улучшайте свою визитку еще лучше
          </p>
        </div>
      </div>

      {/* Правая часть с текстом */}
      <div className="mt-10 lg:ml-12 lg:mt-0">
        {/* Список преимуществ */}
        <div className="mt-8 flex flex-col gap-6">
          <div className="flex items-center gap-4">
            <div className="flex size-12 items-center justify-center rounded-full bg-green-100">
              <img
                src="/path/to/analytics-icon.svg" // Замените на иконку аналитики
                alt="Иконка аналитики"
                className="size-6"
              />
            </div>
            <p className="text-lg text-gray-700">
              Расширенная аналитика ваших <br /> электронных визиток
            </p>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex size-12 items-center justify-center rounded-full bg-green-100">
              <img
                src="/path/to/customization-icon.svg" // Замените на иконку кастомизации
                alt="Иконка кастомизации"
                className="size-6"
              />
            </div>
            <p className="text-lg text-gray-700">
              Дополнительные возможности <br /> кастомизации ваших электронных визиток
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
