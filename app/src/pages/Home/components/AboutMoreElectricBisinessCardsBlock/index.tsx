import aboutMore1 from '@/assets/images/mainPage/AboutMore/AboutMore1.png'
import aboutMore2 from '@/assets/images/mainPage/AboutMore/AboutMore2.png'
import aboutMore3 from '@/assets/images/mainPage/AboutMore/AboutMore3.png'
import aboutMore4 from '@/assets/images/mainPage/AboutMore/AboutMore4.png'
import aboutMore5 from '@/assets/images/mainPage/AboutMore/AboutMore5.png'
import aboutMore6 from '@/assets/images/mainPage/AboutMore/AboutMore6.png'
import { CardItem } from './components/CardItem'

export const AboutMoreElectricBisinessCardsBlock: React.FC = () => {
  return (
    <div className="flex min-h-screen mt-[120px] flex-col items-center">
      <h1 className="text-primary w-full font-sans text-center text-[65px] font-semibold">
        Узнайте больше об электронных <br /> визитках
      </h1>
      <h3 className="text-neutral text-center font-medium mt-[25px] font-sans mb-[50px] w-1/2 text-[25px] ">
        Виртуальный офис для вас и вашей компании, точная статистика, редактор для визиток
      </h3>
      <div className="w-full container grid-container">
        <CardItem
          className="item-1"
          description="Создавайте визитки и делитесь ими"
          imageSrc={aboutMore1}
        />
        <CardItem
          className="item-2"
          description="Создавайте свои уникальные NFC метки"
          imageSrc={aboutMore2}
        />
        <CardItem className="item-3" description="Работайте в команде" imageSrc={aboutMore3} />
        <CardItem
          className="item-4"
          description="Подключайте NFC метки к визиткам"
          imageSrc={aboutMore4}
        />
        <CardItem
          className="item-5"
          description="Получайте достижения и приятные бонусы"
          imageSrc={aboutMore5}
        />
        <CardItem
          className="item-6"
          description="Улучшайте визитку с помощью статистики"
          imageSrc={aboutMore6}
        />
      </div>
    </div>
  )
}
