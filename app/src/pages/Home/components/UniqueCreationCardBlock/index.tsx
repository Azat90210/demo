import { DefaultBackGround } from '@/components/ui/DefaultBackGround'
import { Image, Input } from '@heroui/react'
import { useState } from 'react'
import { data } from './const'
import { CustomSwiper, skin } from './components/CustomSwiper'

export const UniqueCreationCardBlock: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState('Хит сезона')
  const [selectedSkin, setSelectedSkin] = useState<skin>()

  return (
    <div className="flex flex-col pt-[100px] container items-center justify-center">
      <h1 className="text-center leading-[85px] text-[65px] font-bold  text-primary">
        Создавайте уникальные визитки, которые будут только у вас
      </h1>
      <p className="text-neutral mt-[25px] text-center text-[25px] font-normal leading-8">
        Выбирайте дизайн из большой библиотеки или <br /> создавайте сами
      </p>
      <div className="w-full flex items-start justify-between mt-[100px] gap-[45px]">
        <div className="w-1/2">
          <DefaultBackGround className="w-full aspect-[607/520]">
            <Image src={selectedSkin?.imageSrc} />
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
          />
          <CustomSwiper
            selectedSkin={selectedSkin}
            setSelectedSkin={setSelectedSkin}
            skins={data
              .filter((item) => item.filterTitle === selectedFilter)
              .flatMap((item) => item.skins)}
          />
        </div>
      </div>
    </div>
  )
}
