import { CinemaAndTheatrePostersIcon } from '@/assets/icons/CinemaAndTheatrePostersIcon'
import { DigitalCardsIcon } from '@/assets/icons/DigitalCardsIcon'
import { ElectronicCollarForPetIcon } from '@/assets/icons/ElectronicCollarForPetIcon'
import { ElectronicMenuForRestaurantsAndCafesIcon } from '@/assets/icons/ElectronicMenuForRestaurantsAndCafesIcon'
import { ForCompaniesIcon } from '@/assets/icons/ForCompaniesIcon'
import { PersonalLogoIcon } from '@/assets/icons/PersonalLogoIcon'
import { StickerForPaymentIcon } from '@/assets/icons/StickerForPaymentIcon'

export const NewTechnologyBlockData = [
  {
    key: 0,
    className: 'col-span-2',
    iconSrc: PersonalLogoIcon,
    title: 'Личная визитка',
    description: 'Современное и удобное решение для обмена контактной информацией',
    showBisnessBlock: false,
  },
  {
    key: 1,
    className: 'col-span-2',
    iconSrc: ElectronicCollarForPetIcon,
    title: 'Электронный ошейник для питомца',
    description: 'Лучшее решение для быстрой идентификации и возврата потерявшегося животного',
    showBisnessBlock: false,
  },
  {
    key: 2,
    className: 'col-span-2',
    iconSrc: DigitalCardsIcon,
    title: 'Цифровые открытки',
    description:
      'Инновационный способ отправлять поздравления, добавляя интерактивные элементы и мультимедиа.',
    showBisnessBlock: false,
  },
  {
    key: 3,
    className: 'col-span-3',
    iconSrc: ElectronicMenuForRestaurantsAndCafesIcon,
    title: 'Электронное меню для ресторанов и кафе',
    description:
      'Удобное решение для ресторанов и кафе, позволяющее посетителям просматривать меню и делать заказы с помощью NFC и QR-кодов.',
    showBisnessBlock: true,
  },
  {
    key: 4,
    className: 'col-span-3',
    iconSrc: CinemaAndTheatrePostersIcon,
    title: 'Афиши кино и театров',
    description:
      'Интерактивное решение для представления информации о мероприятиях, обеспечивающее мгновенный доступ и удобство взаимодействия.',
    showBisnessBlock: true,
  },
  {
    key: 5,
    className: 'col-span-2',
    iconSrc: ForCompaniesIcon,
    title: 'Для компаний',
    description:
      'Эффективно передавайте данные о компании, её услугах и сотрудниках с помощью NFC и QR-кодов.',
    showBisnessBlock: true,
  },
  {
    key: 6,
    className: 'col-span-2',
    iconSrc: StickerForPaymentIcon,
    title: 'Стикер для оплаты',
    description:
      'Просто приложите смартфон к стикеру или отсканируйте QR-код для моментальной оплаты.',
    showBisnessBlock: false,
  },
  {
    key: 7,
    className: 'col-span-2',
    iconSrc: DigitalCardsIcon,
    title: 'Магазин-визитка',
    description:
      'Демонстрируйте товары и услуги компании, обновляйте информацию в реальном времени.',
    showBisnessBlock: true,
  },
]
