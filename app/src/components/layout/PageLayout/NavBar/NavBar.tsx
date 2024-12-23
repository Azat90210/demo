import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button } from '@nextui-org/react'
import { LogoIcon } from '@/assets/icons/LogoIcon'
import { SearchIcon } from '@/assets/icons/SearchIcon'

interface HeaderProps {
  className?: string
}


export const Header: React.FC<HeaderProps> = () => {
  return (
    <Navbar className='w-full justify-between items-center my-12 px-24'>
      <NavbarBrand>
        <LogoIcon />
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-10" justify="center">
        <NavbarItem>
          <Link className='text-secondary' href="#">
						Главная
          </Link>
        </NavbarItem>
				<NavbarItem>
          <Link className='text-secondary' href="#">
						Продукты
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link  className='text-secondary' href="#">
						Для бизнеса
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className='text-secondary' href="#">
						Блог
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent className='flex items-center gap-x-4'>
        <NavbarItem>
          <SearchIcon/>
        </NavbarItem>
				<NavbarItem>
          <Link className='text-secondary' href="#">Ru</Link>
        </NavbarItem>
        <NavbarItem className='rounded-lg border-solid border-2 border-[#BAFC00]' >
          <Button as={Link} href="#" className='px-2 py-3 text-[#131314] text-sm'>
            Подключить
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  )
}
