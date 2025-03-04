import {
  DzenIcon,
  TgIcon,
  UniTapBisnessIcon,
  UniTapPlusIcon,
  VkIcon,
} from '@/assets/icons/FooterIcons'
import { LogoIcon } from '@/assets/icons/LogoIcon'
import { Divider } from '@heroui/react'

const FooterData = [
  {
    title: 'Поддержка',
    items: [
      { footerItem: 'Вопросы и ответы', href: '/' },
      { footerItem: 'Правила сайта', href: '/' },
      { footerItem: 'Справка', href: '/' },
      { footerItem: 'Активация по коду', href: '/' },
    ],
  },
  {
    title: 'Приобретение',
    items: [
      { footerItem: 'Доставка и оплата', href: '/' },
      { footerItem: 'Где купить', href: '/' },
      { footerItem: 'Подарки партнерам', href: '/' },
    ],
  },
  {
    title: 'Дополнительно',
    items: [
      { footerItem: 'Разработчикам', href: '/' },
      { footerItem: 'Пользовательское соглашение', href: '/' },
    ],
  },
  {
    title: 'Поддержка',
    items: [
      { footerItem: 'Вопросы и ответы', href: '/' },
      { footerItem: 'Правила сайта', href: '/' },
      { footerItem: 'Справка', href: '/' },
      { footerItem: 'Активация по коду', href: '/' },
    ],
  },
  {
    title: 'Приобретение',
    items: [
      { footerItem: 'Доставка и оплата', href: '/' },
      { footerItem: 'Где купить', href: '/' },
      { footerItem: 'Подарки партнерам', href: '/' },
    ],
  },
]

export const Footer: React.FC = () => {
  return (
    <div className="flex flex-col justify-center lg:px-24 bg-[#f6f7f9] w-full pt-14">
      <div className="grid grid-cols-1 w-full md:grid-cols-2 gap-8">
        <div className="flex flex-col justify-between">
          <div className="mt-4 space-y-2">
            <LogoIcon />
            <p className="flex items-center gap-2">
              <UniTapPlusIcon className="size-6" />
              <span className="text-primary text-lg">UniTap Плюс</span>
            </p>
            <p className="flex items-center gap-2">
              <UniTapBisnessIcon className="size-6" />
              <span className="text-primary text-lg">UniTap Бизнес</span>
            </p>
          </div>
          <div className="mb-12 flex flex-col gap-5">
            <p className="mt-5 text-primary">Подписывайтесь на наши каналы</p>
            <div className="flex gap-6">
              <a href="#" className="text-gray-800 flex gap-3">
                <TgIcon className="size-6" />
                Телеграм
              </a>
              <a href="#" className="text-gray-800 flex gap-3">
                <VkIcon className="size-6" />
                ВКонтакте
              </a>
              <a href="#" className="text-gray-800 flex gap-3">
                <DzenIcon className="size-6" />
                Дзен
              </a>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {FooterData.map((section, index) => (
            <div key={index}>
              <h4 className="font-sans text-sm font-semibold text-primary">
                {section.title.toUpperCase()}
              </h4>
              <ul className="mt-3 space-y-2 text-gray-600">
                {section.items.map((item, idx) => (
                  <li key={idx}>
                    <a className="text-[#404042] font-medium" href={item.href}>
                      {item.footerItem}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <Divider className="w-full mt-5 bg-[#e0e1e3] rounded-xl h-[1px]" />
      <div className="grid w-full grid-cols-2 items-center gap-6 my-5 text-gray-600">
        <div className="w-full">
          <p className="text-[22px] w-full font-sans font-normal text-primary">8 (999) 999-99-99</p>
          <p className="mt-0.5 text-neutral w-[90%] font-sans text-base font-medium">
            г. Казань, ул. Пушкина, д. Колотушкина, этаж 1, ком. Б2, офис 6 ИНН 9999999999, КПП
            999999999, ОГРН 999999999, 0+
          </p>
        </div>
        <p className="text-secondary text-start w-[97%] font-sans text-base font-medium">
          UniTap - иновационная платформа г. Казань, ул. Пушкина, д. Колотушкина, этаж 1, ком. Б2,
          офис 6, ИНН 9999999999, КПП 99999999, ОГРН 99999999, 0+
        </p>
      </div>
      <Divider className="w-full mt-5 bg-[#e0e1e3] rounded-xl h-[1px]" />
      <div className="flex mt-8 mb-14 justify-between items-center w-full">
        <p className="text-neutral font-medium font-sans text-base">Обратная связь</p>
        <div className="flex items-center gap-7">
          <p className="text-neutral font-medium font-sans text-base">
            Политика конфиденциальности
          </p>
          <p className="text-neutral font-medium font-sans text-base">© 2023–2024, UniTap</p>
        </div>
      </div>
    </div>
  )
}
