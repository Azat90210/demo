import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button } from '@nextui-org/react'
import { LogoIcon } from '@/assets/icons/LogoIcon'
import { SearchIcon } from '@/assets/icons/SearchIcon'
import { px } from 'framer-motion'

interface HeaderProps {
  className?: string
}

export const Header: React.FC<HeaderProps> = () => {
  return (
    <Navbar classNames={{ base: 'px-0' }} className="container">
      <NavbarBrand className="pl-0">
        <LogoIcon />
      </NavbarBrand>
      <NavbarContent className="hidden gap-10 sm:flex" justify="center">
        <NavbarItem>
          <Link underline="active" className="text-secondary font-medium" href="">
            Главная
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link underline="active" className="text-secondary font-medium" href="">
            Продукты
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link underline="active" className="text-secondary font-medium" href="">
            Для бизнеса
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link underline="active" className="text-secondary font-medium" href="">
            Блог
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent className="flex items-center gap-x-4">
        <NavbarItem>
          <SearchIcon />
        </NavbarItem>
        <NavbarItem>
          <Link className="text-primary" href="#">
            Ru
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Button
            as={Link}
            href="#"
            className="rounded-lg border-2 text-primary font-medium text-sm font-sans items-center justify-center w-[109px] py-1 px-1.5 border-solid border-[#BAFC00]"
          >
            Подключить
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  )
}
