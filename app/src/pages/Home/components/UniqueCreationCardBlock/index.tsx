import { DefaultBackGround } from '@/components/ui/DefaultBackGround'
import FirstImage from '@/assets/images/mainPage/CardSkins/1.png'
import { Button, Image, Input } from '@heroui/react'
import { useEffect, useState } from 'react'
import { data } from './const'
import { CustomSwiper, skin } from './components/CustomSwiper'
import { NfcIcon } from '@/assets/icons/NfsIcon'
import { PrizeWithPlus } from '@/components/ui/PrizeWithPlus/PrizeWithPlus'

export const UniqueCreationCardBlock: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState('Хит сезона')
  const [selectedSkin, setSelectedSkin] = useState<skin>({
    articles: 1,
    imageSrc: FirstImage,
  })

  const [fisrtField, setFirstField] = useState('Как к вам обращаться')
  const [secondField, setSecondField] = useState('Небольшое описание')

  useEffect(() => {
    if (fisrtField === '') {
      setFirstField('Как к вам обращаться')
    }
    if (secondField === '') {
      setSecondField('Небольшое описание')
    }
  }, [fisrtField, secondField])

  return (
    <div className="flex container flex-col pt-[100px] items-center justify-center">
      <h1 className="text-center leading-[85px] text-[65px] font-bold  text-primary">
        Создавайте уникальные визитки, которые будут только у вас
      </h1>
      <p className="text-neutral mt-[25px] text-center text-[25px] font-normal leading-8">
        Выбирайте дизайн из большой библиотеки или <br /> создавайте сами
      </p>
      <div className="w-full flex items-start justify-between mt-[100px] gap-[45px]">
        <div className="w-1/2">
          <DefaultBackGround className="w-full aspect-[607/520]">
            <div className="w-fit relative">
              <Image
                src={selectedSkin?.imageSrc}
                className="w-[364px] h-[214px] object-cover rounded-[16.89px] shadow-2xl"
              />
              <NfcIcon className="absolute top-[22px] left-[16px]" />
              <div className="flex absolute bottom-[23px] gap-1 left-[15.5px] flex-col items-start">
                <div className=" text-white text-[17px] font-medium">{fisrtField}</div>
                <p className="text-xs text-white  font-normal">{secondField}</p>
              </div>
            </div>
          </DefaultBackGround>
          <div className="flex flex-wrap items-center gap-2.5 justify-start mt-4">
            {data.map((item, index) => (
              <div
                key={item.filterTitle}
                className="flex items-center gap-2 p-1.5 bg-[#1313140A] rounded-lg cursor-pointer"
                onClick={() => setSelectedFilter(item.filterTitle)}
              >
                <Image
                  className="size-7 object-cover rounded-[10px]"
                  src={item.skins[index].imageSrc}
                  alt={item.filterTitle}
                />
                <span className=" whitespace-nowrap text-base leading-5 font-medium">
                  {item.filterTitle}
                </span>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-5 w-1/2">
          <div>
            <h1 className="text-primary font-medium text-[35px] leading-[35px] mt-[18px]">
              Посмотрите как это выглядит
            </h1>
            <p className=" text-neutral text-lg font-normal mt-2 leading-[25px]">
              Выбирайте дизайн из библиотеки или создавайте свой
            </p>
          </div>
          <Input
            variant="bordered"
            isRequired
            classNames={{
              base: 'w-full',
              inputWrapper:
                'px-[15px] py-[11.5px] border border-[#13131426] rounded-2xl bg-[#F6F6F6] focus-within:border-black transition-colors',
              input: 'bg-transparent text-black placeholder:text-[#A0A0A0] focus:outline-none',
            }}
            name="name"
            placeholder="Как к вам обращаться"
            type="text"
            onChange={(e) => setFirstField(e.target.value)}
          />
          <Input
            variant="bordered"
            isRequired
            classNames={{
              base: 'w-full',
              inputWrapper:
                'px-[15px] py-[11.5px] border border-[#13131426] rounded-2xl bg-[#F6F6F6] focus-within:border-black transition-colors',
              input: 'bg-transparent text-black placeholder:text-[#A0A0A0] focus:outline-none',
            }}
            name="name"
            placeholder="Небольшое описание"
            type="text"
            onChange={(e) => setSecondField(e.target.value)}
          />
          <CustomSwiper
            selectedSkin={selectedSkin}
            setSelectedSkin={setSelectedSkin}
            skins={data
              .filter((item) => item.filterTitle === selectedFilter)
              .flatMap((item) => item.skins)}
          />
          <div>
            <div className="flex flex-col gap-[11px] items-start">
              <h2 className="text-xl font-semibold text-secondary">
                Такая визитка обойдется всего
              </h2>
              <div>
                <h1 className="text-[42px] text-black mb-[5px] leading-[52px] font-bold">1 255₽</h1>
                <PrizeWithPlus />
              </div>
              <p className="text-xs font-normal text-[#535B62]">
                Расчёт носит информационный характер и не является публичной офертой
              </p>
            </div>
          </div>
          <Button
            fullWidth
            variant="solid"
            className="rounded-2xl text-base py-5 leading-[17px] bg-[#BAFC00]"
          >
            Заказать
          </Button>
        </div>
      </div>
    </div>
  )
}
