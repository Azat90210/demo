import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button } from '@nextui-org/react'
import { LogoIcon } from '@/assets/icons/LogoIcon'
import { SearchIcon } from '@/assets/icons/SearchIcon'

interface HeaderProps {
  className?: string
}

export const Header: React.FC<HeaderProps> = () => {
  return (
    <Navbar className="my-12 w-full items-center justify-between px-24">
      <NavbarBrand>
        <LogoIcon />
      </NavbarBrand>
      <NavbarContent className="hidden gap-10 sm:flex" justify="center">
        <NavbarItem>
          <Link className="text-secondary" href="#">
            Главная
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className="text-secondary" href="#">
            Продукты
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link className="text-secondary" href="#">
            Для бизнеса
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className="text-secondary" href="#">
            Блог
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent className="flex items-center gap-x-4">
        <NavbarItem>
          <SearchIcon />
        </NavbarItem>
        <NavbarItem>
          <Link className="text-secondary" href="#">
            Ru
          </Link>
        </NavbarItem>
        <NavbarItem className="rounded-lg border-2 border-solid border-[#BAFC00]">
          <Button as={Link} href="#" className="px-2 py-3 text-sm text-[#131314]">
            Подключить
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  )
}
