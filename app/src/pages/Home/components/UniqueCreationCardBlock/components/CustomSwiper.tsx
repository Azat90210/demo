import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import 'swiper/css'
import { ArrowHorizontalIcon } from '@/assets/icons/ArrowIcons'
import { useRef } from 'react'
import { NavigationOptions } from 'swiper/types'
import { Image } from '@heroui/react'

export interface skin {
  articles: number
  imageSrc: string
}

interface CustomSwiperProps {
  selectedSkin: skin | undefined
  setSelectedSkin: (selectedSkin: skin) => void
  skins: skin[]
}

export const CustomSwiper: React.FC<CustomSwiperProps> = ({
  skins,
  setSelectedSkin,
  selectedSkin,
}) => {
  const prevRef = useRef(null)
  const nextRef = useRef(null)

  console.log(selectedSkin)
  return (
    <div className="relative flex items-center gap-4 py-[47px] bg-[#1313140A] rounded-[13px]">
      <button
        ref={prevRef}
        className="swiper-button-prev size-[35px] rotate-180 bg-[#1313140A] rounded-full flex items-center justify-center"
      >
        <ArrowHorizontalIcon />
      </button>

      <Swiper
        spaceBetween={20}
        slidesPerView="auto"
        centeredSlides={false}
        navigation={{ prevEl: prevRef.current, nextEl: nextRef.current }}
        onInit={(swiper) => {
          if (swiper.params.navigation) {
            ;(swiper.params.navigation as NavigationOptions).prevEl = prevRef.current
            ;(swiper.params.navigation as NavigationOptions).nextEl = nextRef.current
          }
          swiper.navigation.init()
          swiper.navigation.update()
        }}
        className="w-full px-[35px]"
        modules={[Navigation]}
      >
        {skins.map((skin, index) => (
          <SwiperSlide key={index} className="!w-auto">
            <Image
              src={skin.imageSrc}
              alt="skin"
              className="size-[56px] rounded-full object-cover bg-slate-700"
              onClick={() => setSelectedSkin(skin)}
              role="button"
              tabIndex={0}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <button
        ref={nextRef}
        className="swiper-button-next size-[35px] bg-[#1313140A] rounded-full flex items-center justify-center"
      >
        <ArrowHorizontalIcon />
      </button>
    </div>
  )
}
