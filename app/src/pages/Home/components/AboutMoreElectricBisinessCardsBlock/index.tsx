import aboutMore1 from '@/assets/images/mainPage/AboutMore/AboutMore1.png'
import aboutMore2 from '@/assets/images/mainPage/AboutMore/AboutMore2.png'
import aboutMore3 from '@/assets/images/mainPage/AboutMore/AboutMore3.png'
import aboutMore4 from '@/assets/images/mainPage/AboutMore/AboutMore4.png'
import aboutMore5 from '@/assets/images/mainPage/AboutMore/AboutMore5.png'
import aboutMore6 from '@/assets/images/mainPage/AboutMore/AboutMore6.png'

export const AboutMoreElectricBisinessCardsBlock: React.FC = () => {
  return (
    <div className="flex min-h-screen flex-col items-center gap-y-9">
      <h1 className="text-primary w-full font-sans text-center text-[65px] font-semibold">
        Узнайте больше об электронных визитках
      </h1>
      <h3 className="text-neutral text-center font-medium font-sans w-1/2 text-[25px] ">
        Виртуальный офис для вас и вашей компании, точная статистика, редактор для визиток
      </h3>
      <div className="w-full grid grid-cols-3 gap-6">
        {/* Верхний ряд */}
        <div className="flex flex-col items-center text-center">
          <img
            src={aboutMore1}
            alt="Создавайте визитки и делитесь ими"
            className="w-full aspect-[4/3] object-cover rounded-lg"
          />
          <p className="text-secondary mt-4">Создавайте визитки и делитесь ими</p>
        </div>

        <div className="flex flex-col items-center text-center">
          <img
            src={aboutMore2}
            alt="Создавайте свои уникальные NFC метки"
            className="w-full aspect-[4/3] object-cover rounded-lg"
          />
          <p className="text-secondary mt-4">Создавайте свои уникальные NFC метки</p>
        </div>

        <div className="flex flex-col items-center text-center">
          <img
            src={aboutMore3}
            alt="Работайте в команде"
            className="w-full aspect-[4/3] object-cover rounded-lg"
          />
          <p className="text-secondary mt-4">Работайте в команде</p>
        </div>

        <div className="flex flex-col items-center text-center md:col-span-2">
          <img
            src={aboutMore4}
            alt="Подключайте NFC метки к визиткам"
            className="w-full aspect-[16/9] object-cover rounded-lg"
          />
          <p className="text-secondary mt-4">Подключайте NFC метки к визиткам</p>
        </div>

        <div className="flex flex-col items-center text-center">
          <img
            src={aboutMore5}
            alt="Получайте достижения и приятные бонусы"
            className="w-full aspect-[4/3] object-cover rounded-lg"
          />
          <p className="text-secondary mt-4">Получайте достижения и приятные бонусы</p>
        </div>

        <div className="flex flex-col items-center text-center">
          <img
            src={aboutMore6}
            alt="Улучшайте визитку с помощью статистики"
            className="w-full aspect-[4/3] object-cover rounded-lg"
          />
          <p className="text-secondary mt-4">Улучшайте визитку с помощью статистики</p>
        </div>
      </div>
    </div>
  )
}
