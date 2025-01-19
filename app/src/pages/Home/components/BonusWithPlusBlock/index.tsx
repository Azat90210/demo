import Cards from '@/assets/images/mainPage/BonusWithPlus/cards.png'
import StarIcon from '@/assets/images/mainPage/BonusWithPlus/cardIcon.png'
import { StatisticUpIcon } from '@/assets/icons/StatisticUpIcon'
import { CardRedactionIcon } from '@/assets/icons/CardRedactIcon'
import { DefaultBackGround } from '@/components/ui/DefaultBackGround'

export const BonusWithPlusBlock: React.FC = () => {
  return (
    <DefaultBackGround>
      <div className="relative flex flex-col items-center justify-center gap-y-8">
        <div className=" absolute left-0 top-[-5.5rem]">
          <img src={Cards} alt="Карточка" />
          <div className="absolute -top-4 right-0">
            <img src={StarIcon} alt="Звезда" className="size-24" />
          </div>
        </div>
        <div className="mt-40">
          <h1 className="w-3/4 text-center text-4xl font-bold leading-10 text-black  lg:text-left">
            С Плюсом вы будете всегда в плюсе
          </h1>
          <p className="text-secondary mt-4 w-3/4 text-center text-lg font-medium leading-7 text-gray-500 lg:text-left">
            Приобретайте подписку Плюс и улучшайте свою визитку еще лучше
          </p>
        </div>
      </div>

      <div className="mt-10 lg:ml-12 lg:mt-0">
        <div className="-mt-10 flex flex-col gap-16">
          <div className="flex -rotate-6 items-center gap-4 rounded-3xl bg-white p-4">
            <div className="flex size-12 items-center justify-center rounded-full">
              <StatisticUpIcon className="size-9" />
            </div>
            <p className="text-lg text-gray-700">
              Расширенная аналитика ваших <br /> электронных визиток
            </p>
          </div>
          <div className="flex rotate-3 items-center gap-4 rounded-3xl bg-white px-4">
            <div className="flex size-12 items-center justify-center rounded-full">
              <CardRedactionIcon className="size-9" />
            </div>
            <p className="text-lg text-gray-700">
              Дополнительные возможности <br /> кастомизации ваших электронных визиток
            </p>
          </div>
        </div>
      </div>
    </DefaultBackGround>
  )
}
