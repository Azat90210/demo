import twoScreenIcon from '@/assets/images/mainPage/BusinessCard/two-screen.png'

export const DigitalBusinessCardsBlock: React.FC = () => {
  return (
    <div className="flex flex-col container items-center gap-y-9">
      <h1 className="text-primary font-sans leading-[5.625rem] text-[6.25rem] font- text-center">
        Цифровые визитки <br /> для ваших задач
      </h1>
      <h3 className="text-disable font-sans font-medium text-3xl text-neutral text-center w-1/2 ">
        Digital визитки - будущее для цифрового <br /> бизнеса и ваших идей
      </h3>
      <img src={twoScreenIcon} alt="123" />
    </div>
  )
}
