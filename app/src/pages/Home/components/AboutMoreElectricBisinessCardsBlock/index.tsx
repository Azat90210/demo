import aboutMore1 from '@/assets/images/mainPage/AboutMore/AboutMore1.png'
import aboutMore2 from '@/assets/images/mainPage/AboutMore/AboutMore2.png'
import aboutMore3 from '@/assets/images/mainPage/AboutMore/AboutMore3.png'
import aboutMore4 from '@/assets/images/mainPage/AboutMore/AboutMore4.png'
import aboutMore5 from '@/assets/images/mainPage/AboutMore/AboutMore5.png'
import aboutMore6 from '@/assets/images/mainPage/AboutMore/AboutMore6.png'

export const AboutMoreElectricBisinessCardsBlock: React.FC = () => {
  return (
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
      </div>{' '}
    </div>
  )
}
