import twoScreenIcon from '@/assets/images/mainPage/BusinessCard/two-screen.png'

export const DigitalBusinessCardsBlock: React.FC = () => {
  return (
    <div className="flex min-h-screen flex-col items-center gap-y-9">
      <h1 className="text-primary w-3/4 text-center">Цифровые визитки для ваших задач</h1>
      <h3 className="text-disable w-2/5 ">
        Digital визитки - будущее для цифрового бизнеса и ваших идей
      </h3>
      <img src={twoScreenIcon} alt="123" />
    </div>
  )
}
